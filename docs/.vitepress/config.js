import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/vue-custom-scrollbar/',
  title: 'vue-custom-scrollbar',
  description: 'Vue.JS 的迷你但完美的自定义滚动条组件',
  
  rewrites: {
    'README.md': 'index.md',
    'en/README.md': 'en/index.md'
  },

  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      description: 'Minimalistic but perfect custom scrollbar component for Vue.JS'
    }
  },

  themeConfig: {
    nav: [
      { text: 'GitHub', link: 'https://github.com/Binaryify/vue-custom-scrollbar' }
    ],
    sidebar: 'auto',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Binaryify/vue-custom-scrollbar' }
    ]
  }
})
