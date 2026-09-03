import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { globalMixins } from './postcss-global-mixins.js';

const config = {
  preprocess: [globalMixins(), vitePreprocess()],
  kit: {
    adapter: adapter()
  }
};

export default config;
