<template>
    <div ref="container" class="star-field"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let stars: THREE.Points
let animationFrameId: number
let initialCameraPosition = {
    x: 0,
    y: 0,
    z: 1000
}

const init = () => {
    if (!container.value) return

    // 创建场景
    scene = new THREE.Scene()

    // 创建相机
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        100,
        2000
    )
    camera.position.z = 1000

    // 创建渲染器
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    container.value.appendChild(renderer.domElement)

    // 创建星星
    const starsGeometry = new THREE.BufferGeometry()
    const starCount = 5000
    const positions = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
        // 使用球坐标系统生成均匀分布的点
        const radius = 1000 * Math.cbrt(Math.random()) // 使用立方根来确保体积均匀分布
        const theta = Math.random() * Math.PI * 2 // 水平角度 0 到 2π
        const phi = Math.acos(2 * Math.random() - 1) // 垂直角度 0 到 π

        // 将球坐标转换为笛卡尔坐标
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
        positions[i * 3 + 2] = radius * Math.cos(phi)

        // 调整星星大小的随机范围，使其更自然
        sizes[i] = 0.5 + Math.random() * 1.5
    }

    starsGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(positions, 3)
    )
    starsGeometry.setAttribute(
        'size',
        new THREE.BufferAttribute(sizes, 1)
    )

    const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        sizeAttenuation: true,
        transparent: true,
        alphaTest: 0.5,
        size: 1.2
    })

    stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // 添加鼠标移动效果
    document.addEventListener('mousemove', onMouseMove)
}

const animate = () => {
    animationFrameId = requestAnimationFrame(animate)

    // 星星缓慢自转
    if (stars) {
        stars.rotation.y += 0.0001
    }

    renderer.render(scene, camera)
}

// 处理鼠标移动
const onMouseMove = (event: MouseEvent) => {
    // 将鼠标位置归一化到 -1 到 1 的范围
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1

    // 相机位置的微小偏移
    const offsetX = mouseX * 20 // 最大左右偏移20个单位
    const offsetY = mouseY * 20 // 最大上下偏移20个单位

    // 平滑过渡到新位置
    camera.position.x += (offsetX - camera.position.x) * 0.05
    camera.position.y += (offsetY - camera.position.y) * 0.05
    camera.position.z = initialCameraPosition.z

    // 始终让相机看向场景中心
    camera.lookAt(scene.position)
}

// 处理窗口大小变化
const onWindowResize = () => {
    if (!container.value) return

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)

    // 重置相机位置
    camera.position.set(
        initialCameraPosition.x,
        initialCameraPosition.y,
        initialCameraPosition.z
    )
}

onMounted(() => {
    init()
    animate()
    window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
    if (container.value) {
        container.value.removeChild(renderer.domElement)
    }
    document.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('resize', onWindowResize)
    cancelAnimationFrame(animationFrameId)
})
</script>

<style scoped>
.star-field {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    z-index: -1;
}
</style>