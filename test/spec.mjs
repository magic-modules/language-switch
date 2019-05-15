import { is } from '@magic/test'
import * as LanguageSwitch from '../src/index.mjs'

export default [
  {
    fn: () => LanguageSwitch.View,
    expect: is.function,
    info: 'expect LanguageSwitch.View to be a function',
  },
]
