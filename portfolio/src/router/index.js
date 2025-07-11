// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProjectDetail from "../views/ProjectDetail.vue";

const routes = [
  { path: "/", name: "Home", component: null },
  { path: "/projects/:id", name: "ProjectDetail", component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
