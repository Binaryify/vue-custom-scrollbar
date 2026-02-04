## 2.0.0 | 2026.02.04

### Breaking Changes
- Vue 3 only, Vue 2 is no longer supported
- CSS import path changed to `vue-custom-scrollbar/dist/style.css`
- Lifecycle hook `beforeDestroy` replaced with `onBeforeUnmount`

### Features
- Rewritten with Vue 3 Composition API (`<script setup>`)
- Migrated build tool from Vue CLI to Vite
- Migrated docs from VuePress to VitePress
- Support both ESM and UMD module formats
- Exposed `update` method via `defineExpose`

### Improvements
- Smaller bundle size
- Faster build speed
- Better tree-shaking support

## 1.4.4 | 2022.04.15
- Add Vite support

## 1.4.3 | 2021.12.10
- Update perfect-scrollbar [#68](https://github.com/Binaryify/vue-custom-scrollbar/issues/68)

## 1.4.0 | 2020.10.05
- Fixed SSR support error

- Need import css now ( import "vue-custom-scrollbar/dist/vueScrollbar.css")

## 1.3.0 | 2020.08.29
- Update `perfect-scrollbar` to 1.5.0