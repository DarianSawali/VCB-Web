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
                Vancouver City Blessing
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Vancouver City Blessing Church is a Christ-centred community committed to knowing God, growing in faith, and sharing His love with our city. Whether you are new to church, exploring faith, or looking for a place to belong, you are welcome here.
                </p>
                <p>
                  We invite you to join us as we worship together, build meaningful relationships, and live out God’s calling in our daily lives.
                </p>
                {/* <p>
                  
                </p> */}
              </div>
              <Link
                href="/connect#join-us"
                className="inline-block mt-6 bg-secondary text-white px-8 py-3 font-semibold hover:bg-secondary/90 transition-colors rounded-full"
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


