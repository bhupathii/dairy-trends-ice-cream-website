'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { testimonials } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white" aria-labelledby="testimonials-heading">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="section-badge mb-5 mx-auto w-fit"
          >
            Customer Love
          </motion.div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-baloo)' }}
          >
            What Our{' '}
            <span className="text-brand-red">Customers</span> Say
          </h2>
          <p className="text-chocolate/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Don&apos;t just take our word for it — here&apos;s what our happy customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            grabCursor
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.08 + 0.3 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="product-card rounded-3xl p-6 lg:p-7 h-full flex flex-col"
                >
                  {/* Stars */}
                  <div
                    className="flex gap-1 mb-4"
                    aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-golden text-golden' : 'fill-chocolate/10 text-chocolate/20'}`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-chocolate/75 text-sm leading-relaxed mb-6 flex-grow italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-chocolate/8">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-red/20 shrink-0">
                      <Image
                        src={testimonial.avatar}
                        alt={`Photo of ${testimonial.name}`}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-chocolate leading-tight">{testimonial.name}</p>
                      <p className="text-xs text-chocolate/50 mt-0.5">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Global Swiper pagination overrides */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: var(--chocolate-brown);
          opacity: 0.2;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: var(--brand-red);
          opacity: 1;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}
