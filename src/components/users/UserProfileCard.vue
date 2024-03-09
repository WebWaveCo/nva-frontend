<template>
  <v-card class="mx-auto" elevation="0">
    <v-row class="px-5">
      <v-col
        cols="12"
        lg="8"
        class="d-flex flex-column flex-sm-row align-center"
      >
        <v-avatar size="180px" class="avatar-shadow">
          <v-img src="@/assets/logo-profile.png"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h4 text-lg-h2 font-weight-bold">{{
            $store.getters.getUser.name
          }}</v-card-title>
          <v-card-subtitle class="text-h6 text-lg-h5 font-weight-light">{{
            $store.getters.getUser.job_title
          }}</v-card-subtitle>
        </div>
      </v-col>
      <v-col cols="12" lg="4" class="d-flex justify-end align-end">
        <v-btn
          @click="toggleEdit"
          color="#2b58e2"
          class="text-case-normal px-5"
          dark
          >Edit Profile</v-btn
        >
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "UserProfileCard",
  methods: {
    toggleEdit() {
      this.$emit("edit");
    },
  },
};
</script>
