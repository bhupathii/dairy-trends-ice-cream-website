'use client'

import { useRef, useState, KeyboardEvent } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { galleryImages } from '@/lib/data'

export default function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, image: typeof galleryImages[0]) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelectedImage(image)
    }
  }

  return (
    <section id="gallery" className="relative py-20 lg:py-28 overflow-hidden bg-white">

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
            className="inline-block bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Gallery
          </motion.span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Sweet <span className="text-brand-red">Moments Gallery</span>
          </h2>
          <p className="text-chocolate/70 max-w-2xl mx-auto text-lg leading-relaxed">
            A premium visual tour of our delicious dairy products and authentic scoops. Spot your favorite dessert!
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="relative break-inside-avoid group"
            >
              <button
                type="button"
                onClick={() => setSelectedImage(image)}
                onKeyDown={(e) => handleKeyDown(e, image)}
                className="relative overflow-hidden rounded-2xl shadow-lg w-full text-left focus-visible:outline-brand-red focus-visible:outline-4 focus-visible:outline-offset-2"
                aria-label={`View full image: ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={index % 3 === 0 ? 400 : 300}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div 
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5 text-chocolate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-chocolate/90 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl z-10 focus-visible:outline-brand-red focus-visible:outline-4 focus-visible:outline-offset-2 touch-target"
              aria-label="Close image"
            >
              <X className="w-6 h-6 text-chocolate" aria-hidden="true" />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-chocolate to-transparent" aria-hidden="true">
                <p className="text-white font-semibold text-lg">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
