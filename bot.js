import TelegramBot from 'node-telegram-bot-api'
import dotenv from 'dotenv'
dotenv.config()
const TOKEN = process.env.TELEGRAM_BOT_TOKEN
const bot = new TelegramBot(TOKEN)

export default bot