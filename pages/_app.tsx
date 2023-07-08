import '~/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import { Header } from '~/components/layout/Header'
import { Footer } from '~/components/layout/Footer'
import { jost } from '.'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bizler Group</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Bizler" />
        <link rel="icon" href="/favicon.ico" />

        <style>{`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${jost.style.fontFamily};
            text-transform: uppercase;
          }
        `}</style>
      </Head>

      <Header />

      <Component {...pageProps} />

      <ToastContainer />

      <Footer />
    </>
  )
}
