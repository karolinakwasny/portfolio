<template>
  <div class="min-h-screen bg-background text-text">
    <div v-if="project" class="max-w-6xl mx-auto py-8 px-6">
      <!-- Back Navigation -->
      <router-link
        to="/"
        class="inline-flex items-center text-greenAccent hover:text-greenAccent/80 transition-colors mb-8"
      >
        <ArrowLeft class="w-4 h-4 mr-2" />
        Back to Projects
      </router-link>

      <!-- Project Header -->
      <header class="mb-12">
        <div class="flex items-center mb-6">
          <div class="p-3 bg-background-soft rounded-lg mr-4">
            <component v-if="project.icon" :is="project.icon" class="w-8 h-8 text-greenAccent" />
          </div>
          <div>
            <h1 class="text-4xl font-bold font-mono text-text mb-2">{{ project.title }}</h1>
            <div class="flex items-center gap-4">
              <span
                class="text-sm bg-greenAccent/20 text-greenAccent px-3 py-1 rounded-full font-medium"
              >
                {{ project.status }}
              </span>
              <span class="text-text-secondary">{{ project.duration }}</span>
              <span class="text-text-secondary">{{ project.teamSize }}</span>
            </div>
          </div>
        </div>

        <p class="text-xl text-text leading-relaxed mb-6">{{ project.description }}</p>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            class="inline-flex items-center bg-greenAccent text-background px-6 py-3 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors"
          >
            <Github class="w-5 h-5 mr-2" />
            View Code
          </a>
          <a
            v-if="project.demoUrl"
            :href="project.demoUrl"
            target="_blank"
            class="inline-flex items-center border border-greenAccent text-greenAccent px-6 py-3 rounded-lg font-semibold hover:bg-greenAccent/10 transition-colors"
          >
            <ExternalLink class="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </header>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Media Gallery -->
          <section v-if="project.images && project.images.length > 0">
            <h2 class="text-2xl font-semibold mb-6 text-text">Project Gallery</h2>
            <div class="space-y-6">
              <!-- Main Image/GIF -->
              <div
                class="relative rounded-lg overflow-hidden bg-background-soft cursor-pointer group"
              >
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
                    <svg
                      class="w-6 h-6 text-text"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
              <div v-if="project.images.length > 1" class="flex gap-3 overflow-x-auto pb-2">
                <button
                  v-for="(image, index) in project.images"
                  :key="index"
                  @click="selectedImage = image"
                  :class="[
                    'flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-colors',
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

          <!-- Project Overview -->
          <section>
            <h2 class="text-2xl font-semibold mb-6 text-text">Project Overview</h2>
            <div class="prose prose-invert max-w-none">
              <div
                class="text-text leading-relaxed whitespace-pre-line"
                v-html="formatDescription(project.longDescription)"
              ></div>
            </div>
          </section>

          <!-- Challenges & Solutions -->
          <section v-if="project.challenges && project.challenges.length > 0">
            <h2 class="text-2xl font-semibold mb-6 text-text">Key Challenges</h2>
            <div class="space-y-4">
              <div
                v-for="(challenge, index) in project.challenges"
                :key="index"
                class="flex items-start"
              >
                <div class="w-2 h-2 rounded-full bg-greenAccent mt-2 mr-4 flex-shrink-0"></div>
                <p class="text-text leading-relaxed">{{ challenge }}</p>
              </div>
            </div>
          </section>

          <!-- What I Learned -->
          <section v-if="project.learnings && project.learnings.length > 0">
            <h2 class="text-2xl font-semibold mb-6 text-text">What I Learned</h2>
            <div class="space-y-4">
              <div
                v-for="(learning, index) in project.learnings"
                :key="index"
                class="flex items-start"
              >
                <CheckCircle class="w-5 h-5 text-greenAccent mt-0.5 mr-3 flex-shrink-0" />
                <p class="text-text leading-relaxed">{{ learning }}</p>
              </div>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="space-y-8">
          <!-- Technical Stack -->
          <section>
            <h3 class="text-xl font-semibold mb-4 text-text">Tech Stack</h3>
            <div class="flex flex-wrap gap-2">
              <a
                v-for="(techItem, i) in project.tech"
                :key="i"
                :href="getTechUrl(techItem)"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-greenAccent/20 text-greenAccent text-sm font-semibold px-3 py-2 rounded-full hover:bg-greenAccent/30 hover:text-greenAccent transition-colors cursor-pointer"
                :title="`Learn more about ${techItem}`"
              >
                {{ techItem }}
              </a>
            </div>
          </section>

          <!-- Project Highlights -->
          <section v-if="project.highlights && project.highlights.length > 0">
            <h3 class="text-xl font-semibold mb-4 text-text">Key Highlights</h3>
            <div class="space-y-3">
              <div
                v-for="(highlight, index) in project.highlights"
                :key="index"
                class="flex items-start"
              >
                <Star class="w-4 h-4 text-greenAccent mt-1 mr-3 flex-shrink-0" />
                <p class="text-sm text-text">{{ highlight }}</p>
              </div>
            </div>
          </section>

          <!-- Project Stats -->
          <section class="bg-background-soft rounded-lg p-6">
            <h3 class="text-xl font-semibold mb-4 text-text">Project Info</h3>
            <div class="space-y-3">
              <div class="flex flex-col">
                <span class="text-text-secondary text-sm">Duration:</span>
                <span class="text-text font-medium">{{ project.duration }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-text-secondary text-sm">Team Size:</span>
                <span class="text-text font-medium">{{ project.teamSize }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-text-secondary text-sm">Status:</span>
                <span class="text-greenAccent font-medium">{{ project.status }}</span>
              </div>
            </div>
          </section>

          <!-- Interactive Demo Section -->
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
                <ExternalLink class="w-4 h-4 mr-2" />
                Play Live Demo
              </a>
            </template>

            <!-- Other projects: Interactive modal -->
            <template v-else>
              <p class="text-sm text-text-secondary mb-4">
                This project includes interactive elements. Click below to explore!
              </p>
              <button
                @click="showInteractiveDemo = !showInteractiveDemo"
                class="w-full bg-greenAccent text-background px-4 py-2 rounded-lg font-semibold hover:bg-greenAccent/90 transition-colors"
              >
                {{ showInteractiveDemo ? "Hide Demo" : "Show Interactive Demo" }}
              </button>
            </template>
          </section>
        </div>
      </div>

      <!-- Interactive Demo Modal/Section -->
      <div
        v-if="showInteractiveDemo && isInteractiveProject && project.id !== 'ft_transcendence'"
        class="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        @click="showInteractiveDemo = false"
      >
        <div
          class="bg-background border border-border rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-auto"
          @click.stop
        >
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-semibold text-text">{{ project.title }} - Interactive Demo</h3>
            <button
              @click="showInteractiveDemo = false"
              class="text-text-secondary hover:text-text"
            >
              <X class="w-6 h-6" />
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

      <!-- Image Lightbox Modal -->
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
            <X class="w-6 h-6" />
          </button>

          <!-- Navigation arrows -->
          <button
            v-if="project.images && project.images.length > 1"
            @click.stop="previousImage"
            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-text rounded-full p-2 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            v-if="project.images && project.images.length > 1"
            @click.stop="nextImage"
            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background text-text rounded-full p-2 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
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
    </div>

    <!-- Project Not Found -->
    <div v-else class="max-w-4xl mx-auto py-20 px-6 text-center">
      <h1 class="text-4xl font-bold text-text mb-4">Project Not Found</h1>
      <p class="text-text-secondary mb-8">The project you're looking for doesn't exist.</p>
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
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";
import { ArrowLeft, Github, ExternalLink, CheckCircle, Star, X } from "lucide-vue-next";
import { projects } from "../data/projects.js";

const route = useRoute();
const project = ref(null);
const selectedImage = ref("");
const showInteractiveDemo = ref(false);
const lightboxImage = ref(null);

const isInteractiveProject = computed(() => {
  return ["ft_transcendence", "cub3d", "fractol", "so_long"].includes(project.value?.id);
});

const handleImageError = (event) => {
  // Hide broken images
  event.target.style.display = "none";
};

const openLightbox = (imageSrc) => {
  lightboxImage.value = imageSrc;
  // Prevent body scrolling when lightbox is open
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxImage.value = null;
  // Restore body scrolling
  document.body.style.overflow = "auto";
};

const getCurrentImageIndex = () => {
  if (!project.value?.images || !lightboxImage.value) return 0;
  return project.value.images.findIndex((img) => img === lightboxImage.value);
};

const nextImage = () => {
  if (!project.value?.images) return;
  const currentIndex = getCurrentImageIndex();
  const nextIndex = (currentIndex + 1) % project.value.images.length;
  lightboxImage.value = project.value.images[nextIndex];
  selectedImage.value = project.value.images[nextIndex];
};

const previousImage = () => {
  if (!project.value?.images) return;
  const currentIndex = getCurrentImageIndex();
  const prevIndex = currentIndex === 0 ? project.value.images.length - 1 : currentIndex - 1;
  lightboxImage.value = project.value.images[prevIndex];
  selectedImage.value = project.value.images[prevIndex];
};

// Close lightbox on escape key
const handleKeydown = (event) => {
  if (event.key === "Escape" && lightboxImage.value) {
    closeLightbox();
  } else if (event.key === "ArrowRight" && lightboxImage.value) {
    nextImage();
  } else if (event.key === "ArrowLeft" && lightboxImage.value) {
    previousImage();
  }
};

// Add keyboard event listeners
onMounted(() => {
  const id = route.params.id;
  project.value = projects.find((p) => p.id === id);

  if (project.value && project.value.images && project.value.images.length > 0) {
    selectedImage.value = project.value.images[0];
  }

  // Add keyboard event listener
  document.addEventListener("keydown", handleKeydown);
});

// Clean up event listener
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  // Restore body scrolling if component is unmounted while lightbox is open
  document.body.style.overflow = "auto";
});

