<template>
  <router-link
    :to="`/projects/${project.id}`"
    class="block bg-background rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-200"
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
        v-for="(techItem, i) in project.tech"
        :key="i"
        class="bg-greenAccent/20 text-greenAccent text-xs font-semibold px-3 py-1 rounded-full"
      >
        {{ techItem }}
      </span>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
