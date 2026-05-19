'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/data'

interface ProductCardProps {
  product: typeof products[0]
  index: number
  isInView: boolean
}

function ProductCard({ product, index, isInView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="product-card rounded-3xl overflow-hidden flex flex-col h-full group"
      aria-label={product.name}
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-cream to-pink/30 shrink-0" style={{ height: '220px' }}>
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-3 left-3 z-10 flex items-center gap-1 bg-golden text-chocolate text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md"
          >
            <Tag className="w-2.5 h-2.5" aria-hidden="true" />
            {product.badge}
          </motion.div>
        )}

        {/* Category tag */}
        <div className="absolute bottom-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-chocolate/70 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {product.size}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1">
          <span className="text-[11px] font-semibold text-brand-red/70 uppercase tracking-widest">{product.category}</span>
        </div>
        <h3 className="font-bold text-chocolate text-lg leading-snug mb-2">{product.name}</h3>
        <p className="text-chocolate/55 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">{product.description}</p>

        <motion.button
          type="button"
          whileHover={{ x: 2 }}
          whileTap={{ scale: 0.97 }}
          className="self-start flex items-center gap-2 bg-brand-red/8 hover:bg-brand-red text-brand-red hover:text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-250 focus-visible:outline-brand-red focus-visible:outline-2"
          aria-label={`Explore ${product.name}`}
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </motion.button>
      </div>
    </motion.article>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category))).sort()]

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink/30 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-golden/12 rounded-full blur-[70px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 lg:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="section-badge mb-5 mx-auto w-fit"
          >
            Our Products
          </motion.div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-fredoka)' }}
          >
            Explore Our{' '}
            <span className="text-gradient-brand">Range</span>
          </h2>
          <p className="text-chocolate/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            From classic cups to indulgent sundaes — the perfect frozen treat for every moment.
          </p>
        </motion.div>

        {/* Category filter — animated pill buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10 lg:mb-14"
          role="group"
          aria-label="Filter products by category"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 focus-visible:outline-brand-red focus-visible:outline-2 ${
                activeCategory === category
                  ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                  : 'bg-white/70 text-chocolate/70 hover:text-chocolate border border-chocolate/10 hover:border-brand-red/20 hover:bg-white'
              }`}
              aria-pressed={activeCategory === category}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.name}
                product={product}
                index={index}
                isInView={isInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-chocolate/50"
          >
            <p className="text-lg">No products found in this category.</p>
          </motion.div>
        )}

        {/* Result count */}
        <motion.p
          layout
          className="text-center text-sm text-chocolate/40 mt-6"
        >
          Showing {filteredProducts.length} of {products.length} products
        </motion.p>
      </div>
    </section>
  )
}
