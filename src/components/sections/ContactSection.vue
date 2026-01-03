<template>
  <section id="contact" class="relative py-20 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <div ref="sectionHeader" class="text-center mb-16 scroll-reveal" :class="{ visible: isVisible }">
        <h2 class="text-4xl sm:text-5xl font-bold mb-4">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let's connect!
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-12">
        <!-- Email Card -->
        <a
          href="mailto:rahulbabu2002@protonmail.com"
          ref="emailCard"
          class="gradient-border rounded-2xl p-6 hover-lift scroll-reveal group"
          :class="{ visible: isEmailVisible }"
        >
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-1">Email</h3>
              <p class="text-slate-400 text-sm">rahulbabu2002@protonmail.com</p>
            </div>
          </div>
        </a>

        <!-- Phone Card -->
        <a
          href="tel:+918129565096"
          ref="phoneCard"
          class="gradient-border rounded-2xl p-6 hover-lift scroll-reveal group"
          :class="{ visible: isPhoneVisible }"
          style="animation-delay: 0.1s"
        >
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-1">Phone</h3>
              <p class="text-slate-400 text-sm">+91 8129565096</p>
            </div>
          </div>
        </a>
      </div>

      <!-- Contact Form -->
      <div
        ref="formCard"
        class="gradient-border rounded-2xl p-8 scroll-reveal"
        :class="{ visible: isFormVisible }"
        style="animation-delay: 0.2s"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium mb-2">Name</label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                placeholder="Your name"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Email</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Subject</label>
            <input
              v-model="formData.subject"
              type="text"
              class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all text-white"
              placeholder="Project inquiry"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Message</label>
            <textarea
              v-model="formData.message"
              rows="5"
              class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none text-white"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionHeader = ref(null)
const emailCard = ref(null)
const phoneCard = ref(null)
const formCard = ref(null)

const { isVisible, observeElement } = useScrollReveal()
const { isVisible: isEmailVisible, observeElement: observeEmail } = useScrollReveal()
const { isVisible: isPhoneVisible, observeElement: observePhone } = useScrollReveal()
const { isVisible: isFormVisible, observeElement: observeForm } = useScrollReveal()

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', formData)
  // Add your form submission logic here
}

onMounted(() => {
  observeElement(sectionHeader.value)
  observeEmail(emailCard.value)
  observePhone(phoneCard.value)
  observeForm(formCard.value)
})
</script>
