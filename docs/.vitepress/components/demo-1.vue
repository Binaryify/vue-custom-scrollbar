<template>
  <div id="demo">
    <vue-custom-scrollbar 
      class="scroll-area" 
      :settings="settings" 
      @ps-scroll-y="scrollHandle" 
      @ps-y-reach-end="loadMore" 
      :style="'width:' + width + 'px;height:' + height + 'px'"
    >
      <div class="demoImg"></div>
    </vue-custom-scrollbar>
    <ul>
      <li>
        <label>
          wheelPropagation
          <input type="checkbox" v-model="settings.wheelPropagation">
        </label>
      </li>
      <li>
        <label>
          suppressScrollX
          <input type="checkbox" v-model="settings.suppressScrollX">
        </label>
      </li>
      <li>
        <label>
          suppressScrollY
          <input type="checkbox" v-model="settings.suppressScrollY">
        </label>
      </li>
      <li>
        <label>
          width
          <input type="text" v-model="width">
        </label>
      </li>
      <li>
        <label>
          height
          <input type="text" v-model="height">
        </label>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import vueCustomScrollbar from '../../../src/vue-scrollbar.vue'

const settings = reactive({
  suppressScrollY: false,
  suppressScrollX: false,
  wheelPropagation: false
})

const height = ref('400')
const width = ref('600')

const scrollHandle = (evt) => {
  console.log(evt)
}

const loadMore = () => {
  console.log('reach end')
}

const IsPC = () => {
  const agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  return !agents.some(agent => navigator.userAgent.includes(agent))
}

onMounted(() => {
  if (!IsPC()) {
    height.value = String(400 / 2.5)
    width.value = String(600 / 2.5)
  }
})
</script>

<style>
.scroll-area {
  position: relative;
  margin: auto;
}

.scroll-area .demoImg {
  background-image: url('../azusa.jpg');
  width: 1280px;
  height: 720px;
}
</style>
