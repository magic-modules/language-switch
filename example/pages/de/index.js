export const state = {
  lang: 'de',
}

export const View = state => [
  LanguageSwitch(state),
  h1('@magic-modules/language-switch'),
  p([
    'dies ist das ',
    Link({ to: 'https://github.com/magic-modules' }, '@magic-modules'),
    ' LanguageSwitch modul. Es rendert ein Menu mit Sprachauswahl.',
  ]),

  GitBadges('magic-modules/language-switch'),

  h2({ id: 'installation' }, 'installation:'),
  Pre('npm install magic-modules/language-switch'),

  h2({ id: 'usage' }, 'usage:'),
  p('in einer page oder einem komponent'),
  Pre("export const View = state => div({ class: 'page' }, LanguageSwitch(state))"),

  h2({ id: 'source' }, 'source'),
  p([
    'der source dieser page ist im ',
    Link(
      { to: 'https://github.com/magic-modules/language-switch/tree/master/example' },
      'example directory',
    ),
    ' und wird mit ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
    ' gebaut und zu github publiziert.',
  ]),
]
