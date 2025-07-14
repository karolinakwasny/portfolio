<template>
  <header class="mb-12">
    <div class="flex items-center mb-6">
      <div class="p-3 bg-background-soft rounded-lg mr-4">
        <component v-if="project.icon" :is="project.icon" class="w-8 h-8 text-greenAccent" />
      </div>
      <div>
        <h1 class="text-4xl font-bold font-mono text-text mb-2">{{ project.title }}</h1>
        <div class="flex items-center gap-4">
          <span
            class="text-sm bg-greenAccent/20 text-greenAccent px-3 py-1 rounded-full font-medium"
          >
            {{ project.status }}
          </span>
          <span class="text-text-secondary">{{ project.duration }}</span>
          <span class="text-text-secondary">{{ project.teamSize }}</span>
        </div>
      </div>
    </div>

    <p class="text-xl text-text leading-relaxed mb-6">{{ project.description }}</p>

    <!-- Action Buttons -->
    <div class="flex gap-4">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        class="inline-flex items-center bg-greenAccent text-background px-6 py-3 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors"
      >
        <Github class="w-5 h-5 mr-2" />
        View Code
      </a>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="inline-flex items-center border border-greenAccent text-greenAccent px-6 py-3 rounded-lg font-semibold hover:bg-greenAccent/10 transition-colors"
      >
        <ExternalLink class="w-5 h-5 mr-2" />
        Live Demo
      </a>
    </div>
  </header>
</template>

<script setup>
import { Github, ExternalLink } from "lucide-vue-next";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
