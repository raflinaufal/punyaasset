import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your website description here." />
        <meta name="title" content="punyaasset" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
