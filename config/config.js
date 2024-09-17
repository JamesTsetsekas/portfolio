
import profile from './profile.png';
import {
  faGithub,
  faChrome,
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
  faFreeCodeCamp,
  faLinkedin,
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
  faTwitterSquare,
  faPhp,
  faJs,
  faNodeJs,
  faWordpress,
  faLinux,
  faNode,
  faStripe,
  faBitcoin,
  faBtc,
  faWordpressSimple,
  faPaypal
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faChalkboardTeacher, faUsers, faLayerGroup, faCertificate, faBitcoinSign, faBoltLightning, faComputer, faNetworkWired, faLink, faBolt } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "James Tsetsekas",
  links: [
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Projects",
      link: "/#projects",
    },
    {
      title: "Contact",
      link: "/#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}
export const intro = {
  greeting: {
    emoji: "👋",
    text: [" Hey,", "I'm "]
  },
  title: "James Tsetsekas",
  description: "I'm a Full Stack Web Developer specializing in building web applications using HTML, CSS, JavaScript, & PHP. I have strong experience with Front End Development Libraries like React, Vue, and Angular as well as Algorithms, Data Structures, Back End Development and APIs with Node.js. I am interested in teams valuing quality, clean code principles. In my free time I teach & mentor hundreds of students via coding communities and meetups.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1eiKzle8AcAT-6E8ut5n2vl-d3FKoYAs8/view?usp=sharing",
      isPrimary: false,
    },
    {
      title: "⚡ Bitcoin Tip ⚡",
      link: "https://btc.jamestsetsekas.com/apps/4Y4qW4zydTxQWWydQidcgjfT6v3F/pos",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "About Me",
  description: [
    "I'm a Full Stack Web Developer with Object Oriented Programming experience specializing in building web applications using HTML, CSS, JavaScript, & PHP. I have strong experience with Front End Development Libraries like React, Vue, and Angular as well as Algorithms, Data Structures, Back End Development and APIs with Node.js. I completed Scrimba’s Frontend Developer Bootcamp and Free Code Camp’s Front End Development Libraries, Back End Development, APIs, and JavaScript Algorithms and Data Structures courses. I am interested in teams valuing quality, clean code principles. In my free time I teach & mentor hundreds of students via coding communities and meetups.",
    "I have experience in development, leadership, and management. I started my career at the big four accounting firm KPMG working as a IT Engineer. Later I went on to be a System Administrator at the largest pharmaceutical company in the world Novartis. Immediately following that, I went on to accept a position as a Software Engineer at the world’s largest franchisor of residential real estate brokerages. I worked on LeadRouter a web-based real-estate listing sales lead tool. At Realogy I provided leadership as a subject matter expert on best practices and developed an Intranet for technical documentation of development tools and APIs. I was the Lead Developer at a large construction & real estate development company where I developed highly dynamic websites and applications for residential and commercial properties and leasing using HTML, CSS, Bootstrap, JavaScript, PHP, WordPress, Angular, custom WordPress PHP plugins, contact forms. I went on to work for an IT Managed Service Provider where I was a Full Stack Web Developer tasked with Developing responsive single page web applications and dashboards for mobile and desktop, APIs, system integrations and browser extensions, to optimize CRM workflows. using JavaScript, Express.js, Node.js, Axios, React, CSS, Bootstrap and Chakra.",
    "Currently I am a Full Stack Web Developer at OLM Foods where I work on RightBytes an E-Commerce Online Food Ordering platform  including functionality for consumers, store admin, kiosks, thermal printing, and digital signage solutions for Web / iOS / Android applications. Mobile apps leverage both PHP & Node backend APIs. With Stripe and Paypal integrations for payments, and DoorDash integration or self managed solutions for deliveries. I also develop our WordPress WooCommerce B2B E-Commerce portal Used by thousands of users to order and manage products to sell in their stores, generate sales & traffic reporting, predictive analytics i.e. what to order & when to prepare it to maximize sales & minimize waste, with Custom PHP, Cron jobs, WordPress plugins, Themes, SAP, and Single sign-on Integrations.",
    "When I’m not working, I focus on my hobbies which are: Bitcoin, Lightning Network, Attending and organizing coding / IT meetups,  conferences and seminars,  Real Estate, Finance, Travel, Skiing, Dogs, Building Computers & Servers, Self - Hosting Websites & Media Servers, and Reading one of my favorite books at the moment is The Pragmatic Programmer by Andy Hunt and Dave Thomas",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Full Stack Web Developer",
      description: "I create responsive websites using HTML5, CSS, Javascript and the  MERN (MongoDB, Express.js, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP) tech stacks additonally I love to work with Sanity, Wordpress, CakePHP, Laravel, Symfony, Angular, Vue.js, Bootstrap, Chakra UI, and Tailwinds.",
      icons: [
        {
          icon: faCode,
        },
        {
          icon: faPhp,
        },
        {
          icon: faWordpress,
        },
        {
          icon: faJs,
        },
        {
          icon: faNode,
        }
      ]
    },
    {
      title: "Bitcoin enthusiast",
      description: "I love learning & teaching others about Bitcoin. I enjoy contributing to many open source Bitcoin related projects, and organizing and attending Bitcoin meetups and conferences. I'm a Bitcoin ⚡Lightning Network⚡ Node Operator. Contact me to open a channel, get help with your node, or learn more about the lightning network.",
      icons: [
        {
          icon: faBoltLightning,
        },
        {
          icon: faBitcoin,
        },
        {
          icon: faBtc,
        },
      ]
    },
    {
      title: "Teacher & Mentor",
      description: "I teach, mentor, provide coding reviews for hundreds of students via coding course communities and meetups.",
      icons: [
        {
          icon: faChalkboardTeacher,
        },
        {
          icon: faUsers,
        },
      ]
    },
  ],
}

