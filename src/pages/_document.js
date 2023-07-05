import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Cuidado Digital" />
        <Link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></Link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Analytics />
      </body>
    </Html>
  )
}