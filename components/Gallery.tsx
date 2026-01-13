'use client'

const galleryImages = [
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
  'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600',
  'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600',
  'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600',
]

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function GalleryRow({ images, direction, rowNumber }: { images: string[], direction: 'right' | 'left', rowNumber: number }) {
  // Randomize images for each row, then duplicate multiple times for truly seamless infinite scroll
  const randomizedImages = shuffleArray(images)
  const duplicatedImages = [...randomizedImages, ...randomizedImages, ...randomizedImages]

  return (
    <div className="overflow-hidden py-2">
      <div className={`flex gap-4 ${direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'}`}>
        {duplicatedImages.map((image, index) => (
          <div
            key={`row${rowNumber}-${index}`}
            className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden bg-gray-200"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function GalleryImages() {
  return (
    <>
      {/* Row 1 - Scrolls Right */}
      <GalleryRow images={galleryImages} direction="right" rowNumber={1} />
      
      {/* Row 2 - Scrolls Left */}
      <GalleryRow images={galleryImages} direction="left" rowNumber={2} />
      
      {/* Row 3 - Scrolls Right */}
      <GalleryRow images={galleryImages} direction="right" rowNumber={3} />
    </>
  )
}
