<template>
  <div class="space-y-8 lg:space-y-12">
    <!-- Project Overview -->
    <section>
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text">Project Overview</h2>
      <div class="prose prose-invert max-w-none">
        <div
          class="text-sm sm:text-base text-text leading-relaxed whitespace-pre-line"
          v-html="formatDescription(project.longDescription)"
        ></div>
      </div>
    </section>

    <!-- Challenges & Solutions -->
    <section v-if="project.challenges && project.challenges.length > 0">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text">Key Challenges</h2>
      <div class="space-y-4">
        <div v-for="(challenge, index) in project.challenges" :key="index" class="flex items-start">
          <div
            class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-greenAccent mt-2 mr-3 sm:mr-4 flex-shrink-0"
          ></div>
          <p class="text-sm sm:text-base text-text leading-relaxed">{{ challenge }}</p>
        </div>
      </div>
    </section>

    <!-- What I Learned -->
    <section v-if="project.learnings && project.learnings.length > 0">
      <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text">What I Learned</h2>
      <div class="space-y-4">
        <div v-for="(learning, index) in project.learnings" :key="index" class="flex items-start">
          <icons.CheckCircle
            class="w-4 h-4 sm:w-5 sm:h-5 text-greenAccent mt-0.5 mr-3 flex-shrink-0"
          />
          <p class="text-sm sm:text-base text-text leading-relaxed">{{ learning }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { icons } from "../../data/icons.js";

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const formatDescription = (description) => {
  if (!description) return "";

  // Convert bullet points to HTML
  return description.replace(/•\s+/g, "<br>• ").replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
};
</script>
