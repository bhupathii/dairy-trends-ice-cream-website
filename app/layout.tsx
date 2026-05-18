import type { Metadata } from 'next'
import { Poppins, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const fredoka = Fredoka({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka'
})

export const metadata: Metadata = {
  title: 'Dairy Trends Ice Creams | Taste the Trend of Happiness',
  description: 'Fresh, creamy, and delicious ice creams made to bring joy in every scoop. Premium quality ice cream for families, celebrations, and sweet moments.',
  keywords: ['ice cream', 'dairy', 'frozen desserts', 'ice cream cones', 'family packs', 'sundaes'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${fredoka.variable} bg-cream`} suppressHydrationWarning>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
