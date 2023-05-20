import '~/styles/globals.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bizler Group</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Bizler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}
