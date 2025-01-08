<template>
    <!-- 技能展示区域主容器 -->
    <section id="skills" class="flex items-center justify-center h-screen pl-[84px] my-[100px]">
        <!-- 左侧文本区域 -->
        <div class="flex flex-col items-start justify-center w-1/2 h-full">
            <div class="text-white text-[88px] font-semibold mb-4 w-[200px]">My Skills</div>
            <div class="text-white text-[24px] font-semibold mb-4 w-[500px]">
                I specialize in full-stack web development with expertise in modern frameworks and tools.
            </div>
        </div>

        <!-- 右侧技能动画区域 -->
        <div class="max-w-3xl mx-auto h-full w-1/2 relative">
            <div ref="skillsContainer" class="h-full relative overflow-hidden">
                <div v-for="(item, index) in items" :key="index"
                    class="skill-item flex items-center gap-6 absolute min-h-[100px] left-1/3" :style="{
                        animationDelay: `-${index * 1}s`,
                        animationDirection: animationDirection,
                    }">
                    <!-- 技能图标 -->
                    <div
                        :class="['w-[70px] h-[70px] rounded-full flex items-center justify-center shrink-0 border-2 border-white', item.color]">
                        <span class="text-4xl" :class="item.iconColor" v-html="item.icon"></span>
                    </div>
                    <span class="text-4xl text-white">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed } from "vue";

// 技能列表数据
const items = [
    { name: "HTML", icon: '<i class="fa-brands fa-html5"></i>', color: "bg-gradient-to-br from-orange-400 to-orange-600", iconColor: "text-white" },
    { name: "CSS", icon: '<i class="fa-brands fa-css3-alt"></i>', color: "bg-gradient-to-br from-blue-400 to-blue-600", iconColor: "text-white" },
    { name: "JavaScript", icon: '<i class="fa-brands fa-js"></i>', color: "bg-gradient-to-br from-yellow-300 to-yellow-500", iconColor: "text-black" },
    { name: "Vue3", icon: '<i class="fa-brands fa-vuejs"></i>', color: "bg-gradient-to-br from-green-400 to-green-600", iconColor: "text-white" },
    { name: "GSAP", icon: '<i class="fa-solid fa-wave-square"></i>', color: "bg-gradient-to-br from-purple-400 to-purple-600", iconColor: "text-white" },
    { name: "NodeJS", icon: '<i class="fa-brands fa-node"></i>', color: "bg-gradient-to-br from-green-500 to-green-700", iconColor: "text-white" },
    { name: "MongoDB", icon: '<i class="fa-solid fa-database"></i>', color: "bg-gradient-to-br from-emerald-400 to-emerald-600", iconColor: "text-white" },
    { name: "Linux", icon: '<i class="fa-brands fa-linux"></i>', color: "bg-gradient-to-br from-gray-600 to-gray-800", iconColor: "text-white" },
];

// 控制动画状态
const state = reactive({
    lastScrollY: window.scrollY,
    animationDirection: "normal",
});

const animationDirection = computed(() => state.animationDirection);

// 滚动事件处理，使用 requestAnimationFrame 优化性能
let ticking = false;
const handleScroll = () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;
            state.animationDirection = currentScrollY > state.lastScrollY ? "normal" : "reverse";
            state.lastScrollY = currentScrollY;
            ticking = false;
        });
        ticking = true;
    }
};

// 生命周期钩子
onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.skill-item {
    animation: moveInOut 8s linear infinite;
}

@keyframes moveInOut {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }

    50% {
        transform: translate(-150px, 360px);
        opacity: 1;
    }

    100% {
        transform: translate(0, 720px);
        opacity: 0;
    }
}
</style>