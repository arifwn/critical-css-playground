const critical = require('critical');

critical.generate({
  strict: false,
  rebase: false,
  minify: false,
  base: 'dist',
  src: 'https://staging.southlandloghomes.com/?critical_generator=1594931774',
  target: 'critical.css',
  penthouse: {
    timeout: 40000,
    pageLoadSkipTimeout: 30000,
  },
  dimensions: [
    {
      height: 375,
      width: 812
    },
    {
      height: 768,
      width: 1024
    },
    {
      height: 1280,
      width: 800
    },
    {
      height: 1980,
      width: 1280
    },
  ]
})
// .then(({css, html, uncritical}) => {
//   console.log('css');
//   console.log(css);
//   console.log('done')
// });