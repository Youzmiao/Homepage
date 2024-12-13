<template>
  <section id="projects" class="py-20 border-b-2 border-black">
    <div class="mx-auto px-4">
      <!-- 页面标题 -->
      <h2 class="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
      <!-- 分隔线 -->
      <span class="bg-black h-1 w-10 block mx-auto mb-32"></span>

      <!-- 项目卡片列表 -->
      <div class="flex flex-wrap gap-8 justify-center">
        <div v-for="project in projects" :key="project.id"
          class="group transition-all duration-300 bg-white shadow-lg overflow-auto max-w-xs max-h-2xl p-8">
          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-gray-800">{{ project.title }}</h2>
            <p class="text-gray-600 leading-relaxed line-clamp-4">
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const projects = [
  {
    id: 1,
    title: "Project One",
    role: "LEAD DEVELOPER",
    
    description: "A full-stack user-friendly interface, robust security measures, and seamless integration with various APIs.",
  },
  {
    id: 2,
    title: "Project Two",
    role: "LEAD DEVELOPER",
    
    description: "A full-stack user-friendly interface, robust security measures, and seamless integration with various APIs.",
  },
  {
    id: 3,
    title: "Project Three",
    role: "LEAD DEVELOPER",
    
    description: "A cutting-edge AI solution designed to optimize business workflows and boost productivity.",
  }
];
</script>

<style scoped>
/* 调整卡片布局间距 */
.group {
  width: 300px; /* 控制每个卡片宽度 */
}
</style>
