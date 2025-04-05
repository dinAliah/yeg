'use client'
import Script from 'next/script'


export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics Script */}
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
    </>
  )
}



{/* <meta charset="UTF-8"/>
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
      <link rel="icon" href="./yeglogowebsite.svg" sizes="20x20" type="image/svg+xml" /> */}


    //   <script
    //   async
    //   src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6199758154363864`}
    //   crossOrigin="anonymous">
    //   </script>