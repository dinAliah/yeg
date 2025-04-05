import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Script from 'next/script';
import Header from '@/components/Header'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'


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
        <script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199758154363864`}
        crossOrigin="anonymous">
        </script>
        <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
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
        </Script>      
      <Navbar/>
      <Sidebar/>
      <main>{children}</main>
      <Analytics />
      </body>
    </html>
  )
}

