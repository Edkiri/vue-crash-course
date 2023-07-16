import { createRouter, createWebHistory } from "vue-router";

import AppAbout from "../pages/AppAbout";
import AppHome from "../pages/AppHome";

const routes = [
  {
    path: "/",
    name: "Home",
    component: AppHome,
  },
  {
    path: "/about",
    name: "About",
    component: AppAbout,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
