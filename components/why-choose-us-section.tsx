'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Milk, ShieldCheck, IceCream2, PartyPopper, IndianRupee, Leaf } from 'lucide-react'

const features = [
  { 
    lucide: Milk,
    title: 'Rich Creamy Taste', 
    description: 'Made with premium dairy for the creamiest texture',
    accent: 'text-brand-red'
  },
  { 
    lucide: ShieldCheck,
    title: 'Hygienic Preparation', 
    description: 'Strict quality control and clean production',
    accent: 'text-golden'
  },
  { 
    lucide: IceCream2,
    title: 'Many Flavour Choices', 
    description: '27+ unique flavours to satisfy every taste',
    accent: 'text-chocolate'
  },
  { 
    lucide: PartyPopper,
    title: 'Perfect for Parties', 
    description: 'Bulk orders and party packages available',
    accent: 'text-brand-red'
  },
  { 
    lucide: IndianRupee,
    title: 'Affordable & Tasty', 
    description: 'Premium quality at pocket-friendly prices',
    accent: 'text-golden'
  },
  { 
    lucide: Leaf,
    title: 'Fresh Quality', 
    description: 'Made fresh daily with natural ingredients',
    accent: 'text-chocolate'
  }
]

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-14"
        >
          <span className="inline-block bg-brand-red/10 text-brand-red px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Makes Us <span className="text-brand-red">Special</span>
          </h2>
          <p className="text-chocolate/60 max-w-xl mx-auto text-base lg:text-lg">
            Discover why families across India trust Dairy Trends for their ice cream moments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {features.map((feature, index) => {
            const LucideIcon = feature.lucide
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.07, duration: 0.4 }}
              >
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-chocolate/8 hover:border-brand-red/15 hover:shadow-sm transition-all duration-200 h-full">
                  {/* Icon — Lucide for UI clarity */}
                  <div className={`shrink-0 mt-0.5 w-9 h-9 rounded-lg bg-chocolate/5 flex items-center justify-center ${feature.accent}`} aria-hidden="true">
                    <LucideIcon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-chocolate text-[15px] mb-1 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-chocolate/55 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white border border-chocolate/8 px-6 py-4 rounded-2xl">
            <p className="text-chocolate/75 text-sm">Ready to partner with us?</p>
            <motion.button
              type="button"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="bg-brand-red text-white px-5 py-2 rounded-full text-sm font-semibold btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Franchise Enquiry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
