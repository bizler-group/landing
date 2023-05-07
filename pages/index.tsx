import Image from 'next/image'
import { Nunito_Sans } from 'next/font/google'
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandLinkedin,
} from '@tabler/icons-react'

const nunitoSans = Nunito_Sans({ subsets: ['cyrillic', 'latin'] })

export default function Home() {
  return (
    <main
      className={`min-h-screen ${nunitoSans.className} bg-[#052327] bg-main-gradient overflow-hidden`}
    >
      <header className="mx-auto pt-7 w-4/5 flex items-center justify-between">
        <div>
          <Image
            src="/images/logo/white.svg"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="https://nextjs.org/docs"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Проекты
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Отзывы
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Связаться с нами
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex space-x-4">
          <button className="text-white mr-4 bg-[#52B6C4] rounded-3xl px-5 py-1">
            RU
          </button>

          <a href="https://nextjs.org/docs">
            <IconBrandInstagram
              className="text-white hover:text-gray-300"
              size={32}
            />
          </a>

          <a href="https://nextjs.org/docs">
            <IconBrandTelegram
              className="text-white hover:text-gray-300"
              size={32}
            />
          </a>

          <a href="https://nextjs.org/docs">
            <IconBrandLinkedin
              className="text-white hover:text-gray-300"
              size={32}
            />
          </a>
        </div>
      </header>

      <div className="text-white mx-auto w-4/5 mt-32 mb-48 relative">
        <h1 className="text-5xl font-bold mb-7 leading-tight max-w-xl">
          Реализуйте свои идеи вместе с нами
        </h1>
        <p className="text-xl text-[#B8C1C1] max-w-2xl">
          Наша креативная команда поможет вам воплотить вашу идею в жизнь.
        </p>
        <p className="mt-5 text-xl text-[#B8C1C1]">
          С нами – всё легко и просто.
        </p>

        <button className="bg-[#52B6C4] rounded-3xl px-6 py-3 mt-5">
          Связаться с нами
        </button>

        {/* <div className="absolute top-0 left-50% z-10 bg-hero-pattern w-28 h-28" /> */}
        <Image
          className="absolute -top-[40%] left-[52%] mix-blend-soft-light"
          src="/images/hero-pattern.png"
          alt="hero-pattern"
          width={700}
          height={800}
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-white text-center mt-32">
          Нам доверяют
        </h2>

        <div className="flex justify-center mt-10">
          <Image
            src="/images/partner-logos.png"
            alt="Picture of the author"
            width={1000}
            height={250}
          />
        </div>
      </div>
    </main>
  )
}
