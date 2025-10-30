'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-brand-dark to-gray-900" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              About Make It Wow
            </h2>
            <div className="space-y-4 text-lg text-gray-200 leading-relaxed">
              <p>
                Hi there—we're a small family business based in Brisbane. We're
                reliable, professional, and we know you don't need stress on your
                big day.
              </p>
              <p>
                Communication and organisation matter to us—so we keep everything
                simple and on schedule. From your first enquiry to pack-down after
                your event, you'll experience friendly, no-fuss service that puts
                your mind at ease.
              </p>
              <p className="text-brand-accent font-semibold italic">
                — Mr Andrew Costas, Owner
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:0400000000" className="btn-primary">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                0400 000 000
              </a>
              <a
                href="sms:0400000000"
                className="btn-secondary"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                Message Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/large-letters-for-hire-supplierprofilelive-photo-ebb0b1fb-5663-476f-8fc8-579dc8299fb6.jpg"
                alt="Make It Wow LED letters display"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent opacity-20 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

