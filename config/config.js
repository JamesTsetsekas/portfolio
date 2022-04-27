
import profile from './profile.png';
import {  faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

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
  description: "A Full Stack Web Developer creating dynamic, responsive websites and web applications.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
      link: "https://docs.google.com/document/d/1pIIwujJlsw7cMcVzo9qV8De8mDWQJoYPcIDRYJoCFNk/edit#",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "About Me",
	description: [
    "I specialize in HTML, CSS, SCSS, JS, WordPress, and React. I am constantly studying and practicing to grow my skills. I have completed many reputable courses in subjects such as Front End Development Libraries, Back End Development and APIs,  and JavaScript Algorithms and Data Structures. Most nights, I am always looking to expand my skill set.",
    "I have Object Oriented Programming experience using JavaScript, PHP, and Python. I have design experience, wireframing, editing, and illustrating with a variety of tools such as Adobe Photoshop, Illustrator, Xd, and various other tools.",
    "I have business, technical and management experience, which began with two years of supporting users at a remote IT helpdesk at a Big 4 accounting firm. Immediately following that, I joined a team supporting proprietary web applications at the world’s largest franchiser of residential real estate brokerages. I was the Property Manager and IT Director at a construction & real estate development company. I managed and streamlined their IT systems, oversaw commercial and residential leasings. I went on to work for a IT Managed Service Provider where I was a VOIP Project Manager. Additionally, I work Freelance Web Development projects.",
    "When I’m not programming, I focus on my hobbies which are: Bitcoin, Real Estate, Finance, Travel, Skiing, Dogs, building computers & servers, Self Hosting Websites & Media Servers.",
	],
}

export const work = {
	title: "What I do",
	cards: [
    {
      title: "Full Stack Web Developer",
      description: "I create responsive websites using Reactjs, Next.js, Node.js, Express.js, and Wordpress.",
      icons: null,
    },
		{
      title: "IT Systems Admin",
      description: "I manage, configure, and operate computer systems, virtual machines, networks, and applications.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarGaze",
			description: "A react application that lets you explore the most starred projects on GitHub and view their code.",
			icons: [
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
			title: "Minesweeper",
      description: "A Windows XP Minesweeper in React + Hooks. with mobile support.",
			icons: [
				{
          icon: faChrome,
          link: "https://minesweeper-jamestsetsekas.vercel.app/",
				},
				{
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Minesweeper",
				},
			]
		},
		{
			title: "Provably Fair Dice Game",
      description: "A Provably Fair Dice game with chat box. Made with Node.JS, MongoDB and Socket.IO. Minimal frontend is written in pure Javascript (not optimized for mobile view.)",
			icons: [
        {
          icon: faChrome,
          link: "https://provefaircasino.thejamescloud.duckdns.org/",
        },
        {
          icon: faGithub,
          link: "https://github.com/JamesTsetsekas/Provably-Fair-Dice",
        },
			]
		}
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at Jtsetsekas@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:Jtsetsekas@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE
export const SEO = {
	// 50 - 60 char
  title: "James Tsetsekas | Full-Stack Web Dev | DevOps Engineer | System Administrator",
	description: "I create websites and manage computer systems, servers, virtualization, and networks.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@JamesTsetsekas",
  description: "Full-Stack Web Developer | Reactjs Developer | IT Sys Admin | DevOps ",
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
