<template>
  <v-card class="pa-4 d-flex flex-column" height="100%" elevation="0">
    <v-card-title class="text-h6 font-weight-light pl-0"
      >Job Information</v-card-title
    >
    <v-form
      class="mb-0 flex-grow-1 d-flex flex-column"
      v-model="validForm"
      disabled
    >
      <v-row class="flex-grow-1">
        <v-col cols="12" lg="7">
          <v-text-field
            v-model="jobTitle"
            label="Job Title"
            outlined
          ></v-text-field>
          <v-text-field
            v-model="entryDate"
            label="Entry Date"
            placeholder=""
            outlined
            type="date"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex justify-end align-end">
          <v-btn
            class="text-case-normal px-6 my-lg-3 edit-button"
            :disabled="true"
            @click="updateJob"
            >Save Changes</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import user from "@/api/user.js";
import moment from "moment";
export default {
  name: "JobInformationCard",
  props: ["valid"],
  data: () => ({
    jobTitle: "",
    entryDate: "",
    validForm: true,
  }),
  methods: {
    async updateJob() {
      const data = {
        email: this.$store.getters.getUser.email,
        entry_date: this.entryDate,
        job_title: this.jobTitle,
        name: this.$store.getters.getUser.name,
        phone: this.$store.getters.getUser.phone,
        roles: this.$store.getters.getUser.roles,
      };

      this.validForm = false;

      try {
        const response = await user.updateUser(data);
        if (response.code === 200) {
          let dataAlert = {
            message: "Job information updated successfully.",
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
        await this.$store.dispatch("updateJob", data);
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
    this.entryDate = moment(this.$store.getters.getUser.entry_date).format(
      "YYYY-MM-DD",
    );
    this.jobTitle = this.$store.getters.getUser.job_title;
  },
};
</script>
