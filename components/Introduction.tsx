import Link from 'next/link'
import Image from 'next/image'

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
                  We invite you to join us as we worship together, build meaningful relationships, and live out God&apos;s calling in our daily lives.
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
            <div className="relative rounded-xl overflow-hidden flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 z-10 opacity-60 rounded-xl"></div>
              <Image
                src="/images/hero/welcome.JPG"
                alt="Welcome to Vancouver City Blessing"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto max-h-[400px] md:max-h-[500px] object-contain rounded-xl relative z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


