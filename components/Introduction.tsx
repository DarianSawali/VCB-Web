import Link from 'next/link'

export default function Introduction() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Welcome
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                  doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.
                </p>
              </div>
              <Link
                href="/connect"
                className="inline-block mt-6 bg-secondary text-white px-8 py-3 font-semibold hover:bg-secondary/90 transition-colors"
              >
                How to get there
              </Link>
            </div>

            {/* Right Side - Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800')] bg-cover bg-center rounded-lg opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


