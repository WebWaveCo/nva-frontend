<template>
  <v-card class="pa-4" elevation="0">
    <v-card-title class="text-h6 font-weight-light pl-0"
      >Personal Information</v-card-title
    >
    <v-form class="mb-0" v-model="validForm" :disabled="!valid">
      <v-row>
        <v-col cols="12" lg="7">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
            outlined
          ></v-text-field>
          <v-text-field
            label="E-mail Address"
            :value="$store.getters.getUser.email"
            outlined
            disabled
          ></v-text-field>
          <v-text-field
            label="Phone Number"
            v-model="phone"
            :rules="phoneRules"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex justify-end align-end">
          <v-btn
            class="text-case-normal px-6 my-lg-3 edit-button"
            :disabled="!valid || !validForm"
            @click="updateUser"
            >Save changes</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import user from "@/api/user.js";
export default {
  name: "UserInformationCard",
  props: ["valid"],
  data: () => ({
    name: "",
    phone: "",
    validForm: true,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 5) || "Name must be at least 5 characters",
    ],
    phoneRules: [(v) => !!v || "Phone number is required"],
  }),
  methods: {
    async updateUser() {
      try {
        const data = {
          email: this.$store.getters.getUser.email,
          entry_date: this.$store.getters.getUser.entry_date,
          job_title: this.$store.getters.getUser.job_title,
          name: this.name,
          phone: this.phone,
          roles: this.$store.getters.getUser.roles,
        };
        this.validForm = false;

        const response = await user.updateUser(data);
        if (response.code === 200) {
          let dataAlert = {
            message: "Profile updated successfully.",
            status: "success",
          };
          this.$emit("alert", dataAlert);
          await this.$store.dispatch("authenticateAndLoadUser", false);
        } else {
          let dataAlert = {
            message: "Update failed. Please try again.",
            status: "error",
          };
          this.$emit("alert", dataAlert);
        }
        await this.$store.dispatch("updateUser", data);
      } catch (error) {
        let dataAlert = {
          message: "Update failed. Please try again.",
          status: "error",
        };
        this.$emit("alert", dataAlert);
      } finally {
        this.validForm = true;
      }
    },
  },
  mounted() {
    this.name = this.$store.getters.getUser.name;
    this.phone = this.$store.getters.getUser.phone;
  },
};
</script>
