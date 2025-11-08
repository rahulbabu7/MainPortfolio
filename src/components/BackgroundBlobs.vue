<script setup lang="ts"></script>

<template>
  <section>
    <!-- Without `absolute` positioning, the `top-0`, `bottom-0`, `left-1/2` classes don't work. The blobs just stack vertically instead of positioning themselves around the viewport.
    ``` -->
    <!-- ❌ Without absolute:        ✅ With absolute: -->
    <!-- ┌────────────┐             ┌────────────┐
    │ [cyan]     │             │   [cyan]   │ ← top-right
    │ [blue]     │             │            │
    │ [purple]   │             │  [purple]  │ ← center
    │            │             │            │
    └────────────┘             │   [blue]   │ ← bottom-left
                               └────────────┘ -->
    <div class="blob absolute w-96 h-96 bg-cyan-500 top-0 -right-48"></div>
    <div class="blob absolute w-96 h-96 bg-blue-500 bottom-0 -left-48"></div>
    <div class="blob absolute w-96 h-96 bg-purple-500 top-1/2 left-1/2"></div>
  </section>
</template>

<style scoped>
div {
  animation-delay: 10s;
}
.blob {
  border-radius: 50%; /* Makes square into perfect circle */
  filter: blur(80px); /* Heavy blur - creates soft glow effect */
  opacity: 0.3; /* 30% opacity - subtle, not overwhelming */
  animation: float 20s infinite; /* Floats around smoothly */
}

.blob:nth-child(1) {
  animation-delay: 0s;
}

.blob:nth-child(2) {
  animation-delay: 5s;
}

.blob:nth-child(3) {
  animation-delay: 10s;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, -50px) scale(1.1);
  }
  50% {
    transform: translate(-30px, 30px) scale(0.9);
  }
  75% {
    transform: translate(40px, 20px) scale(1.05);
  }
}
</style>
