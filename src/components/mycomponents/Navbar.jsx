'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 bg-white ">
      <div className="container mx-auto px-4">
        <nav
          aria-label="Main"
          className="flex items-center justify-between py-4"
        >
          {/* Logo */}
          <Link href="/" className=''>
            <Image
              src="/growdigitechlogo.png"
              alt="Logo"
              width={120}
              height={32}
              className="h-15 w-auto object-cover"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-6 text-[#003566] font-medium">
            {['Platform', 'Use cases', 'Developers', 'Resources'].map((item, index) => (
              <li key={index}>
                <button className="hover:text-[#c1121f] transition-colors flex items-center gap-1">
                  {item}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-4">
          
            <button className="text-sm font-medium bg-[#c1121f] text-white px-4 py-2 rounded hover:bg-[#a80e19] transition flex items-center gap-2">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button
              className="p-2 rounded-md text-[#003566] hover:text-[#c1121f] transition"
              aria-label="Main Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}
