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
  faBrain
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
  description: "I’m a passionate Full Stack Web Developer dedicated to crafting innovative, scalable web applications that deliver exceptional user experiences. With deep expertise in JavaScript, TypeScript, PHP, React, Vue, Angular, and Node.js, I build seamless front-end interfaces and robust back-end systems optimized for performance and maintainability. My strong command of algorithms, data structures, and clean code principles ensures high-quality, future-proof solutions. I leverage cutting-edge AI tools and automation—such as AI-driven code optimization, automated testing frameworks, and predictive analytics—to streamline development workflows, enhance system efficiency, and drive business outcomes. As a curious lifelong learner and mentor, I actively guide aspiring developers through coding communities and meetups, sharing insights and fostering collaboration. Whether you need a strategic tech leader, a creative problem solver, or a collaborative partner, I’m eager to connect and build transformative digital solutions together.",
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
    "I am a seasoned Full Stack Web Developer with over a decade of experience architecting scalable, high-performance web applications and e-commerce platforms. Proficient in JavaScript, TypeScript, PHP, React, Node.js, and modern frameworks like Next.js and Angular, I specialize in delivering end-to-end solutions that drive business impact. My expertise spans front-end development, back-end systems, API integrations, and leveraging AI tools to optimize workflows, enhance user experiences, and reduce operational costs. Fueled by curiosity and a commitment to lifelong learning, I continuously explore emerging technologies and methodologies to push the boundaries of what’s possible.",
    "My career began in IT engineering at KPMG and system administration at Novartis, where I honed my technical foundation. Transitioning to software development at Realogy, I led the development of LeadRouter, a web-based real estate lead management tool used by millions of agents to route leads, streamlining sales processes and improving conversion rates by 20%. At OLM Foods (now part of Performance Food Group), I spearheaded transformative digital solutions, including RightBytes, a scalable e-commerce food ordering platform for web, iOS, and Android. I optimized PHP and Node.js backend APIs, integrated Stripe, PayPal, and DoorDash, and developed a WooCommerce-based B2B portal with SAP integrations, reducing server costs by 50% and improving order processing efficiency by 25%. I also led the development of TaskBytes, an AI-powered food service compliance automation tool that uses predictive analytics to optimize purchasing and production schedules, reducing waste by up to 18%.",
    "Currently at Satmo, a Bitcoin startup, I'm building the future of decentralized payments by developing comprehensive Lightning Network payment integrations across major e-commerce platforms. I architected and implemented payment gateway plugins for WordPress/WooCommerce, Wix, and Shopify, enabling merchants to accept instant Bitcoin Lightning payments with minimal setup. These solutions integrate with custom ACINQ/phoenixd backends, feature real-time exchange rates, automatic payment verification, webhook security tokens, QR code generation, and seamless user experiences. I also work on the Satmo B2C mobile app with a team of developers, a React Native application built with Expo and TypeScript that enables users to send and receive Lightning payments, scan QR codes, integrate with merchant platforms and Strike, and features biometric authentication and push notifications. By leveraging modern technologies like Next.js, React, Node.js, and TypeScript, I'm helping merchants worldwide accept Bitcoin payments while providing users with intuitive mobile payment experiences.",
    "A passionate Bitcoin advocate and innovator, I'm dedicated to advancing Lightning Network adoption through my work at Satmo and by contributing to open-source Bitcoin projects. In 2022, I founded the Jersey City Bitcoin Meetup, which hosts monthly Socratic seminar Bitcoin education meetups, fostering community learning and discussion. I run a Lightning Network node, actively mentor aspiring developers through coding bootcamps and meetups, and share expertise on Bitcoin and Lightning Network technology. My commitment to clean code principles and continuous learning—evidenced by certifications from Scrimba's Frontend Developer Bootcamp and Free Code Camp's comprehensive development courses—drives my ability to deliver cutting-edge solutions. Outside of work, I enjoy skiing, building self-hosted servers, and diving into books like The Pragmatic Programmer.",
    "Let’s collaborate to build transformative digital experiences that push boundaries and deliver measurable results.",
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Full Stack Web Developer",
      description: "As a Full Stack Web Developer, I architect scalable, high-performance applications using cutting-edge tools like JavaScript, TypeScript, React, Next.js, Node.js, PHP, and WordPress. I harness AI tools—such as code optimization assistants, automated testing frameworks, and predictive analytics—to 100x my workflow, delivering clean, maintainable code with unparalleled efficiency. From crafting intuitive front-end experiences to building robust back-end systems, I collaborate with teams to create impactful solutions that drive business success. Let’s transform ideas into reality with precision and innovation.",
      icons: [
        { icon: faCode },
        { icon: faReact },
        { icon: faNode },
        { icon: faPhp },
        { icon: faRobot }
      ]
    },
    {
      title: "Bitcoin Pioneer & Lightning Network Expert",
      description: "I’m a fervent advocate for Bitcoin’s transformative potential in decentralized finance. I contribute to open-source Bitcoin projects, operate a high-performance Lightning Network node, and integrate Lightning payments into e-commerce platforms like WooCommerce. Using AI-driven analytics to optimize node performance and transaction efficiency, I push the boundaries of blockchain innovation. Through meetups and conferences, I share expertise on node management and channel optimization. Let’s connect to explore Bitcoin’s future or build scalable Lightning solutions.",
      icons: [
        { icon: faBoltLightning },
        { icon: faBitcoin },
        { icon: faBtc }
      ]
    },
    {
      title: "Mentor, Educator & Lifelong Innovator",
      description: "Driven by curiosity and a passion for knowledge, I mentor hundreds of developers through coding bootcamps, meetups, and code reviews, empowering the next generation of tech talent. I leverage AI tools to streamline teaching, from automated code feedback to personalized learning paths, amplifying my impact 100x. As a lifelong learner, I continuously master emerging technologies like AI-driven development and modern frameworks, ensuring I stay at the forefront of innovation. Let’s inspire and learn together to shape the future of tech.",
      icons: [
        { icon: faChalkboardTeacher },
        { icon: faUsers },
        { icon: faBrain }
      ]
    }
  ]
};

