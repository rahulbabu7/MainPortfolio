import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal() {
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  const observeElement = (el) => {
    if (observer && el) {
      observer.observe(el)
    }
  }

  return {
    isVisible,
    observeElement
  }
}
