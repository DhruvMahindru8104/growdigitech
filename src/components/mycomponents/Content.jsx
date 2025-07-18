'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const ContentSection = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-10 flex flex-col md:flex-row gap-16 rounded-2xl bg-white dark:bg-[#003566]">
        
        {/* Image Section with Fade-In */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex md:flex-1"
        >
          <Image
            src="https://i.pinimg.com/1200x/be/85/ca/be85ca8ebe16055d3ab18ae84c79321d.jpg"
            alt="working on housing"
            width={1300}
            height={900}
            className="w-full md:h-full object-cover rounded-xl shadow-md"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:w-1/2 space-y-10 text-[#222] dark:text-white"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-[#C1121F]">Grow</span> your business online with us
          </h1>

          <p className="text-gray-600 dark:text-gray-200 text-base leading-relaxed">
            We specialize in helping every local shop and business in <span className="text-[#C1121F] font-medium">Amritsar</span> go online and build a strong digital presence.
          </p>

          <ul className="space-y-4">
            {[
              "Web Development",
              "Google My Business (GMB)",
              "Meta Ads",
              "Social Media Handling",
            ].map((service, i) => (
              <li key={i} className="flex items-center gap-x-4">
                <span className="w-6 h-6 text-sm flex items-center justify-center rounded-full bg-green-500 text-white font-bold shadow">
                  ✓
                </span>
                <span className="text-base">{service}</span>
              </li>
            ))}
          </ul>

          <div>
            <Link
              href="#"
              className="px-6 h-11 inline-flex items-center justify-center rounded-md text-white bg-[#C1121F] hover:bg-[#a50e1a] transition-colors duration-300 font-medium shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContentSection
