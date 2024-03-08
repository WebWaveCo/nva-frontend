<template>
  <v-card class="pa-4 d-flex flex-column" height="100%">
    <v-card-title class="text-h6 font-weight-light"
      >Job Information</v-card-title
    >
    <v-form class="mb-0 flex-grow-1 d-flex flex-column">
      <v-row class="flex-grow-1">
        <v-col cols="12" lg="7">
          <v-select :items="jobTitles" label="Job Title" outlined></v-select>
          <v-text-field
            label="Entry Date"
            placeholder=""
            outlined
            type="date"
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex justify-end align-end">
          <v-btn
            class="text-case-normal px-6 my-lg-3 edit-button"
            :disabled="!valid"
            >Save Changes</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "JobInformationCard",
  props: ["valid"],
  data: () => ({
    jobTitles: ["Admin", "Claim Specialist", "Contractor Admin"],
  }),
};
</script>
