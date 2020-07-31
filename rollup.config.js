// rollup.config.js
import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/js/main.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife',
  },
  plugins: [
    svelte({
      // Optionally, preprocess components with svelte.preprocess:
      // https://svelte.dev/docs#svelte_preprocess
      preprocess: sveltePreprocess({ postcss: true }),

      // Emit CSS as "files" for other plugins to process

      // Extract CSS into a separate file (recommended).
      // See note below
      css: function (css) {
        // creates `main.css` and `main.css.map` — pass `false`
        // as the second argument if you don't want the sourcemap
        css.write('public/main.css');
      },
    }),
    resolve(),
  ],
};
