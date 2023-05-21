import { useState } from 'react'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'

import { Button } from '~/components/ui/Button'
import { ProjectCard } from '~/components/ui/ProjectCard'
import { PROJECT_SLIDES } from '~/constants/data'
import { nunitoSans } from '..'

export default function Project() {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1)

  return (
    <main className={`container ${nunitoSans.className} overflow-hidden relative z-50`}>
      <div>
        <h1 className="text-4xl font-bold text-white mb-7 mt-20">Портфолио</h1>

        <div className="flex gap-3">
          <Button variant="outlined" active>
            Все проекты
          </Button>
          <Button variant="outlined">Website</Button>
          <Button variant="outlined">CRM</Button>
          <Button variant="outlined">Mobile app</Button>
        </div>
      </div>

      <div className="mt-8 mb-20 grid grid-cols-4 gap-y-7 gap-x-5">
        {PROJECT_SLIDES.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            isImageOnHover={hoveredImageIndex === index}
            onMouseEnter={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(-1)}
          >
            {project.link && hoveredImageIndex === index && (
              <Link
                href={project.link}
                className="flex text-white absolute top-[35%] left-1/3"
              >
                Open details <IconArrowUpRight className="text-[#52B6C4]" />
              </Link>
            )}
          </ProjectCard>
        ))}
      </div>
    </main>
  )
}
