<template>
  <header class="border-b border-border">
    <div class="max-w-4xl mx-auto px-4 md:px-6 py-4">
      <nav class="flex justify-between items-center">
        <router-link to="/" class="font-mono text-base md:text-lg font-semibold">
          Portfolio
        </router-link>
        <div class="flex space-x-4 md:space-x-6">
          <router-link
            to="/#projects"
            class="text-text hover:text-greenAccent text-sm md:text-base transition-colors"
          >
            Projects
          </router-link>
          <router-link
            to="/#contact"
            class="text-text hover:text-greenAccent text-sm md:text-base transition-colors"
          >
            Contact
          </router-link>
        </div>
      </nav>
    </div>
  </header>
</template>
