import starlight from '@astrojs/starlight';
import astroAiRobotsTxt from 'astro-ai-robots-txt';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	site: 'https://delucis.github.io',
	base: '/astro-ai-robots-txt',
	integrations: [
		astroAiRobotsTxt(),
		starlight({
			title: 'astro-ai-robots-txt',
			editLink: {
				baseUrl: 'https://github.com/delucis/astro-ai-robots-txt/edit/main/docs/',
			},
			lastUpdated: true,
			plugins: [starlightThemeFlexoki({ accentColor: 'red' })],
			sidebar: [],
			pagefind: false,
			credits: true,
			head: [
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://delucis.github.io/astro-ai-robots-txt/og.png',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image:alt',
						content:
							'astro-ai-robots-txt is an Astro integration to disallow AI scrapers in robots.txt',
					},
				},
			],
		}),
	],
});
