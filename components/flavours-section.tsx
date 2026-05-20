'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { flavours } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export default function FlavoursSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleScrollToProducts = () => {
    const element = document.querySelector('#products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
            className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-bold mb-4"
          >
            Popular Choices
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Popular <span className="text-brand-red">Dairy Trends</span> Picks
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Explore our handcrafted, signature ice cream flavours made with fresh milk 
            and premium ingredients that bring pure happiness in every scoop.
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
              whileHover={{ y: -6 }}
              className="group cursor-pointer"
              onClick={handleScrollToProducts}
            >
              <div className="product-card rounded-3xl overflow-hidden shadow-lg border border-chocolate/5 transition-all duration-300">
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-cream">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-extrabold text-chocolate text-lg group-hover:text-brand-red transition-colors">{flavour.name}</h3>
                    <span 
                      className="w-4 h-4 rounded-full border-2 border-white shadow-md flex-shrink-0"
                      style={{ backgroundColor: flavour.color }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-chocolate/60 text-sm mb-1 line-clamp-2 leading-relaxed">{flavour.description}</p>
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
                <div 
                  className="glass rounded-3xl overflow-hidden shadow-lg h-full flex flex-col cursor-pointer"
                  onClick={handleScrollToProducts}
                >
                  <div className="relative h-44 overflow-hidden shrink-0 bg-cream">
                    <Image
                      src={flavour.image}
                      alt={flavour.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white flex flex-col grow">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-chocolate">{flavour.name}</h3>
                      <span 
                        className="w-3 h-3 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: flavour.color }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-chocolate/60 text-sm line-clamp-2 leading-relaxed">{flavour.description}</p>
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
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <motion.button
            type="button"
            onClick={handleScrollToProducts}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-full font-bold shadow-lg btn-glow focus-visible:outline-brand-red focus-visible:outline-2 focus-visible:outline-offset-2 touch-target"
          >
            View Full Menu Range
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
