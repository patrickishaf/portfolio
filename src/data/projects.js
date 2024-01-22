import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';
import proj4 from '../assets/proj4.png';
import exchange from '../assets/exchange.png';

const projects = [
  {
    "img": exchange,
    "name": "Financial Charts",
    "desc": "Real-time price-monitoring candlestick charts",
    "skills": [
      "HTML",
      "SCSS",
      "Python",
      "Flask"
    ],
    "live": "https://roqqu.vercel.app/exchange",
    "github": "https://github.com/patrickishaf/roqqu"
  },
  {
    "img": proj1,
    "name": "ProtectX",
    "desc": "Discord anti-crash bot",
    "skills": [
      "React",
      "Express",
      "Discord.js",
      "Node.js",
      "HTML",
      "SCSS",
      "Python",
      "Flask"
    ],
    "live": "https://roqqu.vercel.app",
    "cached": false
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
    "img": proj4,
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