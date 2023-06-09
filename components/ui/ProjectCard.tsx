import Image from 'next/image'

interface Props {
  title: string
  description: string
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
  return (
    <div
      className="relative max-md:max-w-xs max-md:mx-auto"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={500}
        className={`rounded-3xl object-cover h-96 max-md:h-80 transition-all duration-300 ease-in-out ${
          isImageOnHover && 'brightness-[30%]'
        }`}
      />
      {children}

      <div className="p-4 max-md:px-2 max-md:py-3">
        <h3 className="text-xl font-semibold text-[#E0ECEB]">{title}</h3>
        <p className="text-[#B8C1C1] max-sm:max-w-[90%]">{description}</p>
      </div>
    </div>
  )
}
