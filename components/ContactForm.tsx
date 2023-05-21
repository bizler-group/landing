import { IconMailFilled } from '@tabler/icons-react'
import { Input } from './form/Input'
import { Button } from './ui/Button'

export const ContactForm: React.FC = () => {
  return (
    <div className="pt-7 px-2 mb-16">
      <h2 className="text-4xl font-bold text-white mb-7">Свяжитесь с нами</h2>

      <div className="flex gap-10 justify-between">
        <form className="max-w-3xl flex-1">
          <div className="flex gap-5">
            <Input
              label="First Name"
              className="flex-1"
              name="first_name"
              placeholder="First Name"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Last Name"
              className="flex-1"
              name="last_name"
              placeholder="Last Name"
              value=""
              onChange={() => {}}
            />
          </div>
          <Input
            className="my-5"
            label="Message"
            name="message"
            type="textarea"
            placeholder="Message"
            value=""
            onChange={() => {}}
          />
          <div className="flex gap-5">
            <Input
              label="Email"
              className="flex-1"
              name="email-address"
              placeholder="email@example.com"
              value=""
              onChange={() => {}}
            />
            <Input
              label="Phone Number"
              className="flex-1"
              name="phone-number"
              placeholder="+4 "
              value=""
              onChange={() => {}}
            />
          </div>

          <Button className="mt-10" type="submit">
            Отправить
          </Button>
        </form>

        <div className="text-white w-[40%]">
          <h3 className="font-bold text-2xl">Want to reach us directly?</h3>
          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id dui
            pharetra elementum sit id sagittis non donec egestas.
          </p>

          <div className="mt-10">
            <span className="flex gap-3 mb-4">
              <IconMailFilled />
              <a href="mailto:contact@example.com">contact@example.com</a>
            </span>
            <span className="flex gap-3 mb-4">
              <IconMailFilled />
              <a href="mailto:support@example.com">support@example.com</a>
            </span>
            <span className="flex gap-3">
              <IconMailFilled />
              <a href="mailto:press@example.com">press@example.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
