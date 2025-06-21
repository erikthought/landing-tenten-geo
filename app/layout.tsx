import type { Metadata } from 'next'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  variable: '--font-noto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tenten GEO - Generative Engine Optimization Services',
  description: 'Transform your SEO strategy with Tenten\'s advanced Generative Engine Optimization (GEO) services. Dominate AI search results and increase your online visibility.',
  keywords: 'GEO, Generative Engine Optimization, AI SEO, ChatGPT SEO, AI search optimization, Tenten.co',
  authors: [{ name: 'Tenten.co' }],
  creator: 'Tenten.co',
  publisher: 'Tenten.co',
  metadataBase: new URL('https://tenten.co'),
  openGraph: {
    title: 'Tenten GEO - Generative Engine Optimization Services',
    description: 'Transform your SEO strategy with Tenten\'s advanced Generative Engine Optimization (GEO) services. Dominate AI search results and increase your online visibility.',
    url: 'https://tenten.co/geo',
    siteName: 'Tenten.co',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tenten GEO - Generative Engine Optimization',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenten GEO - Generative Engine Optimization Services',
    description: 'Transform your SEO strategy with Tenten\'s advanced Generative Engine Optimization (GEO) services.',
    images: ['/og-image.png'],
    creator: '@tenten_co',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansTC.variable}`}>
      <body className="min-h-screen bg-background font-inter antialiased">
        <div id="skip-to-content">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-primary-foreground px-4 py-2 rounded-md"
          >
            Skip to main content
          </a>
        </div>
        {children}
      </body>
    </html>
  )
}
