import Image from 'next/image'
import { useCallback } from 'react'
import { Nunito_Sans, Jost, Roboto, Open_Sans, Inter } from 'next/font/google'
import {
  IconTrademark,
  IconBriefcase,
  IconAffiliate,
} from '@tabler/icons-react'
import useTranslation from 'next-translate/useTranslation'

import { Button } from '~/components/ui/Button'
import { Slider } from '~/components/slider/Slider'
import { CardSlider } from '~/components/slider/CardSlider'
import { ContactForm } from '~/components/ContactForm'
import {
  LEADER_SLIDES,
  PROJECT_SLIDES,
  SERVICES,
  TESTIMONIALS_SLIDES,
} from '~/constants/data'

export const nunitoSans = Inter({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin'],
})
export const jost = Open_Sans({ subsets: ['cyrillic', 'latin'] })

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

        <div className="flex justify-center items-center gap-x-16 max-md:mx-3 mt-10 max-md:flex-wrap max-md:gap-10">
          <div>
            <Image
              className="rounded-full"
              src="/images/partner-logos/era.jpeg"
              alt="New Era GPS logo"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/jaslar-isler-agentligi.png"
              alt="Jaslar isler agentligi logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/it-park-kr.png"
              alt="IT Park Karakalpakstan logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/mitc.svg"
              alt="MITC logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/logo_sky.png"
              alt="Skymax logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              className="invert"
              src="/images/partner-logos/nukus-avtovokzal.png"
              alt="Intuza academy logo"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/images/partner-logos/intuza.png"
              alt="Intuza logo"
              width={100}
              height={50}
            />
          </div>
        </div>
      </section>

      <section className="pt-7 flex max-md:flex-col-reverse items-end justify-between gap-12 mb-28 max-md:mx-5">
        <Image
          className="rounded-2xl w-[45%] object-cover max-md:w-full max-md:rounded-lg"
          src="/images/whiteboard.jpg"
          alt="Whiteboard"
          width={1920}
          height={75}
        />

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
              <div className="w-24 h-14 bg-white rounded-lg flex items-center justify-center">
                <IconBriefcase size="3rem" />
              </div>
              <h3 className="my-3 font-bold text-xl text-[#E0ECEB]">
                {t('vision.feature1.title')}
              </h3>
              <p className="text-[#B8C1C1]">{t('vision.feature1.p')}</p>
            </div>
            <div>
              <div className="w-24 h-14 bg-white rounded-lg flex items-center justify-center">
                <IconAffiliate size="3rem" />
              </div>
              <h3 className="my-3 font-bold text-xl text-[#E0ECEB]">
                {t('vision.feature2.title')}
              </h3>
              <p className="text-[#B8C1C1]">{t('vision.feature2.p')}</p>
            </div>
          </div>
        </div>

        <Image
          className="rounded-2xl w-[45%] object-cover max-md:w-full max-md:rounded-lg"
          src="/images/meeting.jpg"
          alt="Meeting"
          width={1920}
          height={75}
        />
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
          {t('our_services')}
        </h2>

        <div className="flex gap-5 max-md:flex-wrap">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col items-start">
              <Image
                className={`rounded-3xl object-cover transition-all duration-300 ease-in-out ${
                  t(service.description).length > 35 ? 'h-[70%]' : 'h-[80%]'
                }`}
                src={t(service.image)}
                alt={t(service.title)}
                width={500}
                height={500}
              />
              <div className="mt-3 text-center">
                <p className="text-white">{t(service.title)}</p>
                <span className="text-[#B8C1C1]">{t(service.description)}</span>
              </div>
            </div>
          ))}
        </div>
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
