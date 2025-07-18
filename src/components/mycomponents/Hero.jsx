'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <main className="w-full bg-white">
      <section className="relative overflow-hidden">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-12">
          
          {/* Text Section with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto text-center lg:text-left flex flex-col max-w-3xl justify-center lg:justify-start lg:py-8 flex-1 lg:w-1/2 lg:max-w-none"
          >
            <h1 className="text-[#003566] text-4xl sm:text-6xl font-semibold leading-tight">
              Digital Growth with{' '}
              <span className="inline-block border border-dashed border-[#c1121f] px-3 bg-[#c1121f]/5 text-[#c1121f]">
                Grow Digitech
              </span>
            </h1>

            <p className="mt-6 text-gray-700 text-lg max-w-2xl lg:max-w-none mx-auto">
              Based in Amritsar, Grow Digitech has delivered impactful digital solutions to hundreds of businesses—
              specializing in Google My Business verifications (GMVT), social media creatives, website designing, and
              high-converting Meta ads.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-10 flex gap-4 justify-center lg:justify-start flex-wrap"
            >
              <Link
                href="#"
                className="relative px-6 py-3 rounded-lg bg-[#c1121f] text-white font-medium hover:bg-[#a80e19] transition"
              >
                Get Started
              </Link>

              <Link
                href="#"
                className="relative px-6 py-3 rounded-lg border border-[#003566] text-[#003566] font-medium hover:bg-[#003566] hover:text-white transition"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section (No animation) */}
          <div className="flex flex-1 lg:w-1/2 relative max-w-3xl mx-auto lg:max-w-none">
            <Image
              src="/social-growth-animate.svg"
              alt="Grow Digitech Team"
              width={1850}
              height={1200}
              className="lg:absolute w-full lg:inset-x-0 object-cover lg:h-full rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}
