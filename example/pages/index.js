module.exports = () => [
  LanguageSwitch,
  h1('@magic-modules/language-switch'),
  p([
    'this is the ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' LanguageSwitch component. It provides a language switch menu.',
  ]),

  GitBadges('magic-modules/language-switch'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install magic-modules/language-switch'),

  h2({ id: 'usage' }, 'usage:'),
  p('in a page or module View'),
  Pre('module.exports = {\n  View: () => LanguageSwitch,\n}'),

  h2({ id: 'pages' }, 'language pages'),
  p('create your languages in the pages directory, for example:'),
  Pre(`
/pages/
  index.js // english page
  /de/
    index.js // german page
`),

  h2({ id: 'state' }, 'required state'),
  p('LanguageSwitch needs to know about the languages in your app.'),
  Pre(`
// /assets/app.js
module.exports = {
  state: {
    // ... other app state
    languages: [
      // the first language is the default fallback
      { code: 'en', to: '/', text: 'english' },
      { code: 'de', to: '/de/', text: 'deutsch' },
    ],
  },
}
`),

  p('thats it, your magic app now knows about your languages'),

  h2({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-modules/language-switch/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),
]
