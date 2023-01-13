# Vue3 specific Metafiles

Load the files into the new project folder (not into an already finished one, otherwise the files will be overwritten).

```bash
npx degit gisu/vueBoiler --force
```
If there is no package.json yet, initialize it with `npm init`. Then install the remaining packages. It is assumed that it is usually an existing Vue or Nuxt project, in which Vite, Typescript, Eslint etc. are already installed.

## Install Packages

**dependencies**
```bash
npm i container-query-polyfill @tailwindcss/container-queries
```

**devDependencies**
```bash
npm i -D @vitejs/plugin-vue @vue/test-utils @vitest/ui vitest @babel/types @types/web-bluetooth vue-tsc postcss postcss-import postcss-nested tailwindcss plop msw jsdom cssnano autoprefixer
```

## Extend script
Then expand the script block of `package.json`:

```json
"test:e2e": "cypress open",
"test:unit": "vitest run",
"test:unit:watch": "vitest",
"test:unit:ui": "vitest --ui",
"typecheck": "vue-tsc --noEmit",
"plop": "plop"
```

## Vitest
To be able to test the components also via Vitest the `vite.config.js` must be extended by a test block:

```js
test: {
  include: ['tests/**/*.test.ts', 'src/components/**/*.test.ts', 'src/composables/**/*.test.ts'],
    environment: 'jsdom',
    deps: {
    inline: ['@vue']
  }
}
```

https://vitest.dev/

## Mock Service Worker
It is already prepared, in the file `mocks/handlers.js` the requests are noted which should be mocked. To connect the service worker:

```bash
npx msw init public/ --save
```
https://mswjs.io/

## E2E Tests
Cypress installs relatively easily, the installer helps you with that.

```bash
npx cypress open
```
More info about possible problems
- https://docs.cypress.io/guides/tooling/typescript-support
