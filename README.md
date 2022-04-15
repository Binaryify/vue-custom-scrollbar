# vue-custom-scrollbar

Vue.JS 的简约但完美的自定义滚动条组件(使用了 [utatti/perfect-scrollbar](https://github.com/utatti/perfect-scrollbar),所以如果遇到某些问题,可以查看 `perfect-scrollbar` 仓库)

Minimalistic but perfect custom scrollbar component for Vue.JS(using [utatti/perfect-scrollbar](https://github.com/utatti/perfect-scrollbar), so if you have any question, you also can check the `perfect-scrollbar` repo)

## 为什么要自定义滚动条/Why custom scrollbar

众所周知,谷歌浏览器支持自定义滚动条,但是火狐或其他浏览器不支持,如果你希望你的网站更完美,就用这个组件吧~

As you know, Chrome support custom scrollbar, but Firefox or other browsers don't support it, if you want your website perfect, please use this component~

## 为什么要使用 vue-custom-scrollbar?/Why use vue-custom-scrollbar?

`vue-custom-scrollbar` 是 Vue.JS 的一个简约但完美的自定义滚动条组件

`vue-custom-scrollbar` is minimalistic but perfect scrollbar component for Vue.JS.

- 不改变设计布局 / No change on design layout
- 不需要手动操作 DOM / Don't need manipulate DOM manually
- 使用普通的 `scrollTop` and `scrollLeft` / Use plain `scrollTop` and `scrollLeft`
- 滚动条样式可完全自定义 / Scrollbar style is fully customizable
- 布局更改后更新 / Efficient update on layout change

## 文档/Docs

[Docs](https://binaryify.github.io/vue-custom-scrollbar/)

## 例子/Example

```vue
<template>
 <div>
  <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <img src="http://utatti.github.io/perfect-scrollbar/azusa.jpg" height="720" width="1280" alt="">
  </vue-custom-scrollbar>
</div>
</template>
<script>
/**
 * For Vue2/Vue3
*/
import vueCustomScrollbar from 'vue-custom-scrollbar'
import "vue-custom-scrollbar/dist/vueScrollbar.css"
/**
 * For vite
*/
import vueCustomScrollbar from 'vue-custom-scrollbar/src/vue-scrollbar.vue'

export default {
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      }
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  }
}
</script>
<style >
.scroll-area {
  position: relative;
  margin: auto;
  width: 600px;
  height: 400px;
}
</style>
```

## License

[MIT](https://github.com/Binaryify/vue-custom-scrollbar/blob/master/LICENSE)
