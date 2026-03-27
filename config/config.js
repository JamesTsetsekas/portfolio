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
  faPaypal,
  faPython,
  faEthereum,
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
  faShieldVirus,
  faShoppingCart,
  faRobot,
  faBrain,
  faChartLine,
  faGavel,
  faServer,
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
    {
      title: "Blog",
      link: "https://blog.jamestsetsekas.com/",
      target: "_blank",
    },
  ],
};

export const intro = {
  greeting: {
    emoji: "👋",
    text: [" Hey,", "I'm "]
  },
  title: "James Tsetsekas",
  description: "Full stack developer with 14+ years building web apps, payment systems, and Bitcoin infrastructure. Fully immersed in AI, building with it every day. Currently at Satmo architecting Lightning Network payment plugins for e-commerce. Founded the Jersey City Bitcoin Meetup and Socratic Seminar.",
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
    "I'm a full stack developer with 14+ years of experience. Currently at Satmo building Bitcoin Lightning Network payment plugins for WooCommerce, Wix, and Shopify - self-custodial, non-custodial key management, the full merchant integration stack. Before that I built e-commerce platforms, food ordering systems, and internal tools at companies ranging from Fortune 500 (Novartis, Realogy) to startups.",
    "I'm fully immersed in AI - building DynamisAI, a managed AI hosting platform, and working daily with LLMs for code generation, architecture review, and automated trading systems. My open-source work includes DTCC-inspired digital securities settlement engines on Ethereum and DAML, Bitcoin on-chain analytics tools, and a provably fair Lightning-powered gaming platform. I founded the Jersey City Bitcoin Meetup where I run monthly Socratic seminars on protocol development and Lightning infrastructure. Outside of code: skiing and self-hosting everything.",
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Bitcoin & Lightning Infrastructure",
      description: "I build payment systems on Bitcoin's Lightning Network. At Satmo I've shipped self-custodial payment gateway plugins for WooCommerce, Wix, and Shopify. I run Lightning nodes, work with LND/LNBits/Phoenixd, and build APIs for instant, low-fee Bitcoin transactions.",
      icons: [
        { icon: faBoltLightning },
        { icon: faBitcoin },
        { icon: faShoppingCart }
      ]
    },
    {
      title: "AI & Automation",
      description: "Building DynamisAI, a managed AI hosting platform for businesses. I work daily with LLMs for code generation, architecture review, and automated workflows. Built production trading bots, analytics pipelines, and multi-model agent systems using Claude, Gemini, and Codex.",
      icons: [
        { icon: faRobot },
        { icon: faBrain },
        { icon: faServer }
      ]
    },
    {
      title: "Full Stack Product Development",
      description: "Web apps, mobile apps, SaaS platforms - I build the whole thing. React, Next.js, Node.js, TypeScript, Python, PostgreSQL, Redis. Projects span fintech settlement engines, gaming platforms, e-commerce systems, and financial analytics tools.",
      icons: [
        { icon: faCode },
        { icon: faReact },
        { icon: faNode }
      ]
    },
    {
      title: "Community & Open Source",
      description: "I founded the Jersey City Bitcoin Meetup, a monthly Socratic Seminar covering protocol development and Lightning infrastructure. I mentor developers, contribute to open-source Bitcoin and fintech projects, and believe the best way to learn is to build and share.",
      icons: [
        { icon: faUsers },
        { icon: faChalkboardTeacher },
        { icon: faGithub }
      ]
    }
  ]
};

