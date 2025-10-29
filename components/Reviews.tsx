'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const reviews = [
  {
    text: "Such an easy experience for a huge impact on our wedding reception! These guys delivered on time, seamlessly and made everything so easy! Changed the bulbs from white to warm as a last minute request as well. Will definitely use them for any events from now on! Highly recommend 😊",
    author: 'Hailee K.',
    event: 'Wedding Reception, June 2025',
    rating: 5,
  },
  {
    text: "Made my wedding extra special. Was wowed by all guests! Would definitely recommend to make your special day stand out.",
    author: 'Eleni C.',
    event: 'Wedding, June 2025',
    rating: 5,
  },
  {
    text: "Andrew was very good to deal with and letters arrived and setup and removed without any issues. Highly recommend.",
    author: 'Bronwyn H.',
    event: 'Wedding Event, July 2025',
    rating: 5,
  },
]

const badges = [
  {
    title: 'Family-owned',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    title: 'Fully Insured',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    title: 'On-time Guaranteed',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
]

export default function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="reviews" className="py-20 md:py-32 bg-brand-light" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">
            Read more reviews on{' '}
            <a
              href="https://www.easyweddings.com.au/WeddingDecorations/Brisbane/LargeLettersforHire/#reviews_container"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-accent hover:underline font-semibold"
            >
              Easy Weddings
            </a>
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex mb-4" aria-label={`${review.rating} star rating`}>
                {[...Array(review.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>
              <div>
                <p className="font-semibold text-brand-dark">{review.author}</p>
                <p className="text-sm text-gray-600">{review.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {badges.map((badge, index) => (
              <div
                key={badge.title}
                className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <div className="w-14 h-14 bg-brand-accent rounded-full flex items-center justify-center text-brand-dark mb-3">
                  {badge.icon}
                </div>
                <p className="font-semibold text-brand-dark">{badge.title}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

