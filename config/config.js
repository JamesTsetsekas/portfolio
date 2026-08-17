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
  faJs,
  faBitcoin,
  faPython,
  faEthereum,
} from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faDatabase,
  faChalkboardTeacher,
  faUsers,
  faLayerGroup,
  faCertificate,
  faBoltLightning,
  faComputer,
  faNetworkWired,
  faLink,
  faBolt,
  faShieldAlt,
  faRobot,
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
  description: "Full-stack developer with 14+ years of experience building web applications, payment systems, and developer tooling. Currently working at Conduit on decentralized commerce built on Nostr with Bitcoin and Lightning payments, and with Great Plains Communications on React application development.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/JamesTsetsekas",
      isPrimary: false,
    },
    {
      title: "My Blog",
      link: "https://blog.jamestsetsekas.com/",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "About Me",
  description: [
    "I'm a full-stack developer with 14+ years of experience building web applications, payment systems, and developer tooling. At Conduit, I work on open-source decentralized commerce built on Nostr, contributing React and TypeScript product features, protocol-aware workflows, encrypted messaging, privacy-focused checkout, and Bitcoin and Lightning payment experiences. I also develop React applications with Great Plains Communications.",
    "My independent work includes Bitcoin market analytics, Lightning wallet tooling, digital-securities settlement prototypes, AI-assisted developer tools, and technical writing. I founded the Jersey City Bitcoin Meetup and Socratic Seminar, where I help create space for practical discussion around Bitcoin, Lightning, privacy, and protocol development. Outside of code, I ski and self-host more than I probably should.",
  ],
};

export const work = {
  title: "What I Do",
  cards: [
    {
      title: "Nostr Commerce at Conduit",
      description: "I contribute to React and TypeScript product features for decentralized commerce on Nostr, including marketplace and merchant workflows, encrypted messaging, relay-aware state, and privacy-focused checkout.",
      icons: [
        { icon: faNetworkWired },
        { icon: faReact },
        { icon: faCode }
      ]
    },
    {
      title: "Bitcoin & Lightning Payments",
      description: "I build Bitcoin and Lightning payment experiences, wallet integrations, invoices, and non-custodial checkout flows with careful attention to privacy, reliability, and failure states.",
      icons: [
        { icon: faBitcoin },
        { icon: faBoltLightning },
        { icon: faShieldAlt }
      ]
    },
    {
      title: "React Development at Great Plains",
      description: "My work with Great Plains Communications focuses on React application development: clear interfaces, reusable components, maintainable front-end systems, and dependable product workflows.",
      icons: [
        { icon: faReact },
        { icon: faJs },
        { icon: faLayerGroup }
      ]
    },
    {
      title: "Open Source & Community",
      description: "I build public software, maintain Bitcoin analytics and Lightning tools, write about technology, and organize the Jersey City Bitcoin Meetup and Socratic Seminar.",
      icons: [
        { icon: faGithub },
        { icon: faUsers },
        { icon: faChalkboardTeacher }
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
      title: "Conduit — Open-Source Nostr Commerce",
      description: "Contributions to Conduit, an open-source decentralized commerce platform built on Nostr. My work spans React and TypeScript product flows, merchant and marketplace features, encrypted messaging, privacy-focused checkout, and Bitcoin and Lightning payment experiences.",
      linkIcons: [
        { icon: faNetworkWired },
        { icon: faBitcoin },
        { icon: faChrome, link: "https://conduit.market/" },
        { icon: faGithub, link: "https://github.com/search?q=is%3Apr+author%3AJamesTsetsekas+org%3AConduit-BTC&type=pullrequests" }
      ]
    },
    {
      title: "Fintech Analytics Suite",
      description: "A Python dashboard for Bitcoin market-cycle research, including Power Law, Pi Cycle, Rainbow, halving, return, volatility, and machine-learning views. Generated charts are published through a lightweight GitHub Pages dashboard.",
      linkIcons: [
        { icon: faPython },
        { icon: faBitcoin },
        { icon: faChrome, link: "https://jamestsetsekas.github.io/Fintech/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/Fintech" }
      ]
    },
    {
      title: "LNbits Wallet Manager Skill",
      description: "An OpenClaw skill for LNbits wallet workflows, including balance checks, Bolt11 invoice creation, decoding and payment, QR-code generation, explicit payment confirmation, and safe credential handling.",
      linkIcons: [
        { icon: faBolt },
        { icon: faRobot },
        { icon: faChrome, link: "https://clawhub.ai/JamesTsetsekas/lnbits-with-qrcode" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/openclaw-skill-lnbits" }
      ]
    },
    {
      title: "Jersey City Bitcoin",
      description: "The website and community behind the Jersey City Bitcoin Meetup and Socratic Seminar, with local events and practical discussion around Bitcoin, Lightning, privacy, and protocol development.",
      linkIcons: [
        { icon: faBitcoin },
        { icon: faUsers },
        { icon: faChrome, link: "https://jerseycitybitcoin.com/" },
        { icon: faGithub, link: "https://github.com/Jersey-City-Bitcoin/JerseyCityBitcoin" }
      ]
    },
    {
      title: "Digital Securities Settlement Engine",
      description: "An experimental Ethereum reference implementation for atomic delivery-versus-payment settlement, with ERC-20 security tokens, compliance controls, role-based access, and CCP-gated workflows.",
      linkIcons: [
        { icon: faEthereum },
        { icon: faShieldAlt },
        { icon: faDatabase },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/digital-securities-settlement" }
      ]
    },
    {
      title: "Bond Settlement on DAML",
      description: "An experimental multi-party bond issuance, trade-matching, and atomic delivery-versus-payment workflow modeled in Canton and DAML, including CCP, custodian, and regulatory roles.",
      linkIcons: [
        { icon: faDatabase },
        { icon: faShieldAlt },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/bond-settlement-daml" }
      ]
    },
    {
      title: "Obsidian OpenClaw Assistant",
      description: "An Obsidian plugin that connects selected note text to an OpenClaw-compatible endpoint for summarizing, extracting tasks, and rewriting content without leaving the editor.",
      linkIcons: [
        { icon: faRobot },
        { icon: faJs },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/obsidian-openclaw-assistant" }
      ]
    },
    {
      title: "Technical Blog",
      description: "My Astro-based blog for longer-form notes on Bitcoin, software engineering, self-hosting, and the protocols and tools I am learning and building with.",
      linkIcons: [
        { icon: faJs },
        { icon: faChrome, link: "https://blog.jamestsetsekas.com/" },
        { icon: faGithub, link: "https://github.com/JamesTsetsekas/gblog" }
      ]
    },
  ],
};

export const contact = {
  title: "Get in touch",
  description: "Interested in React development, Nostr, or Bitcoin and Lightning? Feel free to reach out directly at James@JamesTsetsekas.com.",
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
  title: "James Tsetsekas | Nostr, Bitcoin & React Developer",
  description: "Full-stack developer working on Nostr commerce and Bitcoin Lightning payments at Conduit, plus React applications with Great Plains Communications.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@JamesTsetsekas",
  description: "Nostr, Bitcoin, Lightning & React developer",
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
      title: "Conduit",
      link: "https://conduit.market/",
      icon: faBitcoin,
      iconb: faNetworkWired,
    },
    {
      title: "My Conduit Contributions",
      link: "https://github.com/search?q=is%3Apr+author%3AJamesTsetsekas+org%3AConduit-BTC&type=pullrequests",
      icon: faGithub,
      iconb: faGithubAlt,
    },
  ]
};
