<template>
  <div class="demo">
    <h1>Vue Custom Scrollbar Demo</h1>
    <VueCustomScrollbar class="scroll-area" :settings="{ suppressScrollX: true }">
      <div class="content">
        <p v-for="i in 50" :key="i">这是第 {{ i }} 行内容</p>
      </div>
    </VueCustomScrollbar>
  </div>
</template>

<script setup>
import VueCustomScrollbar from './vue-scrollbar.vue'
</script>

<style>
.demo {
  padding: 20px;
}

.scroll-area {
  height: 300px;
  background: #f5f5f5;
  border-radius: 8px;
}

.content {
  padding: 20px;
}
</style>
