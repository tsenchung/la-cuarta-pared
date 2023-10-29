import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import cmsMetadataResolver from './script/cmsMetadataResolver.js';

export default defineConfig({
        plugins: [cmsMetadataResolver(), sveltekit()],
        css: {
            preprocessorOptions: {
              scss: {
                additionalData: '@use "src/variables.scss" as *;'
              }
            }
        }
});