'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="sticky top-2 z-50 px-4 md:px-6">
        <nav className={`mx-auto transition-all duration-300 ${
          isOpen 
            ? 'bg-transparent shadow-none' 
            : 'bg-secondary shadow-lg rounded-full max-w-7xl'
        }`}>
          <div className="px-5 md:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className={`text-xl md:text-2xl transition-colors ${
                isOpen ? 'text-secondary' : 'text-accent'
              }`}>
                <span className="hidden sm:inline">Vancouver City Blessing</span>
                <span className="sm:hidden">VCB</span>
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden lg:flex space-x-8">
                <Link href="/" className="text-white hover:text-accent transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-accent transition-colors">
                  About Us
                </Link>
                <Link href="/connect" className="text-white hover:text-accent transition-colors">
                  Connect
                </Link>
                <Link href="/give" className="text-white hover:text-accent transition-colors">
                  Give
                </Link>
                <Link href="/compassion" className="text-white hover:text-accent transition-colors">
                  Compassion Ministries
                </Link>
              </div>

              {/* Mobile Menu Button / Close Button */}
              <button
                className={`lg:hidden z-50 relative transition-colors ${
                  isOpen ? 'text-white' : 'text-white'
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Toggle menu"}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Full screen overlay slides down from top */}
      <div
        className={`fixed inset-0 bg-secondary z-40 lg:hidden ${
          isOpen 
            ? 'translate-y-0 opacity-100 transition-all duration-300 ease-in-out delay-150' 
            : '-translate-y-full opacity-0 pointer-events-none transition-all duration-300 ease-in-out'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <nav className="space-y-2">
            <Link
              href="/"
              className="block py-4 px-6 text-white text-xl hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-4 px-6 text-white text-xl hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/connect"
              className="block py-4 px-6 text-white text-xl hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Connect
            </Link>
            <Link
              href="/give"
              className="block py-4 px-6 text-white text-xl hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Give
            </Link>
            <Link
              href="/compassion"
              className="block py-4 px-6 text-white text-xl hover:text-accent hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Compassion Ministries
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

