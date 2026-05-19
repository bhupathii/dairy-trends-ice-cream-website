'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/data'

interface TiltCardProps {
  product: typeof products[0]
  index: number
  isInView: boolean
}

function TiltCard({ product, index, isInView }: TiltCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="relative group focus-within:ring-4 focus-within:ring-brand-red/50 rounded-3xl h-full"
    >
      <div 
        className="glass rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col bg-white"
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-white/50 shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          
          {product.badge && (
            <div className="absolute top-4 right-4 bg-golden text-chocolate text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
              {product.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow bg-white/40">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-bold text-chocolate text-xl leading-tight">{product.name}</h3>
          </div>
          <p className="text-chocolate/60 text-sm mb-4 flex-grow">{product.description}</p>
          
          <div className="flex items-center justify-between mt-auto">
            <span className="text-sm font-medium text-chocolate/80 bg-white/50 px-3 py-1 rounded-full">
              {product.size}
            </span>
            <motion.button
              type="button"
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-brand-red font-semibold group-focus-visible:outline-brand-red group-focus-visible:outline-2 rounded"
              aria-label={`Explore ${product.name}`}
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('All')

  // Derive unique categories from products
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))].sort()

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory)

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
          className="text-center mb-8 lg:mb-12"
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

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-brand-red ${
                activeCategory === category
                  ? 'bg-brand-red text-white shadow-md'
                  : 'bg-white/50 text-chocolate hover:bg-white/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => (
              <TiltCard 
                key={product.name} 
                product={product} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 text-chocolate/60">
            No products found in this category.
          </div>
        )}
      </div>
    </section>
  )
}