export const skills = {
  title: "Skills & Certifications",
  cards: [
    {
      title: "Scrimba Frontend Developer Bootcamp",
      description: "Approximately 80+ hours of teacher-led group sessions and solo projects covering HTML, CSS, JavaScript, React, Responsive design, UI design, Git, peer code review, & mentoring.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://scrimba.com/certificate/u3bwdkfb/gfrontend"
        }
      ],
      icons: [
        {
          icon: faHtml5,
        },
        {
          icon: faCss3,
        },
        {
          icon: faJsSquare,
        },
        {
          icon: faReact,
        },
      ]
    },
    {
      title: "FreeCodeCamp.org Front End Libraries Developer Certification",
      description: "Approximately 300 hours of coursework covering how to create powerful Single Page Applications (SPAs) with React and Redux, and style them with Bootstrap and Sass.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.freecodecamp.org/certification/jamestsetsekas/front-end-development-libraries"
        }
      ],
      icons: [
        {
          icon: faFreeCodeCamp,
        },
        {
          icon: faReact,
        },
        {
          icon: faBootstrap,
        },
        {
          icon: faSass,
        },
      ]
    },
    {
      title: "FreeCodeCamp.org JavaScript Algorithms and Data Structures Developer Certification",
      description: "Approximately 300 hours of coursework covering the fundamentals of JavaScript including variables, arrays, objects, loops, and functions, & Object Oriented Programming (OOP) and Functional Programming (FP).",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.freecodecamp.org/certification/jamestsetsekas/javascript-algorithms-and-data-structures"
        },
      ],
      icons: [
        {
          icon: faFreeCodeCamp,
        },
        {
          icon: faJsSquare,
        },
        {
          icon: faLayerGroup,
        }
      ]
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "DiceLN - Lightning Network Dice Game",
      description: "I created a Full Stack Web App Dice game that uses the Bitcoin Lightning Network for instant deposit / withdraw. The game is provably fair and can be played with any amount of satoshis and includes a chat. The game is built with Node.js, Express, Socket.IO, Axios, and LND, LNBits API. Contact for a demonstration, to play, or learn more about the lightning network! Currently Closed Source",
      linkIcons: [
        {
          icon: faNodeJs,
        },
        {
          icon: faDatabase,
        },
        {
          icon: faBolt,
        },
      ]
    }, {
      title: "RightBytes / DishPatch",
      description: "I am the Lead developer on RightBytes an E-Commerce Online Food Ordering platform including functionality for consumers, store admin, kiosks, thermal printing, and digital signage solutions for Web / iOS / Android applications. Mobile apps leverage both PHP & Node backend APIs. With Stripe and Paypal integrations for payments, and DoorDash integration or self managed solutions for deliveries.",
      linkIcons: [
        {
          icon: faPhp,
        },
        {
          icon: faNodeJs,
        },
        {
          icon: faStripe,
        },
        {
          icon: faPaypal,
        },
      ]
    }, {
      title: "Jersey City Bitcoin",
      description: "I am the founder of the Jesey City Bitcoin Meetup, a decentralized community for those interested in meeting up to discuss, and learn more about bitcoin in the Jersey City, New Jersey / New York area. You can be well versed or new, all are welcome. I created a blog for members to see upcoming events and contribute thoughtful discussions with the community.",
      linkIcons: [
        {
          icon: faNodeJs,
        },
        {
          icon: faJsSquare,
        },
        {
          icon: faChrome,
          link: "https://jerseycitybitcoin.com/",
        }, {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/JerseyCityBitcoin",
        }
      ]
    }, {
      title: "OLM Customer Portal",
      description: "I am the Lead developer on a WordPress WooCommerce B2B E-Commerce platform with Web / iOS / Android applications. Used by thousands of users to order and manage products to sell in their stores, generate sales & traffic reporting, predictive analytics i.e. what to order & when to prepare it to maximize sales & minimize waste. With Custom PHP, Cron jobs, WordPress plugins, Themes, SAP, and Single sign-on Integrations. ",
      linkIcons: [
        {
          icon: faWordpressSimple,
        },
        {
          icon: faPhp,
        },
      ]
    }, {
      title: "Jamesco Web Designs",
      description: "I'm James, the owner and sole developer at Jamesco Web Designs, specializing in affordable web design and development. Recognizing that many small businesses face budget constraints for upfront costs, I've introduced a $0 down and $200 a month model. This offers a more manageable solution, avoiding financial strain. Additionally, I provide services for E-commerce, SaaS, and custom development. Check out our offerings!",
      linkIcons: [
        {
          icon: faNodeJs,
        },
        {
          icon: faJsSquare,
        },
        {
          icon: faChrome,
          link: "https://jamescowebdesigns.com/",
        }
      ]
    }, {
      title: "Lightning Network Point of Sale Terminal",
      description: "A Point of Sale Terminal app which makes accepting bitcoin lightning payments easy! Accessable from any internet enabled device the app calculates real time USD/BTC conversion and generates a Bitcoin Lightning Network invoice QR code and confirms once paid. This can be easily intergrated to any Wordpress WooCommerce or other Ecommerce soltuions easily. Contact me for more information.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://btc.jamestsetsekas.com/apps/2cYmNXrnH6KaBBTmQMQNBbxXpQNg/pos",
        }, {
          icon: faGithub,
          link: "https://github.com/btcpayserver/btcpayserver",
        },
      ]
    }, {
      title: "Self-hosted HTML5 Speedtest Docker Container",
      description: "Great for troubleshooting bandwidth, ping and jitter issues. Free and Open Source Speed Test. No Flash, No Java, No Websocket. Download, Upload, Ping, Jitter, IP Address, ISP, distance from server (optional), Telemetry (optional), Results sharing (optional), Multiple Points of Test (optional)",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://speed.jamestsetsekas.com/",
        },
        {
          icon: faGithub,
          link: "https://github.com/librespeed/speedtest",
        },
      ]
    }, {
      title: "Windows XP Minesweeper in React",
      description: "Windows XP Minesweeper in React with Hooks and mobile support. Features include Release double mouse press at the same time to open ceils automatically, Never game over for the first click, Switch difficulty from the menu, Supports mobile! (long press for placing flags)",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://minesweeper-chi-fawn.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Minesweeper",
        },
      ]
    },
    {
      title: "SatsSpend - NYC Bitcoin Business List",
      description: "SatsSpend is a website of New York City Area businesses that accept bitcoin, including a searchable map and list. There are also some useful resources for spenders and receivers of bitcoin towards the bottom of the page.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://jamestsetsekas.github.io/satsspend-newyorkcity/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/satsspend-newyorkcity",
        },
      ]
    },
    {
      title: "Lightning Network Node",
      description: "I run a Bitcoin Lightning Network node using lnd, with a BTCPay server instance. I love routing satoshis, and I'm always looking to open more channels. Contact me to open a channel or learn more about the lightning network.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://btc.jamestsetsekas.com/apps/4Y4qW4zydTxQWWydQidcgjfT6v3F/pos",
        },
        {
          icon: faGithub,
          link: "https://github.com/lightningnetwork/lnd",
        },
      ]
    },
    {
      title: "React Note App",
      description: "A React Markdown note taking app, with a simple, clean, and responsive UI. Features the ability to save and retrieve notes from local storage",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://notes-app-one-lemon.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Notes-App/",
        },
      ]
    },
    {
      title: "Quizzical",
      description: "A React Quiz application that utilizes fetch API requests to display multiple choice trivia questions and calculate scores.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://quizzical-react-quiz.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Quizzical-React-Quiz/",
        },
      ]
    },
    {
      title: "PicSome",
      description: "A React E-Commerce project that uses a fetch API call to display Images including functional components to favorite images, add them to the cart and checkout.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://pic-some-beta.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/PicSome/",
        },
      ]
    },
    {
      title: "StarGaze",
      description: "A React Single page application that uses fetch API requests to explore the most starred projects on GitHub with filter by date range and languages functionality.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://stargaze-jamestsetsekas.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/stargaze",
        },
      ]
    },
    {
      title: "Meme Generator",
      description: "A React application that makes a fetch API request to imgflip.com to get the top 100 memes and the functionality for the user to add text.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://meme-generator-psi-six.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Meme-Generator/",
        },
      ]
    },
    {
      title: "Chrome New tab Extension",
      description: "A Chrome extension leveraging fetch API requests to get weather, Bitcoin price, and display the current time when you open a new tab.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://new-tab-chrome-extension.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/New-Tab-Chrome-Extension",
        },
      ]
    },
    {
      title: "Movie Watchlist",
      description: "Search for movies using the OpenMovie Database API using a fetch request you can save items to a watchlist and store in local storage for persistence.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://movie-watchlist-nu.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Movie-Watchlist",
        },
      ]
    },
    {
      title: "Tenzies",
      description: "Fun dice game Roll untill all your dice are the same, click each die to freeze it between rolls.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://tenzies-theta.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Tenzies/",
        },
      ]
    },
    {
      title: "Color Scheme Generator",
      description: "A tool to generate color schemes by fetching them from thecolorapi.com and manipulating the DOM to display them.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://color-scheme-generator-tau.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Password-Generator",
        },
      ]
    },
    {
      title: "Password Generator",
      description: "A secure password generator tool that can be used in webpage or chrome extension. Never use an insecure password again!",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://password-generator-nu-ruby.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Password-Generator",
        },
      ]
    },
    {
      title: "Invoice Creator",
      description: "A Dynamic Invoice Creator web app, that can be used in a webpage or as a chrome browser extension.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://invoice-creator.vercel.app/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Invoice-creator",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Lets schedule a meeting, feel free to reach out directly by email at James@JamesTsetsekas.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:James@JamesTsetsekas.com",
      isPrimary: true,
    },
  ]
}

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "James Tsetsekas | Full Stack Web Developer",
  description: "I create responsive & dynamic web apps.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@JamesTsetsekas",
  description: "Full-Stack Web Developer",
  cards: [
    {
      title: "My website",
      link: "https://jamestsetsekas.com/",
      icon: faChrome,
      iconb: faLink,
    },
    {
      title: "My GitHub",
      link: "https://github.com/JamesTsetsekas",
      icon: faGithub,
      iconb: faGithubAlt
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/jamestsetsekas/",
      icon: faLinkedin,
      iconb: faLinkedinIn
    },
    {
      title: "My Twitter",
      link: "https://twitter.com/JamesTsetsekas",
      icon: faTwitter,
      iconb: faTwitterSquare,
    },
    {
      title: "BTC Pay server",
      link: "https://btc.jamestsetsekas.com/apps/4Y4qW4zydTxQWWydQidcgjfT6v3F/pos",
      icon: faBitcoin,
      iconb: faBoltLightning,
    },
    {
      title: "Point of Sale",
      link: "https://btc.jamestsetsekas.com/apps/2cYmNXrnH6KaBBTmQMQNBbxXpQNg/pos",
      icon: faBitcoin,
      iconb: faBoltLightning,
    },
  ]
}
