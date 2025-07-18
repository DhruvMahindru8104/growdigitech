'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MousePointerSquareDashed } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Google Ads',
    image: 'https://i.pinimg.com/736x/3d/2a/f2/3d2af2fb4696e2659d42a1b1fc01be32.jpg',
    desc: 'We help your business appear on top of search results through Google Ads with measurable ROI.',
  },
  {
    title: 'Meta Ads',
    image: 'https://i.pinimg.com/736x/1c/46/c2/1c46c2d654c62f2b16269de8de5dba24.jpg',
    desc: 'Reach your audience on Facebook & Instagram with highly targeted Meta advertising.',
  },
  {
    title: 'GMVT',
    image: 'https://i.pinimg.com/736x/5c/65/54/5c6554eb23c8130d26c6450e7f7cdddc.jpg',
    desc: 'We verify and optimize your Google My Business profile to improve local discovery.',
  },
  {
    title: 'Website Making',
    image: 'https://i.pinimg.com/736x/2b/c1/c9/2bc1c9c6efc3c194e67f30bfb0aa5e22.jpg',
    desc: 'From single-page sites to full business platforms—we design and build conversion-driven websites.',
  },
  {
    title: 'SEO Specialist',
    image: 'https://i.pinimg.com/1200x/a3/76/df/a376dfc3058c438bc9595662acd88b95.jpg',
    desc: 'Improve your website’s search ranking with our expert SEO strategies tailored for Amritsar businesses.',
  },
  {
    title: 'Social Media Handling',
    image: 'https://i.pinimg.com/1200x/f4/09/b0/f409b00ae29a87c0e723689f25621c86.jpg',
    desc: 'We manage your content, grow followers, and maintain consistent branding across all social platforms.',
  },
]

const GrowUtilitiesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=" bg-white dark:bg-[#003566] text-gray-900 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12">
        
        {/* Header */}
      

        <div className="h-[1px] w-full bg-gray-200 dark:bg-white/10 my-6" />

        {/* Title + Description */}
        <div className="flex flex-col justify-between gap-6 md:flex-row mb-12">
          <h2 className="text-3xl font-semibold md:w-1/2">
            What can Grow Digitech do for your business?
          </h2>
          <p className="md:w-1/2 text-gray-600 dark:text-gray-300">
            We are on a mission to make every shop in Amritsar go online. Whether you need digital ads, a powerful local presence, or a website that drives results—we’ve got you covered.
          </p>
        </div>

        {/* Cards with Motion */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl border bg-white dark:bg-[#002a4d] text-gray-800 dark:text-white shadow-md overflow-hidden transition-all cursor-pointer"
            >
             <Image
  src={service.image}
  alt={service.title}
  width={600}
  height={300}
  className={`aspect-video w-full object-center ${index < 3 ? 'object-contain' : 'object-cover'}`}
/>

              <div className="p-5">
                <p className="mb-1 font-semibold text-lg text-[#C1121F]">{service.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default GrowUtilitiesSection
