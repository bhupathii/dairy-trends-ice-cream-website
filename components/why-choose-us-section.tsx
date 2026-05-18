'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Shield, Palette, PartyPopper, BadgeIndianRupee, Leaf } from 'lucide-react'

const features = [
  { 
    icon: Sparkles, 
    title: 'Rich Creamy Taste', 
    description: 'Made with premium dairy for the creamiest texture',
    gradient: 'from-brand-red to-brand-red-dark'
  },
  { 
    icon: Shield, 
    title: 'Hygienic Preparation', 
    description: 'Strict quality control and clean production',
    gradient: 'from-green-500 to-green-600'
  },
  { 
    icon: Palette, 
    title: 'Many Flavour Choices', 
    description: '20+ unique flavours to satisfy every taste',
    gradient: 'from-purple-500 to-purple-600'
  },
  { 
    icon: PartyPopper, 
    title: 'Perfect for Parties', 
    description: 'Bulk orders and party packages available',
    gradient: 'from-golden to-orange-500'
  },
  { 
    icon: BadgeIndianRupee, 
    title: 'Affordable & Tasty', 
    description: 'Premium quality at pocket-friendly prices',
    gradient: 'from-blue-500 to-blue-600'
  },
  { 
    icon: Leaf, 
    title: 'Fresh Quality', 
    description: 'Made fresh daily with natural ingredients',
    gradient: 'from-emerald-500 to-emerald-600'
  }
]

export default function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-pink/20 to-cream" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-red/5 rounded-full blur-3xl" />

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
            Why Choose Us
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            What Makes Us <span className="text-brand-red">Special</span>
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg">
            Discover why families across India trust Dairy Trends for their 
            ice cream moments.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="glass p-6 lg:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}
                >
                  <feature.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="font-bold text-chocolate text-xl lg:text-2xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-chocolate/60 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-4`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 glass p-6 rounded-2xl shadow-lg">
            <p className="text-chocolate font-medium">
              Ready to taste the difference?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-red text-white px-6 py-3 rounded-full font-semibold btn-glow"
            >
              Order Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
