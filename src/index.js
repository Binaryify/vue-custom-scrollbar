import VueCustomScrollbar from './vue-scrollbar.vue'

export { VueCustomScrollbar }

// 为了兼容性，同时支持默认导出
VueCustomScrollbar.install = (app) => {
  app.component('VueCustomScrollbar', VueCustomScrollbar)
}

export default VueCustomScrollbar
