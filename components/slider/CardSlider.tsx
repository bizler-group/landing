import { useCallback, useRef, useState } from 'react'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'

interface Props {
  slides: {
    id: number | string
    avatar: string
    name: string
    position: string
    company: string
    content: string
  }[]
}

export const CardSlider: React.FC<Props> = ({ slides }) => {
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
          className="scrollbar-hide h-80 flex snap-x snap-mandatory overflow-x-auto space-x-4 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0"
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
              className="relative transition-all flex flex-col justify-between bg-[#041C1F] px-10 py-14 rounded-3xl min-w-[500px] aspect-square hover:cursor-pointer flex-shrink-0 snap-center overflow-hidden"
            >
              <div>
                <p className="text-white">{slide.content}</p>
              </div>

              <div className="flex gap-5 items-center justify-start">
                <Image
                  className="rounded-full w-14 h-14 object-cover"
                  src={slide.avatar}
                  alt={slide.name}
                  width={100}
                  height={100}
                />

                <div className="mt-2.5">
                  <p className="text-white">{slide.name}</p>
                  <span className="text-[#B8C1C1]">
                    {slide.position}, {slide.company}
                  </span>
                </div>
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
