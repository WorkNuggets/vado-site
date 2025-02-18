import { getAsset, getBlogPermalink, getPermalink } from './utils/permalinks';

export const headerData = {
	links: [
		{
			text: 'Homes',
			href: '/#homes',
		},
		{
			text: 'How it Works',
			href: '/#how-it-works',
		},
		{
			text: 'Resources for Brokers',
			href: '/professionals',
		},
	],
	actions: [
		{
			text: 'Download App',
			href: '#homes',
		},
	],
};

export const footerData = {
	// links: [
	// 	{
	// 		title: 'For Brokerages',
	// 		links: [
	// 			{ text: 'Implementation Tools', href: '#' },
	// 			{ text: 'Marketing Resources', href: '#' },
	// 			{ text: 'Partners', href: '#' },
	// 		],
	// 	},
	// 	{
	// 		title: 'Support',
	// 		links: [
	// 			{ text: 'Docs', href: '#' },
	// 			{ text: 'Professional Services', href: '#' },
	// 		],
	// 	},
	// 	{
	// 		title: 'Support',
	// 		links: [
	// 			{ text: 'Docs', href: '#' },
	// 			{ text: 'Professional Services', href: '#' },
	// 		],
	// 	},
	// 	{
	// 		title: 'Company',
	// 		links: [
	// 			{ text: 'About', href: '#' },
	// 			{ text: 'Careers', href: '#' },
	// 		],
	// 	},
	// ],
	secondaryLinks: [
		{ text: 'Terms', href: getPermalink('/terms') },
		{ text: 'Privacy Policy', href: getPermalink('/privacy') },
	],
	// socialLinks: [
	// 	{
	// 		ariaLabel: 'Tiktok',
	// 		icon: 'tabler:brand-tiktok',
	// 		href: '#',
	// 	},
	// 	{ ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
	// ],
	footNote: `
    Copywright &copy; ${new Date().getFullYear()} · All rights reserved
  `,
};
