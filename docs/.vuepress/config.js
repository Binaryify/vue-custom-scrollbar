module.exports = {
  base: '/vue-custom-scrollbar/',
  themeConfig: {
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/Binaryify/vue-custom-scrollbar'
      }
    ],
    sidebar: 'auto',
    locales: {
      '/': {
        label: '中文',
        selectText: '选择语言/Languages'
      },
      '/en/': {
        label: 'English',
        selectText: '选择语言/Languages'
      }
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      description: 'Vue.JS 的迷你但完美的自定义滚动条组件'
    },
    '/en/': {
      lang: 'en-US',
      description:
        'Minimalistic but perfect custom scrollbar component for Vue.JS'
    }
  }
}
