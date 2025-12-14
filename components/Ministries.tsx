import Link from 'next/link'

export default function Ministries() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Event Card */}
            <div className="bg-background p-6 rounded-lg border border-secondary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                NIGHTSHIFT MINISTRY X VCB
              </h3>
              <div className="space-y-3 mb-6">
                <p className="text-secondary font-semibold">SAT. NOV 6, 2005</p>
                <p className="text-gray-700">4:00 PM - FOOD PREP</p>
                <p className="text-gray-600 text-sm">
                  Contact us for more information about this event.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600)' }}
                ></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Ministries
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
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
              </div>
              <Link
                href="/compassion"
                className="inline-block bg-secondary text-white px-8 py-3 font-semibold hover:bg-secondary/90 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


