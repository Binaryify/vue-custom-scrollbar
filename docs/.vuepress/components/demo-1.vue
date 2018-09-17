<template>
 <div>
 <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
    <img src="http://utatti.github.io/perfect-scrollbar/azusa.jpg" height="720" width="1280" alt="">
  </vue-custom-scrollbar>
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