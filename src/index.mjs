export const View = (props = {}) => {
  CHECK_PROPS(props, propTypes, 'LanguageSwitch')

  let { languages = [], url, hash, root, sep = '', showActive = false } = props

  // no languages, no menu
  if (!languages.length || !root || !url) {
    return
  }

  url = url.replace(root, '/').replace(/\/\/+/g, '/')

  const urlArr = url.split('/').filter(a => a)
  const urlLang = urlArr[0]
  const lang = languages.find(l => l.code === urlLang) || languages[0] || { code: props.language }
  const language = lang.code

  if (language && language !== props.language) {
    actions.changeLanguage(props, language)
  }

  return ul(
    { class: 'LanguageSwitch' },
    languages
      .filter(({ code }) => showActive || code !== language)
      .map(({ to = '', text, code }, i) => {
        url = url.replace(`/${language}/`, '/')

        const h = hash ? `#${hash}` : ''
        to = (to + url + h).replace(/\/\/+/g, '/')

        // i + 2 because one language will always be invisible
        let iModifier = i + 1
        if (!showActive) {
          iModifier = i + 2
        }

        const showSep = sep && iModifier < languages.length

        return [
          li([Link({ to, onclick: [actions.changeLanguage, code] }, text)]),
          showSep ? li(sep) : '',
        ]
      }),
  )
}

export const state = {
  language: '',
}

export const actions = {
  changeLanguage: (state, language) => ({ ...state, language }),
}

export const style = {
  '.LanguageSwitch': {
    position: 'fixed',
    top: '0.5em',
    right: '1.5em',
    left: 'auto',
    fontSize: '0.8em',
  },
}

export const global = {
  state: {
    language: true,
  },
  actions: {
    changeLanguage: true,
  },
}

export const propTypes = {
  LanguageSwitch: [
    { key: 'languages', type: 'array', required: true },
    { key: 'url', type: 'string', required: true },
    { key: 'hash', type: 'string' },
    { key: 'root', type: 'string' },
  ],
}
