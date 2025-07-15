// app/layout.tsx
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
  icons: {
    icon: '/yeglogowebsite.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QCJEQC9T3Z"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QCJEQC9T3Z', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* App Layout */}
        <Navbar />
        <Sidebar />
        <main>{children}</main>
        <Analytics />
        <Footer/>
      </body>
    </html>
  )
}
