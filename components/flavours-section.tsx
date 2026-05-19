'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShoppingCart, Eye } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { flavours } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export default function FlavoursSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="flavours" className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pink/20 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-golden/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" aria-hidden="true" />

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
            Popular Choices
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Our <span className="text-brand-red">Delicious</span> Flavours
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg">
            Explore our handcrafted ice cream flavours made with the finest ingredients 
            for a taste that brings pure happiness.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {flavours.map((flavour, index) => (
            <motion.div
              key={flavour.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  
                  {/* Hover Actions */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-brand-red text-white py-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1 focus-visible:outline-white focus-visible:outline-2"
                      aria-label={`Add ${flavour.name} to cart`}
                    >
                      <ShoppingCart className="w-4 h-4" aria-hidden="true" />
                      Add
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white/90 text-chocolate p-2 rounded-full focus-visible:outline-white focus-visible:outline-2 touch-target"
                      aria-label={`View details of ${flavour.name}`}
                    >
                      <Eye className="w-4 h-4" aria-hidden="true" />
                    </motion.button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-chocolate text-lg">{flavour.name}</h3>
                    <span 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-md flex-shrink-0"
                      style={{ backgroundColor: flavour.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-chocolate/60 text-sm mb-3 line-clamp-2">{flavour.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-brand-red">{flavour.price}</span>
                    <span className="text-xs text-chocolate/50">per scoop</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 1.5 },
              640: { slidesPerView: 2.2 }
            }}
            className="pb-12"
          >
            {flavours.map((flavour) => (
               <SwiperSlide key={flavour.id}>
                <div className="glass rounded-3xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={flavour.image}
                      alt={flavour.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 80vw, 50vw"
                    />
                  </div>
                  <div className="p-4 flex flex-col grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-chocolate">{flavour.name}</h3>
                      <span 
                        className="w-3 h-3 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: flavour.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-chocolate/60 text-sm mb-3 line-clamp-2">{flavour.description}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-lg font-bold text-brand-red">{flavour.price}</span>
                      <motion.button
                        type="button"
                        whileTap={{ scale: 0.9 }}
                        className="bg-brand-red text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1 focus-visible:outline-brand-red focus-visible:outline-2"
                        aria-label={`Add ${flavour.name} to cart`}
                      >
                        <ShoppingCart className="w-3 h-3" aria-hidden="true" />
                        Add
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-chocolate text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target"
          >
            View All Flavours
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
