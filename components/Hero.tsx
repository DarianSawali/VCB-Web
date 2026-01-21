'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Hero() {
  const images = [
    '/images/hero/hero-image.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const isCarousel = images.length > 1

  useEffect(() => {
    if (!isCarousel) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length, isCarousel])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden -mt-16">
      {/* Carousel Images - Extended upward to fill space behind navbar */}
      <div className="absolute -top-2 left-0 right-0" style={{ height: 'calc(100% + 8px)' }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-secondary/10 z-10"></div>
            <Image
              src={image}
              alt="Hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        ))}
      </div>
      
      {/* Overlay Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-accent text-center drop-shadow-lg">
            ARISE & BUILD
          </h1>
        </div>
      </div>

      {/* Navigation Arrows - Only show if carousel */}
      {isCarousel && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator - Only show if carousel */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

