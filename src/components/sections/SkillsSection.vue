<template>
  <section id="skills" class="relative py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div ref="sectionHeader" class="text-center mb-16 scroll-reveal" :class="{ visible: isVisible }">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Technical <span class="gradient-text">Skills</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Expertise across multiple technologies and frameworks
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <SkillCard
          v-for="(category, index) in skillCategories"
          :key="category.id"
          :category="category"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { skillCategories } from '../../data/skills'
import SkillCard from '../ui/SkillCard.vue'

const sectionHeader = ref(null)
const { isVisible, observeElement } = useScrollReveal()

onMounted(() => {
  observeElement(sectionHeader.value)
})
</script>