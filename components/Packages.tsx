'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const packages = [
  {
    title: 'Letters',
    description: 'Any letters, 1m tall.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
        />
      </svg>
    ),
    features: ['1m tall steel letters', 'Any combination', 'Warm or cool white', 'Setup included'],
  },
  {
    title: 'Numbers',
    description: '1m–1.2m, perfect for milestone dates.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
        />
      </svg>
    ),
    features: ['Up to 1.2m tall', 'Perfect for dates', 'Anniversary specials', 'Full service'],
  },
  {
    title: 'Custom Neon',
    description: 'Your phrase or logo, designed with you.',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    features: ['Fully custom designs', 'Your phrase or logo', 'Modern LED flex', 'Design consultation'],
  },
]

export default function Packages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="packages" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
            Packages
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Choose the perfect option for your event
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-brand-light rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-accent"
            >
              <div className="text-brand-accent mb-6">{pkg.icon}</div>
              <h3 className="text-3xl font-heading font-bold text-brand-dark mb-3">
                {pkg.title}
              </h3>
              <p className="text-gray-700 mb-6 text-lg">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-brand-accent mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            <span className="font-semibold text-brand-dark">Ask about combo deals and weekend rates.</span>
            <br />
            Every package includes delivery, setup, and pickup across Brisbane and SEQ.
          </p>
          <a href="#contact" className="btn-primary">
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}

