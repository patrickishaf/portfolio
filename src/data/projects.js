import proj3 from '../assets/projects/proj3.png';
import exchange from '../assets/projects/exchange.png';
import roqquWallet from '../assets/projects/roq-wallet.png';
import portfolio from '../assets/projects/portfolio.png';
import hanzo from '../assets/projects/hanzo.png';
import quickkitchen from '../assets/projects/quickkitchen.png';
import zentrader from '../assets/projects/zentrader.png';

const projects = [
  {
    "img": roqquWallet,
    "name": "Roqqu Wallet",
    "desc": "Web Wallet app for buying and selling cryptocurrencies",
    "skills": [
      "React.js",
      "NodeJS",
      "Express",
      "MySQL",
      "gRPC",
      "AWS"
    ],
    "live": "https://app.roqqu.com",
  },
  {
    "img": hanzo,
    "name": "Hanzo",
    "desc": "Create beautiful design mockups for presentations",
    "skills": [
      "React.js",
      "Typescript",
      "Redux Toolkit",
      "Vitest",
      "Express",
      "Node.js",
      "CSS",
      "HTML"
    ],
    "live": "https://hanzo-app.vercel.app"
  },
  {
    "img": zentrader,
    "name": "ZenTrader Bot",
    "desc": "Crypto Trading Telegram Bot",
    "skills": [
      "Python",
      "SQLite",
      "AWS",
    ],
    "live": "https://t.me/bybitTrBot",
    "cached": false
  },
  {
    "img": exchange,
    "name": "Financial Charts",
    "desc": "Real-time price-monitoring candlestick charts",
    "skills": [
      "React",
      "Lightweight charts",
      "Javascript",
      "Websocket"
    ],
    "live": "https://roqqu.vercel.app/exchange",
    "github": "https://github.com/patrickishaf/roqqu"
  },
  {
    "img": quickkitchen,
    "name": "QuickKitchen",
    "desc": "(Ecommerce) Restaurant website for ordering food from a growing business",
    "skills": [
      "React",
      "Typescript",
      "NodeJS",
      "NestJS",
      "CSS",
      "SQLite",
      "AWS"
    ],
    "github": "https://github.com/patrickishaf/qc-client",
    "cached": false
  },
  {
    "img": portfolio,
    "name": "Portfolio",
    "desc": "You're using it right now",
    "skills": [
      "React",
      "Typescript",
      "CSS"
    ],
    "github": "https://roqqu.vercel.app",
    "cached": false
  },
]

export default projects;