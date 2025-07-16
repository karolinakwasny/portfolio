<template>
  <div
    v-if="showDemo"
    class="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
    @click="$emit('close')"
  >
    <div
      class="bg-background border border-border rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-auto"
      @click.stop
    >
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-2xl font-semibold text-text">{{ project.title }} - Interactive Demo</h3>
        <button @click="$emit('close')" class="text-text-secondary hover:text-text">
          <icons.X class="w-6 h-6" />
        </button>
      </div>

      <!-- Demo Content -->
      <div class="bg-background-soft rounded-lg p-6">
        <p class="text-text mb-4">
          Interactive demo for {{ project.title }} would be displayed here. This could include:
        </p>
        <ul class="list-disc list-inside space-y-2 text-text-secondary">
          <li>Live code examples</li>
          <li>Interactive visualizations</li>
          <li>Command line simulations</li>
          <li>Game demos or previews</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { icons } from "../../data/icons.js";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  showDemo: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["close"]);
</script>
