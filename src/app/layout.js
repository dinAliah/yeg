import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: 'YEG Academy | Career & Education Platform',
  description: 'YEG Academy offers career guidance and industry-focused education programs for your future success in Malaysia.',
  rel:"icon",
  href:"./yeglogowebsite.svg",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="https://www.yegmy.com/yeglogowebsite.svg" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="https://www.yegmy.com/yeglogowebsite.svg" />
          <meta name="robots" content="index, follow" />
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="google-site-verification" content="IpMLN0O17LzsxofVFp5HDnRje-CPwKC5j1QK05iBcdM" />
          <link rel="icon" href="./yeglogowebsite.svg" sizes="20x20" type="image/svg+xml" />

          {/* gtag.js */}
          <Script 
            async 
            src="https://www.googletagmanager.com/gtag/js?id=G-QCJEQC9T3Z"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-QCJEQC9T3Z');
            `}
          </Script>
          



          <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199758154363864`}
          crossOrigin="anonymous">
          </script>

          <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "YEG Academy",
              "url": "https://www.yegmy.com",
              "description": metadata.description,
              "logo": "https://www.yegmy.com/yeglogowebsite.svg",
              "sameAs": [
                "https://www.facebook.com/YEGAcademy",
                "https://www.instagram.com/yegacademy.official/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+603-6143 5073",
                "contactType": "Customer Service",
                "areaServed": "MY",
                "availableLanguage": "English"
              }
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.yegmy.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Borang YEG",
                  "item": "https://www.yegmy.com/borangyeg"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Sijil Profesional Haji Umrah",
                  "item": "https://www.yegmy.com/kursuskerjaya/sphu"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Misa Oil and Gas",
                  "item": "https://www.yegmy.com/kursuskerjaya/misa/oilandgas"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Article Yeg Academy",
                  "item": "https://www.yegmy.com/article"
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className}>
      <header>
        <nav className="hidden lg:block"><Navbar/></nav>
        <nav className="lg:hidden"><Sidebar/></nav>
      </header>
      <main>{children}</main>
      <Analytics />
      </body>
    </html>
  )
}

