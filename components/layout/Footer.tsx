import Image from 'next/image'
import Link from 'next/link'
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
} from '@tabler/icons-react'

import { LINKS } from '~/constants/data'

const year = new Date().getFullYear()

export const Footer: React.FC = () => {
  return (
    <footer className="pt-7 pb-10 w-full bg-[#041C1F] max-md:mb-10">
      <div className="container max-md:mx-5">
        <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-10">
          <Image
            src="/images/logo/white.svg"
            alt="Logo"
            width={150}
            height={150}
          />

          <nav>
            <ul className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#E0ECEB] hover:text-gray-300"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              <li className="max-md:mt-10">
                <div className="flex space-x-4">
                  <a
                    href="https://nextjs.org/learn"
                    className="text-[#E0ECEB] hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandInstagram
                      className="text-white hover:text-gray-300"
                      size={32}
                    />
                  </a>
                  <a
                    href="https://nextjs.org/learn"
                    className="text-[#E0ECEB] hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTelegram
                      className="text-white hover:text-gray-300"
                      size={32}
                    />
                  </a>
                  <a
                    href="https://nextjs.org/learn"
                    className="text-[#E0ECEB] hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
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

        <div className="mt-7 mb-10 h-px w-full max-md:w-[75%] max-md:mx-auto bg-white/30" />

        <p className="text-white">All rights reserved {year}</p>
      </div>
    </footer>
  )
}
