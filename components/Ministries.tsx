import Link from 'next/link'

export default function Ministries() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Event Card */}
            <div className="bg-background p-6 rounded-xl border border-secondary/20 flex flex-col">
              <h3 className="text-2xl font-bold text-secondary mb-4">
                NIGHTSHIFT MINISTRY X VCB
              </h3>
              <div className="space-y-3 mb-6 flex-grow">
                <p className="text-secondary font-semibold">Every Other Month on the Second Saturday</p>
                <p className="text-gray-700">4:30 PM - FOOD PREP</p>
                <p className="text-gray-600 text-sm">
                  Contact us for more information about this event.
                </p>
              </div>
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-xl relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: 'url(/images/compassion/nightshift.JPG)' }}
                ></div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Attend our Service
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed mb-6">
                <p>
                  You&apos;re invited to join us for worship every Saturday at 10:45am. We gather to worship God, hear His Word, and grow together in faith in a welcoming and supportive community.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-background/50 p-4 rounded-xl border border-secondary/10">
                    <h3 className="font-semibold text-secondary mb-3">Location:</h3>
                    <p className="mb-1">320 8th St, New Westminster, BC V3M 3R4</p>
                    <p className="text-sm text-gray-600 italic">(Freedom Church building)</p>
                  </div>

                  <div className="bg-background/50 p-4 rounded-xl border border-secondary/10">
                    <h3 className="font-semibold text-secondary mb-2">Service Start:</h3>
                    <p>Saturdays, 10:45am</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Whether you&apos;re visiting for the first time or looking for a church to call home, we&apos;d love to welcome you.
                </p>
              </div>
                    <Link
                      href="/connect"
                      className="inline-block bg-secondary text-white px-8 py-3 font-semibold border-2 border-secondary hover:bg-transparent hover:text-secondary transition-colors rounded-full"
                    >
                      Get Connected
                    </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


