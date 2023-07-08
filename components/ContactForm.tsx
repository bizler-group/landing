import { IconMailFilled } from '@tabler/icons-react'
import { useState } from 'react'
import { toast, ToastOptions } from 'react-toastify'
import useTranslation from 'next-translate/useTranslation'

import { Input } from './form/Input'
import { Button } from './ui/Button'

interface FormPayload {
  message: string
  email_address: string
}

const isEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}

const toastOptions: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  theme: 'dark',
}

export const ContactForm: React.FC = () => {
  const { t } = useTranslation('common')
  const [emailError, setEmailError] = useState<string | null>(null)
  const [messageError, setMessageError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(
      formData.entries()
    ) as unknown as FormPayload

    if (!isEmail(data.email_address)) {
      setEmailError(t('contact_us.invalid_email'))
      return
    }

    if (!data.message || data.message.length < 10) {
      setMessageError(t('contact_us.message_min_length'))
      return
    }

    setEmailError(null)
    setMessageError(null)

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    if (res.ok) {
      form.reset()
      toast.success(t('contact_us.success') as string, toastOptions)
    } else {
      toast.error(t('contact_us.error') as string, toastOptions)
    }
  }

  return (
    <section id="contact" className="pt-7 px-2 mb-16 max-md:mx-5">
      <h2 className="text-4xl font-bold text-white mb-7">
        {t('contact_us.title')}
      </h2>

      <div className="flex gap-10 justify-between max-md:flex-col">
        <form className="max-w-3xl flex-1" onSubmit={onSubmit}>
          <Input
            label={t('contact_us.email')}
            className="flex-1"
            name="email_address"
            placeholder={t('contact_us.email_placeholder')}
            onBlur={(e) =>
              setEmailError(
                e.target.value && !isEmail(e.target.value)
                  ? t('contact_us.invalid_email')
                  : null
              )
            }
            error={emailError}
            required
          />
          <Input
            className="mt-5"
            label={t('contact_us.message')}
            name="message"
            type="textarea"
            placeholder={t('contact_us.message_placeholder')}
            onBlur={(e) =>
              setMessageError(
                e.target.value && e.target.value.length < 10
                  ? t('contact_us.message_min_length')
                  : null
              )
            }
            error={messageError}
            required
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
