<template>
  <div id="demo">
    <vue-custom-scrollbar class="scroll-area" :settings="settings" @ps-scroll-y="scrollHanle" @ps-y-reach-end="loadMore" :style="'width:'+width+'px;height:'+height+'px'">
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
          <input type="input" v-model="width">
        </label>
      </li>
      <li>
        <label>
          height
          <input type="input" v-model="height">
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import vueCustomScrollbar from '../../../src/vue-scrollbar.vue'

export default {
  components: {
    vueCustomScrollbar
  },
  name: 'demo-1',
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false
      },
      height: '400',
      width: '600'
    }
  },
  mounted() {
    if (!this.IsPC()) {
      this.height = 400 / 2.5
      this.width = 600 / 2.5
    }
  },
  methods: {
    scrollHanle(evt) {
      console.log(evt)
    },
    loadMore() {
      console.log('reach end')
    },
    IsPC() {
      var userAgentInfo = navigator.userAgent
      var Agents = new Array(
        'Android',
        'iPhone',
        'SymbianOS',
        'Windows Phone',
        'iPad',
        'iPod'
      )
      var flag = true
      for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
          flag = false
          break
        }
      }
      return flag
    }
  }
}
</script>
<style >
.scroll-area {
  position: relative;
  margin: auto;
}

.scroll-area .demoImg {
  background-image: url('../../azusa.jpg');
  width: 1280px;
  height: 720px;
}
</style>