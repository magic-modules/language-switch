# @magic-modules/language-switch

this is the
[@magic-modules](https://github.com/magic-modules)
LanguageSwitch component. It provides a language switch menu.

<GitBadges>magic-modules/language-switch</GitBadges>

## installation

`npm install @magic-modules/language-switch`

## usage

hoist in config.mjs:

```
// /src/config.mjs
export default {
  HOIST: ['LanguageSwitch'],
}
```

## pages

create your languages in the pages directory, for example:

```
/pages/
  index.mjs // english page
  /de/
    index.mjs // german page
```

## state

LanguageSwitch needs to know about the languages in your app.

```
// /assets/app.mjs
export const state = {
  // ... other app state
  languages: [
    // the first language is the default fallback
    { code: 'en', to: '/', text: 'english' },
    { code: 'de', to: '/de/', text: 'deutsch' },
  ],
}
```

thats it, your magic app now knows about your languages

## source

the source for this page is in the
[example directory](https://github.com/magic-modules/language-switch/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
