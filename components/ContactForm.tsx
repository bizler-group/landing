import { IconMailFilled } from '@tabler/icons-react'
import useTranslation from 'next-translate/useTranslation'
import { Input } from './form/Input'
import { Button } from './ui/Button'

interface FormPayload {
  message: string
  email_address: string
}

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('common')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as FormPayload

    // TODO: send data to backend
  }

  return (
    <section id="contact" className="pt-7 px-2 mb-16 max-md:mx-5">
      <h2 className="text-4xl font-bold text-white mb-7">{t('contact_us.title')}</h2>

      <div className="flex gap-10 justify-between max-md:flex-col">
        <form className="max-w-3xl flex-1" onSubmit={onSubmit}>
          <Input
            label={t('contact_us.email')}
            className="flex-1"
            name="email_address"
            placeholder={t('contact_us.email_placeholder')}
            onChange={() => {}}
          />
          <Input
            className="mt-5"
            label={t('contact_us.message')}
            name="message"
            type="textarea"
            placeholder={t('contact_us.message_placeholder')}
            onChange={() => {}}
          />

          <Button className="mt-10 max-md:mx-auto max-md:w-full" type="submit">
            {t('contact_us.submit')}
          </Button>
        </form>

        <div className="text-white w-[40%] max-md:w-full">
          <h3 className="font-bold text-2xl max-md:mb-3">
            {t('contact_us.reach_us_directly')}
          </h3>
          <p className="text-base font-normal">
            {t('contact_us.reach_us_description')}
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
    </section>
  )
}
