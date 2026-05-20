'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Milk, ShieldCheck, IceCream2, PartyPopper, IndianRupee, Leaf } from 'lucide-react'

const features = [
  { 
    lucide: Milk,
    title: 'Rich Creamy Taste', 
    description: 'Made with premium dairy for the creamiest texture',
    theme: 'red'
  },
  { 
    lucide: ShieldCheck,
    title: 'Hygienic Preparation', 
    description: 'Strict quality control and clean production',
    theme: 'golden'
  },
  { 
    lucide: IceCream2,
    title: 'Many Flavour Choices', 
    description: '27+ unique flavours to satisfy every taste',
    theme: 'chocolate'
  },
  { 
    lucide: PartyPopper,
    title: 'Perfect for Parties', 
    description: 'Bulk orders and party packages available',
    theme: 'red'
  },
  { 
    lucide: IndianRupee,
    title: 'Affordable & Tasty', 
    description: 'Premium quality at pocket-friendly prices',
    theme: 'golden'
  },
  { 
    lucide: Leaf,
    title: 'Fresh Quality', 
    description: 'Made fresh daily with natural ingredients',
    theme: 'chocolate'
  }
]

const themeStyles = {
  red: {
    bgLight: 'bg-brand-red/10',
    text: 'text-brand-red',
    hoverBg: 'group-hover:bg-brand-red group-hover:text-white',
    hoverShadow: 'group-hover:shadow-brand-red/20',
    hoverBorder: 'group-hover:border-brand-red/30',
    gradient: 'from-brand-red/5'
  },
  golden: {
    bgLight: 'bg-golden/20',
    text: 'text-amber-600',
    hoverBg: 'group-hover:bg-golden group-hover:text-chocolate',
    hoverShadow: 'group-hover:shadow-golden/20',
    hoverBorder: 'group-hover:border-golden/30',
    gradient: 'from-golden/5'
  },
  chocolate: {
    bgLight: 'bg-chocolate/5',
    text: 'text-chocolate',
    hoverBg: 'group-hover:bg-chocolate group-hover:text-white',
    hoverShadow: 'group-hover:shadow-chocolate/20',
    hoverBorder: 'group-hover:border-chocolate/30',
    gradient: 'from-chocolate/5'
  }
}

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[550px] bg-golden/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-cream/30 rounded-full blur-[90px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            What Makes Us <span className="text-brand-red">Special</span>
          </h2>
          <p className="text-chocolate/75 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Discover why families and retail partners across India trust Dairy Trends for their sweetest moments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const LucideIcon = feature.lucide
            const styles = themeStyles[feature.theme as keyof typeof themeStyles]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className="group cursor-pointer"
              >
                <div className={`relative h-full flex flex-col p-6 lg:p-8 rounded-[32px] bg-white border border-chocolate/5 transition-all duration-500 hover:shadow-2xl ${styles.hoverBorder} overflow-hidden`}>
                  {/* Subtle Background Glow on Hover */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${styles.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} aria-hidden="true" />
                  
                  <div className="relative z-10 flex flex-col items-start h-full">
                    {/* Icon Container */}
                    <div className={`shrink-0 mb-6 w-14 h-14 rounded-2xl ${styles.bgLight} ${styles.text} ${styles.hoverBg} flex items-center justify-center shadow-sm ${styles.hoverShadow} transition-all duration-300 ease-out`} aria-hidden="true">
                      <LucideIcon className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    </div>

                    <h3 className="font-extrabold text-chocolate text-lg lg:text-xl mb-3 leading-snug group-hover:text-brand-red transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-chocolate/65 text-sm lg:text-base leading-relaxed transition-colors duration-300 group-hover:text-chocolate/85">
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-gradient-to-r from-cream/20 to-cream/10 backdrop-blur-md border border-chocolate/5 px-8 py-5 rounded-[24px] shadow-sm">
            <p className="text-chocolate/85 text-sm sm:text-base font-bold">
              Ready to partner with us or start a franchise?
            </p>
            <motion.button
              type="button"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-red hover:bg-brand-red-dark text-white px-6 py-3 rounded-full text-sm font-extrabold shadow-md hover:shadow-lg transition-all btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Franchise Enquiry
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