const formatDescription = (description) => {
  if (!description) return "";

  // Convert bullet points to HTML
  return description.replace(/•\s+/g, "<br>• ").replace(/\n\n/g, "<br><br>").replace(/\n/g, "<br>");
};

// Tech stack URLs mapping
const techStackUrls = {
  // Frontend
  React: "https://react.dev/",
  Vue: "https://vuejs.org/",
  "Vue.js": "https://vuejs.org/",
  "Next.js": "https://nextjs.org/",
  Vite: "https://vitejs.dev/",
  HTML: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  TypeScript: "https://www.typescriptlang.org/",
  "Tailwind CSS": "https://tailwindcss.com/",

  // Backend
  Django: "https://www.djangoproject.com/",
  "Node.js": "https://nodejs.org/",
  Express: "https://expressjs.com/",
  FastAPI: "https://fastapi.tiangolo.com/",
  Flask: "https://flask.palletsprojects.com/",

  // Languages
  C: "https://en.wikipedia.org/wiki/C_(programming_language)",
  "C++": "https://isocpp.org/",
  "C++98": "https://isocpp.org/",
  Python: "https://www.python.org/",

  // Databases
  PostgreSQL: "https://www.postgresql.org/",
  MySQL: "https://www.mysql.com/",
  MongoDB: "https://www.mongodb.com/",
  SQLite: "https://www.sqlite.org/",
  Redis: "https://redis.io/",
  Neon: "https://neon.tech/",

  // DevOps & Tools
  Docker: "https://www.docker.com/",
  Nginx: "https://nginx.org/",
  Git: "https://git-scm.com/",
  GitHub: "https://github.com/",
  Render: "https://render.com/",
  Heroku: "https://www.heroku.com/",
  Vercel: "https://vercel.com/",

  // Protocols & Technologies
  WebSocket: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  JWT: "https://jwt.io/introduction",
  OAuth: "https://oauth.net/",
  "REST API": "https://restfulapi.net/",
  GraphQL: "https://graphql.org/",

  // System & Low-level
  Unix: "https://en.wikipedia.org/wiki/Unix",
  Linux: "https://www.linux.org/",
  "System Calls": "https://en.wikipedia.org/wiki/System_call",
  "Process Management": "https://en.wikipedia.org/wiki/Process_management_(computing)",
  "File I/O": "https://en.wikipedia.org/wiki/Input/output",
  "Memory Management": "https://en.wikipedia.org/wiki/Memory_management",
  Concurrency: "https://en.wikipedia.org/wiki/Concurrent_computing",
  Threads: "https://en.wikipedia.org/wiki/Thread_(computing)",
  Mutex: "https://en.wikipedia.org/wiki/Mutual_exclusion",
  Pipes: "https://en.wikipedia.org/wiki/Pipeline_(Unix)",
  "Process Control": "https://en.wikipedia.org/wiki/Process_control",

  // Graphics & Math
  MLX: "https://github.com/42Paris/minilibx-linux",
  Mathematics: "https://en.wikipedia.org/wiki/Mathematics",
  Graphics: "https://en.wikipedia.org/wiki/Computer_graphics",
  Raycasting: "https://en.wikipedia.org/wiki/Ray_casting",
  "Linear Algebra": "https://en.wikipedia.org/wiki/Linear_algebra",

  // Networking
  Networking: "https://en.wikipedia.org/wiki/Computer_network",
  Sockets: "https://en.wikipedia.org/wiki/Network_socket",
  "IRC Protocol": "https://en.wikipedia.org/wiki/Internet_Relay_Chat",

  // Algorithms & Data Structures
  Algorithms: "https://en.wikipedia.org/wiki/Algorithm",
  "Data Structures": "https://en.wikipedia.org/wiki/Data_structure",
  Sorting: "https://en.wikipedia.org/wiki/Sorting_algorithm",

  // OOP
  OOP: "https://en.wikipedia.org/wiki/Object-oriented_programming",
  Classes: "https://en.wikipedia.org/wiki/Class_(computer_science)",
  Inheritance: "https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)",

  // Game Development
  "Game Development": "https://en.wikipedia.org/wiki/Video_game_development",

  // Containerization
  Containers: "https://www.docker.com/resources/what-container/",
  Bash: "https://www.gnu.org/software/bash/",
};

const getTechUrl = (tech) => {
  return techStackUrls[tech] || `https://www.google.com/search?q=${encodeURIComponent(tech)}`;
};
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
