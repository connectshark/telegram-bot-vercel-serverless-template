# telegram-bot-vercel-serverless-template

[TW](./readme/tw.md)

Here is a simple Telegram bot template specifically designed for beginners

Click on the `Use this template` button in the upper right or [click here](https://github.com/connectshark/telegram-bot-vercel-serverless-template/generate) will immediately add this template to your own GitHub repository.Alternatively, you can click on the button [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fconnectshark%2Ftelegram-bot-vercel-serverless-template&env=TELEGRAM_BOT_TOKEN) to directly deploy it to Vercel.

##### The content on this page has been translated using ChatGPT


## Table of contents
- [One Click Deployment](#one-click-deployment)
- [Essential Content](#essential-content)
- [Local Development](#local-development)
  - [Clone Project](#clone-project)
  - [Set Environment Variable](#set-environment-variable)
  - [Obtain External Domain](#obtain-external-domain)
  - [Set Webhook](#set-webhook)
- [Deployment](#Deployment)
  - [Deploy with Vercel CLI](#deploy-with-vercel-cli)
  - [Environment Variable](#environment-variable)
  - [Webhook](#webhook)

## One Click Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fconnectshark%2Ftelegram-bot-vercel-serverless-template&env=TELEGRAM_BOT_TOKEN)
## Essential Content

Before using this template, it is important to have a basic understanding of the following content.

- Get Your Telegram bot TOKEN => [Telegram: Contact @botfather](https://t.me/botfather)
- Install Vercel CLI => [Vercel CLI Overview | CLI Commands | Vercel Docs](https://vercel.com/docs/cli)
- Install Ngrok => [\[Day-37\] 使用 ngrok 讓外網連接你的 API - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天 (ithome.com.tw)](https://ithelp.ithome.com.tw/articles/10197345)


## Local Development

### Clone Project
Click on the `Use this template` button in the upper right or [click here](https://github.com/connectshark/telegram-bot-vercel-serverless-template/generate) will immediately add this template to your own GitHub repository.



### Set Environment Variable

Create a `.env` file in the root directory and add the following content.
```bash=
TELEGRAM_BOT_TOKEN=<TELEGRAM_BOT_TOKEN>
```
Set the provided TOKEN from Telegram Bot.

### Obtain External Domain
Enter the following content in the terminal.
```
vercel dev

> Vercel CLI 30.0.0
> Ready! Available at http://localhost:3000
```
Open ngrok to obtain a publicly accessible URL, then enter the following content in another terminal.
```
ngrok http 3000
```

### Set Webhook
Finally, set up the webhook and copy the following URL
```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<Webhook_URL>
```
Replace the content with your own TOKEN and webhook URL.
- TELEGRAM_BOT_TOKEN
- Webhook_URL

Note that when setting the webhook URL, it should be DOMAIN name + '/api/webhook' to correspond to the path of the webhook. Once you have made the necessary modifications to the above content, open a blank page in your browser and paste it to submit.



## Deployment

### Deploy with Vercel CLI

Enter the following content in the terminal.

```
vercel
```
It will be automatically deployed to Vercel.

### Environment Variable

Go to Vercel Dashboard[Dashboard – Vercel](https://vercel.com/dashboard)

After locating the recently deployed project, configure the environment variables.

Set your own bot token inside.

|        KEY         |        VALUE         |
|:------------------:|:--------------------:|
| TELEGRAM_BOT_TOKEN | <TELEGRAM_BOT_TOKEN> |

### Webhook
After completing the deployment, you will obtain a URL provided by Vercel. Simply reconfigure the webhook.
```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<Webhook_URL>
```
<TELEGRAM_BOT_TOKEN> corresponds to the bot's TOKEN, and <Webhook_URL> corresponds to the Vercel URL + '/api/webhook'. Once you have made the necessary modifications to the above content, open a blank page in your browser, paste it, and submit.