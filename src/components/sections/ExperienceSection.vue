<template>
  <section id="experience" class="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <div ref="sectionHeader" class="text-center mb-16 scroll-reveal" :class="{ visible: isVisible }">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Work <span class="gradient-text">Experience</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Professional journey and industry contributions
        </p>
      </div>

      <div class="max-w-4xl mx-auto space-y-6">
        <ExperienceCard
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :experience="exp"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { experiences } from '../../data/experience'
import ExperienceCard from '../ui/ExperienceCard.vue'

const sectionHeader = ref(null)
const { isVisible, observeElement } = useScrollReveal()

onMounted(() => {
  observeElement(sectionHeader.value)
})
</script>
