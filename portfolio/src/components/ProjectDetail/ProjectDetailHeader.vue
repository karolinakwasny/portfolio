<template>
  <header class="mb-8 md:mb-12">
    <div class="flex flex-col sm:flex-row sm:items-center mb-6">
      <div class="p-3 bg-background-soft rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0 self-start">
        <component
          v-if="project.icon"
          :is="project.icon"
          class="w-6 h-6 sm:w-8 sm:h-8 text-greenAccent"
        />
      </div>
      <div class="flex-1">
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-text mb-2">
          {{ project.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-2 sm:gap-4">
          <span
            class="text-xs sm:text-sm bg-greenAccent/20 text-greenAccent px-2 sm:px-3 py-1 rounded-full font-medium"
          >
            {{ project.status }}
          </span>
          <span class="text-xs sm:text-sm text-text-secondary">{{ project.duration }}</span>
          <span class="text-xs sm:text-sm text-text-secondary">{{ project.teamSize }}</span>
        </div>
      </div>
    </div>

    <p class="text-base sm:text-lg lg:text-xl text-text leading-relaxed mb-6">
      {{ project.description }}
    </p>

    <!-- Action Buttons -->
    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a
        v-if="project.githubUrl"
        :href="project.githubUrl"
        target="_blank"
        class="inline-flex items-center justify-center bg-greenAccent text-background px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors text-sm sm:text-base"
      >
        <icons.Github class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        View Code
      </a>
      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="inline-flex items-center justify-center border border-greenAccent text-greenAccent px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/10 transition-colors text-sm sm:text-base"
      >
        <icons.ExternalLink class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Live Demo
      </a>
    </div>
  </header>
</template>

<script setup>
import { icons } from "../../data/icons.js";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});
</script>
