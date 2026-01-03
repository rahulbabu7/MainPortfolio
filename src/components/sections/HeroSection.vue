<template>
  <section id="home" class="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
    <div class="max-w-7xl mx-auto w-full relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div ref="heroContent" class="space-y-8 scroll-reveal" :class="{ visible: isVisible }">
          <div class="inline-block">
            <span class="px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
              Available for opportunities
            </span>
          </div>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span class="gradient-text">Rahul Babu</span>
          </h1>

          <p class="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Computer Science Engineer specializing in
            <span class="text-cyan-400 font-semibold">Machine Learning</span>,
            <span class="text-blue-400 font-semibold">Full-Stack Development</span>, and
            <span class="text-purple-400 font-semibold">Cloud Technologies</span>
          </p>

          <div class="flex flex-wrap gap-4">
            <button
              @click="scrollToProjects"
              class="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              View Projects
            </button>
            <button
              @click="handleDownloadCV"
              :disabled="isDownloading"
              class="px-8 py-4 border-2 border-slate-700 rounded-xl font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                v-if="!isDownloading"
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              <svg
                v-else
                class="w-5 h-5 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ isDownloading ? 'Downloading...' : 'Download CV' }}
            </button>
          </div>

          <div v-if="error" class="text-red-400 text-sm">
            {{ error }}
          </div>

          <SocialLinks />
        </div>

        <!-- Hero Image -->
        <!-- <div class="hidden lg:flex justify-center items-center scroll-reveal" :class="{ visible: isVisible }">
          <div class="relative w-full max-w-md">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20"></div>
            <div class="relative aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-slate-700 p-8 hover-lift">
              <div class="w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center">
                <svg class="w-3/4 h-3/4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
          </div>
        </div> -->
          <!-- <div class="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <div class="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-6 hover-lift">
                  <div class="bg-slate-950 rounded-lg p-4 h-full font-mono text-xs">
                    <div class="flex gap-2 mb-3">
                      <div class="w-3 h-3 rounded-full bg-red-500"></div>
                      <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div class="space-y-2">
                      <div class="text-green-400">$ whoami</div>
                      <div class="text-slate-300">rahul_babu</div>
                      <div class="text-green-400 mt-3">$ cat skills.txt</div>
                      <div class="text-cyan-400">Machine Learning</div>
                      <div class="text-blue-400">Full-Stack Dev</div>
                      <div class="text-purple-400">Cloud Technologies</div>
                      <div class="text-green-400 mt-3 flex">
                        <span>$ </span>
                        <span class="border-r-2 border-green-400 pulse-glow ml-1"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>   -->

               <!-- <div class="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                      <div class="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 hover-lift relative overflow-hidden">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <div class="grid grid-cols-3 gap-3 rotate-slow">
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg border border-cyan-500/50"></div>
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg border border-blue-500/50"></div>
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg border border-purple-500/50"></div>
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg border border-blue-500/50"></div>
                            <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/50"></div>
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg border border-blue-500/50"></div>
                            <div class="w-12 h-12 bg-purple-500/20 rounded-lg border border-purple-500/50"></div>
                            <div class="w-12 h-12 bg-blue-500/20 rounded-lg border border-blue-500/50"></div>
                            <div class="w-12 h-12 bg-cyan-500/20 rounded-lg border border-cyan-500/50"></div>
                          </div>
                        </div>
                      </div>
                    </div>  -->

                      <div class="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                            <div class="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 hover-lift relative overflow-hidden">
                              <svg class="w-full h-full" viewBox="0 0 200 200">

                                <circle cx="50" cy="50" r="8" class="fill-cyan-400 pulse-glow"/>
                                <circle cx="150" cy="50" r="8" class="fill-blue-400 pulse-glow"/>
                                <circle cx="50" cy="150" r="8" class="fill-purple-400 pulse-glow"/>
                                <circle cx="150" cy="150" r="8" class="fill-cyan-400 pulse-glow"/>
                                <circle cx="100" cy="100" r="12" class="fill-blue-500"/>


                                <line x1="50" y1="50" x2="100" y2="100" stroke="url(#gradient1)" stroke-width="2" opacity="0.5"/>
                                <line x1="150" y1="50" x2="100" y2="100" stroke="url(#gradient1)" stroke-width="2" opacity="0.5"/>
                                <line x1="50" y1="150" x2="100" y2="100" stroke="url(#gradient1)" stroke-width="2" opacity="0.5"/>
                                <line x1="150" y1="150" x2="100" y2="100" stroke="url(#gradient1)" stroke-width="2" opacity="0.5"/>

                                <defs>
                                  <linearGradient id="gradient1">
                                    <stop offset="0%" stop-color="#06b6d4"/>
                                    <stop offset="100%" stop-color="#3b82f6"/>
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>  



                          <!-- <div class="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                                  <div class="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-8 hover-lift relative overflow-hidden">
                                    <div class="absolute inset-0 flex items-center justify-center">
                                      <div class="relative w-32 h-32">
                                        <div class="absolute inset-0 flex items-center justify-center">
                                          <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                                            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                                            </svg>
                                          </div>
                                        </div>

                                        <div class="tech-icon absolute -top-8 left-1/2 -translate-x-1/2">
                                          <div class="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M0 0h24v24H0V0z" fill="none"/>
                                              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="tech-icon absolute -bottom-8 left-1/2 -translate-x-1/2">
                                          <div class="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="tech-icon absolute top-1/2 -translate-y-1/2 -left-12">
                                          <div class="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                            </svg>
                                          </div>
                                        </div>
                                        <div class="tech-icon absolute top-1/2 -translate-y-1/2 -right-12">
                                          <div class="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center">
                                            <svg class="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'
import { useDownload } from '../../composables/useDownload'
import SocialLinks from '../ui/SocialLinks.vue'

const heroContent = ref(null)
const { isVisible, observeElement } = useScrollReveal()
const { isDownloading, error, downloadFile } = useDownload()

const scrollToProjects = () => {
  const projectsSection = document.querySelector('#projects')
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const handleDownloadCV = () => {
  downloadFile('/cv/Rahul_Babu_CV.pdf', 'Rahul_Babu_CV.pdf')
}

onMounted(() => {
  observeElement(heroContent.value)
})
</script>
