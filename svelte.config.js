import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { markdown, html } from './script/preprocessor.js';
import cmsMetadataResolver from './script/cmsMetadataResolver.js';

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
    html()
  ],
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
    prerender: {
      enabled: true,
      crawl: false,
      entries: ['*']
    },
    browser: {
      hydrate: true,
      router: true
    },
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "src/variables.scss" as *;'
          }
        }
      },
      plugins: [
        cmsMetadataResolver()
      ]
    }
  }
};

export default config;
