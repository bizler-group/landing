import { useState } from 'react'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'

import { Button } from '~/components/ui/Button'
import { ProjectCard } from '~/components/ui/ProjectCard'
import { PROJECT_SLIDES } from '~/constants/data'
import { nunitoSans } from '..'
import useTranslation from 'next-translate/useTranslation'

export default function Project() {
  const { t } = useTranslation('projects')
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1)

  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50 max-md:px-5`}
    >
      <div>
        <h1 className="text-4xl font-bold text-white mb-7 mt-20">
          {t('portfolio')}
        </h1>

        <div className="flex flex-wrap gap-3">
          <Button variant="outlined" active>
            {t('common:all_projects')}
          </Button>
          <Button variant="outlined">{t('website')}</Button>
          <Button variant="outlined">{t('crm')}</Button>
          <Button variant="outlined">{t('mobile_app')}</Button>
        </div>
      </div>

      <div className="mt-8 mb-20 grid grid-cols-4 gap-y-7 gap-x-5 max-md:grid-cols-1">
        {PROJECT_SLIDES.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={t(project.title)}
            description={t(project.description)}
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
                {t('common:open_details')} <IconArrowUpRight className="text-[#52B6C4]" />
              </Link>
            )}
          </ProjectCard>
        ))}
      </div>
    </main>
  )
}
