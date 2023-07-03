import { AppProps } from 'next/app'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
            background: #11001C;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            color: #FAFAFA;
        }
        `}</style>
    </>
  )
}