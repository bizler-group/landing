import Image from 'next/image'
import { useCallback } from 'react'
import { Nunito_Sans, Jost } from 'next/font/google'
import useTranslation from 'next-translate/useTranslation'

import { Button } from '~/components/ui/Button'
import { Slider } from '~/components/slider/Slider'
import { CardSlider } from '~/components/slider/CardSlider'
import { ContactForm } from '~/components/ContactForm'
import {
  LEADER_SLIDES,
  PROJECT_SLIDES,
  TESTIMONIALS_SLIDES,
} from '~/constants/data'

export const nunitoSans = Nunito_Sans({ subsets: ['cyrillic', 'latin'] })
export const jost = Jost({ subsets: ['cyrillic', 'latin'] })

export default function Home() {
  const { t } = useTranslation('common')

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50`}
    >
      <section className="text-white md:min-h-[80vh] flex justify-center items-start flex-col max-md:mx-5 max-md:justify-start max-md:my-40">
        <h1 className="text-5xl font-bold mb-7 leading-tight max-w-xl max-md:text-4xl max-md:mb-5">
          {t('hero.h1')}
        </h1>
        <p className="text-xl text-[#B8C1C1] max-w-2xl">{t('hero.p1')}</p>
        <p className="mt-5 text-xl text-[#B8C1C1]">{t('hero.p2')}</p>

        <Button onClick={scrollTo.bind(null, 'contact')} className="mt-7">
          {t('hero.cta')}
        </Button>
      </section>

      <section id="partners" className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mt-32">
          {t('trusted_by')}
        </h2>

        <div className="flex justify-center items-center gap-x-16 mt-10 max-md:flex-wrap max-md:gap-10">
          <div>
            {/* <Image
              src="/images/partner-logos/it-park-kr.png"
              alt="IT park karakalpakstan logo"
              width={100}
              height={40}
            /> */}
            <Image
              src="/images/partner-logos/airbnb.png"
              alt="Airbnb logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/hubspot.png"
              alt="Hubspot logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/google.png"
              alt="Google logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/microsoft.png"
              alt="Microsoft logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/walmart.png"
              alt="Walmart logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/fedex.png"
              alt="FedEx logo"
              width={100}
              height={40}
            />
          </div>
        </div>
      </section>

      <section className="pt-7 flex max-md:flex-col-reverse items-end justify-between gap-12 mb-28 max-md:mx-5">
        <div className="min-h-[450px] bg-slate-500 bg-[url('https://libertysteelgroup.com/it/wp-content/uploads/sites/6/2020/12/Mission-1-1.jpg')] bg-no-repeat bg-cover rounded-2xl flex-1 max-md:w-full" />

        <div className="flex flex-col gap-10 flex-1 max-md:gap-5">
          <p className="text-[#52B6C4] tracking-widest max-md:tracking-wide uppercase">
            {t('our_mission.title')}
          </p>
          <h3 className="text-[#E0ECEB] font-bold text-4xl max-md:text-4xl leading-normal">
            {t('our_mission.subtitle')}
          </h3>
          <p className="text-[#B8C1C1] text-xl max-md:text-lg leading-snug">
            {t('our_mission.p')}
          </p>
        </div>
      </section>

      <section className="pt-7 flex max-md:flex-col justify-between gap-12 mb-20 max-md:mx-5">
        <div className="flex flex-col gap-10 flex-1 max-md:gap-5">
          <p className="text-[#52B6C4] tracking-widest max-md:tracking-wide uppercase">
            {t('vision.title')}
          </p>
          <h3 className="text-[#E0ECEB] font-bold text-4xl max-md:text-4xl leading-normal">
            {t('vision.subtitle')}
          </h3>
          <p className="text-[#B8C1C1] text-xl max-md:text-lg leading-snug">
            {t('vision.p')}
          </p>

          <div className="flex gap-3">
            <div>
              <div className="w-24 h-14 bg-white rounded-lg" />
              <h3 className="my-3 font-bold text-xl text-[#E0ECEB]">
                {t('vision.feature1.title')}
              </h3>
              <p className="text-[#B8C1C1]">{t('vision.feature1.p')}</p>
            </div>
            <div>
              <div className="w-24 h-14 bg-white rounded-lg" />
              <h3 className="my-3 font-bold text-xl text-[#E0ECEB]">
                {t('vision.feature2.title')}
              </h3>
              <p className="text-[#B8C1C1]">{t('vision.feature2.p')}</p>
            </div>
          </div>
        </div>

        <div className="min-h-[400px] bg-slate-500 bg-[url('https://libertysteelgroup.com/it/wp-content/uploads/sites/6/2020/12/Vision-1.jpg')] bg-no-repeat bg-cover rounded-2xl flex-1" />
      </section>

      <section id="leaders" className="pt-7 mb-16 max-md:mx-5">
        <h2 className="text-4xl font-bold text-white mb-7">
          {t('our_leaders.title')}
        </h2>

        <Slider slides={LEADER_SLIDES} />
      </section>

      <section id="projects" className="pt-7 mb-20 max-md:mx-5">
        <div className="flex justify-between max-md:flex-col">
          <h2 className="text-4xl font-bold text-white mb-7">
            {t('our_projects')}
          </h2>

          <div className="max-md:flex max-md:mb-5">
            <Button variant="outlined" active>
              {t('all_projects')}
            </Button>
            <Button className="ml-4" variant="outlined">
              {t('startups')}
            </Button>
          </div>
        </div>

        <Slider slides={PROJECT_SLIDES} />
      </section>

      <section id="testimonials" className="pt-7 mb-16 max-md:mx-5">
        <h2 className="text-4xl font-bold text-white mb-7">
          {t('testimonials')}
        </h2>

        <CardSlider slides={TESTIMONIALS_SLIDES} />
      </section>

      <ContactForm />
    </main>
  )
}
