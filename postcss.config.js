module.exports = (ctx) => {
  return {
    ...ctx,
    plugins: [require('postcss-import')(), require('postcss-extend')()],
  };
};
