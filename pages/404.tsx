import useTranslation from 'next-translate/useTranslation'

import { nunitoSans } from '.'

export default function NotFound() {
  const { t } = useTranslation('common')

  return (
    <main
      className={`container min-h-screen ${nunitoSans.className} flex items-center flex-col justify-center overflow-hidden relative z-50`}
    >
      <h1 className="text-9xl text-white text-center">404</h1>
      <p className="text-2xl text-white text-center mt-5">
        {t('page_not_found')}
      </p>
    </main>
  )
}
