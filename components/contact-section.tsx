'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react'
import { contactInfo } from '@/lib/data'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', phone: '', email: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden bg-white">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Get In Touch
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            <span className="text-brand-red">Contact</span> Us
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg">
            Want Dairy Trends Ice Creams for your shop, event, party, or celebration? 
            Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="glass p-6 lg:p-8 rounded-3xl shadow-xl">
              <h3 className="text-2xl font-bold text-chocolate mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-chocolate mb-2">
                    Your Name <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    aria-required="true"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-chocolate mb-2">
                      Phone Number <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      aria-required="true"
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-chocolate mb-2">
                      Email Address <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      aria-required="true"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-chocolate mb-2">
                    Your Message <span className="text-brand-red" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    aria-required="true"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-red text-white py-4 rounded-xl font-semibold btn-glow flex items-center justify-center gap-2 disabled:opacity-70 focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: 'Call Us', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                { icon: MessageCircle, label: 'WhatsApp', value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}` },
                { icon: Mail, label: 'Email Us', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: MapPin, label: 'Visit Us', value: 'See on Map', href: '#contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all group focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target block"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" aria-hidden="true">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-chocolate/60">{item.label}</p>
                      <p className="font-semibold text-chocolate">{item.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass p-6 rounded-2xl shadow-lg"
            >
              <h4 className="font-bold text-chocolate mb-2">Our Address</h4>
              <p className="text-chocolate/70">{contactInfo.address}</p>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
              aria-hidden="true"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.940562692025!2d78.32121567503796!3d17.109425183656364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbc700151bc1d3%3A0x50e7e9da9d02230!2sPradhara%20Dairy%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Pradhara Dairy Private Limited Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
