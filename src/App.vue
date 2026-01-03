<template>
  <div class="bg-slate-950 text-white overflow-x-hidden">
    <BackgroundBlobs />
    <NavigationBar />
    <HeroSection />
    <ExperienceSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ContactSection />
    <Footer />
  </div>
</template>

<script setup>
import BackgroundBlobs from './components/layout/BackgroundBlobs.vue'
import NavigationBar from './components/layout/NavigationBar.vue'
import Footer from './components/layout/Footer.vue'
import HeroSection from './components/sections/HeroSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
</script>
