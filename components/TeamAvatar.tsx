import Image from 'next/image'

interface Props {
  image: string
  name: string
  position: string
  flag: string
  country: string
}

export const TeamAvatar: React.FC<Props> = ({
  flag,
  country,
  image,
  name,
  position,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <Image
          src={image}
          alt={`${name} ${position}`}
          className="w-full h-full rounded-full object-cover"
          width={160}
          height={160}
        />

        <div
          title={country}
          className="absolute w-10 h-10 bottom-0 left-0 border-[1.5px] border-[#B8C1C1] rounded-full overflow-hidden z-10"
        >
          <Image
            src={flag}
            alt={position}
            className="w-full h-full object-cover"
            width={48}
            height={48}
          />
        </div>
      </div>

      <div className="mt-5 text-center">
        <h3 className="text-white text-xl font-bold">{name}</h3>
        <p className="text-[#B8C1C1] text-lg">{position}</p>
      </div>
    </div>
  )
}
