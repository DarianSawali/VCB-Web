'use client'

import { useState } from 'react'

interface Video {
  title: string
  date: string
  videoId: string // YouTube video ID
}

export default function JoinLivestream() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Replace these with your actual YouTube video IDs
  const videos: Video[] = [
    {
      title: 'SO CLOSE, YET SO FAR: THE LESSON OF MOSES',
      date: 'October 25, 2005',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
    },
    {
      title: 'HEAVEN on Earth',
      date: 'October 18, 2005',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
    },
    {
      title: 'The Goodness of GOD',
      date: 'October 11, 2005',
      videoId: 'dQw4w9WgXcQ', // Replace with your YouTube video ID
    },
  ]

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  }

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

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
                Watch our past services and sermons. Click on any video to play.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden cursor-pointer hover:bg-white/15 transition-colors"
                  onClick={() => openVideo(video.videoId)}
                >
                  <div className="h-48 relative group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getThumbnailUrl(video.videoId)}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to a lower quality thumbnail if maxresdefault fails
                        e.currentTarget.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
                      }}
                    />
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
                    <p className="text-white/80 text-sm">{video.date}</p>
                  </div>
                </div>
              ))}
            </div>
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
                className="absolute top-0 left-0 w-full h-full rounded-lg"
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


