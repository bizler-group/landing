import Image from 'next/image'
import { FAILED_PROJECTS } from '~/constants/data'

export default function Killed() {
  return (
    <main className="text-white relative z-10">
      <h1 className="text-white text-4xl normal-case text-center mb-10 mt-16">
        Killed by Bizler
      </h1>

      <div className="w-[85%] my-20 mx-auto grid grid-cols-3 gap-x-5 gap-y-16 items-start max-md:grid-cols-1 max-md:gap-10 max-md:justify-start">
        {FAILED_PROJECTS.map((item, index) => (
          <div className="grid max-w-sm gap-3 grid-cols-[30%_1fr]" key={index}>
            <div>
              <Image
                className="h-16"
                src="/images/tombstone.svg"
                alt="Tombstone Icon"
                width={500}
                height={500}
              />

              <p className="text-sm text-center">{item.date}</p>
            </div>

            <div className="flex-shrink flex flex-col gap-2">
              <h2 className="text-2xl normal-case">{item.name}</h2>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
