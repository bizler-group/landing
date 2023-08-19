import Image from 'next/image'
import cx from '~/lib/cx'

interface Props {
  title: string
  description?: string
  image: string
  children?: React.ReactNode
  isImageOnHover?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export const ProjectCard: React.FC<Props> = ({
  title,
  description,
  image,
  isImageOnHover,
  children,
  onMouseEnter,
  onMouseLeave,
}) => {
  const imageClasses = cx(
    'rounded-3xl object-cover h-80 max-md:h-80 transition-all duration-300 ease-in-out',
    isImageOnHover && 'brightness-[30%] object-center scale-105'
  )

  return (
    <div
      className="max-md:max-w-xs max-md:mx-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Image
          className={imageClasses}
          src={image}
          alt={title}
          width={300}
          height={500}
        />
        {children}
      </div>

      <div className="p-4 max-md:px-2 max-md:py-3">
        <h3 className="text-xl font-semibold normal-case text-[#E0ECEB]">
          {title}
        </h3>
        <p className="text-[#B8C1C1] max-sm:max-w-[90%]">{description}</p>
      </div>
    </div>
  )
}
