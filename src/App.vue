<template>
  <div class="app">
    <Background />
    <Home />
    <Expertise />
    <Skills />
    <Project />
    <Contact />
    <!-- 其他内容 -->
  </div>
</template>

<script setup>
import Background from './components/Background.vue'
import Home from './components/Home.vue'
import Expertise from './components/Expertise.vue'
import Skills from './components/Skills.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'

</script>

<style>
.app {
  width: 100%;
  min-height: 100vh;
}

/* 重置一些默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
}
</style>