export function globalMixins() {
  return {
    name: 'global-mixins',

    style({ content, attributes }) {
      if (attributes.lang !== 'postcss') {
        return;
      }

      return {
        code: `@import "$lib/styles/mixins.postcss";\n${content}`
      };
    }
  };
}
