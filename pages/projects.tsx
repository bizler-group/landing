import { Button } from '~/components/ui/Button'

export default function Project() {
  return (
    <div>
      <h1>Портфолио</h1>

      <div>
        <Button variant="outlined" active>
          Все проекты
        </Button>
        <Button className="ml-4" variant="outlined">
          Website
        </Button>
        <Button className="ml-4" variant="outlined">
          CRM
        </Button>
        <Button className="ml-4" variant="outlined">
          Mobile app
        </Button>
      </div>
    </div>
  )
}
