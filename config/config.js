import profile from './profile.png';
import {
  faGithub,
  faChrome,
  faReact,
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
  faUsers, faLayerGroup,
  faBoltLightning,
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
      title: "Now",
      link: "/#focus",
    },
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
  eyebrow: "James Tsetsekas · Software engineer",
  title: "Open protocols. Practical products.",
  description: "Full-stack developer building decentralized commerce on Nostr and Bitcoin at Conduit, with a focus on Lightning payments, privacy, and reliable product workflows. I also develop React applications with Great Plains Communications.",
  image: profile.src,
  roles: [
    {
      company: "Conduit",
      focus: "Nostr · Bitcoin · Lightning",
    },
    {
      company: "Great Plains Communications",
      focus: "React application development",
    },
  ],
  buttons: [
    {
      title: "View selected work",
      link: "#projects",
      isPrimary: true,
    },
    {
      title: "GitHub",
      link: "https://github.com/JamesTsetsekas",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Products, protocols, and the work between them.",
  description: [
    "I'm a full-stack developer with 14+ years of experience building web applications, payment systems, and developer tooling. At Conduit, I contribute to an open-source decentralized commerce platform built on Nostr, working across React and TypeScript interfaces, shared protocol logic, encrypted messaging, and non-custodial Bitcoin and Lightning payments. I also build React applications with Great Plains Communications.",
    "My independent work includes Bitcoin market analytics, Lightning tools, digital-settlement prototypes, and technical writing. I founded the Jersey City Bitcoin Meetup and Socratic Seminar, where I help create space for practical discussion around Bitcoin, Lightning, and protocol development. Outside of code, I ski and self-host more than I probably should.",
  ],
  facts: [
    { value: "14+", label: "years building for the web" },
    { value: "React", label: "product engineering" },
    { value: "Nostr", label: "open protocol work" },
  ],
};

export const work = {
  title: "Current focus",
  cards: [
    {
      title: "Conduit — Nostr product engineering",
      description: "At Conduit, I work across React and TypeScript product interfaces and shared protocol logic for decentralized commerce, including NIP-99 listings, NIP-17 messaging, relay-aware state, and encrypted workflows.",
      icons: [
        { icon: faNetworkWired, label: "Nostr" },
        { icon: faReact, label: "React" },
        { icon: faCode, label: "TypeScript" }
      ]
    },
    {
      title: "Bitcoin & Lightning payments",
      description: "Non-custodial payment experiences using NWC, WebLN, invoices, zaps, and wallet integrations, with careful attention to privacy, failure states, and duplicate-payment safety.",
      icons: [
        { icon: faBitcoin, label: "Bitcoin" },
        { icon: faBoltLightning, label: "Lightning" },
        { icon: faShieldAlt, label: "Privacy" }
      ]
    },
    {
      title: "Great Plains — React development",
      description: "My current work with Great Plains Communications focuses on React application development. Across projects, I build clear interfaces, maintainable components, and dependable web products.",
      icons: [
        { icon: faReact, label: "React" },
        { icon: faJs, label: "JavaScript" },
        { icon: faLayerGroup, label: "UI systems" }
      ]
    },
    {
      title: "Open source & community",
      description: "Public software, technical writing, Bitcoin analytics, and the Jersey City Bitcoin Meetup and Socratic Seminar. The best protocol conversations start with something concrete to test.",
      icons: [
        { icon: faGithub, label: "Open source" },
        { icon: faUsers, label: "Community" },
        { icon: faChalkboardTeacher, label: "Writing" }
      ]
    }
  ]
};


export const projects = {
  title: "Selected projects",
  cards: [
    {
      title: "Fintech Analytics Suite",
      description: "An actively maintained Bitcoin market-cycle dashboard with Power Law, Pi Cycle, Rainbow, halving, return, and machine-learning views. The repository publishes the latest generated charts to a lightweight public dashboard.",
      linkIcons: [
        { icon: faPython, label: "Python" },
        { icon: faBitcoin, label: "Bitcoin" },
        { icon: faChrome, label: "Live dashboard", link: "https://jamestsetsekas.github.io/Fintech/" },
        { icon: faGithub, label: "View source", link: "https://github.com/JamesTsetsekas/Fintech" }
      ]
    },
    {
      title: "Digital settlement prototypes",
      description: "Experimental reference implementations for atomic delivery-versus-payment workflows: an Ethereum security-token settlement engine and a multi-party bond lifecycle modeled in Canton/DAML.",
      linkIcons: [
        { icon: faEthereum, label: "Ethereum" },
        { icon: faDatabase, label: "DAML" },
        { icon: faGithub, label: "Ethereum source", link: "https://github.com/JamesTsetsekas/digital-securities-settlement" },
        { icon: faGithub, label: "DAML source", link: "https://github.com/JamesTsetsekas/bond-settlement-daml" }
      ]
    },
    {
      title: "LNbits wallet skill for OpenClaw",
      description: "An OpenClaw skill for LNbits wallet workflows, including balance checks, invoice creation and payment, transaction history, and QR-code generation for Lightning payments.",
      linkIcons: [
        { icon: faBolt, label: "Lightning" },
        { icon: faRobot, label: "Agent skill" },
        { icon: faChrome, label: "View skill", link: "https://clawhub.ai/JamesTsetsekas/lnbits-with-qrcode" },
        { icon: faGithub, label: "View source", link: "https://github.com/JamesTsetsekas/openclaw-skill-lnbits" }
      ]
    },
    {
      title: "Jersey City Bitcoin",
      description: "The home of the Jersey City Bitcoin Meetup and Socratic Seminar: local events and practical discussion around Bitcoin, Lightning, privacy, and protocol development.",
      linkIcons: [
        { icon: faBitcoin, label: "Community" },
        { icon: faUsers, label: "Meetup" },
        { icon: faChrome, label: "Visit site", link: "https://jerseycitybitcoin.com/" },
        { icon: faGithub, label: "View source", link: "https://github.com/Jersey-City-Bitcoin/JerseyCityBitcoin" }
      ]
    },
    {
      title: "DynamisAI",
      description: "A managed AI hosting and consulting product for configuring agents, reusable skills, and automated workflows, supported by a Next.js product and operational tooling.",
      linkIcons: [
        { icon: faRobot, label: "AI workflows" },
        { icon: faReact, label: "Next.js" },
        { icon: faChrome, label: "Visit site", link: "https://dynamisai.io" }
      ]
    },
    {
      title: "Technical blog",
      description: "Longer-form notes on Bitcoin, software engineering, self-hosting, and the protocols and tools I am learning in public. Built as a lightweight Astro site.",
      linkIcons: [
        { icon: faCode, label: "Astro" },
        { icon: faChrome, label: "Read the blog", link: "https://blog.jamestsetsekas.com/" },
        { icon: faGithub, label: "View source", link: "https://github.com/JamesTsetsekas/gblog" }
      ]
    },
  ],
};

export const contact = {
  title: "Let’s build something useful.",
  description: "Want to talk about React products, Nostr, or Bitcoin and Lightning? Reach me at James@JamesTsetsekas.com.",
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
  description: "Full-stack developer building open-source Nostr commerce and Bitcoin Lightning payments at Conduit, plus React applications with Great Plains Communications.",
  image: "https://avatars.githubusercontent.com/u/8147662?v=4",
  url: "https://jamestsetsekas.com/",
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
      title: "My Conduit contributions",
      link: "https://github.com/search?q=is%3Apr+author%3AJamesTsetsekas+org%3AConduit-BTC&type=pullrequests",
      icon: faGithub,
      iconb: faGithubAlt,
    },
  ]
};
