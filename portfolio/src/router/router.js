// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import ProjectDetail from "../views/ProjectDetail.vue";
import MyHome from "../views/MyHome.vue";

const routes = [
  { path: "/", name: "Home", component: MyHome },
  { path: "/projects/:id", name: "ProjectDetail", component: ProjectDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});

export default router;
