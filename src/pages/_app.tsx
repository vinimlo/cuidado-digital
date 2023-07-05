import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
      <style jsx global>
        {`
          body {
            background: #11001c;
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            color: #fafafa;
          }
        `}
      </style>
    </>
  );
}

export default App;
