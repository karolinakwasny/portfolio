<template>
  <header class="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
    <div class="max-w-4xl mx-auto px-4 md:px-6 py-4">
      <nav class="flex justify-between items-center">
        <router-link
          to="/"
          class="font-mono text-base md:text-lg font-semibold px-3 py-2 rounded-md hover:bg-greenAccent/10 transition-all duration-200"
        >
          Portfolio
        </router-link>
        <div class="flex space-x-4 md:space-x-6">
          <button
            @click="scrollToSection('projects')"
            class="text-text hover:text-greenAccent text-sm md:text-base transition-colors"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('contact')"
            class="text-text hover:text-greenAccent text-sm md:text-base transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToSection = (sectionId) => {
  // If we're not on the home page, navigate there first
  if (router.currentRoute.value.name !== "Home") {
    router.push("/").then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    });
  } else {
    // We're already on home page, just scroll
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
