import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import ProductsSection from '@/components/products-section'

export const metadata = {
  title: 'Our Products | Dairy Trends Ice Creams',
  description: 'Explore the full range of Dairy Trends premium ice creams.',
}

export default function ProductsPage() {
  return (
    <main className="overflow-x-hidden pt-20 bg-white">
      <Navbar />
      <ProductsSection limit={undefined} showViewAll={false} className="pt-4 lg:pt-8" />
      <Footer />
    </main>
  )
}
