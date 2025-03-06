import type { Config } from 'prettier'
import astroPlugin from 'prettier-plugin-astro'

const config: Config = {
  printWidth: 120,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  plugins: [astroPlugin],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}

export = config
