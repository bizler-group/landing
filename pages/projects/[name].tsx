import type { GetStaticPaths, GetStaticProps } from 'next'
import { nunitoSans } from '..'
import { Button } from '~/components/ui/Button'
import { IconArrowUpRight } from '@tabler/icons-react'
import { PROJECT_DETAILS } from '~/constants/projects'
import useTranslation from 'next-translate/useTranslation'

type Project = {
  title: string
  description: string
  link: string | null
  tools: string[]
  type: string
}

export default function Project(props: Project) {
  const { description, link, title, tools, type } = props
  const { t } = useTranslation('common')

  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50 max-md:px-5`}
    >
      <div className="mb-7 mt-16 flex items-center justify-between max-md:flex-col max-md:justify-center">
        <h1 className="text-4xl font-bold text-white max-md:mb-5">{t(title)}</h1>

        <div className="space-x-3">
          {tools.map((tool) => (
            <Button
              key={tool}
              className="py-1 px-4 max-md:py-1.5 max-md:px-2.5 max-md:text-sm"
              variant="outlined"
            >
              {tool}
            </Button>
          ))}

          <Button
            className="mt-4 ml-4 py-3 px-6 inline-block max-md:hidden max-md:text-sm"
            active
          >
            {type}
          </Button>
        </div>
      </div>

      <div>
        {link && (
          <Button
            href={link}
            className="mt-4 flex justify-center items-center gap-2 w-60 max-md:w-max max-md:mx-auto"
            active
            external
          >
            Go to website <IconArrowUpRight />
          </Button>
        )}
      </div>

      <div
        id="content-description-project"
        className="text-white text-xl mt-10 mb-20 max-md:text-lg max-md:mt-5 max-md:mb-10"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = Object.keys(PROJECT_DETAILS).map((name) => {
    const languages = Object.keys(
      PROJECT_DETAILS[name as keyof typeof PROJECT_DETAILS].description
    )

    return languages.map((locale) => ({
      params: { name },
      locale,
    }))
  })

  return {
    paths: paths.flat(),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { name } = params ?? {}

  let project: Project | null = null

  try {
    if (name && typeof name === 'string') {
      const data = PROJECT_DETAILS[name as keyof typeof PROJECT_DETAILS]
      project = {
        description: data.description[locale as keyof typeof data.description],
        link: data.link,
        title: data.title,
        tools: data.tools,
        type: data.type,
      }
    }
  } catch (error) {
    project = null
  }

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: { ...project },
  }
}
