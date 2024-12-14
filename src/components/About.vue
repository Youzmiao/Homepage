<template>
    <section id="about" class="relative py-20 border-b-2 border-black">
        <div class="mx-auto px-4 ml-56 mr-56">
            <h2 class="text-4xl font-bold text-gray-800 mb-8 text-center font-HuangYou">ABOUT ME</h2>
            <span class="bg-black h-1 w-10 block mx-auto mb-32"></span>

            <!-- 创意卡片 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                <div v-for="(card, index) in cards" :key="index" class="text-center">
                    <div class="relative">
                        <!-- 图标容器 -->
                        <div class="relative w-[140px] h-[150px] mx-auto flex items-center justify-center">
                            <img :src="card.icon" class="relative w-[100px] h-[100px] transition-transform duration-300 hover:scale-125" />
                        </div>

                        <!-- 内容 -->
                        <div class="font-HuangYou text-black text-center">
                            <h3 class="mb-4 text-2xl font-bold font-HuangYou tracking-widest">
                                <span class="text-black">{{ card.title }}</span>
                            </h3>
                            <p class="leading-[30px] text-[#444] mb-8 px-4 text-xl tracking-wide">{{ card.description }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 技能条部分 -->
            <div class="flex">
                
                
                <div class="space-y-4 w-1/2" >
                    <div v-for="skill in skills" :key="skill.name" class="skill-bar">
                        <div class="flex h-7">
                            <div class="w-32 bg-amber-400 flex items-center justify-center">
                                <span class="text-white font-bold">{{ skill.name }}</span>
                            </div>
                            <div class="flex-grow bg-gray-200">
                                <div class="h-full bg-amber-500" :style="{ width: `${skill.level}%` }"></div>
                            </div>
                        </div>
                        <!-- 添加技能描述 -->
                        <p class="text-sm text-gray-600 mt-1 ml-32">{{ skill.description }}</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import FastIcon from '../assets/svg/Fast.svg'
import ResponsiveIcon from '../assets/svg/Responsive.svg'
import IntuitiveIcon from '../assets/svg/Intuitive.svg'
import DynamicIcon from '../assets/svg/Dynamic.svg'

const skills = ref([
    {
        name: 'CSS',
        level: 70,
        description: 'Modern CSS3, Flexbox, Grid, Animations'
    },
    {
        name: 'HTML',
        level: 85,
        description: 'Semantic HTML5, Accessibility, SEO'
    },
    {
        name: 'JavaScript',
        level: 80,
        description: 'ES6+, Async/Await, DOM Manipulation'
    },
    {
        name: 'Vue3',
        level: 80,
        description: 'Composition API, Vuex, Vue Router'
    },
    {
        name: 'Node.js',
        level: 70,
        description: 'Express, RESTful APIs, MongoDB'
    }
])

const cards = ref([
    {
        icon: FastIcon,
        title: '快速的',
        description: '闪电般的性能和快速的加载时间，为用户提供最佳的使用体验。',
    },
    {
        icon: ResponsiveIcon,
        title: '响应式的',
        description: '完全自适应的设计，在所有设备和屏幕尺寸上都能无缝运行。',
    },
    {
        icon: IntuitiveIcon,
        title: '直观的',
        description: '用户友好的界面，具有自然、易于理解的导航和控制方式。',
    },
    {
        icon: DynamicIcon,
        title: '动态的',
        description: '引人入胜的动画和交互元素，为您的网站注入生机活力。',
    }
])
</script>

<style scoped>
.skill-bar {
    animation: slideIn 1s ease-out forwards;
}

@keyframes slideIn {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }

    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style>