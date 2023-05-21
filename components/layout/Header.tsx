import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
} from '@tabler/icons-react'

import { Button } from '../ui/Button'
import { LINKS } from '~/constants/data'

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
                className={`${router.asPath.startsWith(link.href)
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
        <Button className="mr-4 !px-5 !py-1">
          RU
        </Button>

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
