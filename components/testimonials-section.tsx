'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useAnimationFrame } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/data'

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className="rounded-[28px] p-6 md:p-8 flex flex-col justify-between bg-white border border-chocolate/5 hover:border-brand-red/20 shadow-sm hover:shadow-xl hover:shadow-brand-red/5 transition-all duration-300 w-[85vw] sm:w-[360px] md:w-[400px] shrink-0 h-[250px] md:h-[270px] select-none"
    >
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-golden text-golden"
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-chocolate/80 text-sm md:text-base leading-relaxed italic line-clamp-4">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author details */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-chocolate/5 mt-4">
        {/* Initials Circle */}
        <div className="w-10 h-10 rounded-full bg-brand-red/5 border border-brand-red/10 flex items-center justify-center text-brand-red font-black text-sm shrink-0">
          {initials}
        </div>
        <div>
          <p className="text-sm font-extrabold text-chocolate leading-tight">{testimonial.name}</p>
          <p className="text-xs text-chocolate/50 font-semibold mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  // Double the testimonials array to make infinite scrolling seamless
  const doubledTestimonials = [...testimonials, ...testimonials]

  const x = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((time, delta) => {
    // Pause animation when user is hovering or dragging
    if (isHovered || isDragging) return

    const speed = 0.035 // pixels per millisecond
    const currentX = x.get()
    
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth
      const halfWidth = containerWidth / 2
      
      let newX = currentX - speed * delta
      if (newX <= -halfWidth) {
        newX = newX + halfWidth
      }
      x.set(newX)
    }
  })

  const handleDragStart = () => {
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  const handleDrag = () => {
    const currentX = x.get()
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth
      const halfWidth = containerWidth / 2

      if (currentX <= -halfWidth) {
        x.set(currentX + halfWidth)
      } else if (currentX > 0) {
        x.set(currentX - halfWidth)
      }
    }
  }

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-white" aria-labelledby="testimonials-heading">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-golden/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center mb-12 lg:mb-16"
        >
          <h2
            id="testimonials-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Partner & <span className="text-brand-red">Customer</span> Feedback
          </h2>
          <p className="text-chocolate/75 max-w-2xl text-base sm:text-lg leading-relaxed">
            Read how our retail partners, local distributors, and families in South India experience the rich, milky creaminess of Dairy Trends Ice Creams.
          </p>
        </motion.div>
      </div>

      {/* Infinite Testimonial Marquee Slider */}
      <div 
        className="relative w-full overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Side Fade Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="max-w-[100vw] overflow-visible">
          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDrag={handleDrag}
            className="flex gap-6 cursor-grab active:cursor-grabbing w-max px-6"
          >
            {doubledTestimonials.map((testimonial, idx) => (
              <TestimonialCard 
                key={`${testimonial.id}-${idx}`} 
                testimonial={testimonial} 
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
