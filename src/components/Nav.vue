<template>
    <!-- 外层容器，居中对齐 -->
    <div class="w-full flex justify-center mt-6 absolute">
        <!-- 导航栏主容器，设置最大宽度和样式 -->
        <div class="w-full max-w-2xl bg-neutral-100 shadow flex items-center justify-between px-8 py-2 rounded-xl">
            <!-- 背景指示器：鼠标悬停时显示的背景动画效果 -->
            <div class="absolute bg-neutral-200 rounded-full transition-transform duration-300 ease-out"
                 :class="{ 'opacity-0': !isHovering }"
                 :style="{
                     transform: `translateX(${indicatorPosition.left}px)`,
                     width: indicatorPosition.width + 'px',
                     top: '50%',
                     height: '32px',
                     marginTop: '-16px'
                 }">
            </div>
            
            <!-- 循环渲染导航项和分隔符 -->
            <template v-for="(item, index) in navItems" :key="index">
                <!-- 导航项容器 -->
                <div class="flex items-center justify-center h-8" 
                     :style="{ width: getItemWidth(item) + 'px' }"
                     @mouseenter="activateItem($event.target, index)"
                     @mouseleave="deactivateItem"
                     ref="navRefs">
                    <!-- 导航项文本 -->
                    <span class="text-neutral-950 font-title cursor-pointer px-3 py-1.5 rounded-full z-10 inline-flex items-center"
                          :class="{ 'font-semibold': activeIndex === index }">
                        {{ item }}
                    </span>
                </div>
                
                <!-- 分隔符：除最后一项外都显示 -->
                <span v-if="index < navItems.length - 1" 
                      class="text-neutral-500 z-10 px-2">|</span>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// 导航项数据
const navItems = ['CTRL', 'Support', 'Security', 'Resources']
// 当前激活的导航项索引
const activeIndex = ref(null)
// 是否处于悬停状态
const isHovering = ref(false)
// 导航项的DOM引用数组
const navRefs = ref([])
// 记录上一次位置信息
let lastPosition = null

// 背景指示器位置状态
const indicatorPosition = reactive({
    left: 0,    // 左偏移量
    width: 0    // 宽度
})

// 获取每个导航项的宽度
const getItemWidth = (item) => {
    const baseWidth = {
        'CTRL': 70,
        'Support': 90,
        'Security': 90,
        'Resources': 100
    }
    return baseWidth[item] || 90
}

// 激活导航项
const activateItem = (target, index) => {
    isHovering.value = true
    const span = target.querySelector('span')
    const containerRect = target.closest('.bg-neutral-100').getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const spanRect = span.getBoundingClientRect()
    
    // 计算相对于父容器的左偏移，考虑父容器的padding
    const relativeLeft = targetRect.left - containerRect.left - 32 // 32px 是父容器的左内边距 (px-8)
    
    // 更新背景指示器位置
    if (lastPosition === null) {
        indicatorPosition.left = relativeLeft
        indicatorPosition.width = spanRect.width 
    } else {
        // 使用requestAnimationFrame确保动画流畅
        requestAnimationFrame(() => {
            indicatorPosition.left = relativeLeft
            indicatorPosition.width = spanRect.width
        })
    }
    
    // 保存当前位置信息
    lastPosition = {
        left: relativeLeft,
        width: spanRect.width
    }
    activeIndex.value = index
}

// 取消激活导航项
const deactivateItem = () => {
    isHovering.value = false
    activeIndex.value = null
    lastPosition = null
}

// 组件挂载后的钩子
onMounted(() => {
    // 初始化时可以进行其他必要的设置
})
</script>

<style scoped>
/* 背景指示器的过渡动画 */
.absolute {
    transition: opacity 0.2s ease, transform 0.3s ease-out;
}

/* 透明度为0的样式类 */
.opacity-0 {
    opacity: 0;
}
</style>