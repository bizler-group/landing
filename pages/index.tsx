import Image from 'next/image'
import { Nunito_Sans } from 'next/font/google'
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import { Slider } from '~/components/slider/Slider'

const nunitoSans = Nunito_Sans({ subsets: ['cyrillic', 'latin'] })

const SLIDES = [
  {
    id: 1,
    image: '/images/leaders/1.webp',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 2,
    image: '/images/leaders/2.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 3,
    image: '/images/leaders/3.webp',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 4,
    image: '/images/leaders/4.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 5,
    image: '/images/leaders/5.webp',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 6,
    image: '/images/leaders/6.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 7,
    image: '/images/leaders/7.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 8,
    image: '/images/leaders/8.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 9,
    image: '/images/leaders/9.jpeg',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
  {
    id: 10,
    image: '/images/leaders/10.webp',
    title: 'Александр Кузнецов',
    description: 'Генеральный директор',
  },
]

export default function Home() {
  return (
    <main
      className={`min-h-screen ${nunitoSans.className} bg-[#052327] bg-main-gradient overflow-hidden relative`}
    >
      <Image
        className="absolute top-24 right-0 mix-blend-soft-light"
        src="/images/hero-pattern.png"
        alt="hero-pattern"
        width={700}
        height={800}
      />

      <header className="mx-auto pt-7 w-4/5 flex items-center justify-between">
        <div>
          <Image
            src="/images/logo/white.svg"
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </div>

        <nav>
          <ul className="flex space-x-8">
            <li>
              <a
                href="https://nextjs.org/docs"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                О нас
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Проекты
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Отзывы
              </a>
            </li>
            <li>
              <a
                href="https://nextjs.org/learn"
                className="text-[#E0ECEB] hover:text-gray-300"
              >
                Связаться с нами
              </a>
            </li>
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

      <div className="text-white mx-auto w-4/5 mt-32 mb-48">
        <h1 className="text-5xl font-bold mb-7 leading-tight max-w-xl">
          Реализуйте свои идеи вместе с нами
        </h1>
        <p className="text-xl text-[#B8C1C1] max-w-2xl">
          Наша креативная команда поможет вам воплотить вашу идею в жизнь.
        </p>
        <p className="mt-5 text-xl text-[#B8C1C1]">
          С нами – всё легко и просто.
        </p>

        <button className="bg-[#52B6C4] rounded-3xl px-6 py-3 mt-5">
          Связаться с нами
        </button>
      </div>

      <div className="mb-20">
        <h2 className="text-4xl font-bold text-white text-center mt-32">
          Нам доверяют
        </h2>

        <div className="flex justify-center items-center gap-x-16 mt-10">
          <div>
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
      </div>

      <div className="mx-auto pt-7 w-4/5 flex items-end justify-between gap-12 mb-24">
        <div className="min-h-[450px] bg-slate-500 bg-[url('https://libertysteelgroup.com/it/wp-content/uploads/sites/6/2020/12/Mission-1-1.jpg')] bg-no-repeat bg-cover rounded-2xl flex-1" />

        <div className="flex flex-col gap-10 flex-1">
          <p className="text-[#52B6C4] tracking-widest uppercase">
            Наша миссия
          </p>
          <h3 className="text-[#E0ECEB] font-bold text-5xl leading-normal">
            Some title 2 lines of text of testim
          </h3>
          <p className="text-[#B8C1C1] text-xl leading-snug">
            Решить локальные проблемы с помощью IT и внести свой вклад в
            развитие нашего региона. Мы хотим использовать максимум своих знаний
            и навыков для реализаций проектов и поднять благополучие региона на
            новый уровень.
          </p>
        </div>
      </div>

      <div className="mx-auto pt-7 w-4/5 flex justify-between gap-12 mb-20">
        <div className="flex flex-col gap-10 flex-1">
          <p className="text-[#52B6C4] tracking-widest uppercase">Видение</p>
          <h3 className="text-[#E0ECEB] font-bold text-5xl leading-normal">
            Some title 2 lines of text of testim
          </h3>
          <p className="text-[#B8C1C1] text-xl leading-snug">
            Наша первостепенная задача – создать коммьюнити, где всех будет
            объединять одна миссия и ценности. Мы открыты для всех, чьё виденье
            совпадает с нашим. Нам неважно, какой вы расы, нации и пола, мы с
            радостью объединимся с вами для достижения общей цели.
          </p>
        </div>

        <div className="min-h-[400px] bg-slate-500 bg-[url('https://libertysteelgroup.com/it/wp-content/uploads/sites/6/2020/12/Vision-1.jpg')] bg-no-repeat bg-cover rounded-2xl flex-1" />
      </div>

      <div className="mx-auto pt-7 w-4/5 mb-20">
        <h2 className="text-4xl font-bold text-white mb-7">Наши лидеры</h2>

        <Slider slides={SLIDES} />

        {/* <div className="relative">
          <div
            ref={slidesContainer}
            className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
          >
            <div
              ref={slide}
              className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden"
            >
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/9754/mountains-clouds-forest-fog.jpg?auto=compress&cs=tinysrgb&w=1600"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/6263568/pexels-photo-6263568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/3026364/pexels-photo-3026364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/10343729/pexels-photo-10343729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/13860053/pexels-photo-13860053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/8576739/pexels-photo-8576739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1743367/pexels-photo-1743367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/5920021/pexels-photo-5920021.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/12805075/pexels-photo-12805075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="mountain_image"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 gap-5 mx-auto justify-center items-center md:flex">
          <button
            role="button"
            className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
            aria-label="prev"
            disabled={slidesContainer.current?.scrollLeft === 0}
            onClick={() => {
              if (!slide.current || !slidesContainer.current) return
              slidesContainer.current.scrollLeft -= slide.current.clientWidth
            }}
          >
            <IconArrowLeft className={`text-[#52B6C4] ${slidesContainer.current?.scrollLeft === 0 && 'text-[#194f55]'}`} />
          </button>

          <button
            role="button"
            className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
            aria-label="next"
            onClick={() => {
              if (!slide.current || !slidesContainer.current) return
              slidesContainer.current.scrollLeft += slide.current.clientWidth
            }}
          >
            <IconArrowRight className="text-[#52B6C4]" />
          </button>
        </div> */}
      </div>
    </main>
  )
}
