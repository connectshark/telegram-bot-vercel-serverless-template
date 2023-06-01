# telegram-bot-vercel-serverless-template

[EN](../README.md)

專門給新手的一個簡單的telegram機器人模板

點擊右上角的`Use this template`或是[點擊這裡](https://github.com/connectshark/telegram-bot-vercel-serverless-template/generate)可以馬上將此模板新增至自己的`github`中，或是可以選擇點擊按鈕[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fconnectshark%2Ftelegram-bot-vercel-serverless-template&env=TELEGRAM_BOT_TOKEN)直接部署至`Vercel`上

## 目錄
- [一鍵部署](#一鍵部署)
- [必要內容](#必要內容)
- [本地開發](#本地開發)
  - [複製這個專案](#複製這個專案)
  - [設定環境變數](#設定環境變數)
  - [取得對外DOMAIN](#取得對外domain)
  - [設定Webhook](#設定webhook)
- [部署](#部署)
  - [用Vercel CLI部署](#用vercel-cli部署)
  - [設定環境變數](#環境變數)
  - [設定Webhook](#webhook)

## 一鍵部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fconnectshark%2Ftelegram-bot-vercel-serverless-template&env=TELEGRAM_BOT_TOKEN)
## 必要內容

在使用此模板以前必須先對以下內容有基本的認識

- 取得你的Telegram bot TOKEN => [Telegram: Contact @botfather](https://t.me/botfather)
- 安裝 Vercel CLI => [Vercel CLI Overview | CLI Commands | Vercel Docs](https://vercel.com/docs/cli)
- 對外連網的Ngrok => [\[Day-37\] 使用 ngrok 讓外網連接你的 API - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天 (ithome.com.tw)](https://ithelp.ithome.com.tw/articles/10197345)


## 本地開發

### 複製這個專案

你可以點擊這個專案右上角的`Use this template`或是[點擊這裡](https://github.com/connectshark/telegram-bot-vercel-serverless-template/generate)可以馬上將此模板新增至自己的`github`中，複製到本地端後進入資料夾

### 設定環境變數

在根目錄中新增`.env`檔案，並且新增以下內容
```bash=
TELEGRAM_BOT_TOKEN=<TELEGRAM_BOT_TOKEN>
```
將telegram提供的TOKEN設定進去

### 取得對外DOMAIN
在終端機中輸入以下內容
```
vercel dev

> Vercel CLI 30.0.0
> Ready! Available at http://localhost:3000
```
將ngrok開啟取得一個對外的URL，在另一個終端機中輸入以下內容
```
ngrok http 3000
```
即可取得一組對外連線的URL

### 設定Webhook
最後要設定Webhook，複製以下網址
```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<Webhook_URL>
```
將內容替換成自己的TOKEN和webhook url
- TELEGRAM_BOT_TOKEN
- Webhook_URL

需注意Webhook URL設定的時候是 DOMAIN名稱+'/api/webhook' 整段才會對應到webhook的路徑上
將以上內容修改完成後，在瀏覽器中開啟一頁空白頁面貼上送出即可



## 部署

### 用Vercel CLI部署

在終端機中輸入以下內容

```
vercel
```
即可自動部署至Vercel上

### 環境變數

前往Vercel的後台[Dashboard – Vercel](https://vercel.com/dashboard)

找到剛剛部署的專案後設定環境變數
位置在這:
```
https://vercel.com/<YOUR_VERCEL_NAME>/<YOUR_VERCEL_PROJECT>/settings/environment-variables
```

將自己的TOKEN設定進去即可

|        KEY         |        VALUE         |
|:------------------:|:--------------------:|
| TELEGRAM_BOT_TOKEN | <TELEGRAM_BOT_TOKEN> |

### Webhook
部署完成後會取得一組Vercel提供的URL，重新設定一次Webhook即可
```
https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook?url=<Webhook_URL>
```
<TELEGRAM_BOT_TOKEN>對應的是機器人TOKEN，<Webhook_URL>則是對應Vercel的URL + '/api/webhook'
將以上內容修改完成後，在瀏覽器中開啟一頁空白頁面貼上送出即可