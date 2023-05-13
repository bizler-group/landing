import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Image from 'next/image'
import { useCallback, useRef, useState } from 'react'

interface Props {
  slides: {
    id: number | string
    image: string
    title: string
    description: string
  }[]
}

export const Slider: React.FC<Props> = ({ slides }) => {
  const [slideClientWidth, setSlideClientWidth] = useState(0)
  const [noPrev, setNoPrev] = useState(false)
  const [noNext, setNoNext] = useState(false)
  const slidesContainer = useRef<HTMLDivElement>(null)

  const calculatePrevNext = useCallback(
    (dir: 'prev' | 'next') => {
      if (!slidesContainer.current) return
      const canGoNext = true
      const canGoBack =
        slidesContainer.current.scrollLeft - slideClientWidth >
        -(slideClientWidth / 2)

      if (dir === 'prev') {
        if (!canGoBack) {
          setNoPrev(true)
        } else {
          slidesContainer.current.scrollLeft -= slideClientWidth
          setNoNext(false)
        }
      }

      if (dir === 'next') {
        if (!canGoNext) {
          setNoNext(true)
        } else {
          slidesContainer.current.scrollLeft += slideClientWidth
          setNoPrev(false)
        }
      }
    },
    [slideClientWidth, slidesContainer]
  )

  return (
    <>
      <div className="relative">
        <div
          ref={slidesContainer}
          className="slides-container h-96 flex snap-x snap-mandatory overflow-x-auto space-x-4 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              ref={(ref) => {
                if (!ref) return
                setSlideClientWidth(ref.clientWidth)
              }}
              className="aspect-square h-full flex-shrink-0 snap-center rounded-3xl overflow-hidden"
            >
              <Image
                className="w-full h-[85%] object-cover"
                src={slide.image}
                alt={slide.title}
                width={500}
                height={500}
              />
              <div className="mt-2.5 text-center">
                <p className="text-white">{slide.title}</p>
                <span className="text-[#B8C1C1]">{slide.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 gap-5 mx-auto justify-center items-center md:flex">
        <button
          role="button"
          className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
          aria-label="prev"
          disabled={noPrev}
          onClick={calculatePrevNext.bind(null, 'prev')}
        >
          <IconArrowLeft
            className={`text-[#52B6C4] ${noPrev && 'text-[#194f55]'}`}
          />
        </button>

        <button
          role="button"
          className="next px-2 py-2 rounded-full bg-transparent text-white border-[#52B6C4] disabled:border-[#194f55] border-2 border-solid"
          aria-label="next"
          disabled={noNext}
          onClick={calculatePrevNext.bind(null, 'next')}
        >
          <IconArrowRight
            className={`text-[#52B6C4] ${noNext && 'text-[#194f55]'}`}
          />
        </button>
      </div>
    </>
  )
}
