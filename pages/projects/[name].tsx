import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { nunitoSans } from '..'
import { Button } from '~/components/ui/Button'
import { IconArrowUpRight } from '@tabler/icons-react'

const PROJECTS = [
  {
    id: 1,
    slug: 'some-project',
    title: 'Project name',
    tools: ['React', 'Next.js', 'TypeScript'],
    type: 'Website',
    link: 'https://google.com',
    description:
      'Lorem ipsum dolor sit amet consectetur. Velit quis non in dui massa. In tincidunt adipiscing volutpat ullamcorper scelerisque arcu augue. Eget aliquam lacus non mattis ut donec. Dolor sed pharetra et curabitur sit.',
  },
]

type Project = (typeof PROJECTS)[number]

export default function Project() {
  const router = useRouter()
  const { name } = router.query
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    if (name) {
      const project = PROJECTS.find((project) => project.slug === name)
      if (project) {
        setProject(project)
      } else {
        router.push('/404')
      }
    }
  }, [name, router])

  if (!project) {
    return null
  }

  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50`}
    >
      <div className="mb-7 mt-16 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-white">{project.title}</h1>

        <div>
          {project.tools.map((tool) => (
            <Button key={tool} className="mr-3 !py-1 !px-4" variant="outlined">
              {tool}
            </Button>
          ))}

          <Button className="mt-4 ml-4 py-3 px-6 inline-block" active>
            {project.type}
          </Button>
        </div>
      </div>

      <Button
        href={project.link}
        className="mt-4 flex justify-center items-center gap-2 w-60"
        active
        external
      >
        Go to website <IconArrowUpRight />
      </Button>

      <div
        className="text-white text-xl mt-10 mb-20"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
    </main>
  )
}
