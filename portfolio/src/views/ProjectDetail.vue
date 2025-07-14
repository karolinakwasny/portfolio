<template>
  <div class="min-h-screen bg-background text-text">
    <div v-if="project" class="max-w-6xl mx-auto py-4 md:py-8 px-4 md:px-6">
      <!-- Back Navigation -->
      <router-link
        to="/"
        class="inline-flex items-center text-greenAccent hover:text-greenAccent/80 transition-colors mb-6 md:mb-8"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Projects
      </router-link>

      <!-- Project Header -->
      <ProjectDetailHeader :project="project" />

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-6 md:space-y-8 lg:space-y-12">
          <!-- Sidebar on mobile (moved up) -->
          <div class="lg:hidden">
            <ProjectSidebar :project="project" @toggle-demo="toggleDemo" />
          </div>
          
          <!-- Media Gallery -->
          <ProjectGallery ref="galleryRef" :project="project" @open-lightbox="openLightbox" />

          <!-- Project Content -->
          <ProjectContent :project="project" />
        </div>

        <!-- Sidebar (desktop only) -->
        <div class="hidden lg:block">
          <ProjectSidebar :project="project" @toggle-demo="toggleDemo" />
        </div>
      </div>

      <!-- Interactive Demo Modal -->
      <InteractiveDemoModal
        :project="project"
        :show-demo="showInteractiveDemo"
        @close="showInteractiveDemo = false"
      />

      <!-- Image Lightbox -->
      <ImageLightbox
        :lightbox-image="lightboxImage"
        :project="project"
        @close="closeLightbox"
        @next-image="setLightboxImage"
        @previous-image="setLightboxImage"
        @update-selected-image="updateSelectedImage"
      />
    </div>

    <!-- Project Not Found -->
    <div v-else class="max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6 text-center">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-text mb-4">Project Not Found</h1>
      <p class="text-sm sm:text-base text-text-secondary mb-6 md:mb-8">The project you're looking for doesn't exist.</p>
      <router-link
        to="/"
        class="inline-flex items-center text-greenAccent hover:text-greenAccent/80 transition-colors"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Projects
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft } from "lucide-vue-next";
import { projects } from "../data/projects.js";
import ProjectDetailHeader from "../components/ProjectDetail/ProjectDetailHeader.vue";
import ProjectGallery from "../components/ProjectDetail/ProjectGallery.vue";
import ProjectContent from "../components/ProjectDetail/ProjectContent.vue";
import ProjectSidebar from "../components/ProjectDetail/ProjectSidebar.vue";
import InteractiveDemoModal from "../components/ProjectDetail/InteractiveDemoModal.vue";
import ImageLightbox from "../components/ProjectDetail/ImageLightbox.vue";

const route = useRoute();
const project = ref(null);
const showInteractiveDemo = ref(false);
const lightboxImage = ref(null);
const galleryRef = ref(null);

const openLightbox = (imageSrc) => {
  lightboxImage.value = imageSrc;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxImage.value = null;
  document.body.style.overflow = "auto";
};

const setLightboxImage = (imageSrc) => {
  lightboxImage.value = imageSrc;
};

const updateSelectedImage = (imageSrc) => {
  if (galleryRef.value) {
    galleryRef.value.selectedImage = imageSrc;
  }
};

const toggleDemo = () => {
  showInteractiveDemo.value = !showInteractiveDemo.value;
};

// Keyboard navigation
const handleKeydown = (event) => {
  if (event.key === "Escape" && lightboxImage.value) {
    closeLightbox();
  } else if (event.key === "Escape" && showInteractiveDemo.value) {
    showInteractiveDemo.value = false;
  }
};

onMounted(() => {
  const id = route.params.id;
  project.value = projects.find((p) => p.id === id);
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  document.body.style.overflow = "auto";
});
</script>
