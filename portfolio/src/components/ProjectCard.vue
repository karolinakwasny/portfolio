<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="group block bg-background hover:bg-greenAccent/10 rounded-lg border border-border p-6 hover:shadow-md transition-all duration-200"
  >
    <div class="flex items-center mb-4">
      <div class="p-2 bg-background-soft rounded-md mr-3">
        <component v-if="project.icon" :is="project.icon" class="w-6 h-6 text-text" />
        <div v-else class="w-6 h-6 bg-greenAccent/20 rounded"></div>
      </div>
      <div>
        <h3 class="text-xl font-semibold font-mono text-text">{{ project.title }}</h3>
        <span class="text-sm text-greenAccent font-medium">{{ project.status }}</span>
      </div>
    </div>
    <p class="text-text mb-4 leading-relaxed">{{ project.description }}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="(techItem, i) in displayedTech"
        :key="i"
        class="bg-greenAccent/20 text-greenAccent text-xs font-semibold px-3 py-1 rounded-full"
      >
        {{ techItem }}
      </span>
      <span
        v-if="project.tech.length > 4"
        class="bg-background-soft text-text-secondary/70 text-[10px] font-medium px-3 py-1 rounded-full border border-border/50 group-hover:!bg-green-50 group-hover:!text-gray-700 group-hover:!border-transparent transition-all duration-200 cursor-default"
      >
        +{{ project.tech.length - 4 }} more
      </span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: Object,
});

// Show only first 4 tech items on project cards
const displayedTech = computed(() => {
  return props.project.tech.slice(0, 4);
});
</script>
