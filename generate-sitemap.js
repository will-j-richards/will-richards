const SitemapGenerator = require('sitemap-generator');
const path = require('path');

const generator = SitemapGenerator('https://http://willrichards.me/', {
  stripQuerystring: false, // Set this to true if you want to strip query parameters from URLs in the sitemap.
  filepath: path.join(__dirname, 'sitemap.xml'), // Output file path for the sitemap.
});

generator.on('done', () => {
  console.log('Sitemap generated successfully!');
});

generator.start();
