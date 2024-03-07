<template>
  <v-main>
    <Sidebar />
    <router-view></router-view>
  </v-main>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
