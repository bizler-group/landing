import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'
import {
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandTelegram,
  IconWorld,
} from '@tabler/icons-react'
import i18nConfig from '~/i18n.json'

import { Button } from '../ui/Button'
import { LINKS } from '~/constants/data'

const LANGUAGES = i18nConfig.locales.map((locale) => ({
  id: locale,
  title: locale.toUpperCase(),
}))

export const Header: React.FC = () => {
  const router = useRouter()
  const { t, lang } = useTranslation('common')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <header className="relative container flex flex-wrap items-center justify-between mx-auto p-4 pt-7">
      <Link href="/">
        <Image
          src="/images/logo/white.svg"
          alt="Logo"
          width={150}
          height={150}
        />
      </Link>

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden outline-none ring-2 ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={handleMenuToggle}
      >
        <span className="sr-only">{t('open_main_menu')}</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="white"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`z-50 ${
          isMenuOpen ? 'top-20 left-0 right-0' : 'hidden'
        } w-full md:block md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 max-md:bg-gray-900 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
          {LINKS.map((link) => (
            <li key={link.href} onClick={handleMenuToggle}>
              <Link
                href={link.href}
                className={`${
                  router.asPath.startsWith(link.href)
                    ? 'text-[#52B6C4] bg-blue-900'
                    : 'text-[#E0ECEB]'
                } hover:text-[#52B6C4] block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0`}
              >
                {t(link.title)}
              </Link>
            </li>
          ))}

          <li
            className="hidden mt-4 max-md:flex gap-4 justify-center"
            onClick={handleMenuToggle}
          >
            {LANGUAGES.map((language) => (
              <Button
                key={language.id}
                href={language.id === lang ? undefined : router.asPath}
                locale={language.id === lang ? undefined : language.id}
                className="!px-5 !py-1"
                variant="outlined"
              >
                {language.id === lang && (
                  <IconWorld
                    style={{ display: 'inline', verticalAlign: 'middle' }}
                  />
                )}{' '}
                {language.title}
              </Button>
            ))}
          </li>
        </ul>
      </div>

      <div className="flex space-x-4 max-md:hidden">
        <div
          className="relative z-[100]"
          onClick={() => setIsLanguageOpen((prev) => !prev)}
        >
          <Button className="mr-4 !px-5 !py-1" variant="outlined">
            <IconWorld style={{ display: 'inline', verticalAlign: 'middle' }} />{' '}
            {lang.toUpperCase()}
          </Button>

          {LANGUAGES.filter((i) => i.id !== lang).map((language, index) => {
            const topPercent = 120 * index + 120

            return (
              <Button
                key={language.id}
                href={router.asPath}
                locale={language.id}
                className={`!px-5 !py-1 absolute left-0 right-0 w-[85%]`}
                style={{
                  top: `${topPercent}%`,
                  display: !isLanguageOpen ? 'none' : 'unset',
                }}
                variant="outlined"
              >
                {language.title}
              </Button>
            )
          })}
        </div>

        <a
          href="https://www.instagram.com/bizler.group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram
            className="text-white hover:text-gray-300"
            strokeWidth={1.5}
            size={32}
          />
        </a>

        <a
          href="https://t.me/bizler_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandTelegram
            className="text-white hover:text-gray-300"
            strokeWidth={1.5}
            size={32}
          />
        </a>

        <a
          href="https://www.linkedin.com/company/bizler-group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandLinkedin
            className="text-white hover:text-gray-300"
            strokeWidth={1.5}
            size={32}
          />
        </a>
      </div>
    </header>
  )
}
