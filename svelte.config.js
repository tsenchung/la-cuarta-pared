import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { markdown, html } from './script/preprocessor.js';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      scss: {
        prependData: '@use "src/variables.scss" as *;'
      }
    }),
    markdown(),
    html(),
    vitePreprocess()
  ],
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
    prerender: {
      entries: ['*'],
      crawl: true
    }
  }
};

export default config;
