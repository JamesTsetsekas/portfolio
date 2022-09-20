
import profile from './profile.png';
import { faGithub, faChrome, faHtml5, faCss3, faJsSquare, faReact, faBootstrap, faSass, faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faChalkboardTeacher, faUsers, faLayerGroup, faCertificate, faBitcoinSign, faBoltLightning, faComputer, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "James Tsetsekas",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
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
    text: [" Hey,","I'm "]
  },
	title: "James Tsetsekas",
  description: "I'm a System / Network Adminsitrator and  Full Stack Web Developer! I love to work with cutting edge technologies and hardware to solve buisness problems and create dynamic, responsive systems and web applications.",
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
      link: "https://btc.jamestsetsekas.com/",
      isPrimary: false,
    },
	],
}

export const about = {
	title: "About Me",
	description: [
    "I'm a System and Network Administratior Responsible for the  management, monitoring, alerting, & security of all critical IT infrastructure, networking equipment (Cisco / Juniper / Ubiquity), desktop support, server administration (Windows / Linux), VPN, Virtualization, and Telephony VoIP, Virtualization, and VoIP phone systems.",
    "I'm a Full Stack Web Developer specializing in JavaScript, HTML, CSS and React. I teach & mentor hundreds of students via coding course communities, meetups, and regularly attend seminars. I completed Scrimba’s Frontend Developer Bootcamp and Free Code Camp’s Front End Development Libraries, Back End Development and APIs, and JavaScript Algorithms and Data Structures courses. I am interested in teams valuing quality, clean code principles.",
    "I have Object Oriented Programming experience using JavaScript, PHP, and Python as well as design experience, wireframing, editing, and illustrating with a variety of tools such as Adobe Photoshop, Illustrator, Xd, and Figma.",
    "I have experience in business, leadership, IT and management. I started my career at a big four accounting firm working on the IT helpdesk. Immediately following that, I went on to lead a team of engineers supporting proprietary web based applications at the world’s largest franchisor of residential real estate brokerages where I provided leadership  as a subject matter expert on best practices to help maximize first contact resolution. I was the System Administrator at a construction & real estate development company where I managed and streamlined their IT systems. I went on to work for a IT Managed Service Provider where I was a System Engineer tasked with Deployment, Migration, & Project Management, & Support of Business VOIP Telephony phone systems projects (Netsapiens, Bicom, Altigen). Building, configuring, managing, patching, testing and monitoring of networking equipment (Cisco / Juniper / Ubiquity) Servers (Windows / Linux) and IP telephony infrastructure.",
    "When I’m not working, I focus on my hobbies which are: Bitcoin, Lightning Network, Attending and organizing coding / IT meetups,  conferences and seminars,  Real Estate, Finance, Travel, Skiing, Dogs, Building Computers & Servers, Self - Hosting Websites & Media Servers.",
	],
}

export const work = {
	title: "What I do",
	cards: [
    {
      title: "Full Stack Web Developer",
      description: "I create responsive websites using JavaScript, HTML, CSS, React, Angular, Vue.js, Bootstrap, Chakra UI, and Node.js, Express, and MongoDB.",
      icons: [
        {
          icon: faCode,
        },
        {
          icon: faDatabase,
        },
      ]
    },
    {
      title: "System Administrator",
      description: "Designing, Maintanting, and Adminstrating computer systems, frameworks, networks. Troubleshooting technical issues. Risk mitigation planning. Collaborating with Business Analysts, Project Leads and IT team to resolve issues and ensuring solutions are viable and consistent.",
      icons: [
        {
          icon: faComputer,
        },
        {
          icon: faNetworkWired,
        },
      ]
    },
    {
      title: "Bitcoin enthusiast",
      description: "I love learning & teaching others about Bitcoin. I enjoy contribuing to many open source Bitcoin related projects, and organazing and attending Bitcoin meetups and confrences. I'm a Bitcoin ⚡Lightning Network⚡ Node Operator. Contact me to open a channel or learn more about the lightning network.",
      icons: [
        {
          icon: faBitcoinSign,
        },
        {
          icon: faBoltLightning,
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
        {icon: faCertificate,
        link: "https://scrimba.com/certificate/u3bwdkfb/gfrontend"}
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
      title: "Lightning Network Point of Sale Terminal",
      description: "A Point of Sale Terminal app which makes accepting bitcoin lightning payments easy! Accessable from any internet enabled device the app calculates real time USD/BTC conversion and generates a Bitcoin Lightning Network invoice QR code and confirms once paid. Contact me for more information.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://lnbits.jamestsetsekas.com/tpos/VrTYaa2W7pA3ia7weowVA4",
        },
      ]
    },
    {
      title: "Lightning Network Node",
      description: "I run a Bitcoin Lightning Network node using lnd, with a BTCPay server instance. I love routing satoshis, and I'm always looking to open more channels. Contact me to open a channel or learn more about the lightning network.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://btc.jamestsetsekas.com/",
        },
      ]
    },
    {
      title: "React Note App",
      description: "A React Markdown note taking app, with a simple, clean, and responsive UI. Featuers the ability to save and retrieve notes from local storage",
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
	description: "I create web apps.",
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
		},
		{
			title: "My GitHub",
      link: "https://github.com/JamesTsetsekas",
		},
		{
			title: "My LinkedIn",
      link: "https://www.linkedin.com/in/jamestsetsekas/",
		},
    {
      title: "My Twitter",
      link: "https://twitter.com/JamesTsetsekas",
    },
    {
      title: "Bitcoin Lightning Tip BTC Payn server",
      link: "https://btc.jamestsetsekas.com/",
    },
	]
}
