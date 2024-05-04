import {ref, computed} from 'vue'
import { defineStore } from 'pinia'

export const useScreenSizeStore = defineStore('screenSize', () => {

  const resizeObserver = new ResizeObserver((entries) => {
    const entry = entries[0]
    const { width, height } = entry.contentRect
    screenWidth.value = {width, height}
  })

  const screenWidth = ref<{width: number, height: number}>({width: 0, height: 0})

  const orientation = computed(() => screenWidth.value.width < 500 ? 'vertical' : 'horizontal')


  return { resizeObserver, screenWidth, orientation }
})
