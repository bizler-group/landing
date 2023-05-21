import { nunitoSans } from '.'
import { Button } from '~/components/ui/Button'
import { TeamAvatar } from '~/components/TeamAvatar'
import { ROLES, TEAM_MEMBERS } from '~/constants/data'

export default function Team() {
  return (
    <main
      className={`container ${nunitoSans.className} overflow-hidden relative z-50`}
    >
      <h1 className="text-white text-4xl text-center mb-10 mt-16">
        Meet the <strong>team</strong>
      </h1>

      <div className="flex items-center justify-center gap-5">
        {ROLES.map((role, index) => (
          <Button
            key={role.id}
            className="!py-2 !px-4"
            variant="outlined"
            active={index === 0}
          >
            {role.ru}
          </Button>
        ))}
      </div>

      <div className="mt-16 grid gap-y-10 grid-rows-3 grid-cols-4">
        {TEAM_MEMBERS.map((member) => (
          <TeamAvatar
            key={member.id}
            name={member.name}
            position={member.position}
            image={member.image}
            flag={member.flag}
            country={member.country}
          />
        ))}
      </div>
    </main>
  )
}
