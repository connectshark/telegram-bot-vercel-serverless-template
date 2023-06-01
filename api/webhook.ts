import type { VercelRequest, VercelResponse } from '@vercel/node'
import bot from '../bot'

export default async function (req: VercelRequest, res: VercelResponse) {
  const { body } = req
  const { chat: { id }, text } = body.message
  await bot.sendMessage(id, text)
  res.status(204).send('')
}