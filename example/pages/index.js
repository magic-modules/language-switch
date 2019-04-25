module.exports = {
  View: () =>
    div([
      LanguageSwitch,
      h1('@magic-modules/languageswitch'),
      p([
        'this is the ',
        Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
        ' LanguageSwitch component. It provides a language switch menu.',
      ]),

      GitBadges({
        project: 'magic-modules/languageswitch',
        appveyor: 'jaeh/languageswitch',
      }),

      h2({ id: 'installation' }, 'installation:'),
      p(
        'installation is done using npm. for now, all magic modules are living on github and not on npm.',
      ),
      p('note the missing @ before magic-modules.'),
      p('this is how we install npm modules from github.'),

      Pre.View(`
npm install magic-modules/languageswitch
`),

      h2({ id: 'require' }, 'require:'),
      p('first add the component to the assets'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  LanguageSwitch: require('@magic-modules/languageswitch'),
}`),
      h2({ id: 'usage' }, 'usage:'),
      p('in a page or component'),
      Pre.View('module.exports = {\n  View: () => LanguageSwitch,\n}'),

      h2({ id: 'pages' }, 'language pages'),
      p('create your languages in the pages directory, for example:'),
      Pre.View(`
/pages/
  index.js // english page
  /de/
    index.js // german page
`),

      h2({ id: 'state' }, 'required state'),
      p('LanguageSwitch needs to know about the languages in your app.'),
      Pre.View(`
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
          { to: 'https://github.com/magic-modules/languageswitch/tree/master/example' },
          'example directory',
        ),
        ' and gets built and published to github using ',
        Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
      ]),
    ]),
}
