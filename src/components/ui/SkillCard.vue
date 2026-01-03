<template>
  <div
    ref="cardRef"
    class="gradient-border rounded-2xl p-6 hover-lift scroll-reveal"
    :class="{ visible: isVisible }"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="flex items-center gap-3 mb-6">
      <div :class="`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`">
        <svg :class="`w-5 h-5 ${category.iconColor}`" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.icon"></path>
        </svg>
      </div>
      <h3 class="text-xl font-bold">{{ category.title }}</h3>
    </div>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="skill in category.skills"
        :key="skill"
        class="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const props = defineProps({
  category: {
    type: Object,
    required: true
  },
  index: {
    type: Number,
    default: 0
  }
})

const cardRef = ref(null)
const { isVisible, observeElement } = useScrollReveal()

onMounted(() => {
  observeElement(cardRef.value)
})
</script>
