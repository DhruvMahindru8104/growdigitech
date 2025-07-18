'use client'

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaInstagram, FaLinkedin } from "react-icons/fa"

const team = [
  {
    name: "Charanjeet Sharma",
    role: "Founder",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Barjinder Singh",
    role: "Founder",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Deepika",
    role: "Ad Specialist",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Pinky",
    role: "Website Developer",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Rahul",
    role: "GMB Expert",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Tanisha",
    role: "Graphic Designer",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    name: "Nawroop Kaur",
    role: "Telesales",
    img: "https://i.pinimg.com/736x/d9/b6/1a/d9b61a74e0ca7c64d50d27bb42013b4b.jpg",
    instagram: "#",
    linkedin: "#",
  },
]

export default function TeamSection() {
  return (
    <section className="p-10">
      <div className="container mx-auto text-left">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="semibold text-[#c1121f]"
        >
          Our team
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="my-6 text-2xl font-bold lg:text-4xl"
        >
          The team you'll be working with
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 max-w-3xl text-zinc-600 lg:text-xl"
        >
          Meet our amazing team members who bring life to your business.
        </motion.p>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-4 h-40 w-40 overflow-hidden rounded-full mx-auto">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-zinc-500">{member.role}</p>
                <div className="mt-3 flex justify-center gap-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-pink-500 transition"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-blue-500 transition"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
