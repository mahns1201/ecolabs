import { createWebHistory, createRouter } from "vue-router";

import HomePage from "./views/HomePage.vue";
import Test from "./views/Test.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
