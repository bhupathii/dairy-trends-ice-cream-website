'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Eye } from 'lucide-react'
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
    <section id="flavours" className="relative py-20 lg:py-28 overflow-hidden bg-white">

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
            style={{ fontFamily: 'var(--font-baloo)' }}
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
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
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
