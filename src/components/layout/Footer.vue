<template>
  <footer class="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-900/50">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-bold gradient-text mb-2">Rahul Babu</h3>
          <p class="text-slate-400 text-sm">Computer Science Engineer and ML Enthusiast</p>
        </div>

        <SocialLinks />
      </div>

      <div class="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
        <p>&copy; 2024 Rahul Babu. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SocialLinks from '../ui/SocialLinks.vue'
</script>
