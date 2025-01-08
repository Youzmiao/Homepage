// ProjectGrid.vue
<template>
    <div class="container mx-auto px-[84px] py-[184px]">
        <!-- 顶部导航 -->
        <nav class="flex space-x-4 text-gray-500 mb-8">
            <a href="#" class="text-blue-400">All <sup>18</sup></a>
            <span>/</span>
            <a href="#">Ruby <sup>02</sup></a>
            <span>/</span>
            <a href="#">Javascript <sup>03</sup></a>
            <span>/</span>
            <a href="#">React <sup>04</sup></a>
        </nav>

        <!-- 项目网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 项目卡片 -->
            <div v-for="project in projects" :key="project.id" class="bg-[#232328] rounded-lg overflow-hidden group">
                <div class="relative overflow-hidden">
                    <img :src="project.image" :alt="project.title"
                        class="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110">
                    <div
                        class="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-10">
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="text-white text-xl font-semibold mb-2">{{ project.title }}</h3>
                    <p class="text-gray-400">{{ project.tech }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import project1Image from '../assets/project-1.jpg'

// 示例项目数据
const projects = [
    {
        id: 1,
        title: 'ChowNow Discover',
        tech: 'React JS / Python',
        image: project1Image
    },
    {
        id: 2,
        title: 'New Relic',
        tech: 'Show Project',
        image: project1Image
    },
    {
        id: 3,
        title: 'Walker Tracker',
        tech: 'JS / Ruby on Rails',
        image: project1Image
    },

]
</script>

<style scoped></style>