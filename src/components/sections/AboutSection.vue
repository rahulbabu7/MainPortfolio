<template>
  <section id="about" class="relative py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div ref="sectionHeader" class="text-center mb-16 scroll-reveal" :class="{ visible: isVisible }">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          About <span class="gradient-text">Me</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Passionate about building innovative solutions that make a difference
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Education Card -->
        <div
          ref="educationCard"
          class="gradient-border rounded-2xl p-8 hover-lift scroll-reveal"
          :class="{ visible: isEducationVisible }"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Education</h3>
          </div>
          <div class="space-y-6">
            <div>
              <h4 class="text-lg font-semibold text-cyan-400">M.Tech in Computer Science</h4>
              <p class="text-slate-400">St Joseph's College of Engineering and Technology</p>
              <p class="text-sm text-slate-500">2024-2026 | CGPA: 9.14</p>
            </div>
            <div>
              <h4 class="text-lg font-semibold text-blue-400">B.Tech in Computer Science</h4>
              <p class="text-slate-400">St Joseph's College of Engineering and Technology</p>
              <p class="text-sm text-slate-500">2020-2024 | CGPA: 7.88</p>
            </div>
          </div>
        </div>

        <!-- Achievements Card -->
        <div
          ref="achievementsCard"
          class="gradient-border rounded-2xl p-8 hover-lift scroll-reveal"
          :class="{ visible: isAchievementsVisible }"
          style="animation-delay: 0.1s"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold">Certifications</h3>
          </div>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-cyan-400 mt-2"></div>
              <div>
                <p class="font-medium text-white">AI and Machine Learning Fundamentals</p>
                <p class="text-sm text-slate-400">Advanced certification program</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-blue-400 mt-2"></div>
              <div>
                <p class="font-medium text-white">B2 English Core Skills</p>
                <p class="text-sm text-slate-400">British Council - Intermediate Level</p>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
              <div>
                <p class="font-medium text-white">Research Experience</p>
                <p class="text-sm text-slate-400">Medical image analysis and computer vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionHeader = ref(null)
const educationCard = ref(null)
const achievementsCard = ref(null)

const { isVisible, observeElement } = useScrollReveal()
const { isVisible: isEducationVisible, observeElement: observeEducation } = useScrollReveal()
const { isVisible: isAchievementsVisible, observeElement: observeAchievements } = useScrollReveal()

onMounted(() => {
  observeElement(sectionHeader.value)
  observeEducation(educationCard.value)
  observeAchievements(achievementsCard.value)
})
</script>
