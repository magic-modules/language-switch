const { is } = require('@magic/test')
const Pre = require('../src')

module.exports = [
  { fn: () => Pre, expect: is.function, info: 'expect LanguageSwitch to be a function' },
]