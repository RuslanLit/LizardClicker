import {Telegraf, Markup} from 'telegraf'

const token = '7871819035:AAExNeq7wScjTn-Xhk1lToDrKJDMHmqvyPc'
const webAppUrl = 'https://test-lizard-test.web.app/'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
    ctx.reply(
        'Привіт! Починаємо гру!',
        Markup.inlineKeyboard([
            Markup.button.webApp('Open mini app', `${webAppUrl}?ref=${ctx.payload}`)
        ])
    )
})

bot.launch()
