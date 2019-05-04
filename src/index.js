const LanguageSwitch = () => (state, actions) => {
  let { languages = [], url, hash, root } = state
  CHECK_PROPS({ languages, url, hash, root }, LanguageSwitch.props, 'LanguageSwitch')
  // no languages, no menu
  if (!languages.length || !root || !url) {
    return
  }

  url = url.replace(root, '/').replace(/\/\/+/g, '/')

  const urlArr = url.split('/').filter(a => a)
  const urlLang = urlArr[0]
  const lang = languages.find(l => l.code === urlLang) || languages[0] || { code: state.language }
  const language = lang.code

  if (language && language !== state.language) {
    actions.changeLanguage(language)
  }

  return ul(
    { class: 'LanguageSwitch' },
    languages.map(({ to = '', text, code }) => {
      if (code === language) {
        return
      }

      url = url.replace(`/${language}/`, '/')

      const h = hash ? `#${hash}` : ''
      to = (to + url + h).replace(/\/\/+/g, '/')

      return li([Link({ to, onclick: () => actions.changeLanguage(code) }, text)])
    }),
  )
}

LanguageSwitch.state = {
  language: '',
}

LanguageSwitch.actions = {
  changeLanguage: language => ({ language }),
}

LanguageSwitch.style = {
  '.LanguageSwitch': {
    position: 'fixed',
    top: '0.5em',
    right: '0.5em',
    left: 'auto',
    fontSize: '0.8em',
  },
}

LanguageSwitch.global = {
  state: {
    language: true,
  },
  actions: {
    changeLanguage: true,
  },
}

LanguageSwitch.props = [
  { key: 'languages', type: 'array', required: true },
  { key: 'url', type: 'string', required: true },
  { key: 'hash', type: 'string' },
  { key: 'root', type: 'string' },
]

module.exports = LanguageSwitch
