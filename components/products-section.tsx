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
  /** When rendered inside the mobile scroll rail, disable layout animation */
  static?: boolean
}

function ProductCard({ product, index, isInView, static: isStatic }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      layout={!isStatic}
      initial={{ opacity: 0, y: isStatic ? 0 : 40, scale: isStatic ? 1 : 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={isStatic ? undefined : { opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
      transition={{ delay: index * 0.04, duration: 0.45, ease: [0.16, 1, 0.3, 1] as never }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="product-card rounded-3xl overflow-hidden flex flex-col h-full group"
      aria-label={product.name}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-cream to-pink/30 shrink-0"
        style={{ height: '200px' }}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] as never }}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>

        {/* Bottom gradient */}
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

        {/* Size pill */}
        <div className="absolute bottom-3 right-3 z-10 bg-white/90 backdrop-blur-sm text-chocolate/70 text-[11px] font-semibold px-2.5 py-1 rounded-full">
          {product.size}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1">
          <span className="text-[11px] font-semibold text-brand-red/70 uppercase tracking-widest">
            {product.category}
          </span>
        </div>
        <h3 className="font-bold text-chocolate text-lg leading-snug mb-2">{product.name}</h3>
        <p className="text-chocolate/55 text-sm leading-relaxed mb-5 flex-grow line-clamp-2">
          {product.description}
        </p>

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

  const filteredProducts =
    activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="relative py-24 lg:py-32 overflow-hidden bg-background">
      {/* Background blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink/30 rounded-full blur-[80px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-golden/12 rounded-full blur-[70px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── Header (full bleed container) ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as never }}
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
            Explore Our <span className="text-gradient-brand">Range</span>
          </h2>
          <p className="text-chocolate/60 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            From classic cups to indulgent sundaes — the perfect frozen treat for every moment.
          </p>
        </motion.div>

        {/* ── Category Filter ── */}
        {/*
          Mobile: horizontally scrollable, no wrap, fade-out edges hint at overflow
          Desktop: wrapped, centred
        */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative mb-10 lg:mb-14"
        >
          {/* Left / right fade hints on mobile */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background to-transparent z-10 sm:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-background to-transparent z-10 sm:hidden"
            aria-hidden="true"
          />

          <div
            role="group"
            aria-label="Filter products by category"
            className={`
              /* Mobile: single-row horizontal scroll */
              flex gap-2 overflow-x-auto sm:overflow-x-visible no-scrollbar
              snap-x snap-mandatory
              px-1 sm:px-0
              /* Desktop: wrap + centre */
              sm:flex-wrap sm:justify-center
            `}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  snap-start shrink-0 flex items-center gap-2
                  px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap
                  transition-all duration-250 focus-visible:outline-brand-red focus-visible:outline-2
                  ${
                    activeCategory === category
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/25'
                      : 'bg-white/70 text-chocolate/70 hover:text-chocolate border border-chocolate/10 hover:border-brand-red/20 hover:bg-white'
                  }
                `}
                aria-pressed={activeCategory === category}
              >
                {activeCategory === category && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white inline-block" aria-hidden="true" />
                )}
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Products ── */}
      {/*
        Mobile  → horizontal snap-scroll rail (cards are fixed width, full bleed to screen edges)
        sm+     → standard responsive grid inside the max-w container
      */}

      {/* MOBILE scroll rail */}
      <div className="sm:hidden relative">
        {filteredProducts.length > 0 ? (
          <motion.div
            key={activeCategory + '-mobile'}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className={`
              flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar
              px-4 pb-4 pt-1
            `}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.name}
                className="snap-start shrink-0 w-[72vw] max-w-[280px]"
              >
                <ProductCard
                  product={product}
                  index={index}
                  isInView={isInView}
                  static
                />
              </div>
            ))}
            {/* Trailing spacer so the last card doesn't sit flush to the edge */}
            <div className="shrink-0 w-4" aria-hidden="true" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 text-chocolate/50 px-4"
          >
            <p className="text-lg">No products found in this category.</p>
          </motion.div>
        )}

        {/* Swipe hint dots — show only first load */}
        <div className="flex justify-center gap-1.5 mt-3" aria-hidden="true">
          {filteredProducts.slice(0, Math.min(filteredProducts.length, 5)).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full bg-chocolate/20 ${i === 0 ? 'w-4 bg-brand-red/40' : 'w-1.5'}`}
            />
          ))}
          {filteredProducts.length > 5 && (
            <div className="h-1.5 w-1.5 rounded-full bg-chocolate/10" />
          )}
        </div>
      </div>

      {/* DESKTOP grid — hidden on mobile */}
      <div className="hidden sm:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Result count */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p layout className="text-center text-sm text-chocolate/40 mt-6">
          Showing {filteredProducts.length} of {products.length} products
        </motion.p>
      </div>
    </section>
  )
}
