<script setup lang="ts">
import NavbarComponent from "../components/NavbarComponent.vue";
import BackgroundBlob from "../components/BackgroundBlobs.vue";
import HeroSection from "../components/HeroSection.vue";
</script>

<template>
  <section class="bg-slate-900 text-white overflow-x-hidden w-screen h-screen">
    <BackgroundBlob
      class="fixed inset-0 overflow-hidden pointer-events-none"
    />
    <NavbarComponent
      class="fixed bg-slate-900/80 w-full top-0 z-50 backdrop-blur-xl border-b border-slate-800/50"
    />
    <HeroSection />
  </section>
</template>

<style scoped></style>
