module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript',
    'plugin:vue/base',
    //'./.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures : {
      jsx : false
    }
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {}
  //   }
  // },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'array-callback-return': ['error', { 'allowImplicit': true }],
    '@typescript-eslint/no-empty-interface': 'off',
    'eqeqeq': [1, 'always', { 'null': 'ignore' }],
    'no-else-return': [1, { 'allowElseIf': false }],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi': [2, 'never'],
    'keyword-spacing': ['error', { 'before': true }],
    'max-params': ['error', 3],
    'max-statements': ['off', 10],
    'comma-dangle': ['error', 'never'],
    'no-unneeded-ternary': ['error', { 'defaultAssignment': false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-multiple-empty-lines': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-unused-components': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/multiline-html-element-content-newline': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'vue/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'off',
    'vue/no-v-html': 'off',
    'no-case-declarations': 'off',
    camelcase: 'off',
    curly: 0,
    'dot-notation': 0,
    'vue/max-attributes-per-line': ['warn', {
      singleline: {
        max: 2
      },
      multiline: {
        max: 1
      }
    }]
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
}
