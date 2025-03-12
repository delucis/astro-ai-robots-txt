import type { AstroIntegration } from 'astro';
import fs from 'node:fs/promises';

export default function astroAiRobotsTxt() {
	return {
		name: 'astro-ai-robots-txt',
		hooks: {
			async 'astro:build:done'({ logger, dir }) {
				const robotsTxtPath = new URL('robots.txt', dir);

				// Load a user’s existing `robots.txt` file if they have one.
				let robotsTxtContents = '';
				try {
					robotsTxtContents = await fs.readFile(robotsTxtPath, 'utf-8');
					logger.debug('Existing `robots.txt` found in build output. AI block list will be added.');
				} catch {
					logger.debug('No `robots.txt` found in build output. New file will be created.');
				}

				// Load the AI bot block list `robots.txt`.
				const aiRobotsTxt = await fs.readFile(new URL('robots.txt', import.meta.url), 'utf-8');

				// Save combined `robots.txt`.
				await fs.writeFile(robotsTxtPath, aiRobotsTxt + `\n\n` + robotsTxtContents, 'utf-8');

				logger.info(
					`${robotsTxtContents ? 'Updated' : 'Created'} \`robots.txt\` with AI bot block list.`
				);
			},
		},
	} satisfies AstroIntegration;
}
