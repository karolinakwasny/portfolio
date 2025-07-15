<template>
  <section class="py-12 md:py-20">
    <div class="max-w-4xl mx-auto px-4 md:px-6 text-center">
      <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
        <span class="font-sans">Hi, my name is </span>
        <span class="text-text font-sans">Karolina Kwaśny</span>
      </h1>
      <p class="text-lg md:text-xl text-text mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
        I'm a dedicated software developer who has completed the core curriculum at 42 School and is
        now working on advanced and personal projects. I focus on full-stack development, using
        modern tools like Vue, React for the frontend and Django, Node.js for the backend. I'm
        currently looking for job opportunities where I can learn, grow, and contribute as a
        developer.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <button
          @click="scrollToSection('projects')"
          class="bg-text text-background px-6 md:px-8 py-3 rounded-md hover:bg-border font-medium transition-colors text-center"
        >
          View My Work
        </button>
        <button
          @click="scrollToSection('contact')"
          class="border border-border px-6 md:px-8 py-3 rounded-md hover:border-greenAccent font-medium text-text transition-colors text-center"
        >
          Get In Touch
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const scrollToSection = (sectionId) => {
  console.log(
    "HeroSection - Scrolling to section:",
    sectionId,
    "Current route:",
    router.currentRoute.value.name
  );

  // If we're not on the home page, navigate there first
  if (router.currentRoute.value.name !== "Home") {
    console.log("HeroSection - Not on home page, navigating to home first");
    router.push("/").then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        console.log("HeroSection - Element found:", element);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Increased timeout for GitHub Pages
    });
  } else {
    // We're already on home page, just scroll
    console.log("HeroSection - Already on home page, scrolling directly");
    const element = document.getElementById(sectionId);
    console.log("HeroSection - Element found:", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
