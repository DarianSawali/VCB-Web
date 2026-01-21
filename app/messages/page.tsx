'use client'

import { useState, useEffect } from 'react'

interface Video {
  videoId: string
  title: string
  publishedAt: string
  thumbnailUrl: string
  description: string
}

interface VideosResponse {
  videos: Video[]
  nextPageToken: string | null
  totalResults: number
}

export default function Messages() {
  const [allVideos, setAllVideos] = useState<Video[]>([])
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])
  const [displayedVideos, setDisplayedVideos] = useState<Video[]>([])
  const [displayCount, setDisplayCount] = useState(9)
  const [nextPageToken, setNextPageToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Fetch initial videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        setError(null)
        // Fetch more videos initially (fetch 45 but display 9)
        const response = await fetch('/api/youtube/videos?maxResults=45')
        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }
        const data: VideosResponse = await response.json()
        setAllVideos(data.videos)
        setFilteredVideos(data.videos)
        setDisplayedVideos(data.videos.slice(0, 9))
        setDisplayCount(9)
        setNextPageToken(data.nextPageToken)
      } catch (err) {
        console.error('Error fetching videos:', err)
        setError('Unable to load videos. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  // Load more videos
  const loadMoreVideos = async () => {
    // If searching, just show more from filtered results
    if (searchQuery.trim()) {
      const newCount = displayCount + 9
      setDisplayCount(newCount)
      setDisplayedVideos(filteredVideos.slice(0, newCount))
      return
    }

    // If not searching, fetch more from API or show more from already loaded
    if (displayCount < allVideos.length) {
      // Show more from already loaded videos
      const newCount = displayCount + 9
      setDisplayCount(newCount)
      setDisplayedVideos(allVideos.slice(0, newCount))
    } else if (nextPageToken && !loadingMore) {
      // Fetch more from API
      try {
        setLoadingMore(true)
        setError(null)
        const response = await fetch(`/api/youtube/videos?maxResults=45&pageToken=${nextPageToken}`)
        if (!response.ok) {
          throw new Error('Failed to fetch more videos')
        }
        const data: VideosResponse = await response.json()
        const newVideos = [...allVideos, ...data.videos]
        const newCount = displayCount + 9
        setAllVideos(newVideos)
        setFilteredVideos(newVideos)
        setDisplayCount(newCount)
        setDisplayedVideos(newVideos.slice(0, newCount))
        setNextPageToken(data.nextPageToken)
      } catch (err) {
        console.error('Error fetching more videos:', err)
        setError('Unable to load more videos. Please try again later.')
      } finally {
        setLoadingMore(false)
      }
    }
  }

  // Update filtered videos when allVideos changes (for loading more)
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredVideos(allVideos)
      // Update displayed videos to show up to current displayCount
      setDisplayedVideos(allVideos.slice(0, displayCount))
    } else {
      // Re-apply search filter when new videos are loaded
      const query = searchQuery.toLowerCase()
      const filtered = allVideos.filter((video) => {
        const titleMatch = video.title.toLowerCase().includes(query)
        const dateMatch = formatDate(video.publishedAt).toLowerCase().includes(query)
        return titleMatch || dateMatch
      })
      setFilteredVideos(filtered)
      setDisplayedVideos(filtered.slice(0, displayCount))
    }
  }, [allVideos]) // eslint-disable-line react-hooks/exhaustive-deps

  // Handle search query changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      // Clear search - reset to showing all videos, but maintain current displayCount
      setFilteredVideos(allVideos)
      setDisplayedVideos(allVideos.slice(0, displayCount))
      return
    }

    const query = searchQuery.toLowerCase()
    const filtered = allVideos.filter((video) => {
      const titleMatch = video.title.toLowerCase().includes(query)
      const dateMatch = formatDate(video.publishedAt).toLowerCase().includes(query)
      return titleMatch || dateMatch
    })

    setFilteredVideos(filtered)
    // When starting a search, reset to 9 and show first 9 results
    setDisplayCount(9)
    setDisplayedVideos(filtered.slice(0, 9))
  }, [searchQuery]) // eslint-disable-line react-hooks/exhaustive-deps

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  const hasMoreToShow = searchQuery.trim()
    ? displayedVideos.length < filteredVideos.length
    : displayedVideos.length < allVideos.length || nextPageToken !== null

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Messages
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Watch our past services and sermons. Search by title or date to find specific messages.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search by title or date..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 text-lg"
              />
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading videos...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
            </div>
          ) : displayedVideos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No videos found matching your search.</p>
            </div>
          ) : (
            <>
              {/* Video Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {displayedVideos.map((video) => (
                  <div
                    key={video.videoId}
                    className="bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => openVideo(video.videoId)}
                  >
                    <div className="relative h-48 bg-gray-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                        }}
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-secondary ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-secondary line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{formatDate(video.publishedAt)}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreToShow && (
                <div className="text-center">
                  <button
                    onClick={loadMoreVideos}
                    disabled={loadingMore}
                    className="bg-secondary text-white px-8 py-3 font-semibold border-2 border-secondary hover:bg-transparent hover:text-secondary transition-colors rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loadingMore ? 'Loading...' : 'Load More'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
