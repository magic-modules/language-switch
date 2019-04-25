const LanguageSwitch = () => (state, actions) => {
  let { languages = [], url, hash } = state
  // no languages, no menu
  if (!languages.length) {
    return
  }

  const lang = state.language || state.url.split('/')[1]
  let language = languages.find(l => lang === l.lang)
  if (!language) {
    language = languages[0]
    actions.changeLanguage(language.lang)
  }

  return ul(
    { class: 'LanguageSwitch' },
    languages.map(l => {
      if (l.lang === language.lang) {
        return
      }

      if (url.startsWith(`/${language.lang}/`)) {
        url = url.replace(`/${language.lang}/`, '')
      }

      let { to = '', text } = l
      const h = hash ? `#${hash}` : ''
      to = (to + url + h).replace(/\/\//g, '/')

      if (url === to) {
        return
      }

      return li([Link({ to, onclick: () => actions.changeLanguage(l.lang) }, text)])
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

module.exports = LanguageSwitch