export const skills = {
  title: "Skills & Certifications",
  cards: [
    {
      title: "JavaScript Essentials 1",
      description: "This 40-hour course covers how interactive web and mobile applications are created with JavaScript. Learn to program your own applications with no prior knowledge required. This course is aligned to the JSE – Certified Entry-Level JavaScript Programmer Certification, developed in collaboration with the JS Institute. Programming skills open you up to careers in almost any industry and are required for advanced web, mobile app, or game development roles.",
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
      description: "This 70 Hour course prepares you with an Ethical Hacker skillset and give you a solid understanding of offensive security. You will become proficient in the art of scoping, executing, and reporting on vulnerability assessments, while recommending mitigation strategies. Follow an engaging gamified narrative throughout the course and get lots of practice with hands-on labs inspired by real-world scenarios.",
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
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Satmo WordPress Payment Plugin",
      description: "Developed a comprehensive WordPress WooCommerce payment gateway plugin that integrates Bitcoin Lightning Network payments via a custom ACINQ/phoenixd backend. Features include real-time exchange rates, automatic payment verification, QR code generation, webhook security tokens, and seamless WooCommerce Blocks support. The plugin enables merchants to accept instant Lightning payments with minimal setup, eliminating the need for node management.",
      linkIcons: [
        { icon: faWordpressSimple },
        { icon: faPhp },
        { icon: faBolt },
        { icon: faShoppingCart }
      ]
    },
    {
      title: "Satmo Wix Payment Plugin",
      description: "Built a Payment Provider Service Plugin (PPSP) for Wix e-commerce platforms, enabling Bitcoin Lightning Network payments through a custom ACINQ/phoenixd backend. The solution includes a Next.js external payment page hosted on Firebase, webhook integration for automatic order updates, and seamless deeplink support for mobile wallets. Merchants can easily configure and accept Lightning payments directly within their Wix stores.",
      linkIcons: [
        { icon: faReact },
        { icon: faNodeJs },
        { icon: faBolt },
        { icon: faShoppingCart }
      ]
    },
    {
      title: "Satmo Shopify Payment Extension",
      description: "Created a Shopify payment extension that enables Bitcoin Lightning Network payments through a custom ACINQ/phoenixd backend. Features include a Next.js external checkout app, and  real-time payment tracking, automatic order fulfillment via webhooks. The extension integrates with Shopify's manual payment methods and provides merchants with a secure, low-fee payment option.",
      linkIcons: [
        { icon: faReact },
        { icon: faNodeJs },
        { icon: faBolt },
        { icon: faShoppingCart }
      ]
    },
    {
      title: "Satmo B2C Mobile App",
      description: "Developed a modern React Native mobile application using Expo and TypeScript for Bitcoin Lightning Network payments. The app enables users to send and receive Bitcoin payments instantly, features QR code scanning, merchant integration, Strike payment platform integration, and real-time transaction tracking. Built with a beautiful dark theme UI, biometric authentication, push notifications, and offline support for core functionality.",
      linkIcons: [
        { icon: faReact },
        { icon: faJsSquare },
        { icon: faBolt },
        { icon: faBitcoin }
      ]
    },
    {
      title: "RightBytes / DishPatch",
      description: "Spearheaded the development of RightBytes, a scalable e-commerce food ordering platform supporting web, iOS, and Android. As lead developer, I engineered PHP and Node.js backend APIs, integrated Stripe, PayPal, and DoorDash for payments and delivery, and implemented thermal printing and digital signage solutions. By optimizing API performance and leveraging automation, I increased transaction throughput by 20% and reduced operational costs. This project showcases my ability to deliver complex, multi-platform solutions with seamless user experiences.",
      "linkIcons": [
        { icon: faPhp },
        { icon: faNodeJs },
        { icon: faStripe },
        { icon: faPaypal }
      ]
    },
    {
      title: "OLM Customer Portal",
      description: "Led the development of a WordPress WooCommerce B2B e-commerce portal, empowering thousands of users to manage product orders, generate sales reports, and leverage predictive analytics for inventory optimization. Built with custom PHP, cron jobs, WordPress plugins, themes, SAP integrations, and single sign-on, the platform improved order processing efficiency by 25% and reduced waste through data-driven insights. This project highlights my expertise in enterprise-grade solutions and automation.",
      "linkIcons": [
        { icon: faWordpressSimple },
        { icon: faPhp }
      ]
    },
    {
      title: "TaskBytes",
      description: "Designed and developed TaskBytes, an innovative food safety compliance automation tool powered by a custom ChatGPT-based LLM. TaskBytes automates tracking of critical metrics like temperatures, spoil times, production, and waste, while generating compliance reports with 95% accuracy. By integrating data from scans, traffic, and events, and comparing it to historical trends, the tool delivers predictive analytics to optimize purchasing and production schedules, reducing waste by 18% and boosting sales efficiency. Built with Python, Node.js, and AI-driven APIs—this project demonstrates my ability to harness AI for operational excellence.",
      "linkIcons": [
        { icon: faPython },
        { icon: faNodeJs },
        { icon: faRobot }
      ]
    },
    {
      "title": "AIO-GPT: AI-Powered SaaS Platform",
      "description": "Created AIO-GPT, an all-in-one AI SaaS application (https://aijobbot.xyz/) for chat, image processing, and automated resume tailoring to job descriptions. Leveraging advanced LLMs and APIs, the platform analyzes job postings and user profiles to generate ATS-optimized resumes, improving application success rates by 30%. Built with React, Node.js, and TypeScript, this project showcases my expertise in AI-driven automation and full-stack development.",
      "linkIcons": [
        { icon: faReact },
        { icon: faNodeJs },
        { icon: faJsSquare },
        { icon: faChrome, link: "https://aijobbot.xyz/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/AIO-GPT" }
      ]
    },
    {
      title: "WP WooCommerce LN Store",
      description: "Architected a cutting-edge e-commerce proof-of-concept store using WordPress and WooCommerce, integrated with Bitcoin’s Lightning Network for instant, low-fee transactions. This project showcases the potential of decentralized payments in retail, enabling secure and scalable microtransactions. The platform is optimized for performance and user experience, demonstrating my expertise in Lightning Network integration and modern web development.",
      "linkIcons": [
        { icon: faWordpress },
        { icon: faShoppingCart },
        { icon: faBolt },
        { icon: faChrome, link: "https://store.jamestsetsekas.com/" }
      ]
    },
    {
      title: "DiceLN - Lightning Network Dice Game",
      description: "Developed DiceLN, a provably fair, full-stack web-based dice game leveraging Bitcoin’s Lightning Network for instant deposits and withdrawals. Built with Node.js, Express, Socket.IO, Axios, and LND/LNBits APIs, the app supports microtransactions with any amount of satoshis and includes real-time chat functionality. This project highlights my ability to integrate Ligtning Network technology with engaging user interfaces and robust back-end systems. Contact me for a private demo or to explore Lightning Network applications.",
      "linkIcons": [
        { icon: faNodeJs },
        { icon: faDatabase },
        { icon: faBolt }
      ]
    },
    {
      title: "Bitcoin Price Converter",
      description: "Engineered a responsive Bitcoin price converter application that seamlessly converts between USD, GBP, EUR, Bitcoin, and satoshis. Built with Node.js and JavaScript, the tool delivers real-time, accurate conversions with an intuitive interface, optimized for both desktop and mobile users. This project demonstrates my proficiency in creating lightweight, user-focused financial tools.",
      "linkIcons": [
        { icon: faNodeJs },
        { icon: faJsSquare },
        { icon: faChrome, "link": "https://jamestsetsekas.github.io/satscalc/" },
        { icon: faGithub, "link": "https://github.com/JamesTsetsekas/satscalc" }
      ]
    },
    {
      title: "WooCommerce Phoenixd Lightning Payment Gateway",
      description: "Designed and implemented a custom WooCommerce payment gateway utilizing the Phoenixd server API to enable non-custodial Lightning Network payments. Developed with WordPress, WooCommerce, and PHP, this solution simplifies setup by eliminating the need for node or channel management, offering merchants a secure and efficient payment option. This project underscores my expertise in integrating Bitcoin payments solutions into e-commerce platforms.",
      "linkIcons": [
        { icon: faWordpressSimple },
        { icon: faPhp }
      ]
    },
    {
      title: "Jersey City Bitcoin Meetup",
      description: "Founded and lead the Jersey City Bitcoin Meetup, a vibrant, decentralized community fostering education and discussion on Bitcoin in the Jersey City and New York area. I developed a custom blog platform with Node.js and JavaScript to share event updates and facilitate community-driven content, enhancing engagement and knowledge sharing.",
      "linkIcons": [
        { icon: faNodeJs },
        { icon: faJsSquare },
        { icon: faChrome, "link": "https://jerseycitybitcoin.com/" },
        { icon: faGithub, "link": "https://github.com/JamesTsetsekas/JerseyCityBitcoin" }
      ]
    },
    {
      title: "JCBTC Meetup Store",
      description: "Created the Jersey City Bitcoin Meetup Store, an exclusive e-commerce platform offering curated Bitcoin-themed products, purchasable solely with Bitcoin via Lightning Network payments. Built with PHP and optimized for security and speed, the store supports the community while showcasing practical applications of bitcoin in retail. Discover unique items at https://btc.jerseycitybitcoin.com/.",
      linkIcons: [
        { icon: faBolt },
        { icon: faPhp },
        { icon: faChrome, "link": "https://btc.jerseycitybitcoin.com/" }
      ]
    },
    {
      title: "Jamesco Web Designs",
      description: "Owner and sole developer at Jamesco Web Designs, specializing in affordable web design and development. Recognizing that many small businesses face budget constraints for upfront costs, I introduced a $0 down and low monthly cost model. This offers a more manageable solution, avoiding financial strain. Additionally, I provide services for WordPress, WooCommerce, e-commerce, SaaS, and custom development. Check out our offerings!",
      linkIcons: [
        { icon: faNodeJs, },
        { icon: faJsSquare, },
        { icon: faChrome, link: "https://jamescowebdesigns.com/", }
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
    }
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
