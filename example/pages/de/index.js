module.exports = {
  View: () =>
    div([
      LanguageSwitch,
      h1('@magic-modules/languageswitch'),
      p([
        'dies ist das ',
        Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
        ' LanguageSwitch modul. Es rendert ein Menu mit Sprachauswahl.',
      ]),

      GitBadges({
        project: 'magic-modules/languageswitch',
        appveyor: 'jaeh/languageswitch',
      }),

      h2({ id: 'installation' }, 'installation:'),
      p([
        'installation funktioniert durch npm.',
        'in naher zukunft leben alle magic module auf github und nicht npm.',
      ]),
      p('das fehlende @ vor magic-modules ist, wie wir npm module von github installieren können.'),

      Pre.View(`
npm install magic-modules/languageswitch
`),

      h2({ id: 'require' }, 'importieren'),
      p('zuerst laden wir das modul via /assets/index.js'),
      Pre.View(`
// assets/index.js
module.exports = {
  //...other exports
  LanguageSwitch: require('@magic-modules/languageswitch'),
}`),
      h2({ id: 'usage' }, 'usage:'),
      p('in einer page oder einem komponent'),
      Pre.View("module.exports = {\n  View: () => div({ class: 'page' }, LanguageSwitch)\n}"),

      h2({ id: 'source' }, 'source'),
      p([
        'der source dieser page ist im ',
        Link(
          { to: 'https://github.com/magic-modules/languageswitch/tree/master/example' },
          'example directory',
        ),
        ' und wird mit ',
        Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
        ' gebaut und zu github publiziert.',
      ]),
    ]),
}
