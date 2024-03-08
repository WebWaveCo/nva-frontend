<template>
  <v-card class="pa-4">
    <v-card-title class="text-h6 font-weight-light"
      >Personal Information</v-card-title
    >
    <v-form class="mb-0">
      <v-row>
        <v-col cols="12" lg="7">
          <v-text-field label="Name" placeholder="" outlined></v-text-field>
          <v-text-field
            label="E-mail Address"
            placeholder=""
            outlined
            disabled
          ></v-text-field>
          <v-text-field
            label="Phone Number"
            placeholder=""
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" lg="5" class="d-flex justify-end align-end">
          <v-btn
            class="text-case-normal px-6 my-lg-3 edit-button"
            :disabled="!valid"
            >Save changes</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: "UserInformationCard",
  props: ["valid"],
};
</script>
