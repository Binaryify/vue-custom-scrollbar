# vue-custom-scrollbar

Vue 3 的简约但完美的自定义滚动条组件 (使用了 [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar))

Minimalistic but perfect custom scrollbar component for Vue 3 (using [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar))

## 安装 / Install

```bash
npm install vue-custom-scrollbar
# or
yarn add vue-custom-scrollbar
```

## 使用 / Usage

```vue
<template>
  <VueCustomScrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHandle">
    <img src="./image.jpg" alt="" />
  </VueCustomScrollbar>
</template>

<script setup>
import { reactive } from 'vue'
import VueCustomScrollbar from 'vue-custom-scrollbar'

const settings = reactive({
  suppressScrollY: false,
  suppressScrollX: false,
  wheelPropagation: false
})

const scrollHandle = (evt) => {
  console.log(evt)
}
</script>

<style>
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 400px;
}
</style>
```

## 文档 / Docs

[Documentation](https://binaryify.github.io/vue-custom-scrollbar/)

## License

[MIT](https://github.com/Binaryify/vue-custom-scrollbar/blob/master/LICENSE)
