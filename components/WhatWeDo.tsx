'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'Big impact, no stress',
    description: 'Delivery, full setup, and pack-down included.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  {
    title: 'Loads of choice',
    description: '1m letters; numbers up to 1.2m; warm or cool white bulbs.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Neon your way',
    description: 'Standard or custom neon signs for a modern edge.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
]

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="what-we-do" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-6">
            What We Do
          </h2>
          <div className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed space-y-4">
            <p>
              Make It Wow takes wedding décor up a notch with massive 1m-high steel
              LED letters and numbers that make a statement. Whether it's your
              initials, the word LOVE, or a glowing 2025, there's a combo to suit
              every celebration. Add extra flair with our neon signs—choose from our
              range or go fully custom for that modern, photo-ready look.
            </p>
            <p>
              Every hire includes delivery, setup, and pickup, so there's no stress on
              the day. Pick cool or warm white bulbs to match your vibe. Couples and
              planners love our professional service, fair pricing, and friendly
              approach. From glam receptions to chill backyard parties, Make It Wow
              creates that big wow moment—without the over-the-top cost or chaos.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-accent rounded-full text-brand-dark mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-heading font-semibold text-brand-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

