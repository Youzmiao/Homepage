<template>
  <section id="projects" class="flex flex-col items-center py-20 border-b-2 border-black">
    <div class="mx-auto px-4">
      <h2 class="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
      <span class="bg-black h-1 w-10 block mx-auto mb-32"></span>
    </div>
    <!-- 导航栏容器 - 添加固定宽度 -->
    <div class="w-[440px] mb-8">
      <div class="h-10">
        <ul class="flex items-center m-0 p-0 list-none">
          <li v-for="(link, index) in links" :key="index"
            class="relative flex-1 min-w-[110px] h-10 cursor-pointer hover:z-10" :class="{ '-ml-0.5': index > 0 }"
            @click="activeIndex = index">
            <div class="block h-10 relative transition-all duration-500 ease-in-out" :class="{
              'bg-black text-white': activeIndex === index

            }">
              <span class="absolute inset-0 flex justify-center items-center">
                {{ link.title }}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 项目卡片容器 - 使用独立的最大宽度 -->
    <div class="max-w-[780px] w-full px-4">
      <div class="flex flex-wrap gap-8 justify-center">
        <div v-for="project in filteredProjects" :key="project.id"
          class="w-[300px] transition-all duration-300 bg-white shadow-lg overflow-auto max-w-xs max-h-2xl p-8">
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
import { ref, computed } from 'vue'

const activeIndex = ref(0)

const links = ref([
  { title: 'All', category: 'all' },
  { title: 'HTML+CSS', category: 'html' },
  { title: 'Vue+React', category: 'framework' },
  { title: 'Nodejs', category: 'nodejs' },
])

const projects = ref([
  {
    id: 1,
    title: "Project One",
    role: "LEAD DEVELOPER",
    category: 'html',
    description: "A full-stack user-friendly interface, robust security measures, and seamless integration with various APIs.",
  },
  {
    id: 2,
    title: "Project Two",
    role: "LEAD DEVELOPER",
    category: 'framework',
    description: "A full-stack user-friendly interface, robust security measures, and seamless integration with various APIs.",
  },
  {
    id: 3,
    title: "Project Three",
    role: "LEAD DEVELOPER",
    category: 'nodejs',
    description: "A cutting-edge AI solution designed to optimize business workflows and boost productivity.",
  }
])

const filteredProjects = computed(() => {
  const selectedCategory = links.value[activeIndex.value].category
  if (selectedCategory === 'all') {
    return projects.value
  }
  return projects.value.filter(project => project.category === selectedCategory)
})
</script>

<style scoped>

</style>