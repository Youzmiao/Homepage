<template>
  <!-- 添加背景渐变类 -->
  <div class="flex justify-center pt-44 min-h-screen bg-gradient-to-b from-[#052631] via-[#0c232c] to-[#1a191d]">

    <!-- 主要内容 -->
    <div class="w-1/3 flex flex-col items-center justify-center px-4 py-20">
      <div :class="{ 'translate-y-0 opacity-100': isVisible, 'translate-y-10 opacity-0': !isVisible }"
        class="transform transition-all duration-1000">
        <!-- 调整文字颜色以适应深色背景 -->
        <h1 class="text-4xl md:text-6xl text-white text-center mb-4 font-bold">
          Hello, I'm
          <span class="font-semibold">Youz_</span>
        </h1>
        <!-- 调整打字文本的颜色 -->
        <p class="text-2xl md:text-4xl text-gray-200 text-center mb-12 h-12">
          {{ typedText }}<span class="animate-pulse">|</span>
        </p>
        <div class="flex justify-center mt-[200px]">
          <a href="#work"
            class="inline-flex items-center px-6 py-2 text-lg border-2 tracking-wide border-white text-white hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            View my work
          </a>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

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
/* 保持原有的动画样式 */
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

/* 可以添加自定义渐变背景 */
.custom-gradient {
  background: linear-gradient(to bottom,
      #1a1a2e 0%,
      #16213e 50%,
      #1a1a2e 100%);
}

@media (max-width: 640px) {
  .hover\:translate-x-1 {
    transform: translateX(0.25rem);
  }
}
</style>