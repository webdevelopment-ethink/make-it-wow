'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    venue: '',
    interest: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Build SMS link with form data
    const message = encodeURIComponent(
      `Booking Enquiry from ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Event Date: ${formData.eventDate}\n` +
      `Venue: ${formData.venue}\n` +
      `Interest: ${formData.interest}\n` +
      `Message: ${formData.message}`
    )
    
    window.location.href = `sms:0400000000${navigator.platform === 'iPhone' ? '&' : '?'}body=${message}`
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-light" ref={ref}>
      <div className="section-container max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-700">
            Ready to make your event unforgettable? Let's chat about your needs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Quick Contact Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-brand-dark to-gray-900 rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-3xl font-heading font-bold mb-6">
              Quick Contact
            </h3>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Give us a call or send a message. We're here to help make your event special.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Phone</p>
                  <a
                    href="tel:0400000000"
                    className="text-xl font-semibold hover:text-brand-accent transition-colors"
                  >
                    0400 000 000
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Text Message</p>
                  <a
                    href="sms:0400000000"
                    className="text-xl font-semibold hover:text-brand-accent transition-colors break-words"
                  >
                    Send us a text
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Service Area</p>
                  <p className="text-lg font-semibold">
                    Brisbane, Gold Coast
                    <br />
                    Sunshine Coast
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0400000000" className="btn-primary w-full sm:w-auto">
                Call Now
              </a>
              <a
                href="sms:0400000000"
                className="btn-secondary w-full sm:w-auto"
              >
                Message Us
              </a>
            </div>

            <p className="text-sm text-gray-400 mt-6 italic">
              We reply to calls and texts within 24 hours
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-lg"
          >
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
              Find Us
            </h3>
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1826011.9556469915!2d150.6713821!3d-27.27997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cf7f4dfc564a219%3A0x17d58006c2454a6d!2sMake%20it%20wow%20events%20hire!5e0!3m2!1sen!2sau!4v1698765432100!5m2!1sen!2sau"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Make It Wow Location"
              />
            </div>
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-6">
              Quick Enquiry Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  placeholder="0400 000 000"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="eventDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="venue"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Venue/Suburb
                  </label>
                  <input
                    type="text"
                    id="venue"
                    name="venue"
                    value={formData.venue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                    placeholder="Brisbane CBD"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  What you'd like
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="letters">LED Letters</option>
                  <option value="numbers">LED Numbers</option>
                  <option value="neon">Custom Neon</option>
                  <option value="combo">Letters + Numbers</option>
                  <option value="full">Full Package</option>
                  <option value="other">Something else</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your event and what you're looking for..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send via Text Message
              </button>

              <p className="text-sm text-gray-600 text-center">
                Sends directly to our phone • We reply within <span className="font-semibold text-brand-dark">24 hours</span>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

