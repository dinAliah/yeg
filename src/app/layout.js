import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '@/components/Header'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from "@/components/Footer.jsx"


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
  icons: {
    icon: '/yeglogowebsite.svg',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'YEG Academy | Career & Education Platform',
    description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
    images: ['https://www.yegmy.com/yeglogowebsite.svg'],
  },
  twitter: {
    title: 'YEG Academy | Career & Education Platform',
    description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
    images: ['https://www.yegmy.com/yeglogowebsite.svg'],
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'IpMLN0O17LzsxofVFp5HDnRje-CPwKC5j1QK05iBcdM',
  },
  charset: 'utf-8',
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
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
        
        {/* <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'YEG Academy',
            url: 'https://www.yegmy.com',
            description: metadata.description,
            logo: 'https://www.yegmy.com/yeglogowebsite.svg',
            sameAs: [
              'https://www.facebook.com/YEGAcademy',
              'https://www.instagram.com/yegacademy.official/',
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+603-6143 5073',
              contactType: 'Customer Service',
              areaServed: 'MY',
              availableLanguage: 'English',
            },
          })}
        </Script>       */}
      <Navbar/>
      <Sidebar/>
      <main>{children}</main>
      <Analytics />
      <Footer/>
      </body>
    </html>
  )
}

