import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from '@tabler/icons-react'

interface Props {
  namespace?: string
  slides: {
    id: number | string
    image: string
    title: string
    description: string
    link?: string
  }[]
}

export const Slider: React.FC<Props> = ({ slides, namespace = 'common' }) => {
  const { t } = useTranslation(namespace)
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1)
  const [slideClientWidth, setSlideClientWidth] = useState(0)
  const [noPrev, setNoPrev] = useState(false)
  const [noNext, setNoNext] = useState(false)
  const slidesContainer = useRef<HTMLDivElement>(null)

  const onPrevNext = useCallback(
    (dir: 'prev' | 'next') => {
      if (!slidesContainer.current) return
      if (dir === 'prev' && noPrev) return
      if (dir === 'next' && noNext) return

      switch (dir) {
        case 'prev':
          slidesContainer.current.scrollLeft -= slideClientWidth
          return
        case 'next':
          slidesContainer.current.scrollLeft += slideClientWidth
          return
        default:
          return
      }
    },
    [slideClientWidth, noPrev, noNext]
  )

  const onScroll = useCallback((e: React.FormEvent) => {
    const target = e.target as HTMLDivElement
    const scrollLeft = target.scrollLeft
    const scrollWidth = target.scrollWidth
    const clientWidth = target.clientWidth

    setNoPrev(scrollLeft === 0)
    setNoNext(scrollLeft + clientWidth === scrollWidth)
  }, [])

  return (
    <>
      <div className="relative">
        <div
          ref={slidesContainer}
          onScroll={onScroll}
          className="scrollbar-hide h-96 max-md:h-80 flex snap-x snap-mandatory overflow-x-auto space-x-4 rounded scroll-smooth before:w-[35vw] before:shrink-0 after:w-[35vw] after:shrink-0 md:before:w-0 md:after:w-0"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(ref) => {
                if (!ref) return
                setSlideClientWidth(ref.clientWidth)
              }}
              onMouseEnter={() => setHoveredImageIndex(index)}
              onMouseLeave={() => setHoveredImageIndex(-1)}
              className="relative transition-all aspect-square h-[90%] w-72 max-md:w-60 hover:w-80 hover:h-full hover:cursor-pointer flex-shrink-0 snap-center overflow-hidden"
            >
              <Image
                className={`rounded-3xl object-cover transition-all duration-300 ease-in-out ${
                  slide.description.length > 35 ? 'h-[70%]' : 'h-[80%]'
                } ${
                  slide.link &&
                  hoveredImageIndex === index &&
                  'brightness-[30%]'
                }`}
                src={t(slide.image)}
                alt={t(slide.title)}
                width={500}
                height={500}
              />
              {slide.link && hoveredImageIndex === index && (
                <Link
                  href={slide.link}
                  className="flex text-white absolute top-[35%] left-1/3"
                >
                  {t('open_details', { namespace: 'common' })}{' '}
                  <IconArrowUpRight className="text-[#52B6C4]" />
                </Link>
              )}
              <div className="mt-2.5 text-center">
                <p className="text-white">{t(slide.title)}</p>
                <span className="text-[#B8C1C1]">{t(slide.description)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 gap-5 mx-auto flex justify-center items-center">
        <button
          role="button"
          className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
          aria-label="prev"
          disabled={noPrev}
          onClick={onPrevNext.bind(null, 'prev')}
        >
          <IconArrowLeft
            className={noPrev ? 'text-[#194f55]' : 'text-[#52B6C4]'}
          />
        </button>

        <button
          role="button"
          className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
          aria-label="next"
          disabled={noNext}
          onClick={onPrevNext.bind(null, 'next')}
        >
          <IconArrowRight
            className={noNext ? 'text-[#194f55]' : 'text-[#52B6C4]'}
          />
        </button>
      </div>
    </>
  )
}
