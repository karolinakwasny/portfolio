<template>
  <div
    v-if="lightboxImage"
    class="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    @click="closeLightbox"
  >
    <div class="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
      <!-- Close button -->
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background text-text rounded-full p-2 transition-colors"
      >
        <icons.X class="w-6 h-6" />
      </button>

      <!-- Navigation arrows -->
      <button
        v-if="project.images && project.images.length > 1"
        @click.stop="previousImage"
        class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-text rounded-full p-2 transition-colors"
      >
        <icons.ChevronLeft class="w-6 h-6" />
      </button>

      <button
        v-if="project.images && project.images.length > 1"
        @click.stop="nextImage"
        class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-text rounded-full p-2 transition-colors"
      >
        <icons.ChevronRight class="w-6 h-6" />
      </button>

      <!-- Main lightbox image -->
      <img :src="lightboxImage" :alt="project.title" class="lightbox-image" @click.stop />

      <!-- Image counter -->
      <div
        v-if="project.images && project.images.length > 1"
        class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 text-text px-3 py-1 rounded-full text-sm"
      >
        {{ getCurrentImageIndex() + 1 }} / {{ project.images.length }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { icons } from "../../data/icons.js";

const props = defineProps({
  lightboxImage: String,
  project: Object,
});

const emit = defineEmits(["close", "next-image", "previous-image", "update-selected-image"]);

const closeLightbox = () => {
  emit("close");
};

const getCurrentImageIndex = () => {
  if (!props.project?.images || !props.lightboxImage) return 0;
  return props.project.images.findIndex((img) => img === props.lightboxImage);
};

const nextImage = () => {
  if (!props.project?.images) return;
  const currentIndex = getCurrentImageIndex();
  const nextIndex = (currentIndex + 1) % props.project.images.length;
  const nextImg = props.project.images[nextIndex];
  emit("next-image", nextImg);
  emit("update-selected-image", nextImg);
};

const previousImage = () => {
  if (!props.project?.images) return;
  const currentIndex = getCurrentImageIndex();
  const prevIndex = currentIndex === 0 ? props.project.images.length - 1 : currentIndex - 1;
  const prevImg = props.project.images[prevIndex];
  emit("previous-image", prevImg);
  emit("update-selected-image", prevImg);
};
</script>

<style scoped>
.lightbox-image {
  max-width: 60vw;
  max-height: 50vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}
</style>
