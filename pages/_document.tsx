import { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#052327] bg-main-gradient relative">
        <Image
          className="absolute top-20 right-0 mix-blend-soft-light"
          src="/images/hero-pattern.png"
          alt="hero-pattern"
          width={850}
          height={950}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
