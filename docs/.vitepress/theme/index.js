import DefaultTheme from 'vitepress/theme'
import Demo1 from '../components/demo-1.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('demo-1', Demo1)
  }
}
