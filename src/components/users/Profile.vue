<template>
  <v-container
    fluid
    class="d-flex justify-center align-center"
    style="height: 100%"
  >
    <v-row class="px-5">
      <v-col cols="12" class="my-5">
        <UserProfileCard @edit="toggleEdit"></UserProfileCard>
      </v-col>
      <v-col cols="12" md="6">
        <UserInformationCard
          :valid="valid"
          @alert="activeAlert"
        ></UserInformationCard>
      </v-col>
      <v-col cols="12" md="6">
        <PasswordResetCard
          :valid="valid"
          @alert="activeAlert"
        ></PasswordResetCard>
      </v-col>
      <v-col cols="12" md="12">
        <JobInformationCard
          :valid="valid"
          @alert="activeAlert"
        ></JobInformationCard>
      </v-col>
      <v-col cols="12" md="6" v-if="false">
        <PasswordChangeNoticeCard></PasswordChangeNoticeCard>
      </v-col>
      <v-col v-if="alerMessage" cols="12" md="4">
        <v-alert :type="alertStatus">{{ alerMessage }}</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserProfileCard from "@/components/users/UserProfileCard.vue";
import UserInformationCard from "@/components/users/UserInformationCard.vue";
import PasswordResetCard from "@/components/users/PasswordResetCard.vue";
import JobInformationCard from "@/components/users/JobInformationCard.vue";
import PasswordChangeNoticeCard from "@/components/users/PasswordChangeNoticeCard.vue";

export default {
  name: "Profile",
  components: {
    UserProfileCard,
    UserInformationCard,
    PasswordResetCard,
    JobInformationCard,
    PasswordChangeNoticeCard,
  },
  data: () => ({
    valid: false,
    alerMessage: "",
    alertStatus: "",
  }),
  methods: {
    toggleEdit() {
      this.valid = !this.valid;
    },
    activeAlert(data) {
      this.alerMessage = data.message;
      this.alertStatus = data.status;
      setTimeout(() => {
        this.alerMessage = "";
        this.alertStatus = "";
      }, 5000);
    },
  },
};
</script>

<style>
.avatar-shadow {
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.1);
  border: 2px solid white;
}

.text-case-normal {
  text-transform: none;
  font-size: 15px;
}

.edit-button {
  background-color: #2b58e2 !important;
  color: white !important;
}

.edit-button:disabled {
  background-color: grey !important;
}
</style>
