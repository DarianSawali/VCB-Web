'use client'

import { useState } from 'react'
import ContactForm from '@/components/ContactForm'

export default function Compassion() {
  const [showContactForm, setShowContactForm] = useState(false)
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden -mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary/60" />
        <div
          className="absolute inset-0 bg-cover opacity-60"
          style={{
            backgroundImage:
              "url('/images/compassion/nightshift.JPG')",
            backgroundPosition: 'center 40%',
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-accent text-center drop-shadow-lg">
              Compassion Ministries
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-3xl text-secondary mb-4">Serving Our Community</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Through Compassion Ministries, we extend the love of Christ to our community by meeting 
            practical needs, offering hope, and sharing the gospel. Join us as we serve together.
          </p>
        </section>

        {/* Ministries Cards */}
        <section className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Nightshift Ministry */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-70"
                  style={{ backgroundImage: 'url(/images/ministries/cooking.jpeg)' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">
                  Nightshift Ministry
                </h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                  Serving those working night shifts with meals, fellowship, and spiritual support. 
                  We meet regularly to provide food, community, and encouragement.
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-secondary font-semibold text-sm">Every Other Month on the Second Saturday</p>
                  <p className="text-gray-600 text-sm">4:30 PM - FOOD PREP</p>
                </div>
                <button 
                  onClick={() => setShowContactForm(true)}
                  className="bg-secondary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-secondary/90 transition-colors w-full"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Coming Soon Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden opacity-75">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center">
                <p className="text-gray-500 font-semibold">Coming Soon</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-3">
                  Community Outreach
                </h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                  More details about this ministry will be available soon. 
                  We&apos;re excited to share how you can get involved.
                </p>
                <button className="bg-gray-300 text-gray-500 px-6 py-2 rounded-full text-sm font-medium cursor-not-allowed w-full" disabled>
                  Coming Soon
                </button>
              </div>
            </div>

            {/* Coming Soon Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden opacity-75">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative flex items-center justify-center">
                <p className="text-gray-500 font-semibold">Coming Soon</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-3">
                  Food Bank Ministry
                </h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                  More details about this ministry will be available soon. 
                  We&apos;re excited to share how you can get involved.
                </p>
                <button className="bg-gray-300 text-gray-500 px-6 py-2 rounded-full text-sm font-medium cursor-not-allowed w-full" disabled>
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactForm onClose={() => setShowContactForm(false)} />
          </div>
        </div>
      )}
    </div>
  )
}


