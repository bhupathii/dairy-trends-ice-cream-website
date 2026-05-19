'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/data'

interface TiltCardProps {
  product: typeof products[0]
  index: number
  isInView: boolean
}

function TiltCard({ product, index, isInView }: TiltCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative group focus-within:ring-4 focus-within:ring-brand-red/50 rounded-3xl"
    >
      <div 
        className="glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
        style={{ transform: 'translateZ(50px)' }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-white/50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-brand-red/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="p-5" style={{ transform: 'translateZ(30px)' }}>
          <h3 className="font-bold text-chocolate text-xl mb-2">{product.name}</h3>
          <p className="text-chocolate/60 text-sm mb-4">{product.description}</p>
          
          <motion.button
            type="button"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-brand-red font-semibold group focus-visible:outline-brand-red focus-visible:outline-2 rounded"
            aria-label={`Explore ${product.name}`}
          >
            <span>Explore</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </motion.button>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: isHovered 
              ? 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 55%, transparent 60%)'
              : 'none'
          }}
          aria-hidden="true"
        />
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="products" className="relative py-20 lg:py-28 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-golden/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

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
            className="inline-block bg-golden/20 text-chocolate px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Products
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Explore Our <span className="text-brand-red">Range</span>
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg">
            From classic cups to indulgent sundaes, we have the perfect frozen treat 
            for every occasion and craving.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ perspective: '1000px' }}
        >
          {products.map((product, index) => (
            <TiltCard 
              key={product.id} 
              product={product} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
