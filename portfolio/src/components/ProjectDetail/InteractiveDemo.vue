<template>
  <section v-if="isInteractiveProject" class="bg-background-soft rounded-lg p-6">
    <h3 class="text-xl font-semibold mb-4 text-text">Try It Out</h3>

    <!-- ft_transcendence: Link to website -->
    <template v-if="project.id === 'ft_transcendence'">
      <p class="text-sm text-text-secondary mb-4">
        Experience the full multiplayer Pong game with real-time gameplay and tournaments!
      </p>
      <a
        :href="project.demoUrl"
        target="_blank"
        class="w-full inline-flex items-center justify-center bg-greenAccent text-background px-4 py-2 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors"
      >
        <icons.ExternalLink class="w-4 h-4 mr-2" />
        Play Live Demo
      </a>
    </template>

    <!-- Other projects: Interactive modal -->
    <template v-else>
      <p class="text-sm text-text-secondary mb-4">
        This project includes interactive elements. Click below to explore!
      </p>
      <button
        @click="$emit('toggle-demo')"
        class="w-full bg-greenAccent text-background px-4 py-2 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors"
      >
        Show Interactive Demo
      </button>
    </template>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { icons } from "../../data/icons.js";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

defineEmits(["toggle-demo"]);

const isInteractiveProject = computed(() => {
  return ["ft_transcendence", "cub3d", "fractol", "so_long"].includes(props.project?.id);
});
</script>
