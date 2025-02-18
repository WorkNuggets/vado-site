import { getPermalink } from './utils/permalinks';

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
			text: 'Agents & Property	Managers',
			href: '/professionals',
		},
	],
	actions: [
		{
			text: 'Download App',
			id: 'cta-button-nav',
			type: 'button',
		},
	],
};

export const footerData = {
	secondaryLinks: [
		{ text: 'Terms', href: getPermalink('/terms') },
		{ text: 'Privacy Policy', href: getPermalink('/privacy') },
	],
	footNote: `
    Copywright &copy; ${new Date().getFullYear()} · All rights reserved
  `,
};
