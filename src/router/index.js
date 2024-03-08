import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// Dashboard
import Dashboard from "../views/Dashboard.vue";
import Profile from "@/components/users/Profile.vue";

// auth
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Dashboard,
    children: [
      {
        path: "/settings",
        name: "settings",
        component: Profile,
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem("authToken");

  if (requiresAuth && !isAuthenticated) {
    next({ name: "Login" });
  } else if (requiresAuth && isAuthenticated && !store.getters.isUserLoaded) {
    try {
      await store.dispatch("authenticateAndLoadUser");
      next();
    } catch (error) {
      next({ name: "Login" });
    }
  } else if (!requiresAuth && isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
