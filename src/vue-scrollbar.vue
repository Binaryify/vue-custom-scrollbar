<template>
  <component
    :is="tagname"
    ref="container"
    class="ps-container"
  >
    <slot></slot>
  </component>
</template>

<script setup>
import { ref, watch, onMounted, onUpdated, onActivated, onDeactivated, onBeforeUnmount, nextTick } from 'vue'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import PerfectScrollbar from 'perfect-scrollbar'

const props = defineProps({
  settings: {
    type: Object,
    default: null
  },
  swicher: {
    type: Boolean,
    default: true
  },
  tagname: {
    type: String,
    default: 'section'
  }
})

const emit = defineEmits([
  'ps-scroll-y',
  'ps-scroll-x',
  'ps-scroll-up',
  'ps-scroll-down',
  'ps-scroll-left',
  'ps-scroll-right',
  'ps-y-reach-start',
  'ps-y-reach-end',
  'ps-x-reach-start',
  'ps-x-reach-end'
])

const container = ref(null)
let ps = null
let psInited = false

const bindEvents = () => {
  if (!container.value) return
  const events = [
    'ps-scroll-y', 'ps-scroll-x', 'ps-scroll-up', 'ps-scroll-down',
    'ps-scroll-left', 'ps-scroll-right', 'ps-y-reach-start',
    'ps-y-reach-end', 'ps-x-reach-start', 'ps-x-reach-end'
  ]
  events.forEach(event => {
    container.value.addEventListener(event, (e) => emit(event, e))
  })
}

const update = () => {
  if (ps) {
    ps.update()
  }
}

const init = () => {
  if (props.swicher && container.value) {
    if (!psInited) {
      psInited = true
      ps = new PerfectScrollbar(container.value, props.settings)
      bindEvents()
    } else {
      ps.update()
    }
  }
}

const uninit = () => {
  if (ps) {
    ps.destroy()
    ps = null
    psInited = false
  }
}

watch(() => props.swicher, (val) => {
  if (val && !psInited) {
    init()
  }
  if (!val && psInited) {
    uninit()
  }
})

watch(() => props.settings, () => {
  uninit()
  init()
}, { deep: true })

onMounted(() => {
  if (typeof window !== 'undefined') {
    init()
  }
})

onUpdated(() => {
  nextTick(update)
})

onActivated(() => {
  init()
})

onDeactivated(() => {
  uninit()
})

onBeforeUnmount(() => {
  uninit()
})

defineExpose({ update })
</script>

<style>
.ps-container {
  position: relative;
}
</style>
