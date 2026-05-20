'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProductsSectionProps {
  limit?: number
  showViewAll?: boolean
  className?: string
}

interface ProductCardProps {
  product: typeof products[0]
  index: number
  isInView: boolean
  static?: boolean
}

const categoryEmojis: Record<string, string> = {
  'All': '✨',
  'Cones': '🍦',
  'Cups': '🍨',
  'Tubs': '🍧',
  'Kulfis & Sticks': '🍢',
  'Sundaes': '🍮',
  'Specialities': '🍰'
}

function ProductCard({ product, index, isInView, static: isStatic }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      layout={!isStatic}
      initial={{ opacity: 0, y: isStatic ? 0 : 35, scale: isStatic ? 1 : 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={isStatic ? undefined : { opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: 'easeOut' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="product-card rounded-3xl overflow-hidden flex flex-col h-full group bg-white border border-chocolate/5 hover:border-brand-red/20 shadow-sm hover:shadow-xl transition-all duration-300"
      aria-label={product.name}
    >
      {/* Visual Image container with brand accent */}
      <div
        className="relative overflow-hidden bg-cream-deep/40 shrink-0"
        style={{ height: '210px' }}
      >
        <motion.div
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
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

        {/* Soft layout shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

        {/* Brand Badge */}
        {product.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-brand-red text-white text-[10px] uppercase font-black px-2.5 py-1.5 rounded-full shadow-md tracking-wider"
          >
            <Tag className="w-2.5 h-2.5" aria-hidden="true" />
            {product.badge}
          </motion.div>
        )}

        {/* Size Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-white/95 backdrop-blur-sm text-chocolate text-xs font-black px-3 py-1 rounded-xl shadow-sm border border-chocolate/5">
          {product.size}
        </div>
      </div>

      {/* Body Details */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-2.5">
          <span className="text-[10px] font-black text-brand-red-dark uppercase tracking-widest bg-brand-red/5 px-2.5 py-1 rounded-md border border-brand-red/10">
            {categoryEmojis[product.category] || '🍦'} {product.category}
          </span>
        </div>
        <h3 className="font-extrabold text-chocolate text-lg leading-snug mb-2 group-hover:text-brand-red transition-colors">
          {product.name}
        </h3>
        <p className="text-chocolate/65 text-sm leading-relaxed mb-0 flex-grow line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.article>
  )
}

export default function ProductsSection({ limit = 8, showViewAll = true, className }: ProductsSectionProps = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category))).sort()]

  const filteredProducts =
    activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts

  return (
    <section id="products" className={cn("relative py-24 lg:py-32 overflow-hidden bg-cream/40", className)}>
      {/* Header Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
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
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-chocolate mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Explore Our <span className="text-brand-red">Sweet Range</span>
          </h2>
          <p className="text-chocolate/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            From classic cups to rich waffle cones and traditional kulfis — discover our 27+ premium frozen treats crafted for every sweet craving.
          </p>
        </motion.div>

        {/* Visual Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="relative mb-12"
        >
          {/* Fades for mobile scroll */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-cream/40 to-transparent z-10 sm:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-cream/40 to-transparent z-10 sm:hidden" />

          <div
            role="group"
            aria-label="Filter products by category"
            className="flex gap-2 overflow-x-auto sm:overflow-x-visible no-scrollbar snap-x snap-mandatory px-1 sm:px-0 sm:flex-wrap sm:justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`
                  snap-start shrink-0 flex items-center gap-2
                  px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap
                  transition-all duration-200 focus-visible:outline-brand-red focus-visible:outline-2
                  ${
                    activeCategory === category
                      ? 'bg-brand-red text-white shadow-md shadow-brand-red/25 border-2 border-transparent'
                      : 'bg-white text-chocolate/75 hover:text-chocolate border-2 border-chocolate/5 hover:border-brand-red/35'
                  }
                `}
                aria-pressed={activeCategory === category}
              >
                <span>{categoryEmojis[category] || '🍦'}</span>
                <span>{category}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MOBILE scroll rail */}
      <div className="sm:hidden relative">
        {filteredProducts.length > 0 ? (
          <motion.div
            key={activeCategory + '-mobile'}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-6 pt-1"
          >
            {displayedProducts.map((product, index) => (
              <div
                key={product.name}
                className="snap-start shrink-0 w-[78vw] max-w-[290px]"
              >
                <ProductCard
                  product={product}
                  index={index}
                  isInView={isInView}
                  static
                />
              </div>
            ))}
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

        {/* Page Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-2" aria-hidden="true">
          {filteredProducts.slice(0, Math.min(filteredProducts.length, 5)).map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full bg-chocolate/20 ${i === 0 ? 'w-4 bg-brand-red/40' : 'w-1.5'}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP grid */}
      <div className="hidden sm:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, index) => (
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

      {/* Counter & View All */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p layout className="text-center text-xs font-bold text-chocolate/50 mt-8">
          Showing {displayedProducts.length} of {filteredProducts.length} premium products
        </motion.p>
        
        {showViewAll && filteredProducts.length > (limit || 0) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex justify-center"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3.5 rounded-2xl font-bold text-base shadow-md btn-glow focus-visible:outline-brand-red focus-visible:outline-2"
            >
              View Full Range ({filteredProducts.length} Items)
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}
