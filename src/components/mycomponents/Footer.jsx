'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#003566]">
      <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/growdigitechlogo.png"
            alt="Logo"
            width={120}
            height={28}
            className="h-15 w-auto"
          />
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-300 text-center sm:text-left">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {/* Reddit */}
          <Link href="#" aria-label="Reddit" className="text-gray-600 dark:text-gray-300 hover:text-[#C1121F] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 22C6.477...Z" /> {/* truncated path for brevity */}
            </svg>
          </Link>

          {/* Facebook */}
          <Link href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-300 hover:text-[#C1121F] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M2.00195 12.002...Z" />
            </svg>
          </Link>

          {/* GitHub */}
          <Link href="#" aria-label="GitHub" className="text-gray-600 dark:text-gray-300 hover:text-[#C1121F] transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.026 2C7.13295...Z" />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
