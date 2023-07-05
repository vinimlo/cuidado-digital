import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link';

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
      </body>
    </Html>
  )
}