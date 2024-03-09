import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
// Dashboard
import Main from "../views/Main.vue";
import Profile from "@/components/users/Profile.vue";
import Project from "@/components/projects/Project.vue";
import Dasboard from "@/components/dashboard/Dasboard.vue";
import History from "@/components/history/History.vue";
import Team from "@/components/team/Team.vue";
import files from "@/components/files/Files.vue";

// auth
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/settings",
        name: "Settings",
        component: Profile,
      },
      {
        path: "/project",
        name: "Project",
        component: Project,
      },
      {
        path: "/dashboard",
        alias: "/",
        name: "Dashboard",
        component: Dasboard,
      },
      {
        path: "/history",
        name: "History",
        component: History,
      },
      {
        path: "/team",
        name: "Team",
        component: Team,
      },
      {
        path: "/files",
        name: "Files",
        component: files,
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
      await store.dispatch("authenticateAndLoadUser", true);
      next();
    } catch (error) {
      next({ name: "Login" });
    }
  } else if (!requiresAuth && isAuthenticated) {
    next({ name: "Main" });
  } else {
    next();
  }
});

export default router;
