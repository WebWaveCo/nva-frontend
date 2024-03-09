<template>
  <v-card class="pa-4 d-flex flex-column" height="100%">
    <v-card-title class="text-h6 font-weight-light pl-0"
      >Reset Password</v-card-title
    >
    <v-form
      class="mb-0 flex-grow-1 d-flex flex-column"
      v-model="validForm"
      :disabled="!valid"
    >
      <v-row class="flex-grow-1">
        <v-col cols="12" lg="7">
          <v-text-field
            label="Current Password"
            v-model="currentPassword"
            :rules="passwordRules"
            placeholder="Current Password"
            outlined
            type="password"
          ></v-text-field>
          <v-text-field
            label="New Password"
            v-model="newPassword"
            :rules="passwordRules"
            placeholder="New Password"
            outlined
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex justify-end align-end">
          <v-btn
            class="text-case-normal px-6 my-lg-3 edit-button"
            :disabled="!valid || !validForm"
            @click="updatePassword"
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
  name: "PasswordResetCard",
  props: ["valid"],
  data: () => ({
    currentPassword: "",
    newPassword: "",
    validForm: true,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must be at least 5 characters",
    ],
  }),
  methods: {
    async updatePassword() {
      try {
        const data = {
          email: this.$store.getters.getUser.email,
          entry_date: this.$store.getters.getUser.entry_date,
          job_title: this.$store.getters.getUser.job_title,
          name: this.$store.getters.getUser.name,
          phone: this.$store.getters.getUser.phone,
          roles: this.$store.getters.getUser.roles,
          password: this.currentPassword,
          new_password: this.newPassword,
        };
        this.validForm = false;

        const response = await user.updateUser(data);
        if (response.code === 200) {
          let dataAlert = {
            message: "Password updated successfully.",
            status: "success",
          };
          this.$emit("alert", dataAlert);
        } else {
          let dataAlert = {
            message: "update failed. Wrong password.",
            status: "error",
          };
          this.$emit("alert", dataAlert);
        }
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
};
</script>
