// src/router/router.js
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import ProjectDetail from "../views/ProjectDetail.vue";
import MyHome from "../views/MyHome.vue";

const routes = [
  { path: "/", name: "Home", component: MyHome },
  { path: "/projects/:id", name: "ProjectDetail", component: ProjectDetail },
  // Catch-all route for any unmatched paths - redirect to home
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// Use history routing for production (clean URLs) and hash for development
const isProduction = import.meta.env.PROD;
const base = isProduction ? "/portfolio/" : "/";

const router = createRouter({
  history: isProduction ? createWebHistory(base) : createWebHashHistory(),
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
