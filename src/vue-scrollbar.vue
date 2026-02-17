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

const PS_EVENTS = [
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
]

const container = ref(null)
let ps = null
let psInited = false
let boundContainer = null
let boundEvents = []
let pendingSettingsSync = false

const snapshotSettings = (settings) => {
  if (!settings) return {}
  return Object.fromEntries(
    Object.entries(settings).map(([key, value]) => [key, Array.isArray(value) ? [...value] : value])
  )
}

const getHandlersSignature = (settings) => {
  const handlers = settings && Array.isArray(settings.handlers) ? settings.handlers : []
  return JSON.stringify(handlers)
}

const hasRemovedSettingsKey = (nextSettings, prevSettings) => {
  return Object.keys(prevSettings).some((key) => !(key in nextSettings))
}

let lastSettingsSnapshot = snapshotSettings(props.settings)
let lastHandlersSignature = getHandlersSignature(lastSettingsSnapshot)

const bindEvents = () => {
  if (!container.value) return
  unbindEvents()
  boundContainer = container.value
  PS_EVENTS.forEach(event => {
    const listener = (e) => emit(event, e)
    boundContainer.addEventListener(event, listener)
    boundEvents.push([event, listener])
  })
}

const unbindEvents = () => {
  if (!boundContainer || boundEvents.length === 0) {
    boundContainer = null
    boundEvents = []
    return
  }
  boundEvents.forEach(([event, listener]) => {
    boundContainer.removeEventListener(event, listener)
  })
  boundContainer = null
  boundEvents = []
}

const update = () => {
  if (ps) {
    ps.update()
  }
}

const ensureContainerClass = () => {
  if (container.value && !container.value.classList.contains('ps-container')) {
    container.value.classList.add('ps-container')
  }
}

const init = () => {
  if (props.swicher && container.value) {
    ensureContainerClass()
    if (!psInited) {
      psInited = true
      ps = new PerfectScrollbar(container.value, props.settings || {})
      bindEvents()
    } else {
      ps.update()
    }
  }
}

const uninit = () => {
  unbindEvents()
  if (ps) {
    ps.destroy()
    ps = null
    psInited = false
  }
  ensureContainerClass()
}

const syncSettings = () => {
  pendingSettingsSync = false
  const nextSettingsSnapshot = snapshotSettings(props.settings)
  const nextHandlersSignature = getHandlersSignature(nextSettingsSnapshot)

  if (!psInited || !ps) {
    lastSettingsSnapshot = nextSettingsSnapshot
    lastHandlersSignature = nextHandlersSignature
    init()
    return
  }

  const needReinit = hasRemovedSettingsKey(nextSettingsSnapshot, lastSettingsSnapshot)
    || nextHandlersSignature !== lastHandlersSignature

  if (needReinit) {
    uninit()
    init()
  } else {
    Object.assign(ps.settings, nextSettingsSnapshot)
    ps.update()
  }

  lastSettingsSnapshot = nextSettingsSnapshot
  lastHandlersSignature = nextHandlersSignature
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
  if (pendingSettingsSync) return
  pendingSettingsSync = true
  nextTick(syncSettings)
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
  pendingSettingsSync = false
  uninit()
})

defineExpose({ update })
</script>

<style>
.ps-container {
  position: relative;
}
</style>
