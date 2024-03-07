<template>
  <v-app style="background-color: #f5f5f5">
    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <router-view />
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState(["loading"]),
  },
};
</script>

<style></style>
