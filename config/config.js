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
import {
  faCode,
  faDatabase,
  faChalkboardTeacher,
  faUsers, faLayerGroup,
  faCertificate,
  faBitcoinSign,
  faBoltLightning,
  faComputer,
  faNetworkWired,
  faLink,
  faBolt,
  faShieldAlt,
  faShieldVirus
} from '@fortawesome/free-solid-svg-icons';

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
};

export const intro = {
  greeting: {
    emoji: "👋",
    text: [" Hey,", "I'm "]
  },
  title: "James Tsetsekas",
  description: "I'm a Full Stack Web Developer specializing in building web applications using HTML, CSS, JavaScript, and PHP. I have extensive experience with front-end development libraries like React, Vue, and Angular, as well as algorithms, data structures, back-end development, and APIs with Node.js. I am passionate about working with teams that value quality and clean code principles. In my free time, I teach and mentor hundreds of students through coding communities and meetups.",
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
};

export const about = {
  title: "About Me",
  description: [
    "I'm a Full Stack Web Developer with a strong background in object-oriented programming, specializing in building web applications using HTML, CSS, JavaScript, and PHP. I have extensive experience with front-end development libraries like React, Vue, and Angular, as well as algorithms, data structures, back-end development, and APIs with Node.js. I completed Scrimba’s Frontend Developer Bootcamp and Free Code Camp’s Front End Development Libraries, Back End Development, APIs, and JavaScript Algorithms and Data Structures courses. I am passionate about working with teams that value quality and clean code principles. In my free time, I teach and mentor hundreds of students through coding communities and meetups.",
    "I have experience in development, leadership, and management. I started my career at KPMG as an IT Engineer, then moved on to become a System Administrator at Novartis, the largest pharmaceutical company in the world. Following that, I worked as a Software Engineer at Realogy, the world’s largest franchisor of residential real estate brokerages, where I developed LeadRouter, a web-based real-estate listing sales lead tool. At Realogy, I provided leadership as a subject matter expert on best practices and developed an intranet for technical documentation of development tools and APIs. I was the Lead Developer at a large construction and real estate development company, where I developed highly dynamic websites and applications for residential and commercial properties using HTML, CSS, Bootstrap, JavaScript, PHP, WordPress, Angular, custom WordPress PHP plugins, and contact forms. I then worked for an IT Managed Service Provider as a Full Stack Web Developer, developing responsive single-page web applications and dashboards for mobile and desktop, APIs, system integrations, and browser extensions to optimize CRM workflows using JavaScript, Express.js, Node.js, Axios, React, CSS, Bootstrap, and Chakra.",
    "Currently, I am a Full Stack Web Developer at OLM Foods, where I work on RightBytes, an e-commerce online food ordering platform that includes functionality for consumers, store admin, kiosks, thermal printing, and digital signage solutions for web, iOS, and Android applications. Mobile apps leverage both PHP and Node backend APIs, with Stripe and PayPal integrations for payments, and DoorDash integration or self-managed solutions for deliveries. I also develop our WordPress WooCommerce B2B e-commerce portal, used by thousands of users to order and manage products to sell in their stores, generate sales and traffic reporting, and predictive analytics to maximize sales and minimize waste, with custom PHP, cron jobs, WordPress plugins, themes, SAP, and single sign-on integrations.",
    "When I’m not working, I focus on my hobbies, which include Bitcoin, the Lightning Network, attending and organizing coding and IT meetups, conferences and seminars, real estate, finance, travel, skiing, dogs, building computers and servers, self-hosting websites and media servers, and reading. One of my favorite books at the moment is 'The Pragmatic Programmer' by Andy Hunt and Dave Thomas.",
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Full Stack Web Developer",
      description: "I create responsive websites using HTML5, CSS, JavaScript, and the MERN (MongoDB, Express.js, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP) tech stacks. Additionally, I enjoy working with Sanity, WordPress, CakePHP, Laravel, Symfony, Angular, Vue.js, Bootstrap, Chakra UI, and Tailwind CSS.",
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
      title: "Bitcoin Enthusiast",
      description: "I am passionate about learning and teaching others about Bitcoin. I contribute to many open-source Bitcoin-related projects and organize and attend Bitcoin meetups and conferences. I am a Bitcoin ⚡Lightning Network⚡ Node Operator. Contact me to open a channel, get help with your node, or learn more about the Lightning Network.",
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
      description: "I teach, mentor, and provide code reviews for hundreds of students through coding course communities and meetups.",
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
};

export const skills = {
  title: "Skills & Certifications",
  cards: [
    {
      title: "Junior Cybersecurity Analyst",
      description: "This 120 Hour course prepares you for the entry-level Cisco Certified Support Technician (CCST). You will learn vital skills like threat intelligence, network security, and risk management to protect yourself and organizations from cyber attacks.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/710e77b2-beb7-4812-b0c9-2c791b0a25ee"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Cyber Threat Management",
      description: "This 27 Hour course explores governance in cybersecurity and threat management. Learn to develop policies and ensure your organization complies with ethics standards and legal and regulatory frameworks. You will also gain skills for managing threats, such as how to assess a network for vulnerabilities, manage risks, and respond to security incidents.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/cd9f929a-2943-4a85-ab89-83796d97848c"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Network Defense",
      description: "This 27 Hour course covers ways to monitor your network and how to evaluate security alerts. Delve into the tools and techniques used to protect a network, including access control, firewalls, cloud security, and cryptography. These monitoring and defense tools, along with others, work together to create a layered defense-in-depth cybersecurity strategy. The knowledge and skills that you learn will help you defend networks against many types of attacks and quickly react to any exploits that may occur.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/a5dc3ba3-af6c-4034-b82f-bfbdc5030465"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Endpoint Security",
      description: "This 27 Hour course covers how to assess the network, operating systems, and endpoints for vulnerabilities, and how to secure the network. You will also gain skills to maintain the integrity, confidentiality, and availability in your network and your data.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/53a5ab72-7d6f-4947-a0ab-9488fef939cd"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Networking Devices and Initial Configuration",
      description: "This 22 Hour course covers the essentials of network devices and how to configure them. Learn the characteristics and benefits of Cloud and Virtualization technologies. Explore how to provide Internet Protocol (IP) addresses to devices both manually and automatically. Using this knowledge, you will calculate an IP addressing scheme, configure Cisco devices to create a small network, and test for connectivity issues.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/e9b4658e-ac62-4446-b8cf-a0bb04613600"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Networking Basics",
      description: "This 22 Hour course covers the foundation of networking and network devices, media, and protocols. You will observe data flowing through a network and configure devices to connect to networks. Finally, you will learn how to use different network applications and protocols to accomplish networking tasks.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/ca0b3839-0bf9-43b1-8538-4cca7c28fabc"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Introduction to Cybersecurity",
      description: "This 6 Hour introductory course takes you inside the world of cybersecurity. You will learn cybersecurity basics to protect your personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/3ab633a6-577c-4dab-8cbf-d624a2b2c993/"
        }
      ],
      icons: [
        {
          icon: faShieldAlt,
        },
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        }
      ]
    },
    {
      title: "Scrimba Frontend Developer Bootcamp",
      description: "80+ hours of teacher-led group sessions and solo projects covering HTML, CSS, JavaScript, React, responsive design, UI design, Git, peer code review, and mentoring.",
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
      description: "300 hours of coursework covering how to create powerful Single Page Applications (SPAs) with React and Redux, and style them with Bootstrap and Sass.",
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
      description: "300 hours of coursework covering the fundamentals of JavaScript, including variables, arrays, objects, loops, and functions, as well as object-oriented programming (OOP) and functional programming (FP).",
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
    {
      title: "FreeCodeCamp.org Responsive Web Design Developer Certification ",
      description: "300 hours of coursework covering how to make web pages that respond to different screen sizes.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.freecodecamp.org/certification/jamestsetsekas/responsive-web-design"
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
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "DiceLN - Lightning Network Dice Game",
      description: "A full-stack web app dice game that uses the Bitcoin Lightning Network for instant deposits and withdrawals. The game is provably fair and can be played with any amount of satoshis. It includes a chat feature and is built with Node.js, Express, Socket.IO, Axios, and LND, LNBits API. Contact me for a demonstration, to play, or to learn more about the Lightning Network! Currently closed source.",
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
    },
    {
      title: "RightBytes / DishPatch",
      description: "Lead developer on RightBytes, an e-commerce online food ordering platform that includes functionality for consumers, store admin, kiosks, thermal printing, and digital signage solutions for web, iOS, and Android applications. Mobile apps leverage both PHP and Node backend APIs, with Stripe and PayPal integrations for payments, and DoorDash integration or self-managed solutions for deliveries.",
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
    },
    {
      title: "Jersey City Bitcoin",
      description: "Founder of the Jersey City Bitcoin Meetup, a decentralized community for those interested in discussing and learning more about Bitcoin in the Jersey City, New Jersey / New York area. All are welcome, whether well-versed or new. I created a blog for members to see upcoming events and contribute thoughtful discussions with the community.",
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
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/JerseyCityBitcoin",
        }
      ]
    },
    {
      title: "JCBTC Meetup Store",
      description: "Jersey City Bitcoin Meetup Store: A unique collection of carefully curated items, available exclusively for purchase using Bitcoin. Support the Jersey City Bitcoin community while discovering one-of-a-kind products tailored for Bitcoin enthusiasts!",
      linkIcons: [
        {
          icon: faBolt,
        },
        {
          icon: faPhp,
        },
        {
          icon: faChrome,
          link: "https://btc.jerseycitybitcoin.com/",
        }
      ]
    },
    {
      title: "OLM Customer Portal",
      description: "Lead developer on a WordPress WooCommerce B2B e-commerce platform with web, iOS, and Android applications. Used by thousands of users to order and manage products to sell in their stores, generate sales and traffic reporting, and predictive analytics to maximize sales and minimize waste. Developed with custom PHP, cron jobs, WordPress plugins, themes, SAP, and single sign-on integrations.",
      linkIcons: [
        {
          icon: faWordpressSimple,
        },
        {
          icon: faPhp,
        },
      ]
    },
    {
      title: "Jamesco Web Designs",
      description: "Owner and sole developer at Jamesco Web Designs, specializing in affordable web design and development. Recognizing that many small businesses face budget constraints for upfront costs, I introduced a $0 down and low monthly cost model. This offers a more manageable solution, avoiding financial strain. Additionally, I provide services for WordPress, WooCommerce, e-commerce, SaaS, and custom development. Check out our offerings!",
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
    },
    {
      title: "Lightning Network Point of Sale Terminal",
      description: "A Point of Sale Terminal app that makes accepting Bitcoin Lightning payments easy! Accessible from any internet-enabled device, the app calculates real-time USD/BTC conversion and generates a Bitcoin Lightning Network invoice QR code, confirming once paid. This can be easily integrated into any WordPress WooCommerce or other e-commerce solutions. Contact me for more information.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://btc.jamestsetsekas.com/apps/2cYmNXrnH6KaBBTmQMQNBbxXpQNg/pos",
        },
        {
          icon: faGithub,
          link: "https://github.com/btcpayserver/btcpayserver",
        },
      ]
    },
    {
      title: "Self-hosted HTML5 Speedtest Docker Container",
      description: "Great for troubleshooting bandwidth, ping, and jitter issues. Free and open-source speed test. No Flash, No Java, No WebSocket. Download, upload, ping, jitter, IP address, ISP, distance from server (optional), telemetry (optional), results sharing (optional), multiple points of test (optional).",
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
    },
    {
      title: "Windows XP Minesweeper in React",
      description: "Windows XP Minesweeper in React with Hooks and mobile support. Features include releasing double mouse press at the same time to open cells automatically, never game over for the first click, switch difficulty from the menu, and mobile support (long press for placing flags).",
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
      description: "SatsSpend is a website of New York City area businesses that accept Bitcoin, including a searchable map and list. There are also some useful resources for spenders and receivers of Bitcoin towards the bottom of the page.",
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
      description: "I run a Bitcoin Lightning Network node using lnd, with a BTCPay server instance. I love routing satoshis, and I'm always looking to open more channels. Contact me to open a channel or learn more about the Lightning Network.",
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
      description: "A React Markdown note-taking app with a simple, clean, and responsive UI. Features the ability to save and retrieve notes from local storage.",
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
      description: "A React quiz application that utilizes fetch API requests to display multiple-choice trivia questions and calculate scores.",
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
      description: "A React e-commerce project that uses a fetch API call to display images, including functional components to favorite images, add them to the cart, and checkout.",
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
      description: "A React single-page application that uses fetch API requests to explore the most starred projects on GitHub with filter by date range and languages functionality.",
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
      title: "Chrome New Tab Extension",
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
};

export const contact = {
  title: "Get in touch",
  description: "Let's schedule a meeting. Feel free to reach out directly by email at James@JamesTsetsekas.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:James@JamesTsetsekas.com",
      isPrimary: true,
    },
  ]
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "James Tsetsekas | Full Stack Web Developer",
  description: "I create responsive & dynamic web apps.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@JamesTsetsekas",
  description: "Full-Stack Web Developer",
  cards: [
    {
      title: "My Portfolio",
      link: "https://jamestsetsekas.com/",
      icon: faChrome,
      iconb: faLink,
    },
    {
      title: "My Blog",
      link: "https://blog.jamestsetsekas.com/",
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
      title: "My X",
      link: "https://x.com/JamesTsetsekas",
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
};
