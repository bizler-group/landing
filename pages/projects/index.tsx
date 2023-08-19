import { useEffect, useState } from 'react'
import Link from 'next/link'
import { IconArrowUpRight } from '@tabler/icons-react'
import useTranslation from 'next-translate/useTranslation'

import { Button } from '~/components/ui/Button'
import { ProjectCard } from '~/components/ui/ProjectCard'
import { PROJECT_SLIDES } from '~/constants/data'
import { nunitoSans } from '..'
import { useRouter } from 'next/router'

const PROJECT_TYPES = [
  'all',
  'website',
  'crm',
  // 'mobile_app',
] as const

export default function Project() {
  const { t } = useTranslation('projects')
  const router = useRouter()
  const [hoveredImageIndex, setHoveredImageIndex] = useState(-1)
  const [projectType, setProjectType] =
    useState<(typeof PROJECT_TYPES)[number]>('all')

  useEffect(() => {
    const { type } = router.query

    if (typeof type === 'string' && PROJECT_TYPES.includes(type as any)) {
      setProjectType(type as any)
    }
  }, [router])

  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50 max-md:px-5`}
    >
      <div>
        <h1 className="text-4xl font-bold text-white mb-7 mt-20">
          {t('portfolio')}
        </h1>

        <div className="flex flex-wrap gap-3">
          {PROJECT_TYPES.map((type) => (
            <Button
              key={type}
              variant="outlined"
              className="max-md:px-3 max-md:py-1.5"
              active={projectType === type}
              onClick={() => setProjectType(type)}
            >
              {t(type === 'all' ? 'common:all_projects' : t(type))}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-8 mb-20 grid grid-cols-4 gap-y-7 gap-x-5 max-md:grid-cols-1">
        {PROJECT_SLIDES.filter(
          (project) => projectType === 'all' || project.type === projectType
        ).map((project, index) => (
          <ProjectCard
            key={project.id}
            title={t(`common:${project.title}`)}
            // description={`${t(`common:${project.description}`).slice(0, 50)}...`}
            image={project.image}
            isImageOnHover={hoveredImageIndex === index}
            onMouseEnter={() => setHoveredImageIndex(index)}
            onMouseLeave={() => setHoveredImageIndex(-1)}
          >
            {project.link && hoveredImageIndex === index && (
              <Link
                href={project.link}
                className="flex text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                {t('common:open_details')}{' '}
                <IconArrowUpRight className="text-[#52B6C4]" />
              </Link>
            )}
          </ProjectCard>
        ))}
      </div>
    </main>
  )
}
