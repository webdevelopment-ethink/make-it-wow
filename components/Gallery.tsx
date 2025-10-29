'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-0816d2e0-211a-4921-8120-05455cee3259.jpg',
    alt: 'LED letters setup at wedding venue',
    caption: 'LOVE • Warm White • Brisbane Reception',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-099fc9b3-c7fc-4a5d-9736-e4b769170e60.jpg',
    alt: 'Large LED numbers display',
    caption: 'Numbers Display • Cool White',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-270aaa59-68ab-4742-a2b3-ad270d362827.jpg',
    alt: 'Custom neon sign at event',
    caption: 'Custom Setup • Brisbane Event',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-4722446b-eef9-4139-aaef-a3d678c98840.jpg',
    alt: 'LED letters outdoor setup',
    caption: 'Outdoor Display • Warm Glow',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-61454217-6996-48fb-85cc-fd8dfc50f1c6.jpg',
    alt: 'Elegant LED letter arrangement',
    caption: 'Initials • Wedding Reception',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-7e20c417-1b8c-4953-926c-785d2b485074.jpg',
    alt: 'LED numbers for milestone celebration',
    caption: '2025 • New Year Event',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-91d66e41-1e6b-4250-82c8-5a963b4b9093.jpg',
    alt: 'Romantic LED letter setup',
    caption: 'Romantic Setup • Warm White',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-aecda0d6-9efa-40dd-93e9-ecb8c8e144c9.jpg',
    alt: 'LED letters with balloon decor',
    caption: 'Letters with Balloons • Gold Coast',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-b69fc567-99c6-4914-aba2-24a7602f0af1.jpg',
    alt: 'Modern LED setup',
    caption: 'Modern Style • Cool White',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-c4d8281b-3e36-4a58-83fa-73c5bd08f651.jpg',
    alt: 'Grand LED letter display',
    caption: 'Grand Display • Brisbane Hall',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-e5d3610b-1c67-4458-b750-ceb0055321a9.jpg',
    alt: 'LED setup with props',
    caption: 'With Props • Styled Event',
  },
  {
    src: '/images/large-letters-for-hire-supplierprofilelive-photo-e83a1e44-ba5b-4535-818a-f69e845cd6bc.jpg',
    alt: 'Elegant evening setup',
    caption: 'Evening Setup • Sunshine Coast',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = 'auto'
  }

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
    }
  }

  const goToPrevious = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  return (
    <section id="gallery" className="py-20 md:py-32 bg-brand-light" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            See how we've helped create unforgettable moments across Brisbane and beyond
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.05 + index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-200"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openLightbox(index)
                }
              }}
              aria-label={`View image: ${image.caption}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-brand-dark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          tabIndex={-1}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-brand-accent transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 text-white hover:text-brand-accent transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            aria-label="Previous image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 text-white hover:text-brand-accent transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-lg"
            aria-label="Next image"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="max-w-6xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                width={1200}
                height={1200}
                className="max-w-full max-h-[85vh] object-contain"
                priority
              />
              <div className="mt-4 text-center">
                <p className="text-white text-lg">{galleryImages[lightboxIndex].caption}</p>
                <p className="text-gray-400 text-sm mt-2">
                  {lightboxIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

