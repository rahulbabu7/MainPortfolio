<template>
  <nav class="fixed top-0 w-full bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <span class="text-2xl font-bold gradient-text">RB</span>
        </div>

        <!-- Desktop Nav -->
        <div class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item"
            :href="'#' + item.toLowerCase()"
            @click="scrollToSection($event, '#' + item.toLowerCase())"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {{ item }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-slate-300 hover:text-white"
          @click="toggleMenu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-slate-900 border-t border-slate-800">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a
          v-for="item in navItems"
          :key="item"
          :href="'#' + item.toLowerCase()"
          @click="scrollToSection($event, '#' + item.toLowerCase())"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const navItems = ['Home', 'Experience', 'About', 'Projects', 'Skills', 'Contact']

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const scrollToSection = (e, href) => {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobileMenuOpen.value = false
  }
}
</script>
