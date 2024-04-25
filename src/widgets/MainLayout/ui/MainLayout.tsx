/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Script from 'next/script';
import { FC } from 'react';

import { Footer } from 'widgets/Footer';
import { Header } from 'widgets/Header';

import './main-layout.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  metaTitle?: string;
  metaDescription?: string;
  url: string;
  ogTitle?: string;
  ogDescription?: string;
}

const MainLayout: FC<MainLayoutProps> = ({
  children,
  title = 'SuperDuperDB: Bring AI to your favorite database!',
  metaTitle = '',
  metaDescription = '',
  url,
  ogTitle,
  ogDescription,
}) => {
  const baseURL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://staging.d3rw8vtufdccov.amplifyapp.com'
  ).trim();
  const fullURL = baseURL + url;

  const OGImage = `${baseURL}/images/new_superduperdb_share_image.png`;

  return (
    <>
      {process.env.NEXT_PUBLIC_SCRIPTS_LOAD === 'true' && (
        <>
          <Script id="gtm-script1"
            dangerouslySetInnerHTML={{
              __html: `
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
           })(window,document,'script','dataLayer','GTM-5BXCZJTF');
         `,
            }}
          />
          <script
            async
            src="https://tag.clearbitscripts.com/v1/pk_0beed107418c6889a934fd8a58e1054e/tags.js"
            referrerPolicy="strict-origin-when-cross-origin"
          ></script>

          <Script id="gtag-script"
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-Q97F3ZHCQD"
          />
          <Script id="gtag-config" strategy="lazyOnload">
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Q97F3ZHCQD');
        `}
          </Script>
          <script dangerouslySetInnerHTML={{
            __html: `
        !function(t){if(window.ko)return;window.ko=[],["identify","track","removeListeners","open","on","off","qualify","ready"].forEach(function(t){ko[t] = function () { var n = [].slice.call(arguments); return n.unshift(t), ko.push(n), ko }});var n=document.createElement("script");n.async=!0,n.setAttribute("src","https://cdn.getkoala.com/v1/pk_92927e86e628c69d1ec3b7b4e887e6997bab/sdk.js"),(document.body || document.head).appendChild(n)}();
      `,
          }}
          />
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5BXCZJTF"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
        </>
      )}

      <Script src="https://buttons.github.io/buttons.js" strategy="afterInteractive" />
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7628f8" />
        <meta name="apple-mobile-web-app-title" content="SuperDuperDB" />
        <meta name="application-name" content="SuperDuperDB" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />

        {/* facebook */}

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SuperDuperDB" />
        <meta property="og:url" content={fullURL} />
        <meta property="og:title" content={ogTitle || metaTitle} />
        <meta property="og:description" content={ogDescription || metaDescription} />
        <meta property="og:image" content={OGImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={fullURL} />
        <meta property="twitter:url" content={fullURL} />
        <meta name="twitter:title" content={ogTitle || metaTitle} />
        <meta name="twitter:description" content={ogDescription || metaDescription} />
        <meta name="twitter:image" content={OGImage} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={fullURL} />

      </Head>

      <div className="main-layout">
        <div className="main-layout__container">
          <Header />
          <main>{children}</main>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
