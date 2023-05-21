import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
} from '@tabler/icons-react'

import { LINKS } from '~/constants/data'
import Link from 'next/link'

export const Header: React.FC = () => {
  const router = useRouter()

  return (
    <header className="container pt-7 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/logo/white.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <nav>
        <ul className="flex space-x-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  router.asPath.startsWith(link.href)
                    ? 'text-[#52B6C4]'
                    : 'text-[#E0ECEB]'
                } hover:text-[#52B6C4]`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex space-x-4">
        <button className="text-white mr-4 bg-[#52B6C4] rounded-3xl px-5 py-1">
          RU
        </button>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram
            className="text-white hover:text-gray-300"
            size={32}
          />
        </a>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTelegram
            className="text-white hover:text-gray-300"
            size={32}
          />
        </a>

        <a
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin
            className="text-white hover:text-gray-300"
            size={32}
          />
        </a>
      </div>
    </header>
  )
}
