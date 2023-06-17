import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import { nunitoSans } from '.'

export default function About() {
  const { t } = useTranslation('about')

  return (
    <main
      className={`container text-white ${nunitoSans.className} px-5 pb-20 overflow-hidden relative z-50`}
    >
      <Image
        className="mx-auto my-10 max-md:my-20 max-h-40"
        src="/images/logo/white.svg"
        alt="Bizler logo"
        width={1000}
        height={500}
      />

      <h2 className="text-2xl font-bold mb-5">{t('title')}</h2>
      <p className="mb-4 text-lg">{t('p1')}</p>

      <h3 className="text-xl font-bold mb-4">{t('our_mission.title')}</h3>
      <p className="text-lg mb-4">{t('our_mission.p')}</p>

      <h3 className="text-xl font-bold mb-4">{t('why_us.title')}</h3>
      <ol className="text-lg ml-5 mb-4 list-decimal list-inside">
        <li className="mb-3">{t('why_us.1')}</li>
        <li className="mb-3">{t('why_us.2')}</li>
        <li className="mb-3">{t('why_us.3')}</li>
        <li className="mb-3">{t('why_us.4')}</li>
        <li className="mb-3">{t('why_us.5')}</li>
        <li className="mb-3">{t('why_us.6')}</li>
      </ol>

      <h3 className="text-xl font-bold mb-4">{t('community.title')}</h3>
      <p className="text-lg mb-4">{t('community.p')}</p>

      <p className="text-lg">{t('contact')}</p>
    </main>
  )
}
