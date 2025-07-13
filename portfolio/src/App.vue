<template>
  <div class="min-h-screen max-w-2xl mx-auto bg-background text-text">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
