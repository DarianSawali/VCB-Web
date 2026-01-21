import { NextRequest, NextResponse } from 'next/server'

interface YouTubeVideo {
  videoId: string
  title: string
  publishedAt: string
  thumbnailUrl: string
  description: string
}

export async function GET(request: NextRequest) {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelHandle = 'vancouvercityblessing7174'
  const channelId = process.env.YOUTUBE_CHANNEL_ID
  const searchParams = request.nextUrl.searchParams
  const pageToken = searchParams.get('pageToken') || undefined
  const maxResults = parseInt(searchParams.get('maxResults') || '50', 10)

  if (!apiKey) {
    return NextResponse.json(
      { error: 'YouTube API key not configured' },
      { status: 500 }
    )
  }

  try {
    let actualChannelId = channelId

    // If no channel ID is provided, get it from the handle
    if (!actualChannelId) {
      const channelUrl = `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${channelHandle}&key=${apiKey}`
      const channelRes = await fetch(channelUrl)
      const channelData = await channelRes.json()

      if (!channelData.items || channelData.items.length === 0) {
        const channelUrlAlt = `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${channelHandle}&key=${apiKey}`
        const channelResAlt = await fetch(channelUrlAlt)
        const channelDataAlt = await channelResAlt.json()

        if (channelDataAlt.items && channelDataAlt.items.length > 0) {
          actualChannelId = channelDataAlt.items[0].id
        } else {
          return NextResponse.json(
            { error: 'Could not find channel' },
            { status: 404 }
          )
        }
      } else {
        actualChannelId = channelData.items[0].id
      }
    }

    // Get the channel's uploads playlist ID
    const channelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${actualChannelId}&key=${apiKey}`
    const channelInfoRes = await fetch(channelInfoUrl)
    const channelInfoData = await channelInfoRes.json()

    if (!channelInfoData.items || channelInfoData.items.length === 0) {
      return NextResponse.json(
        { error: 'Could not find channel playlist' },
        { status: 404 }
      )
    }

    const uploadsPlaylistId = channelInfoData.items[0].contentDetails.relatedPlaylists.uploads

    // Fetch videos from the uploads playlist with pagination
    const videosUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems')
    videosUrl.searchParams.set('part', 'snippet')
    videosUrl.searchParams.set('playlistId', uploadsPlaylistId)
    videosUrl.searchParams.set('maxResults', maxResults.toString())
    videosUrl.searchParams.set('key', apiKey)
    if (pageToken) {
      videosUrl.searchParams.set('pageToken', pageToken)
    }

    const videosRes = await fetch(videosUrl.toString())
    const videosData = await videosRes.json()

    if (!videosData.items || videosData.items.length === 0) {
      return NextResponse.json({
        videos: [],
        nextPageToken: null,
        totalResults: 0,
      })
    }

    const videos: YouTubeVideo[] = videosData.items.map((item: any) => ({
      videoId: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      publishedAt: item.snippet.publishedAt,
      thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url || '',
      description: item.snippet.description || '',
    }))

    return NextResponse.json({
      videos,
      nextPageToken: videosData.nextPageToken || null,
      totalResults: videosData.pageInfo?.totalResults || videos.length,
    })
  } catch (error) {
    console.error('YouTube API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch YouTube videos', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
