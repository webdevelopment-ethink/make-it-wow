'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: 'Do you deliver and set up?',
    answer:
      "Yes—delivery, full setup, and pack-down are included. No fiddling with wires on your big day. We handle everything professionally so you can focus on celebrating.",
  },
  {
    question: 'Warm vs cool white?',
    answer:
      'Choose warm white for cozy, romantic vibes or cool white for modern, crisp photos. Both options look stunning—it just depends on your event style and colour scheme.',
  },
  {
    question: 'Do you do custom neon?',
    answer:
      "Absolutely—share your phrase or logo and we'll handle design and production. From wedding hashtags to business branding, we create custom LED neon that matches your vision perfectly.",
  },
  {
    question: 'What are the power requirements?',
    answer:
      'Just a standard power point. We bring safe cabling and dimmers as needed. Our equipment is professionally maintained and fully compliant with Australian safety standards.',
  },
  {
    question: 'Where do you service?',
    answer:
      "We cover Greater Brisbane, Gold Coast, and Sunshine Coast. For locations outside these areas, please get in touch—we're often happy to accommodate travel for special events.",
  },
  {
    question: 'How far in advance should I book?',
    answer:
      "We recommend booking 2-3 months ahead for peak wedding season (especially Saturdays). For weekday or off-peak events, we can often accommodate shorter notice—just reach out and we'll do our best to help.",
  },
]

export default function FAQs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faqs" className="py-20 md:py-32 bg-white" ref={ref}>
      <div className="section-container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
            FAQs
          </h2>
          <p className="text-xl text-gray-700">
            Everything you need to know about our service
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
              className="bg-brand-light rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-inset rounded-xl"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-brand-dark pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-brand-accent flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

