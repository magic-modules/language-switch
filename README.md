## @magic-modules/language-switch
this is the [@magic-modules](https://github.com/magic-modules/)
LanguageSwitch component. It provides a dynamic language switch menu

it redirects your current page to any of the other language versions that exist,
but also **assumes that there are alternatives for every language.**

[html docs](https://magic-modules.github.io/language-switch/)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-modules/language-switch.svg
[npm-url]: https://www.npmjs.com/package/@magic-modules/language-switch
[travis-image]: https://api.travis-ci.org/magic-modules/language-switch.svg?branch=master
[travis-url]: https://travis-ci.org/magic-modules/language-switch
[appveyor-image]: https://img.shields.io/appveyor/ci/magicmodules/language-switch/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicmodules/language-switch/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-modules/language-switch/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-modules/language-switch
[greenkeeper-image]: https://badges.greenkeeper.io/magic-modules/language-switch.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-modules/language-switch.svg
[snyk-image]: https://snyk.io/test/github/magic-modules/language-switch/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-modules/language-switch

#### install:
```bash
npm install --save-exact @magic-modules/language-switch
```

#### usage:
```javascript
// in any component View
export const View = state => div({ class: 'page' }, LanguageSwitch(state)),
}
```

##### language pages
create your languages in the pages directory, for example:

```bash
/pages/
  index.js // english page
  /de/
    index.js // german page
```

##### required app state'),
LanguageSwitch needs to know about the languages in your app.
```javascript
// /assets/app.js
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
