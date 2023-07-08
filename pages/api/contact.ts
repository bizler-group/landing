import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ok: boolean
}

const botToken = process.env.TELEGRAM_BOT_TOKEN
const chatId = process.env.TELEGRAM_CHAT_ID

const generateText = (email: string, message: string, phone?: string) => {
  let text = `Email: ${email}`
  if (phone) {
    text += `\nPhone: ${phone}`
  }
  text += `\n\n${message}`
  return text
}

const telegramApi = async (method: string, payload: any) => {
  const url = `https://api.telegram.org/bot${botToken}/${method}`
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  if (!response.ok) {
    throw new Error('Telegram API error')
  }

  const data = await response.json()
  if (!data.ok) {
    throw new Error('Telegram API error')
  }

  return data
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method
  if (method !== 'POST') {
    return res.status(405).json({ ok: false })
  }

  const { email_address: email, message, phone } = req.body

  if (!email || !message) {
    return res.status(422).json({ ok: false })
  }

  const text = generateText(email, message, phone)

  try {
    const data = await telegramApi('sendMessage', { chat_id: chatId, text })
    await telegramApi('pinChatMessage', {
      chat_id: chatId,
      message_id: data.result.message_id,
      disable_notification: false,
    })
  } catch (error) {
    return res.status(500).json({ ok: false })
  }

  res.status(200).json({ ok: true })
}
