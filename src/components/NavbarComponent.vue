<script setup lang="ts">
import { ref } from "vue";
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <span class="text-2xl font-bold gradient-text">RB</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a
            href="#home"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >Home</a
          >
          <a
            href="#about"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >About</a
          >
          <a
            href="#projects"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >Projects</a
          >
          <a
            href="#skills"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >Skills</a
          >
          <a
            href="#contact"
            class="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >Contact</a
          >
        </div>
        <button
          class="md:hidden text-slate-300 hover:text-white"
          @click="toggleMobileMenu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div
      class="md:hidden bg-slate-900 border-t border-slate-800"
      v-show="mobileMenuOpen"
    >
      <div class="px-4 pt-2 pb-3 space-y-1">
        <a
          href="#home"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >Home</a
        >
        <a
          href="#about"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >About</a
        >
        <a
          href="#projects"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >Projects</a
        >
        <a
          href="#skills"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >Skills</a
        >
        <a
          href="#contact"
          class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
