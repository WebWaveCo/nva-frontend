<template>
  <v-main>
    <Sidebar ref="sidebar" class="z-index-over" />
    <v-btn
      fixed
      top
      left
      class="z-index-under"
      @click="$refs.sidebar.drawer = !$refs.sidebar.drawer"
    >
      <v-icon>{{
        $refs.sidebar && $refs.sidebar.drawer ? "mdi-close" : "mdi-menu"
      }}</v-icon>
    </v-btn>
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
};
</script>

<style scoped>
.z-index-over {
  z-index: 1001; /* Ajusta este valor según tus necesidades */
}

.z-index-under {
  z-index: 1000; /* Ajusta este valor según tus necesidades */
}
</style>
