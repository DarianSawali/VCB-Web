'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-2 z-50 px-2">
      <nav className="bg-secondary shadow-lg rounded-full mx-auto max-w-7xl">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl text-accent">
              <span className="hidden sm:inline">Vancouver City Blessing</span>
              <span className="sm:hidden">VCB</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
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

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-6 pt-2">
              <Link
                href="/"
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/connect"
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </Link>
              <Link
                href="/give"
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Give
              </Link>
              <Link
                href="/compassion"
                className="block py-2 text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Compassion Ministries
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

