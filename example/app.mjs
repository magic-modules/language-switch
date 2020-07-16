export const state = {
  title: '@magic-modules/language-switch',
  description: [
    '@magic-modules LanguageSwitch.',
    ' adds an intelligent language switching mechanism to your @magic app.',
  ],
  logotext: 'LanguageSwitch',

  languages: [
    { code: 'en', to: '/', text: 'english' },
    { code: 'de', to: '/de/', text: 'deutsch' },
  ],
  menu: [
    { to: '/#installation', text: 'installation' },
    { to: '/#usage', text: 'usage' },
    { to: '/#pages', text: 'language pages' },
    { to: '/#state', text: 'required state' },
    { to: '/#source', text: 'source' },
  ],
}

export const style = {
  '.LightSwitch': {
    bottom: '0.5em',
    top: 'auto',
  },
}
