<template>
  <div class="space-y-6 lg:space-y-8">
    <!-- Technical Stack -->
    <section>
      <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text">Tech Stack</h3>
      <div class="flex flex-wrap gap-2">
        <a
          v-for="(techItem, i) in project.tech"
          :key="i"
          :href="getTechUrl(techItem)"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-greenAccent/20 text-greenAccent text-xs sm:text-sm font-semibold px-2 sm:px-3 py-1 sm:py-2 rounded-full hover:bg-greenAccent/30 hover:text-greenAccent transition-colors cursor-pointer"
          :title="`Learn more about ${techItem}`"
        >
          {{ techItem }}
        </a>
      </div>
    </section>

    <!-- Project Highlights -->
    <section v-if="project.highlights && project.highlights.length > 0">
      <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text">Key Highlights</h3>
      <div class="space-y-3">
        <div v-for="(highlight, index) in project.highlights" :key="index" class="flex items-start">
          <icons.Star class="w-3 h-3 sm:w-4 sm:h-4 text-greenAccent mt-1 mr-3 flex-shrink-0" />
          <p class="text-xs sm:text-sm text-text">{{ highlight }}</p>
        </div>
      </div>
    </section>

    <!-- Project Stats -->
    <section class="bg-background-soft rounded-lg p-4 sm:p-6">
      <h3 class="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text">Project Info</h3>
      <div class="space-y-3">
        <div v-if="project.duration" class="flex flex-col">
          <span class="text-text-secondary text-xs sm:text-sm">Duration:</span>
          <span class="text-sm sm:text-base text-text font-medium">{{ project.duration }}</span>
        </div>
        <div v-if="project.teamSize" class="flex flex-col">
          <span class="text-text-secondary text-xs sm:text-sm">Team Size:</span>
          <span class="text-sm sm:text-base text-text font-medium">{{ project.teamSize }}</span>
        </div>
        <div v-if="project.status" class="flex flex-col">
          <span class="text-text-secondary text-xs sm:text-sm">Status:</span>
          <span class="text-sm sm:text-base text-greenAccent font-medium">{{
            project.status
          }}</span>
        </div>
      </div>
    </section>

    <!-- Interactive Demo Section -->
    <InteractiveDemo :project="project" @toggle-demo="$emit('toggle-demo')" />
  </div>
</template>

<script setup>
import { icons } from "../../data/icons.js";
import InteractiveDemo from "./InteractiveDemo.vue";
import { techStackUrls } from "../../utils/techStackUrls.js";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(["toggle-demo"]);

const getTechUrl = (tech) => {
  return techStackUrls[tech] || `https://www.google.com/search?q=${encodeURIComponent(tech)}`;
};
</script>
