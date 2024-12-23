<template>
  <div class="min-h-screen  bg-center bg-fixed bg-[#1a191d]">
    <Nav />
    <Home />
    <Expertise />
    <Skils />


    <Contact />
  </div>

</template>


<script setup>
import Nav from "./components/Nav.vue";
import Home from "./components/Home.vue";
import Contact from "./components/Contact.vue";
import Expertise from "./components/Expertise.vue";
import Skils from "./components/Skils.vue";
</script>



<style scoped></style>