
import profile from './profile.png';
import {  faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faChalkboardTeacher, faUsers } from '@fortawesome/free-solid-svg-icons';

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
	title: "James Tsetsekas",
  description: "I'm a Full Stack Web Developer and I love to create dynamic, responsive web applications.",
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
	],
}

export const about = {
	title: "About Me",
	description: [
    "I'm a self taught Full Stack Web Developer specializing in JavaScript, HTML, CSS and React. I teach & mentor hundreds of students via coding course communities and meetups. I completed Scrimba’s Frontend Developer Bootcamp and Free Code Camp’s Front End Development Libraries, Back End Development and APIs, and JavaScript Algorithms and Data Structures courses. I am interested in teams valuing quality, clean code principles.",
    "I have Object Oriented Programming experience using JavaScript, PHP, and Python as well as design experience, wireframing, editing, and illustrating with a variety of tools such as Adobe Photoshop, Illustrator, Xd, and Figma.",
    "I have experience in business, IT and management. I started my career at a big four accounting firm working on the IT helpdesk. Immediately following that, I joined a team supporting proprietary web applications at the world’s largest franchisor of residential real estate brokerages. I was the IT Director and Property Manager at a construction & real estate development company. I managed and streamlined their IT systems, oversaw commercial and residential leasing. I went on to work for a IT Managed Service Provider where I was a VOIP Project Manager.",
    "When I’m not programming, I focus on my hobbies which are: Bitcoin, attending and organizing coding meetups and confrences, Real Estate, Finance, Travel, Skiing, Dogs, Building Computers & Servers, Self Hosting Websites & Media Servers."
	],
}

export const work = {
	title: "What I do",
	cards: [
    {
      title: "Full Stack Web Developer",
      description: "I create responsive websites using JavaScript, HTML, CSS, React, Bootstrap, and Node.js.",
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
      title: "Coding mentor",
      description: "I teach & mentor hundreds of students via coding course communities and meetups.",
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

export const projects = {
	title: "Projects",
	cards: [
    {
      title: "Quizzical",
      description: "A React Quiz application that utilizes fetch API requests to display multiple choice trivia questions and calculate scores.",
      linkIcons: [
        {
          icon: faChrome,
          link: "https://github.com/JamesTsetsekas/Quizzical-React-Quiz/",
        },
        {
          icon: faGithub,
          link: "https://quizzical-react-quiz.vercel.app/",
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
      description: "A Chrome extension to shows a random nature photo the time, weather and bitcoin price when you open a new tab Also works on a webpage.",
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
      description: "Search omdb api for movies and add them to local storage and displays them on the watchlist.",
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
			title: "Color Scheme Generator",
      description: "A Color Scheme Generator tool using thecolorapi.com.",
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
      description: "A Password Generator That can be used in webpage or chrome extension.",
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
      description: "A Invoice Creator web app, that can be used in a webpage or as a chrome browser extension.",
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
	]
}
