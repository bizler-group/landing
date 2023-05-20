import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
} from '@tabler/icons-react'
import Image from 'next/image'

export const Footer: React.FC = () => {
  return (
    <footer className="w-4/5 px-6 pt-5 pb-10 mx-auto">
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo/white.svg"
          alt="Logo"
          width={150}
          height={150}
        />

        <nav>
          <ul className="flex items-center space-x-8">
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

            <li>
              <div className="flex space-x-4">
                <a
                  href="https://nextjs.org/learn"
                  className="text-[#E0ECEB] hover:text-gray-300"
                >
                  <IconBrandInstagram
                    className="text-white hover:text-gray-300"
                    size={32}
                  />
                </a>
                <a
                  href="https://nextjs.org/learn"
                  className="text-[#E0ECEB] hover:text-gray-300"
                >
                  <IconBrandTelegram
                    className="text-white hover:text-gray-300"
                    size={32}
                  />
                </a>
                <a
                  href="https://nextjs.org/learn"
                  className="text-[#E0ECEB] hover:text-gray-300"
                >
                  <IconBrandLinkedin
                    className="text-white hover:text-gray-300"
                    size={32}
                  />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-7 mb-10 h-px w-full bg-white/30" />

      <p className="text-white">All rights reserved 2023</p>
    </footer>
  )
}
