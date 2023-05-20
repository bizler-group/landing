import { IconBrandLinkedin } from '@tabler/icons-react'
import { IconBrandInstagram, IconBrandTelegram } from '@tabler/icons-react'
import Image from 'next/image'
import { LINKS } from '~/constants/data'

export const Header: React.FC = () => {
  return (
    <header className="container pt-7 flex items-center justify-between">
      <div>
        <Image
          src="/images/logo/white.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </div>

      <nav>
        <ul className="flex space-x-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                {link.title}
              </a>
            </li>
          ))}
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
  )
}
