import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import exchange from '../assets/exchange.png';
import roqquWallet from '../assets/roq-wallet.png';
import portfolio from '../assets/portfolio.png';

const projects = [
  {
    "img": roqquWallet,
    "name": "Roqqu Wallet",
    "desc": "Web Wallet app for buying and selling cryptocurrencies",
    "skills": [
      "React.js",
      "E2E Testing",
      "Browser Encryption",
      "Redux",
      "Styled Components",
      "Suspense",
      "Performance"
    ],
    "live": "https://app.roqqu.com",
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
    "img": proj2,
    "name": "Kahoot Answers Viewer",
    "desc": "Get answers to your kahoot quiz",
    "skills": [
      "CSS",
      "Express",
      "Node.js"
    ],
    "cached": true
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
      "Vue",
      "TS",
      "LESS"
    ],
    "github": "https://roqqu.vercel.app",
    "cached": false
  }
]

export default projects;