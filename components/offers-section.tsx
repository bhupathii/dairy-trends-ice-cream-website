'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Flame, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { offers } from '@/lib/data'

export default function OffersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="offers" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-red-yellow opacity-90 pointer-events-none" aria-hidden="true" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-golden/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Floating Ice Cream Decorations */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-[15%] w-20 h-20 opacity-20 hidden lg:block pointer-events-none"
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 140" fill="white">
          <ellipse cx="50" cy="35" rx="35" ry="35" />
          <polygon points="25,50 75,50 50,130" />
        </svg>
      </motion.div>

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
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            <Flame className="w-4 h-4" aria-hidden="true" />
            Limited Time Offers
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-shadow"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Sweet Offers For You
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Grab these amazing deals before they melt away! Special prices on 
            your favorite treats.
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl h-full flex flex-col">
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  className="absolute top-4 right-4 z-10"
                >
                  <div className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <Flame className="w-3 h-3" aria-hidden="true" />
                    {offer.badge}
                  </div>
                </motion.div>

                {/* Image */}
                <div className="relative h-40 overflow-hidden shrink-0">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-red/40 to-transparent" aria-hidden="true" />
                  
                  {/* Discount Badge */}
                  <div className="absolute bottom-3 left-3">
                    <div className="bg-golden text-chocolate px-4 py-2 rounded-xl font-bold text-lg shadow-lg">
                      {offer.discount}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col grow">
                  <h3 className="font-bold text-chocolate text-lg mb-2">{offer.title}</h3>
                  <p className="text-chocolate/60 text-sm mb-4 line-clamp-2">{offer.description}</p>
                  
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-auto bg-brand-red text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target"
                  >
                    Grab Offer
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-white/70 mt-8 text-sm"
        >
          * Terms and conditions apply. Offers valid while stocks last.
        </motion.p>
      </div>
    </section>
  )
}
