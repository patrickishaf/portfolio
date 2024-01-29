import proj3 from '../assets/projects/proj3.png';
import exchange from '../assets/projects/exchange.png';
import roqquWallet from '../assets/projects/roq-wallet.png';
import portfolio from '../assets/projects/portfolio.png';
import hanzo from '../assets/projects/hanzo.png';

const projects = [
  {
    "img": roqquWallet,
    "name": "Roqqu Wallet",
    "desc": "Web Wallet app for buying and selling cryptocurrencies",
    "skills": [
      "React.js",
      "E2E Testing",
      "Browser encryption",
      "Redux",
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
    "img": proj3,
    "name": "Kotik Bot",
    "desc": "Multi-functional Discord Bot",
    "skills": [
      "HTML",
      "CSS",
      "JS"
    ],
    "live": "https://roqqu.vercel.app",
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
  }
]

export default projects;