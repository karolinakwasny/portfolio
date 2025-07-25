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
      <!-- GitHub URL - Handle both simple string and complex object -->
      <div v-if="project.githubUrl" class="relative">
        <!-- Simple GitHub URL -->
        <a
          v-if="typeof project.githubUrl === 'string'"
          :href="project.githubUrl"
          target="_blank"
          class="inline-flex items-center justify-center bg-greenAccent text-background px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors text-sm sm:text-base"
        >
          <icons.Github class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          View Code
        </a>

        <!-- Multiple GitHub URLs with dropdown -->
        <div v-else-if="project.githubUrl.isMultiple" class="relative github-dropdown-container">
          <button
            @click="toggleGithubDropdown"
            class="inline-flex items-center justify-center bg-greenAccent text-background px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors text-sm sm:text-base w-full sm:w-auto"
          >
            <icons.Github class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            {{ project.githubUrl.label }}
            <icons.ChevronDown
              class="w-4 h-4 ml-2 transition-transform duration-200"
              :class="{ 'rotate-180': showGithubDropdown }"
            />
          </button>

          <!-- Dropdown Menu -->
          <div
            v-if="showGithubDropdown"
            class="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-lg shadow-lg z-10 py-2"
          >
            <a
              v-for="link in project.githubUrl.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              class="block px-4 py-3 hover:bg-background-soft transition-colors group"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="font-medium text-text group-hover:text-greenAccent transition-colors">
                    {{ link.label }}
                  </div>
                  <div class="text-sm text-text-secondary mt-1">
                    {{ link.description }}
                  </div>
                </div>
                <icons.ExternalLink
                  class="w-4 h-4 text-text-secondary group-hover:text-greenAccent transition-colors mt-0.5 ml-2 flex-shrink-0"
                />
              </div>
            </a>
          </div>
        </div>
      </div>

      <a
        v-if="project.demoUrl"
        :href="project.demoUrl"
        target="_blank"
        class="inline-flex items-center justify-center border border-greenAccent text-greenAccent px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/10 transition-colors text-sm sm:text-base"
      >
        <icons.ExternalLink class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Live Demo
      </a>
      <a
        v-if="project.websiteUrl"
        :href="project.websiteUrl"
        target="_blank"
        class="inline-flex items-center justify-center border border-greenAccent text-greenAccent px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-greenAccent/10 transition-colors text-sm sm:text-base"
      >
        <icons.ExternalLink class="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Course Website
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { icons } from "../../data/icons.js";

const showGithubDropdown = ref(false);

defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const toggleGithubDropdown = () => {
  showGithubDropdown.value = !showGithubDropdown.value;
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const dropdownContainer = event.target.closest(".github-dropdown-container");
  if (!dropdownContainer) {
    showGithubDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
