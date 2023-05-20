import Image from 'next/image'
import { Nunito_Sans } from 'next/font/google'
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconMailFilled,
} from '@tabler/icons-react'
import { Slider } from '~/components/slider/Slider'
import { CardSlider } from '~/components/slider/CardSlider'
import { Input } from '~/components/form/Input'
import { Footer } from '~/components/layout/Footer'

const nunitoSans = Nunito_Sans({ subsets: ['cyrillic', 'latin'] })

const LEADER_SLIDES = [
  {
    id: 1,
    image: '/images/leaders/qural.jpg',
    title: 'Курал Атабаев',
    description: 'Основатель',
  },
  {
    id: 2,
    image: '/images/leaders/abat.jpeg',
    title: 'Абат Даулетбаев',
    description: 'Директор, программист, инженер',
  },
  {
    id: 3,
    image: '/images/leaders/azamat.jpg',
    title: 'Азамат Жумабаев',
    description: 'Технический директор',
  },
  {
    id: 4,
    image: '/images/leaders/begis.jpg',
    title: 'Бегис Орынбаев',
    description: 'Проект менеджер, UX/UI дизайнер',
  },
]

const PROJECT_SLIDES = [
  {
    id: 1,
    image: '/images/projects/1.webp',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 2,
    image: '/images/projects/2.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 3,
    image: '/images/projects/3.webp',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 4,
    image: '/images/projects/4.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 5,
    image: '/images/projects/5.webp',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 6,
    image: '/images/projects/6.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 7,
    image: '/images/projects/7.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 8,
    image: '/images/projects/8.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 9,
    image: '/images/projects/9.jpeg',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
  {
    id: 10,
    image: '/images/projects/10.webp',
    title: 'Project name',
    description: 'Position + some information in 2 lines lorem ipsum',
    link: 'https://google.com',
  },
]

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris, faucibus. Tellus nisi amet non at phasellus faucibus senectus in'

const TESTIMONIALS_SLIDES = [
  {
    id: 1,
    avatar: '/images/leaders/qural.jpg',
    name: 'Айдана Абдыкадырова',
    position: 'Директор',
    company: 'Компания',
    content,
  },
  {
    id: 2,
    avatar: '/images/leaders/qural.jpg',
    name: 'Айдана Абдыкадырова',
    position: 'Директор',
    company: 'Компания',
    content,
  },
  {
    id: 3,
    avatar: '/images/leaders/qural.jpg',
    name: 'Айдана Абдыкадырова',
    position: 'Директор',
    company: 'Компания',
    content,
  },
  {
    id: 4,
    avatar: '/images/leaders/qural.jpg',
    name: 'Айдана Абдыкадырова',
    position: 'Директор',
    company: 'Компания',
    content,
  },
  {
    id: 5,
    avatar: '/images/leaders/qural.jpg',
    name: 'Айдана Абдыкадырова',
    position: 'Директор',
    company: 'Компания',
    content,
  },
]

export default function Home() {
  return (
    <main
      className={`${nunitoSans.className} bg-[#052327] bg-main-gradient overflow-hidden relative`}
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
            alt="Logo"
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

      <div className="mx-auto pt-7 w-4/5 flex items-end justify-between gap-12 mb-28">
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

      <div className="mx-auto pt-7 w-4/5 mb-16">
        <h2 className="text-4xl font-bold text-white mb-7">Наши лидеры</h2>

        <Slider slides={LEADER_SLIDES} />
      </div>

      <div className="mx-auto pt-7 w-4/5 mb-20">
        <h2 className="text-4xl font-bold text-white mb-7">Наши проекты</h2>

        <Slider slides={PROJECT_SLIDES} />
      </div>

      <div className="mx-auto pt-7 w-4/5 mb-16">
        <h2 className="text-4xl font-bold text-white mb-7">О нас пишут</h2>

        <CardSlider slides={TESTIMONIALS_SLIDES} />
      </div>

      <div className="mx-auto pt-7 w-4/5 mb-16">
        <h2 className="text-4xl font-bold text-white mb-7">Свяжитесь с нами</h2>

        <div className="flex gap-10 justify-between">
          <form className="max-w-3xl flex-1">
            <div className="flex gap-5">
              <Input
                label="First Name"
                className="flex-1"
                name="first_name"
                placeholder="First Name"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Last Name"
                className="flex-1"
                name="last_name"
                placeholder="Last Name"
                value=""
                onChange={() => {}}
              />
            </div>
            <Input
              className="my-5"
              label="Message"
              name="message"
              type="textarea"
              placeholder="Message"
              value=""
              onChange={() => {}}
            />
            <div className="flex gap-5">
              <Input
                label="Email"
                className="flex-1"
                name="email-address"
                placeholder="email@example.com"
                value=""
                onChange={() => {}}
              />
              <Input
                label="Phone Number"
                className="flex-1"
                name="phone-number"
                placeholder="+4 "
                value=""
                onChange={() => {}}
              />
            </div>

            <button
              type="submit"
              className="bg-[#52B6C4] text-white mt-10 py-3 px-10 rounded-full"
            >
              Отправить
            </button>
          </form>

          <div className="text-white w-[40%]">
            <h3 className="font-bold text-2xl">Want to reach us directly?</h3>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
              pharetra elementum sit id sagittis non donec egestas.
            </p>

            <div className="mt-10">
              <span className="flex gap-3 mb-4">
                <IconMailFilled />
                <a href="mailto:contact@example.com">contact@example.com</a>
              </span>
              <span className="flex gap-3 mb-4">
                <IconMailFilled />
                <a href="mailto:support@example.com">support@example.com</a>
              </span>
              <span className="flex gap-3">
                <IconMailFilled />
                <a href="mailto:press@example.com">press@example.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto pt-7 w-full bg-[#041C1F]">
        <Footer />
      </div>
    </main>
  )
}
