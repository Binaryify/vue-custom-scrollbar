# vue-custom-scrollbar

Vue.JS 的简约但完美的自定义滚动条组件(使用了 [utatti/perfect-scrollbar](https://github.com/utatti/perfect-scrollbar),所以如果遇到某些问题,可以查看 `perfect-scrollbar` 仓库)

## 为什么要自定义滚动条

众所周知,谷歌浏览器支持自定义滚动条,但是火狐或其他浏览器不支持,如果你希望你的网站更完美,就用这个组件吧~

## 为什么要使用 vue-custom-scrollbar?

`vue-custom-scrollbar` 是 Vue.JS 的一个简约但完美的自定义滚动条组件

- 不改变设计布局
- 不需要手动操作 DOM
- 使用普通的 `scrollTop` and `scrollLeft`
- 滚动条样式可完全自定义
- 布局更改后更新

# Demo

<ClientOnly>
<demo-1></demo-1>
</ClientOnly>

## 安装

安装和使用 `vue-custom-scrollbar` 的最好的方式是使用 `npm` 或者 `yarn`. 它被注册为 [vue-custom-scrollbarr](https://www.npmjs.com/package/vue-custom-scrollbar).

#### npm

```
$ npm install vue-custom-scrollbar
```

### 或者

#### yarn

```
$ yarn add vue-custom-scrollbar
```

## 警告

`vue-custom-scrollbar` 可以模拟滚动条, 但不是全部类型的. 它在某些情况下也不起作用.你可以在 [Caveats](https://github.com/utatti/perfect-scrollbar/wiki/Caveats) 找到例子.
基本上，警告中列出的项目实施起来很苛刻，将来可能无法实施。如果确实需要这些功能，请考虑使用浏览器自带的滚动条

## 如何使用

实例代码:

```vue
<template>
 <div>
 <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <img src="http://utatti.github.io/perfect-scrollbar/azusa.jpg" height="720" width="1280" alt="">
  </vue-custom-scrollbar>
 </div>
</template>
<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  components: {
    vueCustomScrollbar
  },
  data() {
    return {
      settings: {
        maxScrollbarLength: 60
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

## 选项

### `swicher {Boolean}`

禁用或启用组件

**Default**: `true`

### `tagname {String}`

默认组件根元素为 `section`,设置该值可修改组件根元素为其他元素,如:`div`

**Default**: `section`

### `handlers {String[]}`

滚动元素的事件列表

**Default**: `['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch']`

### `wheelSpeed {Number}`

鼠标滚轮事件的滚动速度

**Default**: `1`

### `wheelPropagation {Boolean}`

如果此选项为 true，则当滚动到达边的末尾时，mousewheel 事件将传播到父元素。

**Default**: `false`

### `swipeEasing {Boolean}`

如果此选项为 true，则会滚动得比较平缓。

**Default**: `true`

### `minScrollbarLength {Number?}`

设置为整数值时，滚动条的滑块部分不会小于该像素数以下。

**Default**: `null`

### `maxScrollbarLength {Number?}`

设置为整数值时，滚动条的滑块部分不会超过该像素数。

**Default**: `null`

### `scrollingThreshold {Number}`

这将设置 `ps--scrolling-x` 和 `ps--scrolling-y`的停留时间阈值。在默认的 CSS 中，无论悬停状态如何，它们都会显示滚动条。单位是毫秒。

**Default**: `1000`

### `useBothWheelAxes {Boolean}`

设置为 true 时，且只有一个（垂直或水平）滚动条是可视的，则垂直和水平滚动都会影响滚动条。

**Default**: `false`

### `suppressScrollX {Boolean}`

设置为 true 时，无论内容宽度如何，X 轴上的滚动条都将不可用。

**Default**: `false`

### `suppressScrollY {Boolean}`

设置为 true 时，无论内容高度如何，Y 轴上的滚动条都将不可用。

**Default**: `false`

### `scrollXMarginOffset {Number}`

在不启用 X 轴滚动条的情况下，内容宽度可以超过容器宽度的像素数。

**Default**: `0`

### `scrollYMarginOffset {Number}`

在不启用 Y 轴滚动条的情况下，内容高度可以超过容器高度的像素数。

**Default**: `0`

## 事件

vue-custom-scrollbar 触发的自定义事件.

### `ps-scroll-y`

当 y 轴向任一方向滚动时，此事件将触发。

### `ps-scroll-x`

当 x 轴向任一方向滚动时，此事件将触发。

### `ps-scroll-up`

向上滚动时会触发此事件。

### `ps-scroll-down`

向下滚动时会触发此事件。

### `ps-scroll-left`

滚动到左侧时会触发此事件。

### `ps-scroll-right`

滚动到右侧时会触发此事件。

### `ps-y-reach-start`

滚动到达 y 轴的起点时会触发此事件。

### `ps-y-reach-end`

当滚动到达 y 轴的末尾时，此事件将触发（对于无限滚动非常有用）。

### `ps-x-reach-start`

滚动到达 x 轴的起点时会触发此事件。

### `ps-x-reach-end`

滚动到达 x 轴末端时会触发此事件。

## 自定义样式

请参考 [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar/blob/master/css/perfect-scrollbar.css),然后在你的项目覆盖对应 class 的样式

## 帮助台

如果您有任何想法改进此项目或使用此项目的任何问题，请随时提交 [issue](https://github.com/binaryify/vue-custom-scrollbar/issues)

对于常见的问题, 这里有一个 [FAQ](https://github.com/utatti/perfect-scrollbar/wiki/FAQ) 维基页面. 请在提交 issues 前查看该页面。

请理解，解决问题可能需要一段时间。上传 PR 将是解决问题的最快方法。

## IE 支持

该插件支持现代浏览器，包括 Edge 和 IE11，但在 IE11 中可能存在一些问题，主要是因为 IE 渲染错误涉及滚动属性上的同步更新。在
[Caveats](https://github.com/utatti/perfect-scrollbar/wiki/Caveats) 也提到了这个问题 。

不支持 IE <11，并且不接受用于修复 IE <= 10 中的问题的补丁。如果想支持旧的 IE，请 fork 此项目并在本地进行修改。

## 更多

请参考 [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)

## License

[MIT](https://github.com/Binaryify/vue-custom-scrollbar/blob/master/LICENSE)
