<template>
  <main>
    <HeroSection />
    <ProjectsSection />
    <ContactSection />
  </main>
</template>

<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
</script>
<script>
export default {
  name: "MyHome",
};
</script>
