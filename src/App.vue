<!-- App.vue -->
<template>
  <div class="min-h-screen  bg-center bg-fixed" 
  :style="{ backgroundImage: `url(${bgImage})` }">
    <Navigation :isScrolledPastNav="isScrolledPastNav" />
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ProjectsSection id="projects" />
    <BlogSection id="blog" />
    <ContactSection id="contact" />
    <Test id="test"/>
  </div> 
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/Hero.vue'
import Navigation from './components/Navigation.vue'
import AboutSection from './components/About.vue'
import ProjectsSection from './components/Projects.vue'
import BlogSection from './components/Blog.vue'
import ContactSection from './components/Contact.vue'
import Test from './components/test.vue'

import bgImage from './assets/bg.jpg'
const isScrolledPastNav = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      isScrolledPastNav.value = !entry.isIntersecting
    },
    {
      rootMargin: "-80px 0px 0px 0px",
      threshold: 0
    }
  )

  const heroSection = document.querySelector('#hero')
  if (heroSection) {
    observer.observe(heroSection)
  }

  onUnmounted(() => {
    if (heroSection) {
      observer.unobserve(heroSection)
    }
  })
})
</script>