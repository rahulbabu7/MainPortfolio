<template>
  <div
    ref="cardRef"
    class="gradient-border rounded-2xl p-8 hover-lift scroll-reveal"
    :class="{ visible: isVisible }"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      <div class="flex items-start gap-4">
        <div :class="`w-12 h-12 rounded-lg bg-gradient-to-br ${experience.gradientClass} flex items-center justify-center flex-shrink-0`">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="experience.icon"></path>
          </svg>
        </div>
        <div>
          <h3 class="text-xl font-bold text-white mb-1">{{ experience.title }}</h3>
          <p class="text-slate-400 text-sm">{{ experience.company }}</p>
        </div>
      </div>
      <span :class="`px-4 py-2 ${experience.statusClass} rounded-full text-xs font-medium inline-block`">
        {{ experience.status }}
      </span>
    </div>
    <div class="space-y-3 ml-0 md:ml-16">
      <p class="text-slate-300 leading-relaxed">{{ experience.description }}</p>
      <ul class="space-y-2 text-slate-400 text-sm">
        <li v-for="(highlight, idx) in experience.highlights" :key="idx" class="flex items-start gap-2">
          <span :class="`mt-1 ${experience.gradientClass.includes('cyan') ? 'text-cyan-400' : 'text-blue-400'}`">▹</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
      <div class="flex flex-wrap gap-2 mt-4">
        <span
          v-for="tag in experience.tags"
          :key="tag"
          class="px-3 py-1 bg-slate-800 rounded-full text-xs text-slate-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const props = defineProps({
  experience: {
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
