<template>
  <div class="flex gap-4">
    <a
      v-for="social in socialLinks"
      :key="social.name"
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer"
      :class="`w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 transition-all hover-lift ${social.hoverClass}`"
    >
      <svg
        class="w-5 h-5"
        :fill="social.isStroke ? 'none' : 'currentColor'"
        :stroke="social.isStroke ? 'currentColor' : 'none'"
        viewBox="0 0 24 24"
      >
        <path
          :d="social.icon"
          :stroke-linecap="social.isStroke ? 'round' : undefined"
          :stroke-linejoin="social.isStroke ? 'round' : undefined"
          :stroke-width="social.isStroke ? '2' : undefined"
        ></path>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { socialLinks } from '../../data/social'
</script>
