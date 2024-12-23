<template>
    <section id="skills" class="flex items-center justify-center h-screen pl-[84px] my-[100px]">
        <div class="flex flex-col items-start justify-center w-1/2 h-full ">
            <!-- 技能标题区域 -->
            <div class="text-white text-[88px] font-semibold mb-4 w-[200px]">My Skills</div>
            <!-- 技能描述区域 -->
            <div class="text-white text-[24px] font-semibold mb-4 w-[500px]">
                I have a strong background in blockchain development and have experience working with a variety of
                blockchain platforms and technologies.
            </div>
        </div>

        <div class="max-w-3xl mx-auto overflow-hidden h-full w-1/2 relative">
            <div class="h-full relative">
                <div v-for="(item, index) in duplicatedItems" :key="index"
                    class="skilcontain flex items-center gap-6 absolute left-[150px] min-h-[100px] opacity-0 animate-scrollDown"
                    :style="{
                        animationDelay: `${index * (animationDuration / items.length)}s`,
                        animationDuration: `${animationDuration}s`
                    }">
                    <div :class="[
                        'w-[70px] h-[70px] rounded-full flex items-center justify-center text-4xl shrink-0',
                        item.color
                    ]">
                        {{ item.icon }}
                    </div>
                    <span class="text-4xl text-white">{{ item.name }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = [
    { name: 'Optimism', icon: 'OP', color: 'bg-red-300' },
    { name: 'Avalanche', icon: 'A', color: 'bg-red-300' },
    { name: 'Bitcoin', icon: '₿', color: 'bg-yellow-300' },
    { name: 'THORChain', icon: '⚡', color: 'bg-green-700' },
    { name: 'Tron', icon: '◆', color: 'bg-red-300' },
    { name: 'Blast Mainnet', icon: 'B', color: 'bg-yellow-100' },
    { name: 'Tron', icon: '◆', color: 'bg-red-300' },
    { name: 'Blast Mainnet', icon: 'B', color: 'bg-yellow-100' },

]

// 设置动画总时长（秒）
const animationDuration = 5

const duplicatedItems = computed(() => [...items])
</script>


<style scoped>
@keyframes scrollDown {
    0% {
        transform: translate(0, 0);
        opacity: 0;
    }

    5% {
        opacity: 0.4;
    }

    50% {
        transform: translate(-150px, 370px);
        opacity: 1;
    }

    95% {
        opacity: 0.4;
    }

    100% {
        transform: translate(0, 740px);
        opacity: 0;
    }
}

.animate-scrollDown {
    animation: scrollDown linear infinite;
}

/* 可选：调整轮播容器的宽度以适应更大的元素 */
.skilcontain {
    width: 100%;
    /* 根据需要添加其他样式 */
}
</style>
