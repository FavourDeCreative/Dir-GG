import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../components/About.vue";

// Import other components as needed

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  // Add more routes for your components and pages here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
