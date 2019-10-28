module.exports = function (eleventyConfig) {

  // Copy Assets
  eleventyConfig
    .addPassthroughCopy('src/assets');

  return {
    // templateFormats: ['njk', 'md', 'html'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_build'
    },
    htmlTemplateEngine: 'njk',
    // markdownTemplateEngine: 'njk',
    // dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  };
};