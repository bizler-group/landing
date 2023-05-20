import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTelegram,
} from '@tabler/icons-react'
import Image from 'next/image'
import { LINKS } from '~/constants/data'

export const Footer: React.FC = () => {
  return (
    <footer className="pt-7 px-20 pb-10 w-full bg-[#041C1F]">
      <div className="flex items-center justify-between">
        <Image
          src="/images/logo/white.svg"
          alt="Logo"
          width={150}
          height={150}
        />

        <nav>
          <ul className="flex items-center space-x-8">
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
