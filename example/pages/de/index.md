---
@state {
  "lang": "de"
}
---


# @magic-modules/language-switch

dies ist das
[@magic-modules](https://github.com/magic-modules)
LanguageSwitch modul. Es rendert ein Menu mit Sprachauswahl.

<GitBadges>@magic-modules/language-switch</GitBadges>

## installation

`npm install @magic-modules/language-switch`

## #usage verwendung

hoisten in config.mjs:

```
// /src/config.mjs
export default {
  HOIST: ['LanguageSwitch'],
}
```

### caveat

bitte beachte, dass dieses modul nicht das menu veraendert.

ich habe es gebaut, um es auf meiner seite zu verwenden: [jaeh.at](https://jaeh.at),
und die hat kein menu.

## #pages seiten

erstelle deine sprachfiles im pages directory, zum beispiel:

```
/src/pages/
  index.mjs // englische seite
  /de/
    index.mjs // deutsche seite
```

## state

LanguageSwitch braucht folgende informationen:

```
// /src/app.mjs
export const state = {
  // ... other app state
  languages: [
    // die erste sprache ist der standard
    { code: 'en', to: '/', text: 'english' },
    { code: 'de', to: '/de/', text: 'deutsch' },
  ],
}
```

## source

der sourcecode dieser page ist im
[example directory](https://github.com/magic-modules/language-switch/tree/master/example)
und wird mit
[@magic/core](https://github.com/magic/core)
gebaut und zu github publiziert.
