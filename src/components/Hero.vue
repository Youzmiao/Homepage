<template>
  <div class="max-h-screen flex border-b-2 border-black">
    <!-- 左侧图像区域 -->
    <div class="w-1/3 flex justify-center items-center">
      <img src="../assets/images/duck-1.png" alt="" class="w-1/2 h-1/2">
    </div>
    <!-- 主要内容 -->
    <div class="w-1/3 flex flex-col items-center justify-center px-4 py-20">
      <div :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        class="transform transition-all duration-1000">
        <h1 class="text-4xl md:text-6xl text-gray-800 text-center mb-4 font-bold font-fredericka" style="filter: drop-shadow(3px 3px 0 #E88D67);">
          Hello, I'm
          <span class="font-semibold">Youz_</span>
        </h1>
        <p class="text-2xl md:text-4xl text-black text-center mb-12 h-12 font-fredericka">
          {{ typedText }}<span class="animate-pulse">|</span>
        </p>
        <div class="flex justify-center mt-[200px]">
          <a href="#work"
            class="inline-flex items-center px-6 py-2 text-lg border-2 tracking-wide border-gray-800 text-gray-800 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 hover:scale-105 hover:shadow-lg font-HuangYou">
            View my work
            <ArrowRight class="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
    <!-- 右侧图像区域 -->
    <div class="w-1/3 flex justify-end items-center">
      <img src="../assets/images/tail-1.png" alt="" class="h-full w-3/5">
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const isVisible = ref(false)
const typedText = ref('')
const fullText = "I'm a Frontend web developer."

onMounted(() => {
  isVisible.value = true
  const typeText = () => {
    const currentIndex = typedText.value.length
    if (currentIndex < fullText.length) {
      typedText.value += fullText[currentIndex]
      setTimeout(typeText, 100)
    }
  }
  typeText()
})
</script>

<style scoped>
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@media (max-width: 640px) {
  .hover\:translate-x-1 {
    transform: translateX(0.25rem);
  }
}
</style>