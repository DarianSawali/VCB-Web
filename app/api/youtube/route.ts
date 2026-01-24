import { NextResponse } from 'next/server'

// Live status changes in real time — disable caching so we always get fresh data
export const dynamic = 'force-dynamic'

interface YouTubeVideo {
  videoId: string
  title: string
  publishedAt: string
  thumbnailUrl: string
  description: string
}

interface YouTubeResponse {
  liveStream: YouTubeVideo | null
  recentVideos: YouTubeVideo[]
}

export async function GET() {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelHandle = 'vancouvercityblessing7174' // Channel handle from @vancouvercityblessing7174
  const channelId = process.env.YOUTUBE_CHANNEL_ID

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
      const channelRes = await fetch(channelUrl, { cache: 'no-store' })
      const channelData = await channelRes.json()

      if (!channelData.items || channelData.items.length === 0) {
        // Fallback: try with forUsername (older method)
        const channelUrlAlt = `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${channelHandle}&key=${apiKey}`
        const channelResAlt = await fetch(channelUrlAlt, { cache: 'no-store' })
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

    const response: YouTubeResponse = {
      liveStream: null,
      recentVideos: [],
    }

    // First, check for active live streams
    const liveStreamUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${actualChannelId}&type=video&eventType=live&maxResults=1&key=${apiKey}`
    const liveStreamRes = await fetch(liveStreamUrl, { cache: 'no-store' })
    const liveStreamData = await liveStreamRes.json()

    if (liveStreamData.items && liveStreamData.items.length > 0) {
      const liveItem = liveStreamData.items[0]
      response.liveStream = {
        videoId: liveItem.id.videoId,
        title: liveItem.snippet.title,
        publishedAt: liveItem.snippet.publishedAt,
        thumbnailUrl: liveItem.snippet.thumbnails.high?.url || liveItem.snippet.thumbnails.default.url,
        description: liveItem.snippet.description,
      }
    }

    // Get the channel's uploads playlist ID (more reliable for recent videos)
    const channelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${actualChannelId}&key=${apiKey}`
    const channelInfoRes = await fetch(channelInfoUrl, { cache: 'no-store' })
    const channelInfoData = await channelInfoRes.json()

    if (channelInfoData.items && channelInfoData.items.length > 0) {
      const uploadsPlaylistId = channelInfoData.items[0].contentDetails.relatedPlaylists.uploads

      // Fetch recent videos from the uploads playlist
      const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=4&key=${apiKey}`
      const videosRes = await fetch(videosUrl, { cache: 'no-store' })
      const videosData = await videosRes.json()

      if (videosData.items && videosData.items.length > 0) {
        // Filter out the live stream from recent videos if it exists
        const videoItems = response.liveStream
          ? videosData.items.filter(
              (item: any) => item.snippet.resourceId.videoId !== response.liveStream?.videoId
            )
          : videosData.items

        response.recentVideos = videoItems.slice(0, 3).map((item: any) => ({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url || '',
          description: item.snippet.description || '',
        }))
      }
    } else {
      // Fallback to search method if playlist method fails
      const videosUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${actualChannelId}&type=video&order=date&maxResults=4&key=${apiKey}`
      const videosRes = await fetch(videosUrl, { cache: 'no-store' })
      const videosData = await videosRes.json()

      if (videosData.items && videosData.items.length > 0) {
        const videoItems = response.liveStream
          ? videosData.items.filter(
              (item: any) => item.id.videoId !== response.liveStream?.videoId
            )
          : videosData.items

        response.recentVideos = videoItems.slice(0, 3).map((item: any) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          publishedAt: item.snippet.publishedAt,
          thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          description: item.snippet.description,
        }))
      }
    }

    return NextResponse.json(response, {
      headers: { 'Cache-Control': 'no-store, max-age=0' },
    })
  } catch (error) {
    console.error('YouTube API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch YouTube videos', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
