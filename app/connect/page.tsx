'use client'

import { useState } from 'react'
import GalleryImages from '@/components/Gallery'
import PrayerForm from '@/components/PrayerForm'
import ContactForm from '@/components/ContactForm'

export default function Connect() {
  const [showContactForm, setShowContactForm] = useState(false)
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden -mt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 to-secondary/60" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200')",
          }}
        />
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-semibold text-accent text-center drop-shadow-lg">
              Connect
            </h1>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Connect Intro */}
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl text-secondary mb-8">You Belong Here</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Vancouver City Blessing, we believe church is more than a weekly service
            - it is a family. There are many ways to get connected, build relationships,
            and grow in your walk with Jesus.
          </p>
        </section>

        {/* Carecell Section */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 flex flex-col">
            <h3 className="text-2xl text-secondary mb-8">Carecell</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed mb-6 flex-grow">
              <p>
                Carecells are our small groups that meet throughout the week in homes and
                online. They are places to share life, study the Word, pray together, and
                care for one another. The value of trust, care and support are based on the love of Christ is what CARE cell is all about (a.k.a Small Group)
              </p>
              <p>
                Whether you are new to church or have been following Jesus for many years,
                there is a Carecell for you. We would love to help you find a group that fits
                your stage of life and location.
              </p>
              <p>
                Reach out to one of our leaders or Contact us to learn more about our Carecells.
              </p>
            </div>
            <button 
              onClick={() => setShowContactForm(true)}
              className="mt-2 bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary/90 transition-colors"
            >
              Find a Carecell
            </button>
          </div>
          <div className="min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20 relative">
            <div
              className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900')] bg-cover bg-center opacity-80"
            />
          </div>
        </section>

        {/* Join us Section */}
        <section id="join-us" className="max-w-6xl mx-auto scroll-mt-20">
          <div className="space-y-8">
            {/* Join us and Saturday Worship Service in one box */}
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h3 className="text-2xl text-secondary mb-6">Join us</h3>
              <div className="space-y-4 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  We'd love to welcome you to City Blessing Church. Whether you're exploring faith, new to the area, or looking for a church community, you are warmly invited to join us.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our gatherings are centred on worship, biblical teaching, and genuine community.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-xl text-secondary mb-4">Saturday Worship Service</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We gather each week to worship God, pray together, and hear from His Word.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕘</span>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Time:</p>
                      <p className="text-gray-700 font-medium">Saturdays at 10:45am</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Location:</p>
                      <p className="text-gray-700">
                        320 8th St<br />
                        New Westminster, BC V3M 3R4<br />
                        <span className="text-sm text-gray-600 italic">(Freedom Church building)</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kids Ministry and Fellowship Time - Side by side on larger screens */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kids Ministry */}
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h4 className="text-xl text-secondary mb-4">Kids Ministry</h4>
                <p className="text-gray-700 leading-relaxed">
                  We're glad to welcome families. A kids ministry is available during the service, providing a safe and caring environment where children can learn about God in age-appropriate and engaging ways. Our volunteers are committed to helping kids grow in faith while parents are able to participate fully in the worship service.
                </p>
              </div>

              {/* Fellowship Time */}
              <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                <h4 className="text-xl text-secondary mb-4">Fellowship Time</h4>
                <p className="text-gray-700 leading-relaxed">
                  Church doesn't end when the service ends. After worship, we invite you to stay for fellowship time, where you can connect with others, enjoy conversation, and build meaningful relationships. It's a relaxed and welcoming time to get to know our church community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join a Ministry Section */}
        <section className="max-w-6xl mx-auto">
          <h3 className="text-2xl text-secondary mb-8">Join a Ministry</h3>
          <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl">
            We believe every believer has God-given gifts to serve others. Joining a
            ministry team is a great way to grow, build friendships, and make a
            difference.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h4 className="text-lg text-secondary mb-2">Worship &amp; Media</h4>
              <p className="text-gray-700 text-sm mb-4">
                Serve with music, sound, production, and creative media.
              </p>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-secondary text-white px-6 py-2 rounded-full text-sm hover:bg-secondary/90 transition-colors"
              >
                I&apos;m interested
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h4 className="text-lg text-secondary mb-2">Next Gen &amp; Kids</h4>
              <p className="text-gray-700 text-sm mb-4">
                Invest in children, youth, and young adults.
              </p>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-secondary text-white px-6 py-2 rounded-full text-sm hover:bg-secondary/90 transition-colors"
              >
                I&apos;m interested
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
              <h4 className="text-lg text-secondary mb-2">Hospitality &amp; Care</h4>
              <p className="text-gray-700 text-sm mb-4">
                Welcome people, serve meals, and care for practical needs.
              </p>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-secondary text-white px-6 py-2 rounded-full text-sm hover:bg-secondary/90 transition-colors"
              >
                I&apos;m interested
              </button>
            </div>
          </div>
        </section>

        {/* Prayer Section */}
        <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
            <h3 className="text-2xl text-secondary mb-8">Prayer</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every other wednesday, we gather for Corporate Prayer - a time of worship, intercession, and seeking God together for our church, our city, and the nations.
            </p>
            {/* <p className="text-gray-700 leading-relaxed mb-2">
              <span className="font-semibold">Prayer Night:</span> Wednesdays, 7:00 PM
            </p> */}
            <p className="text-gray-700 leading-relaxed mb-4">
              We would be honored to pray with you. Share your prayer request below and our team will stand with you in faith.
            </p>
          </div>

          {/* Prayer Form */}
          <PrayerForm />
        </section>

        {/* Social Media Section */}
        <section className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl text-secondary mb-8">Social Media</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Stay connected throughout the week by following us on social media.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/cityblessingvancouver/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-secondary/40 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@vancouvercityblessing7174"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-secondary/40 rounded-full text-secondary hover:bg-secondary hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="max-w-6xl mx-auto mb-4">
          <h3 className="text-2xl text-secondary mb-8">Gallery</h3>
          <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl">
            A glimpse of what God is doing in and through Vancouver City Blessing.
          </p>
        </section> */}
      </div>

      {/* Full Width Gallery - Breaks out of container
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden -mt-12">
        <GalleryImages />
      </div> */}

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

