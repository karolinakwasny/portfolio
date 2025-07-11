<template>
  <div class="min-h-screen max-w-2xl mx-auto bg-background text-text">
    <!-- Header -->
    <header class="border-b border-border">
      <div class="max-w-4xl mx-auto px-6 py-4">
        <nav class="flex justify-between items-center">
          <div class="font-mono text-lg font-semibold">Portfolio</div>
          <div class="flex space-x-6">
            <a href="#projects" class="text-text hover:text-greenAccent">Projects</a>
            <a href="#contact" class="text-text hover:text-greenAccent">Contact</a>
          </div>
        </nav>
      </div>
    </header>
    <template v-if="isHome">
      <!-- Hero Section -->
      <section class="py-20">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h1 class="text-5xl font-bold mb-6">
            <span class="font-sans">Hi, my name is </span>
            <span class="text-text font-sans">Karolina Kwaśny</span>
          </h1>
          <p class="text-xl text-text mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a dedicated software developer who has completed the core curriculum at 42 School
            and is now working on advanced and personal projects. I focus on full-stack development,
            using modern tools like Vue, React for the frontend and Django, Node.js for the backend.
            I'm currently looking for job opportunities where I can learn, grow, and contribute as a
            developer.
          </p>
          <div class="flex justify-center space-x-4">
            <a
              href="#projects"
              class="bg-text text-background px-8 py-3 rounded-md hover:bg-border font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              class="border border-border px-8 py-3 rounded-md hover:border-greenAccent font-medium text-text"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-20 bg-background">
        <div class="max-w-4xl mx-auto px-6 text-center mb-16">
          <h2 class="text-3xl font-bold mb-4 font-mono text-text">My Projects</h2>
          <p class="text-text text-lg">
            A collection of projects showcasing systems programming, algorithms, and software
            engineering skills
          </p>
        </div>

        <div class="grid grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
          <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-20">
        <div class="max-w-4xl mx-auto px-6 text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 font-mono text-text">Get In Touch</h2>
          <p class="text-text text-lg">Let's connect and discuss opportunities</p>
        </div>

        <div class="flex justify-center space-x-8">
          <a
            href="mailto:kwasnykarolina98@gmail.com"
            class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
          >
            <Mail class="w-5 h-5 text-text" />
            <span class="font-medium text-text">Email</span>
          </a>
          <a
            href="https://github.com/karolinakwasny"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
          >
            <Github class="w-5 h-5 text-text" />
            <span class="font-medium text-text">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/karolinakwasny"
            target="_blank"
            rel="noopener"
            class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
          >
            <Linkedin class="w-5 h-5 text-text" />
            <span class="font-medium text-text">LinkedIn</span>
          </a>
        </div>
      </section>
    </template>
    <RouterView />

    <!-- Footer -->
    <footer class="border-t border-border py-8">
      <div class="max-w-4xl mx-auto px-6 text-center text-text">
        <p class="font-mono">© 2025 • Built with Vue & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";

import { ref, computed } from "vue";
import { Mail, Github, Linkedin } from "lucide-vue-next";
import ProjectCard from "./components/ProjectCard.vue";
import { projects as projectsData } from "./data/projects.js";

const route = useRoute();
const isHome = computed(() => route.path === "/");

const projects = ref(projectsData);
</script>
