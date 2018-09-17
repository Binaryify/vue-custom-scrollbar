# vue-custom-scrollbar

Minimalistic but perfect custom scrollbar component for Vue.JS(using [utatti/perfect-scrollbar](https://github.com/utatti/perfect-scrollbar), so if you have any question, you also can check the `perfect-scrollbar` repo)

## Why custom scrollbar

As you know, Chrome support custom scrollbar, but Firefox or other browsers don't support it, if you want your website perfect, please use this component~

## Why use vue-custom-scrollbar?

`vue-custom-scrollbar` is minimalistic but perfect scrollbar component for Vue.JS.

- No change on design layout
- Don't need manipulate DOM manually
- Use plain `scrollTop` and `scrollLeft`
- Scrollbar style is fully customizable
- Efficient update on layout change

# Demo

<ClientOnly>
<demo-1></demo-1>
</ClientOnly>

## Install

The best way to install and use `vue-custom-scrollbar` is with `npm` or `yarn`. It's registered
as [vue-custom-scrollbarr](https://www.npmjs.com/package/vue-custom-scrollbar).

#### npm

```
$ npm install vue-custom-scrollbar
```

### Or

#### yarn

```
$ yarn add vue-custom-scrollbar
```

## Caveats

`vue-custom-scrollbar` emulates some scrolls, but not all of the kinds. It also _does not_ work
in some situations. You can find these cases in [Caveats](https://github.com/utatti/perfect-scrollbar/wiki/Caveats).
Basically, items listed in the caveats are hacky to implement and may not be
implemented in the future. If the features are really needed, please consider
using browser-native scroll.

## How to use

Example code:

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

## Options

### `swicher {Boolean}`

Enable or disable this component

**Default**: `true`

### `tagname {String}`

Component default root element is `section`, setting other value can change it, for example : `div`

**Default**: `section`

### `handlers {String[]}`

It is a list of handlers to scroll the element.

**Default**: `['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch']`

### `wheelSpeed {Number}`

The scroll speed applied to mousewheel event.

**Default**: `1`

### `wheelPropagation {Boolean}`

If this option is true, when the scroll reaches the end of the side, mousewheel
event will be propagated to parent element.

**Default**: `false`

### `swipeEasing {Boolean}`

If this option is true, swipe scrolling will be eased.

**Default**: `true`

### `minScrollbarLength {Number?}`

When set to an integer value, the thumb part of the scrollbar will not shrink
below that number of pixels.

**Default**: `null`

### `maxScrollbarLength {Number?}`

When set to an integer value, the thumb part of the scrollbar will not expand
over that number of pixels.

**Default**: `null`

### `scrollingThreshold {Number}`

This sets threashold for `ps--scrolling-x` and `ps--scrolling-y` classes to
remain. In the default CSS, they make scrollbars shown regardless of hover
state. The unit is millisecond.

**Default**: `1000`

### `useBothWheelAxes {Boolean}`

When set to true, and only one (vertical or horizontal) scrollbar is visible
then both vertical and horizontal scrolling will affect the scrollbar.

**Default**: `false`

### `suppressScrollX {Boolean}`

When set to true, the scroll bar in X axis will not be available, regardless of
the content width.

**Default**: `false`

### `suppressScrollY {Boolean}`

When set to true, the scroll bar in Y axis will not be available, regardless of
the content height.

**Default**: `false`

### `scrollXMarginOffset {Number}`

The number of pixels the content width can surpass the container width without
enabling the X axis scroll bar.

**Default**: `0`

### `scrollYMarginOffset {Number}`

The number of pixels the content height can surpass the container height without
enabling the Y axis scroll bar.

**Default**: `0`

## Events

vue-custom-scrollbar dispatches custom events.

### `ps-scroll-y`

This event fires when the y-axis is scrolled in either direction.

### `ps-scroll-x`

This event fires when the x-axis is scrolled in either direction.

### `ps-scroll-up`

This event fires when scrolling upwards.

### `ps-scroll-down`

This event fires when scrolling downwards.

### `ps-scroll-left`

This event fires when scrolling to the left.

### `ps-scroll-right`

This event fires when scrolling to the right.

### `ps-y-reach-start`

This event fires when scrolling reaches the start of the y-axis.

### `ps-y-reach-end`

This event fires when scrolling reaches the end of the y-axis (useful for
infinite scroll).

### `ps-x-reach-start`

This event fires when scrolling reaches the start of the x-axis.

### `ps-x-reach-end`

This event fires when scrolling reaches the end of the x-axis.

## Custom style

Please refer to [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar/blob/master/css/perfect-scrollbar.css), then override the corresponding class style in your project

## Helpdesk

If you have any idea to improve this project or any problem using this, please
feel free to upload an [issue](https://github.com/utatti/perfect-scrollbar/issues).

For common problems, there is a [FAQ](https://github.com/utatti/perfect-scrollbar/wiki/FAQ) wiki
page. Please check the page before uploading an issue.

Uploading a PR would be the fastest way to fix an issue.

## IE Support

The plugin support modern browsers including Edge and IE11,
but may have some issues in IE11 mainly because of IE rendering bug concerning
sync update on scroll properties. The problem is mentioned in
[Caveats](https://github.com/utatti/perfect-scrollbar/wiki/Caveats) too.

IE<11 is not supported, and patches to fix problems in IE<=10 will not be
accepted. When old IEs should be supported, please fork the project and make
modification locally.

## More

Please refer to [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar)

## License

[MIT](https://github.com/Binaryify/vue-custom-scrollbar/blob/master/LICENSE)
