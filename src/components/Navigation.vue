<!-- Nav.vue -->
<template>
    <!-- 导航栏容器，使用了背景色和边框，并且支持平滑的过渡效果 -->
    <nav ref="nav" class="bg-[rgb(7,7,6)] transition-all duration-300" 
        :class="{
            'fixed top-0 left-0 right-0 z-50 shadow-lg animate-slideDown': isScrolledPastNav,  
            'relative': !isScrolledPastNav  
        }"
    >
        <div class="max-w-4xl mx-auto px-4">  <!-- 居中的导航内容 -->
            <ul class="flex items-center justify-start space-x-8"> <!-- 使用Flex布局水平排列导航项 -->
                <li v-for="(item, index) in navItems" :key="index">  <!-- 动态生成导航项 -->
                    <a @click.prevent="scrollToSection(item.href)"  
                       :href="item.href"  
                       class="inline-block py-3 relative group cursor-pointer font-HuangYou"
                       :class="[item.active ? 'text-amber-500 font-medium' : 'text-[rgb(235,231,231)] hover:text-amber-500 transition-colors']"  
                    >
                        {{ item.text }}  <!-- 显示导航项文字 -->
                        <!-- 激活状态下显示的底部小圆点，用于交互效果 -->
                        <span class="absolute -bottom-1 left-1/2 w-1 h-1 bg-amber-500 rounded-full transform -translate-x-1/2 scale-0 transition-transform group-hover:scale-100"></span>
                    </a>
                </li>
            </ul>
        </div>
        
        <!-- 滚动进度条，仅保留渐变部分 -->
        <div class="h-0.5">
            <div class="h-full bg-gradient-to-r from-amber-200 to-amber-500 transition-all duration-300"
                 :style="{ width: scrollProgress + '%' }">  <!-- 根据滚动进度动态改变进度条宽度 -->
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 接收父组件传递的属性：isScrolledPastNav，用于判断是否滚动过导航栏
const props = defineProps({
    isScrolledPastNav: {
        type: Boolean,
        required: true
    }
})

// 定义滚动进度的响应式变量
const scrollProgress = ref(0)

// 定义导航项数据，包含每个项的文本、链接和是否激活的状态
const navItems = ref([
    { text: 'HOME', href: '#home', active: true },
    { text: 'ABOUT', href: '#about', active: false },
    { text: 'PROJECTS', href: '#projects', active: false },
    { text: 'BLOG', href: '#blog', active: false },
    { text: 'CONTACT', href: '#contact', active: false }
])

// 平滑滚动到指定的区域
const scrollToSection = (href) => {
    const targetId = href.replace('#', '')  // 去掉#符号，得到目标元素的ID
    const element = document.getElementById(targetId)  // 获取目标元素
    if (element) {
        const navHeight = 80  // 假设导航栏的高度是80px
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset  // 获取目标元素的相对位置
        const offsetPosition = elementPosition - navHeight  // 计算滚动到目标元素时应有的偏移量（考虑导航栏高度）

        window.scrollTo({
            top: offsetPosition,  // 滚动到计算后的目标位置
            behavior: 'smooth'  // 使用平滑滚动效果
        })
    }
}

// 计算滚动进度，返回页面已滚动的百分比
const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight  // 获取视口高度
    const documentHeight = document.documentElement.scrollHeight - windowHeight  // 获取文档总高度减去视口高度（即滚动的最大距离）
    const scrolled = window.scrollY  // 获取当前滚动的距离
    scrollProgress.value = (scrolled / documentHeight) * 100  // 计算滚动进度（0到100%）
}

// 更新导航项的激活状态，根据滚动位置判断当前显示的页面部分
const updateActiveNavItem = () => {
    // 获取所有导航项对应的元素
    const sections = navItems.value.map(item => ({
        id: item.href.substring(1),  // 去掉#符号，得到元素的ID
        element: document.getElementById(item.href.substring(1))  // 获取元素
    })).filter(section => section.element)  // 过滤掉没有对应元素的项

    // 查找当前屏幕可见的部分，判断其位置来决定激活哪个导航项
    const currentSection = sections.find(section => {
        const rect = section.element.getBoundingClientRect()  // 获取目标元素的位置信息
        const navHeight = 80  // 导航栏高度
        return rect.top <= navHeight && rect.bottom > navHeight  // 判断元素是否在导航栏下方并且没有完全滚出视口
    })

    // 更新导航项的激活状态
    navItems.value.forEach(item => {
        item.active = currentSection && item.href === `#${currentSection.id}`  // 如果当前部分与导航项匹配，则设置为激活状态
    })
}

// 生命周期钩子：组件挂载时添加滚动事件监听器
onMounted(() => {
    window.addEventListener('scroll', calculateScrollProgress)  // 监听滚动事件以计算滚动进度
    window.addEventListener('scroll', updateActiveNavItem)  // 监听滚动事件以更新激活的导航项
    calculateScrollProgress()  // 初始化时计算一次滚动进度
    updateActiveNavItem()  // 初始化时更新一次激活的导航项
})

// 生命周期钩子：组件卸载时移除事件监听器
onUnmounted(() => {
    window.removeEventListener('scroll', calculateScrollProgress)  // 移除滚动进度计算的事件监听
    window.removeEventListener('scroll', updateActiveNavItem)  // 移除更新导航项激活状态的事件监听
})
</script>

<style>
/* 定义导航栏滑动动画效果 */
@keyframes slideDown {
    from {
        transform: translateY(-100%);  /* 从屏幕上方滑入 */
        opacity: 0;  /* 初始时不可见 */
    }
    to {
        transform: translateY(0);  /* 最终位置为正常位置 */
        opacity: 1;  /* 完全可见 */
    }
}

.animate-slideDown {
    animation: slideDown 0.3s ease forwards;  /* 设置动画效果 */
}
</style>