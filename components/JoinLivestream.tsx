'use client'

import { useState, useEffect } from 'react'

interface Video {
  videoId: string
  title: string
  publishedAt: string
  thumbnailUrl: string
  description: string
}

interface YouTubeResponse {
  liveStream: Video | null
  recentVideos: Video[]
}

export default function JoinLivestream() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [liveStream, setLiveStream] = useState<Video | null>(null)
  const [recentVideos, setRecentVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/youtube')
        if (!response.ok) {
          throw new Error('Failed to fetch videos')
        }
        const data: YouTubeResponse = await response.json()
        setLiveStream(data.liveStream)
        setRecentVideos(data.recentVideos)
        setError(null)
      } catch (err) {
        console.error('Error fetching videos:', err)
        setError('Unable to load videos. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

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

  const renderVideoCard = (video: Video, isLive: boolean = false) => (
    <div
      key={video.videoId}
      className={`bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer hover:bg-white/15 transition-colors ${
        isLive ? 'md:col-span-3' : ''
      }`}
                  onClick={() => openVideo(video.videoId)}
                >
      <div className={`relative group ${isLive ? 'h-64 md:h-96' : 'h-48'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
          src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                      }}
                    />
        {/* Live Badge */}
        {isLive && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 animate-pulse">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            LIVE
          </div>
        )}
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
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
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
        <p className="text-white/80 text-sm">{formatDate(video.publishedAt)}</p>
                  </div>
                </div>
  )

  return (
    <>
      <section className="py-16 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the Live Stream
              </h2>
              <p className="text-white/80 max-w-2xl">
                {liveStream
                  ? 'Join us live now! Watch our service as it happens.'
                  : 'Watch our past services and sermons. Click on any video to play.'}
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-white/80">Loading videos...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-white/80">{error}</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {liveStream && renderVideoCard(liveStream, true)}
                {recentVideos.map((video) => renderVideoCard(video, false))}
                {!liveStream && recentVideos.length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-white/80">No videos available at this time.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

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
    </>
  )
}


