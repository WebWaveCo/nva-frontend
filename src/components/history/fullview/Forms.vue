<template>
  <v-container fluid class="my-3 mx-0 pa-0">
    <p class="mt-5 mb-8 mx-2" style="font-size: 20px">LOR</p>
    <v-card class="card-forms" elevation="0" min-height="50vh"> </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Forms",
};
</script>

<style scoped>
.card-forms {
  width: 100%;
}

@media (min-width: 768px) {
  .card-forms {
    width: 50%;
  }
}
</style>
