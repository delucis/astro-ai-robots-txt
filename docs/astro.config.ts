import starlight from '@astrojs/starlight';
import astroAiRobotsTxt from 'astro-ai-robots-txt';
import { defineConfig } from 'astro/config';
import starlightThemeFlexoki from 'starlight-theme-flexoki';

export default defineConfig({
	integrations: [
		astroAiRobotsTxt(),
		starlight({
			title: 'astro-ai-robots-txt',
			social: {
				github: 'https://github.com/delucis/astro-ai-robots-txt',
			},
			editLink: {
				baseUrl: 'https://github.com/delucis/astro-ai-robots-txt/edit/main/docs/',
			},
			lastUpdated: true,
			plugins: [starlightThemeFlexoki({ accentColor: 'red' })],
			sidebar: [],
			pagefind: false,
			credits: true,
		}),
	],
});