export const skills = {
  title: "Skills & Certifications",
  cards: [
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
      title: "FreeCodeCamp.org Responsive Web Design Developer Certification",
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
    {
      title: "JavaScript Essentials 1",
      description: "This 40-hour course covers how interactive web and mobile applications are created with JavaScript. Learn to program your own applications with no prior knowledge required. This course is aligned to the JSE - Certified Entry-Level JavaScript Programmer Certification, developed in collaboration with the JS Institute.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/1dfc1018-a876-4ace-9549-313b962ede4a"
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
      title: "Ethical Hacker",
      description: "This 70 Hour course prepares you with an Ethical Hacker skillset and give you a solid understanding of offensive security. You will become proficient in the art of scoping, executing, and reporting on vulnerability assessments, while recommending mitigation strategies.",
      certificate: [
        {
          icon: faCertificate,
          link: "https://www.credly.com/badges/0e61d610-228d-4f1e-af3a-fbfa37c012b4"
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
      description: "This 27 Hour course explores governance in cybersecurity and threat management. Learn to develop policies and ensure your organization complies with ethics standards and legal and regulatory frameworks.",
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
      description: "This 27 Hour course covers ways to monitor your network and how to evaluate security alerts. Delve into the tools and techniques used to protect a network, including access control, firewalls, cloud security, and cryptography.",
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
      description: "This 22 Hour course covers the essentials of network devices and how to configure them. Learn the characteristics and benefits of Cloud and Virtualization technologies.",
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
      description: "This 22 Hour course covers the foundation of networking and network devices, media, and protocols. You will observe data flowing through a network and configure devices to connect to networks.",
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
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Digital Securities Settlement Engine",
      description: "Atomic Delivery vs. Payment (DvP) settlement engine for tokenized securities on Ethereum, inspired by DTCC's Project Ion. ERC-20 security tokens with compliance/KYC modules, CCP-gated settlement, role-based access control (issuer, compliance officer, transfer agent, CCP), and freeze/pause capabilities. Solidity 0.8.20, Hardhat, OpenZeppelin v5, ethers.js v6.",
      linkIcons: [
        { icon: faEthereum },
        { icon: faGavel },
        { icon: faShieldAlt },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/digital-securities-settlement" }
      ]
    },
    {
      title: "Bond Settlement on DAML",
      description: "Multi-party bond issuance, trade matching, and atomic DvP settlement built on Canton/DAML. Models the full DTCC/NSCC/DTC clearing workflow with CCP novation, custodian banks, trade reporting, and regulatory observation. DAML's signatory/observer model enforces multi-party consent at every state change.",
      linkIcons: [
        { icon: faGavel },
        { icon: faDatabase },
        { icon: faShieldAlt },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/bond-settlement-daml" }
      ]
    },
    {
      title: "DynamisAI - Managed AI Hosting Platform",
      description: "Managed AI hosting platform enabling businesses to deploy and configure AI agents with custom skills and automated workflows. Built with Next.js, Stripe-integrated billing, Sentry monitoring, and zero-downtime deployment pipelines. Consulting practice delivering custom AI solutions for clients.",
      linkIcons: [
        { icon: faRobot },
        { icon: faReact },
        { icon: faServer },
        { icon: faChrome, link: "https://dynamisai.io" }
      ]
    },
    {
      title: "Fintech Analytics Suite",
      description: "Comprehensive Bitcoin on-chain analytics and market cycle tools: Power Law regression, Pi Cycle Top indicator, Rainbow HPR model, ML-based price prediction (Random Forest), halving cycle analysis, Bollinger Bands, monthly/yearly returns heatmaps, and more. 25+ publication-quality charts in Python using matplotlib.",
      linkIcons: [
        { icon: faPython },
        { icon: faChartLine },
        { icon: faBitcoin },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/Fintech" }
      ]
    },
    {
      title: "Satmo - Bitcoin Lightning Payment Suite",
      description: "Self-custodial Lightning Network payment gateway plugins for WooCommerce, Wix, and Shopify built on ACINQ's Phoenixd. Merchants get instant Bitcoin payments without managing channel capacity or node infrastructure. Real-time exchange rates, QR code generation, webhook-driven order fulfillment, and cross-platform plugin architecture.",
      linkIcons: [
        { icon: faBoltLightning },
        { icon: faShoppingCart },
        { icon: faWordpressSimple },
        { icon: faBolt }
      ]
    },
    {
      title: "Satmo B2C Mobile App",
      description: "React Native/Expo mobile app for Bitcoin Lightning payments. Send and receive Bitcoin instantly, QR code scanning, Strike API integration, merchant discovery, biometric authentication, push notifications, and offline support. Beautiful dark theme UI with real-time transaction tracking.",
      linkIcons: [
        { icon: faReact },
        { icon: faBolt },
        { icon: faBitcoin }
      ]
    },
    {
      title: "LNZap - Lightning Network Gaming Platform",
      description: "Full-stack provably fair gaming platform with 13 games (dice, blackjack, poker, roulette, crash, mines, plinko, slots, and more). Lightning Network deposits/withdrawals via LNbits, real-time chat with /rain and /tip commands, and a complete admin panel. Next.js 15, React 19, PostgreSQL, Redis, WebSockets.",
      linkIcons: [
        { icon: faBolt },
        { icon: faReact },
        { icon: faDatabase },
        { icon: faNodeJs }
      ]
    },
    {
      title: "LNBits OpenClaw / AI Agent Skill",
      description: "An LNBits extension with QR code support, published as an OpenClaw AI agent skill on ClawHub. Enables Lightning Network payment workflows with QR code generation, integrable with AI agents and automation.",
      linkIcons: [
        { icon: faBolt },
        { icon: faRobot },
        { icon: faChrome, link: "https://clawhub.ai/JamesTsetsekas/lnbits-with-qrcode" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/openclaw-skill-lnbits" }
      ]
    },
    {
      title: "VibesIntel - AI Desktop Assistant",
      description: "Invisible desktop assistant providing real-time AI insights during meetings, interviews, and presentations. Electron and React frontend, Node.js/Express backend with PostgreSQL, Google Gemini AI for screenshot analysis and audio transcription. SaaS architecture with subscription billing.",
      linkIcons: [
        { icon: faReact },
        { icon: faNodeJs },
        { icon: faRobot },
        { icon: faChrome, link: "https://vibesintel.com/" }
      ]
    },
    {
      title: "RightBytes / DishPatch",
      description: "Scalable e-commerce food ordering platform for web, iOS, and Android. PHP and Node.js APIs, Stripe/PayPal/DoorDash integrations, thermal printing and digital signage. Increased transaction throughput by 20% and reduced operational costs.",
      linkIcons: [
        { icon: faPhp },
        { icon: faNodeJs },
        { icon: faStripe },
        { icon: faPaypal }
      ]
    },
    {
      title: "TaskBytes - AI Food Safety Compliance",
      description: "AI-powered food safety compliance tool using Python, Node.js, and custom LLM APIs. Automates temperature tracking, production scheduling, and compliance reporting with 95% accuracy, reducing waste by 18%.",
      linkIcons: [
        { icon: faPython },
        { icon: faNodeJs },
        { icon: faRobot }
      ]
    },
    {
      title: "AIO-GPT: AI-Powered SaaS Platform",
      description: "All-in-one AI SaaS for chat, image processing, and automated resume tailoring to job descriptions. Analyzes job postings and generates ATS-optimized resumes, improving application success rates by 30%. React, Node.js, TypeScript.",
      linkIcons: [
        { icon: faReact },
        { icon: faNodeJs },
        { icon: faRobot },
        { icon: faChrome, link: "https://aijobbot.xyz/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/AIO-GPT" }
      ]
    },
    {
      title: "Jersey City Bitcoin Meetup",
      description: "Founded and lead the Jersey City Bitcoin Meetup, a community fostering education and discussion on Bitcoin in the Jersey City and New York area. Custom blog platform with Node.js for event updates and community-driven content.",
      linkIcons: [
        { icon: faNodeJs },
        { icon: faJsSquare },
        { icon: faChrome, link: "https://jerseycitybitcoin.com/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/JerseyCityBitcoin" }
      ]
    },
    {
      title: "SatsSpend - NYC Bitcoin Business List",
      description: "Directory of New York City area businesses that accept Bitcoin, with a searchable map and list. Useful resources for spenders and receivers of Bitcoin.",
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
      title: "Bitcoin Price Converter",
      description: "Responsive Bitcoin price converter for USD, GBP, EUR, Bitcoin, and satoshis with real-time conversion rates. Built with Node.js and JavaScript, optimized for desktop and mobile.",
      linkIcons: [
        { icon: faNodeJs },
        { icon: faJsSquare },
        { icon: faChrome, link: "https://jamestsetsekas.github.io/satscalc/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/satscalc" }
      ]
    },
    {
      title: "Lightning Network Node & POS",
      description: "Bitcoin Lightning Network node using LND with a BTCPay server instance. Includes a Point of Sale terminal app for accepting Lightning payments with real-time USD/BTC conversion and QR code invoice generation.",
      linkIcons: [
        {
          icon: faBolt,
        },
        {
          icon: faBitcoin,
        },
        {
          icon: faChrome,
          link: "https://btc.jamestsetsekas.com/apps/4Y4qW4zydTxQWWydQidcgjfT6v3F/pos",
        },
      ]
    },
    {
      title: "Windows XP Minesweeper in React",
      description: "Windows XP Minesweeper in React with Hooks and mobile support. Never game over on first click, difficulty switching, and long press for placing flags on mobile.",
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
  title: "James Tsetsekas | Full Stack Developer & Bitcoin Engineer",
  description: "Full stack developer building Bitcoin Lightning Network payment infrastructure, AI-powered platforms, and digital securities settlement systems.",
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
