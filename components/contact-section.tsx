'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Mail, MapPin, Send, MessageCircle, Building2, MapPinSecondary } from 'lucide-react'
import { contactInfo } from '@/lib/data'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Bulk Order',
    businessName: '',
    city: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        enquiryType: 'Bulk Order',
        businessName: '',
        city: '',
        message: ''
      })
    }, 4000)
  }

  const isBusinessEnquiry = 
    ['Retailer / Store Partner', 'Distributor Opportunity', 'Bulk Order', 'Event & Party Catering'].includes(formData.enquiryType)

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            Partner With Us
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bulk Orders & <span className="text-brand-red">Franchise Enquiry</span>
          </h2>
          <p className="text-chocolate/75 max-w-2xl mx-auto text-lg leading-relaxed">
            Partner with us to grow your business, stock Dairy Trends Ice Creams at your retail outlet, or place bulk orders for family events and celebrations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* ── Contact/Enquiry Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-cream/40 p-6 lg:p-8 rounded-[32px] border border-chocolate/5 shadow-xl">
              <h3 className="text-2xl font-extrabold text-chocolate mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Partnership & Enquiry Form
              </h3>
              
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-red/5 border border-brand-red/15 rounded-2xl p-6 text-center py-12"
                >
                  <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-black">
                    ✓
                  </div>
                  <h4 className="text-xl font-bold text-chocolate mb-2">Enquiry Received!</h4>
                  <p className="text-chocolate/70 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. A representative from Pradhara Dairy will contact you on your registered phone/email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Enquiry Type Dropdown */}
                  <div>
                    <label htmlFor="enquiryType" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                      Enquiry Type <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="enquiryType"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors font-bold text-chocolate text-sm"
                    >
                      <option value="Bulk Order">Bulk Order (Parties / Weddings)</option>
                      <option value="Distributor Opportunity">Distributor Opportunity</option>
                      <option value="Retailer / Store Partner">Retailer / Store Partner</option>
                      <option value="General Enquiry">General / Product Enquiry</option>
                    </select>
                  </div>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                      Full Name <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      aria-required="true"
                      placeholder="Enter your name"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors text-sm"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone field */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                        Phone Number <span className="text-brand-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        aria-required="true"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors text-sm"
                      />
                    </div>
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                        Email Address <span className="text-brand-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        aria-required="true"
                        placeholder="yourname@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Business Details (conditionally rendered or styled if business related) */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="businessName" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                        Shop / Company Name {isBusinessEnquiry && <span className="text-brand-red" aria-hidden="true">*</span>}
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        required={isBusinessEnquiry}
                        placeholder="Optional"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                        City / Town <span className="text-brand-red" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="city"
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                        placeholder="e.g. Hyderabad, Vijayawada"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors text-sm"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-black text-chocolate uppercase tracking-wider mb-2">
                      Requirements & Details <span className="text-brand-red" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      aria-required="true"
                      rows={4}
                      placeholder="Specify your expected order volume, date of event, or shop details..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-border focus:border-brand-red focus:outline-none focus-visible:outline-brand-red focus-visible:outline-2 transition-colors resize-none text-sm leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-red hover:bg-brand-red-dark text-white py-4 rounded-xl font-bold btn-glow flex items-center justify-center gap-2 disabled:opacity-70 focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target"
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Submitting Enquiry...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 shrink-0" aria-hidden="true" />
                        Submit Business Enquiry
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* ── Contact Coordinates & Map ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Details Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Phone, label: 'Call Us (Office)', value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, '')}` },
                { icon: MessageCircle, label: 'WhatsApp Enquiry', value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hi%20Dairy%20Trends%2C%20I%20have%20a%20bulk%20order%2Fpartnership%20enquiry.` },
                { icon: Mail, label: 'Email Address', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                { icon: MapPin, label: 'Corporate Office', value: 'Hyderabad, TS', href: '#contact' }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                    } else if (item.href.startsWith('http')) {
                      window.open(item.href, '_blank', 'noopener,noreferrer')
                    } else {
                      window.location.href = item.href
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      if (item.href.startsWith('#')) {
                        document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' })
                      } else if (item.href.startsWith('http')) {
                        window.open(item.href, '_blank', 'noopener,noreferrer')
                      } else {
                        window.location.href = item.href
                      }
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="cursor-pointer bg-cream/30 p-5 rounded-2xl border border-chocolate/5 shadow-sm hover:shadow-md transition-all group focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target block"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shrink-0" aria-hidden="true">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-chocolate/55 font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="font-extrabold text-chocolate text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Registered Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 }}
              className="bg-cream/20 p-6 rounded-2xl border border-chocolate/5 shadow-sm"
            >
              <h4 className="font-black text-chocolate text-sm uppercase tracking-wider mb-2">Registered Factory & Plant</h4>
              <p className="text-chocolate/75 text-sm leading-relaxed">{contactInfo.address}</p>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-md border border-chocolate/5"
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
                className="w-full h-full animate-fade-in"
                title="Pradhara Dairy Private Limited Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
