'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Milk, Award, ShieldCheck, Heart } from 'lucide-react'
import Image from 'next/image'

const aboutFeatures = [
  { 
    icon: Milk, 
    title: 'Fresh & Creamy', 
    description: 'Made with 100% fresh dairy',
    color: 'bg-brand-red'
  },
  { 
    icon: Award, 
    title: 'Quality Ingredients', 
    description: 'Only the finest ingredients used',
    color: 'bg-golden'
  },
  { 
    icon: ShieldCheck, 
    title: 'Hygienic Preparation', 
    description: 'FSSAI certified production',
    color: 'bg-brand-red-dark'
  },
  { 
    icon: Heart, 
    title: 'Loved by Families', 
    description: 'Trusted by thousands of families',
    color: 'bg-chocolate-mid'
  }
]

export default function AboutSection({ priority = false }: { priority?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-cream/20">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/ice-cream images/DSC09384 Medium.png"
                  alt="A delicious Dairy Trends ice cream being served"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                  priority={priority}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-red/30 to-transparent pointer-events-none" aria-hidden="true" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 lg:-right-10"
              >
                <motion.div 
                  className="glass p-6 rounded-2xl shadow-xl border border-chocolate/10"
                >
                  <div className="text-center">
                    <span className="text-4xl font-bold text-brand-red">10+</span>
                    <p className="text-sm text-chocolate/70 font-medium">Years of Trust</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Small Floating Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="absolute -top-6 -left-6 lg:-left-10"
              >
                 <motion.div
                  className="w-28 h-28 lg:w-36 lg:h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white relative"
                >
                  <Image
                    src="/ice-cream images/DSC09037 Medium.png"
                    alt="Close up of an ice cream cone"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-4"
            >
              Our Story
            </motion.span>

            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              About <span className="text-brand-red">Dairy Trends</span>
            </h2>

            <p className="text-lg text-chocolate/70 mb-6 leading-relaxed">
              Dairy Trends Ice Creams is created to deliver fresh, creamy, and delicious 
              ice creams for every family, celebration, and sweet moment. Our focus is 
              quality, taste, hygiene, and happiness in every scoop.
            </p>

            <p className="text-chocolate/60 mb-8 leading-relaxed">
              From our humble beginnings to becoming a beloved brand, we have always 
              prioritized using the finest ingredients and maintaining the highest 
              standards of quality. Every scoop of Dairy Trends is crafted with love 
              and dedication to bring you the ultimate ice cream experience.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {aboutFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`${feature.color} w-10 h-10 rounded-xl flex items-center justify-center mb-3`} aria-hidden="true">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-chocolate mb-1">{feature.title}</h3>
                  <p className="text-sm text-chocolate/60">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
