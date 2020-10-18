module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: [
      '@nuxtjs',
      'plugin:nuxt/recommended',
      'plugin:prettier/recommended',
      'prettier',
      'prettier/vue',
    ],
    plugins: ['prettier'],
    
    rules: {
      'nuxt/no-cjs-in-config': 'off',
      indent: ['error', 4], 
    },
  }