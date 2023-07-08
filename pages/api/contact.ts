import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean
}

const botToken = process.env.TELEGRAM_BOT_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method
  if (method !== 'POST') {
    return res.status(405).json({ ok: false })
  }

  const { email_address: email, message } = req.body

  if (!email || !message) {
    return res.status(422).json({ ok: false })
  }

  const text = `Email: ${email}\n\n${message}`
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chat_id: chatId, text })
  })

  if (!response.ok) {
    return res.status(500).json({ ok: false })
  }

  res.status(200).json({ ok: true })
}
