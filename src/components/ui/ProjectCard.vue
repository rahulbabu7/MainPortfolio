<template>
  <div 
    ref="cardRef"
    class="gradient-border rounded-2xl p-6 hover-lift scroll-reveal" 
    :class="{ visible: isVisible }"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="flex items-start justify-between mb-4">
      <div :class="`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradientClass} flex items-center justify-center`">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="project.icon"></path>
        </svg>
      </div>
      <span :class="`px-3 py-1 ${project.categoryColor} rounded-full text-xs font-medium`">
        {{ project.category }}
      </span>
    </div>
    <h3 class="text-xl font-bold mb-3">{{ project.title }}</h3>
    <p class="text-slate-400 mb-4 text-sm leading-relaxed">{{ project.description }}</p>
    <div class="flex flex-wrap gap-2 mb-4">
      <span 
        v-for="tag in project.tags" 
        :key="tag"
        class="px-2 py-1 bg-slate-800 rounded text-xs text-slate-300"
      >
        {{ tag }}
      </span>
    </div>
    <button class="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium">
      View Details
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const props = defineProps({
  project: {
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