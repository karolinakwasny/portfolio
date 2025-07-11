<template>
  <div class="min-h-screen max-w-2xl mx-auto bg-background text-text">
    <!-- Header -->
    <header class="border-b border-border">
      <div class="max-w-4xl mx-auto px-4 md:px-6 py-4">
        <nav class="flex justify-between items-center">
          <div class="font-mono text-base md:text-lg font-semibold">Portfolio</div>
          <div class="flex space-x-4 md:space-x-6">
            <a href="#projects" class="text-text hover:text-greenAccent text-sm md:text-base">Projects</a>
            <a href="#contact" class="text-text hover:text-greenAccent text-sm md:text-base">Contact</a>
          </div>
        </nav>
      </div>
    </header>
    <template v-if="isHome">
      <!-- Hero Section -->
      <section class="py-12 md:py-20">
        <div class="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            <span class="font-sans">Hi, my name is </span>
            <span class="text-text font-sans">Karolina Kwaśny</span>
          </h1>
          <p class="text-lg md:text-xl text-text mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm a dedicated software developer who has completed the core curriculum at 42 School
            and is now working on advanced and personal projects. I focus on full-stack development,
            using modern tools like Vue, React for the frontend and Django, Node.js for the backend.
            I'm currently looking for job opportunities where I can learn, grow, and contribute as a
            developer.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              class="bg-text text-background px-6 md:px-8 py-3 rounded-md hover:bg-border font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              class="border border-border px-6 md:px-8 py-3 rounded-md hover:border-greenAccent font-medium text-text"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="py-12 md:py-20 bg-background">
        <div class="max-w-4xl mx-auto px-4 md:px-6 text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-mono text-text">My Projects</h2>
          <p class="text-text text-base md:text-lg">
            A collection of projects showcasing systems programming, algorithms, and software
            engineering skills
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4 md:px-6">
          <ProjectCard v-for="(project, index) in projects" :key="index" :project="project" />
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="py-12 md:py-20">
        <div class="max-w-4xl mx-auto px-4 md:px-6 text-center mb-8 md:mb-12">
          <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-mono text-text">Get In Touch</h2>
          <p class="text-text text-base md:text-lg">Let's connect and discuss opportunities</p>
        </div>

        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 px-4 md:px-6">
          <div class="relative">
            <a
              href="mailto:kwasnykarolina98@gmail.com"
              class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
            >
              <Mail class="w-5 h-5 text-text" />
              <span class="font-medium text-text">Email</span>
            </a>
            <button
              @click="copyEmail"
              class="absolute -top-1 -right-1 p-1 bg-background border border-border rounded hover:border-greenAccent hover:bg-border transition-colors"
              title="Copy email address"
            >
              <Copy class="w-3 h-3 text-text" />
            </button>
            <!-- Copy feedback notification -->
            <div
              v-if="showCopyFeedback"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-greenAccent text-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap"
            >
              Email copied!
            </div>
          </div>
          <div class="relative">
            <a
              href="https://github.com/karolinakwasny"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
            >
              <Github class="w-5 h-5 text-text" />
              <span class="font-medium text-text">GitHub</span>
            </a>
            <button
              @click="copyGitHub"
              class="absolute -top-1 -right-1 p-1 bg-background border border-border rounded hover:border-greenAccent hover:bg-border transition-colors"
              title="Copy GitHub URL"
            >
              <Copy class="w-3 h-3 text-text" />
            </button>
            <!-- Copy feedback notification -->
            <div
              v-if="showGitHubCopyFeedback"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-greenAccent text-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap"
            >
              GitHub URL copied!
            </div>
          </div>
          <div class="relative">
            <a
              href="https://linkedin.com/in/kwasnykarolina"
              target="_blank"
              rel="noopener"
              class="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-greenAccent"
            >
              <Linkedin class="w-5 h-5 text-text" />
              <span class="font-medium text-text">LinkedIn</span>
            </a>
            <button
              @click="copyLinkedIn"
              class="absolute -top-1 -right-1 p-1 bg-background border border-border rounded hover:border-greenAccent hover:bg-border transition-colors"
              title="Copy LinkedIn URL"
            >
              <Copy class="w-3 h-3 text-text" />
            </button>
            <!-- Copy feedback notification -->
            <div
              v-if="showLinkedInCopyFeedback"
              class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-greenAccent text-background px-3 py-1 rounded text-sm font-medium whitespace-nowrap"
            >
              LinkedIn URL copied!
            </div>
          </div>
        </div>
      </section>
    </template>
    <RouterView />

    <!-- Footer -->
    <footer class="border-t border-border py-6 md:py-8">
      <div class="max-w-4xl mx-auto px-4 md:px-6 text-center text-text">
        <p class="font-mono text-sm md:text-base">© 2025 • Built with Vue & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";

import { ref, computed } from "vue";
import { Mail, Github, Linkedin, Copy } from "lucide-vue-next";
import ProjectCard from "./components/ProjectCard.vue";
import { projects as projectsData } from "./data/projects.js";

const route = useRoute();
const isHome = computed(() => route.path === "/");

const projects = ref(projectsData);
const showCopyFeedback = ref(false);
const showGitHubCopyFeedback = ref(false);
const showLinkedInCopyFeedback = ref(false);

const copyEmail = async (event) => {
  event.preventDefault(); // Prevent any parent click events
  const email = "kwasnykarolina98@gmail.com";
  
  try {
    await navigator.clipboard.writeText(email);
    showCopyFeedback.value = true;
    setTimeout(() => {
      showCopyFeedback.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy email to clipboard:', err);
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    showCopyFeedback.value = true;
    setTimeout(() => {
      showCopyFeedback.value = false;
    }, 2000);
  }
};

const copyGitHub = async (event) => {
  event.preventDefault();
  const githubUrl = "https://github.com/karolinakwasny";
  
  try {
    await navigator.clipboard.writeText(githubUrl);
    showGitHubCopyFeedback.value = true;
    setTimeout(() => {
      showGitHubCopyFeedback.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy GitHub URL to clipboard:', err);
    const textArea = document.createElement('textarea');
    textArea.value = githubUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    showGitHubCopyFeedback.value = true;
    setTimeout(() => {
      showGitHubCopyFeedback.value = false;
    }, 2000);
  }
};

const copyLinkedIn = async (event) => {
  event.preventDefault();
  const linkedinUrl = "https://linkedin.com/in/kwasnykarolina";
  
  try {
    await navigator.clipboard.writeText(linkedinUrl);
    showLinkedInCopyFeedback.value = true;
    setTimeout(() => {
      showLinkedInCopyFeedback.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy LinkedIn URL to clipboard:', err);
    const textArea = document.createElement('textarea');
    textArea.value = linkedinUrl;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    showLinkedInCopyFeedback.value = true;
    setTimeout(() => {
      showLinkedInCopyFeedback.value = false;
    }, 2000);
  }
};
</script>
