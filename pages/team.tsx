import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import { nunitoSans } from '.'
import { Button } from '~/components/ui/Button'
import { TeamAvatar } from '~/components/TeamAvatar'
import { ROLES, TEAM_MEMBERS } from '~/constants/data'

export default function Team() {
  const { t } = useTranslation('team')

  return (
    <main
      className={`container ${nunitoSans.className} px-5 pb-20 overflow-hidden relative z-50`}
    >
      <h1 className="text-white text-4xl text-center mb-10 mt-16">
        <Trans
          ns="team"
          i18nKey="meet_the_team"
          components={{ b: <strong /> }}
        />
      </h1>

      {/* <div className="flex flex-wrap items-center justify-center gap-5">
        {ROLES.map((role, index) => (
          <Button
            key={role.id}
            className="!py-2 !px-4 max-md:text-sm"
            variant="outlined"
            active={index === 0}
          >
            {role.ru}
          </Button>
        ))}
      </div> */}

      <div className="mt-16 grid gap-y-10 grid-rows-2 grid-cols-4 max-md:grid-cols-1">
        {TEAM_MEMBERS.map((member) => (
          <TeamAvatar
            key={member.id}
            name={t(member.name)}
            position={t(member.position)}
            image={member.image}
            flag={member.flag}
            country={t(member.country)}
          />
        ))}
      </div>
    </main>
  )
}
