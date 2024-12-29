import Head from 'next/head';
import React from 'react'

const Clarity = ({ children }) => (
  <>
  <Head>
            {/* Include Clarity script */}
            <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "lgb910v0q6");
                    `,
                }}
            />
        </Head>
        {children}
      </>
);

export default Clarity