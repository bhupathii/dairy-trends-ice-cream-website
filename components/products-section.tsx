'use client'

import { useState } from 'react'
import { Tag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { products } from '@/lib/data'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProductsSectionProps {
  limit?: number
  showViewAll?: boolean
  className?: string
  isPageHeader?: boolean
}

interface ProductCardProps {
  product: typeof products[0]
  headingTag?: 'h2' | 'h3'
}

const categoryDisplayNames: Record<string, string> = {
  'All': 'All',
  'Cones': 'Cones',
  'Cups': 'Cups',
  'Kulfis & Sticks': 'Kulfi & Sticks',
  'Specialities': 'Specialities',
  'Sundaes': 'Sundaes',
  'Tubs': 'Tubs'
}

function ProductCard({ product, headingTag = 'h3' }: ProductCardProps) {
  return (
    <article
      className="product-card rounded-[32px] overflow-hidden flex flex-col h-full bg-white border border-chocolate/5 shadow-sm"
      aria-label={product.name}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden bg-cream-deep/20 shrink-0"
        style={{ height: '230px' }}
      >
        <div className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Soft layout shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 via-transparent to-transparent pointer-events-none opacity-50" />

        {/* Brand Badge */}
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 bg-brand-red text-white text-[10px] uppercase font-black px-3.5 py-2 rounded-full shadow-sm tracking-wider border border-white/10">
            <Tag className="w-3 h-3" aria-hidden="true" />
            {product.badge}
          </div>
        )}

        {/* Size Badge */}
        <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-chocolate text-xs font-extrabold px-3.5 py-1.5 rounded-xl border border-chocolate/5 shadow-sm">
          {product.size}
        </div>
      </div>

      {/* Body Details */}
      <div className="p-6 flex flex-col flex-grow bg-white">
        <div className="mb-3.5">
          <span className="text-[10px] font-extrabold text-brand-red-dark uppercase tracking-widest bg-brand-red/5 px-3 py-1.5 rounded-lg border border-brand-red/10">
            {categoryDisplayNames[product.category] || product.category}
          </span>
        </div>
        {headingTag === 'h2' ? (
          <h2 className="font-extrabold text-chocolate text-lg lg:text-xl leading-snug mb-3">
            {product.name}
          </h2>
        ) : (
          <h3 className="font-extrabold text-chocolate text-lg lg:text-xl leading-snug mb-3">
            {product.name}
          </h3>
        )}
        <p className="text-chocolate/65 text-sm lg:text-base leading-relaxed mb-0 flex-grow line-clamp-2">
          {product.description}
        </p>
      </div>
    </article>
  )
}

export default function ProductsSection({ limit = 8, showViewAll = true, className, isPageHeader = false }: ProductsSectionProps = {}) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category))).sort()]

  const filteredProducts =
    activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory)

  const displayedProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts

  return (
    <section id="products" className={cn("relative py-24 lg:py-32 overflow-hidden bg-cream/40", className)}>
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/4" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-golden/10 rounded-full blur-[140px] pointer-events-none translate-x-1/4" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-brand-red-light/5 rounded-full blur-[110px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      {/* Header Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {isPageHeader ? (
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-chocolate mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore Our <span className="text-brand-red">Sweet Range</span>
            </h1>
          ) : (
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-chocolate mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Explore Our <span className="text-brand-red">Sweet Range</span>
            </h2>
          )}
          <p className="text-chocolate/70 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            From classic cups to rich waffle cones and traditional kulfis — discover our 27+ premium frozen treats crafted for every sweet craving.
          </p>
        </div>

        {/* Visual Category Filter (Segmented Control Track) */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          <div
            role="group"
            aria-label="Filter products by category"
            className="bg-cream/60 border border-chocolate/5 p-1.5 rounded-[20px] flex flex-wrap gap-1 justify-center shadow-sm"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "relative px-5 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap border border-transparent transition-colors duration-200 focus-visible:outline-brand-red focus-visible:outline-2",
                    isActive
                      ? "bg-brand-red text-white shadow-md shadow-brand-red/10"
                      : "text-chocolate/80 hover:text-brand-red hover:bg-brand-red/5 hover:border-brand-red/20 bg-white/40"
                  )}
                  aria-pressed={isActive}
                >
                  {/* Text Wrapper */}
                  <span className="relative z-10 block">
                    {categoryDisplayNames[category] || category}
                  </span>

                  {/* Subtle active yellow dot at bottom center */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-golden z-10" />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* MOBILE scroll rail */}
      <div className="sm:hidden relative">
        {filteredProducts.length > 0 ? (
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-6 pt-1">
            {displayedProducts.map((product) => (
              <div
                key={product.name}
                className="snap-start shrink-0 w-[78vw] max-w-[290px]"
              >
                <ProductCard
                  product={product}
                  headingTag={isPageHeader ? 'h2' : 'h3'}
                />
              </div>
            ))}
            <div className="shrink-0 w-4" aria-hidden="true" />
          </div>
        ) : (
          <div className="text-center py-16 text-chocolate/50 px-4">
            <p className="text-lg">No products found in this category.</p>
          </div>
        )}

        {/* Page Dots indicator */}
        <div className="flex justify-center gap-1.5 mt-2" aria-hidden="true">
          {filteredProducts.slice(0, Math.min(filteredProducts.length, 5)).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full bg-chocolate/20 transition-all duration-300",
                i === 0 ? "w-4 bg-brand-red/40" : "w-1.5"
              )}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP grid */}
      <div className="hidden sm:block relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              headingTag={isPageHeader ? 'h2' : 'h3'}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-chocolate/50">
            <p className="text-lg">No products found in this category.</p>
          </div>
        )}
      </div>

      {/* Counter & View All */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold text-chocolate/50 mt-8">
          Showing {displayedProducts.length} of {filteredProducts.length} premium products
        </p>
        
        {showViewAll && filteredProducts.length > (limit || 0) && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-lg hover:shadow-brand-red/20 transition-all duration-300 transform hover:-translate-y-1 btn-glow focus-visible:outline-brand-red focus-visible:outline-2"
            >
              View Full Range ({filteredProducts.length} Items)
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
