<template>
  <section id="projects" class="py-12 md:py-20 bg-background">
    <div class="max-w-4xl mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
      <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-mono text-text">My Projects</h2>
      <p class="text-text text-base md:text-lg">
        A collection of projects showcasing systems programming, algorithms, and software
        engineering skills
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4 md:px-6">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </section>
</template>

<script setup>
import ProjectCard from "./ProjectCard.vue";
import { projects } from "../data/projects.js";
</script>
