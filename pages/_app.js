import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <title>Hulu</title>
    </Head>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp
