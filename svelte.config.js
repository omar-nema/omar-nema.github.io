// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
    }),

    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    // paths: {
    //   base: dev ? '' : '',
    // },
    appDir: 'internal',
  },
};

export default config;
