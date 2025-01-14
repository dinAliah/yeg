import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar.jsx"
import Sidebar from "@/components/Sidebar.jsx"
import Script from 'next/script';
import Header from '@/components/Header'


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
      <Head>
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

          {/* tiktok pixel */}
          <script
          dangerouslySetInnerHTML={{
            __html: `
              !function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
                var e=ttq._i[t]=[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
                ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

                ttq.load('CU32N3RC77U5K61FFQIG');
                ttq.page();
              }(window, document, 'ttq');
            `,
          }}
        />




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
      </Head>
      <body className={inter.className}>
      <Header/>
      <main>{children}</main>
      <Analytics />
      </body>
    </html>
  )
}

