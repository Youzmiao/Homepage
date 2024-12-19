<template>
    <div class="bg-white h-10 w-56 select-none absolute" :style="{
        left: position.x + 'px',
        top: position.y + 'px',
        cursor: isDrag.value ? 'grabbing' : 'grab'
    }" ref="Cardref">
        <slot>
            hello world
        </slot>
    </div>
</template>


<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
const Cardref = ref(null)
//  卡片初始位置
const position = reactive({
    x: 500,
    y: 500
})
//  卡片偏移位置
const offset = reactive({
    x: 0,
    y: 0
})
//是否再拖拽
const isDrag = ref(false)

//开始拖拽
const startDrag = (event) => {
    isDrag.value = true
    offset.x = event.clientX - position.x
    offset.y = event.clientY - position.y

    // 添加事件监听
    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', endDrag)
}

// 拖拽中
const onDrag = (event) => {
    position.x = event.clientX - offset.x
    position.y = event.clientY - offset.y
}

// 结束拖拽
const endDrag = (event) => {
    isDrag.value = false
    // 移除事件监听
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', endDrag)
}

onMounted(() => {
    if (Cardref.value) {
        document.addEventListener('mousedown', startDrag)
    }
})

onUnmounted(() => {
    if (Cardref.value) {
        document.removeEventListener('mousedown', startDrag)
    }
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', endDrag)
})

</script>


<style scoped></style>