<template>
  <section id="projects" class="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <div ref="sectionHeader" class="text-center mb-16 scroll-reveal" :class="{ visible: isVisible }">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Featured <span class="gradient-text">Projects</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Building innovative solutions across AI/ML and full-stack development
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
        />
      </div>

      <!--
<div class="text-center mt-12">
  <button class="px-8 py-4 border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all">
    View All Projects
  </button>
</div>
-->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.vue'

const sectionHeader = ref(null)
const { isVisible, observeElement } = useScrollReveal()

onMounted(() => {
  observeElement(sectionHeader.value)
})
</script>
