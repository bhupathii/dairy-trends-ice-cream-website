import type { Metadata } from 'next'
import { Poppins, Baloo_2 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const baloo = Baloo_2({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo'
})

export const metadata: Metadata = {
  title: 'Dairy Trends Ice Creams | Taste the Trend of Happiness',
  description: 'Fresh, creamy, and delicious ice creams made to bring joy in every scoop. Premium quality ice cream for families, celebrations, and sweet moments.',
  keywords: ['ice cream', 'dairy', 'frozen desserts', 'ice cream cones', 'family packs', 'sundaes'],
  metadataBase: new URL('https://dairytrends.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' }
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Dairy Trends Ice Creams | Taste the Trend of Happiness',
    description: 'Fresh, creamy, and delicious ice creams made to bring joy in every scoop. Premium quality ice cream for families, celebrations, and sweet moments.',
    url: 'https://dairytrends.in',
    siteName: 'Dairy Trends Ice Creams',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/images/dairy-trends-logo.png',
        width: 800,
        height: 600,
        alt: 'Dairy Trends Ice Creams Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dairy Trends Ice Creams | Taste the Trend of Happiness',
    description: 'Fresh, creamy, and delicious ice creams made to bring joy in every scoop. Premium quality ice cream for families, celebrations, and sweet moments.',
    images: ['/images/dairy-trends-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${baloo.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden bg-background text-foreground min-h-screen">
        {/* Skip to main content link for keyboard accessibility */}
        <a href="#main-content" className="visually-hidden focus-visible:not-sr-only focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[100] focus-visible:bg-brand-red focus-visible:text-white focus-visible:p-3 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-red/40 shadow-lg font-medium">
          Skip to main content
        </a>
        <div id="main-content">
          {children}
        </div>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
