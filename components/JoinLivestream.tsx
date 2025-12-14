export default function JoinLivestream() {
  const sermons = [
    {
      title: 'SO CLOSE, YET SO FAR: THE LESSON OF MOSES',
      date: 'October 25, 2005',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    },
    {
      title: 'HEAVEN on Earth',
      date: 'October 18, 2005',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
    },
    {
      title: 'The Goodness of GOD',
      date: 'October 11, 2005',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
  ]

  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Live Stream
            </h2>
            <p className="text-white/80 max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {sermons.map((sermon, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-secondary/40 to-accent/20 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url(${sermon.image})` }}
                  ></div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{sermon.title}</h3>
                  <p className="text-white/80 text-sm">{sermon.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


