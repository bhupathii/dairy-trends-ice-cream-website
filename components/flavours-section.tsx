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
    <section id="flavours" className="relative py-24 lg:py-32 overflow-hidden bg-white">
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 right-10 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-golden/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Popular <span className="text-brand-red">Dairy Trends</span> Picks
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
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
              className="cursor-pointer h-full"
              onClick={handleScrollToProducts}
            >
              <div className="product-card rounded-[32px] overflow-hidden shadow-md border border-chocolate/5 flex flex-col h-full bg-white relative">
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-cream shrink-0">
                  <Image
                    src={flavour.image}
                    alt={flavour.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent pointer-events-none opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 bg-white flex flex-col flex-grow">
                  <h3 className="font-extrabold text-chocolate text-lg lg:text-xl mb-2">{flavour.name}</h3>
                  <p className="text-chocolate/65 text-sm lg:text-base leading-relaxed line-clamp-2">{flavour.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="lg:hidden pb-12 overflow-hidden">
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
            className="pt-4 pb-12 px-4 flavours-swiper -mx-4"
          >
            {flavours.map((flavour) => (
              <SwiperSlide key={flavour.id}>
                <div 
                  className="glass rounded-[32px] overflow-hidden shadow-md h-full flex flex-col cursor-pointer border border-chocolate/5 bg-white"
                  onClick={handleScrollToProducts}
                >
                  <div className="relative h-48 overflow-hidden shrink-0 bg-cream">
                    <Image
                      src={flavour.image}
                      alt={flavour.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent pointer-events-none opacity-50" />
                  </div>
                  <div className="p-5 bg-white flex flex-col grow">
                    <h3 className="font-extrabold text-chocolate text-lg mb-2">{flavour.name}</h3>
                    <p className="text-chocolate/65 text-sm leading-relaxed line-clamp-2">{flavour.description}</p>
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
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-2xl font-extrabold shadow-lg hover:shadow-brand-red/20 transition-all duration-300 transform btn-glow focus-visible:outline-brand-red focus-visible:outline-2 touch-target"
          >
            View Full Menu Range
          </motion.button>
        </motion.div>
      </div>

      {/* Global Swiper styles */}
      <style jsx global>{`
        .flavours-swiper .swiper-wrapper {
          align-items: stretch;
        }
        .flavours-swiper .swiper-slide {
          height: auto !important;
          display: flex;
        }
        .flavours-swiper .swiper-pagination-bullet-active {
          background-color: var(--brand-red) !important;
        }
      `}</style>
    </section>
  )
}
