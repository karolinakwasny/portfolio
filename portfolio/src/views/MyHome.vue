<template>
  <main>
    <HeroSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import HeroSection from "@/components/MyHome/HeroSection.vue";
import ProjectsSection from "@/components/MyHome/ProjectsSection.vue";
import ContactSection from "@/components/MyHome/ContactSection.vue";
</script>
<script>
export default {
  name: "MyHome",
};
</script>
