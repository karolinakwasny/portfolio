<template>
  <section v-if="project.images && project.images.length > 0">
    <h2 class="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-text">Project Gallery</h2>
    <div class="space-y-4 sm:space-y-6">
      <!-- Main Image/GIF -->
      <div class="relative rounded-lg overflow-hidden cursor-pointer group">
        <!-- Fixed size container for consistent display -->
        <div class="image-container">
          <img
            :src="selectedImage"
            :alt="project.title"
            class="natural-size-image"
            @error="handleImageError"
            @click="openLightbox(selectedImage)"
          />
        </div>
        <!-- Zoom indicator -->
        <div
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/20"
        >
          <div class="bg-background/80 rounded-full p-2">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </div>
        </div>
      </div>

      <!-- Thumbnail Gallery -->
      <div v-if="project.images.length > 1" class="flex gap-2 sm:gap-3 overflow-x-auto pb-2">
        <button
          v-for="(image, index) in project.images"
          :key="index"
          @click="selectedImage = image"
          :class="[
            'flex-shrink-0 w-16 h-12 sm:w-20 sm:h-16 rounded-md overflow-hidden border-2 transition-colors',
            selectedImage === image
              ? 'border-greenAccent'
              : 'border-border hover:border-greenAccent/50',
          ]"
        >
          <img
            :src="image"
            :alt="`${project.title} screenshot ${index + 1}`"
            class="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
            @error="handleImageError"
            @click="openLightbox(image)"
          />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["open-lightbox"]);

const selectedImage = ref("");

const handleImageError = (event) => {
  // Hide broken images
  event.target.style.display = "none";
};

const openLightbox = (imageSrc) => {
  emit("open-lightbox", imageSrc);
};

onMounted(() => {
  if (props.project.images && props.project.images.length > 0) {
    selectedImage.value = props.project.images[0];
  }
});

defineExpose({
  selectedImage,
});
</script>

<style scoped>
.image-container {
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.natural-size-image {
  max-width: 100%;
  max-height: 200px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 8px;
}
</style>
