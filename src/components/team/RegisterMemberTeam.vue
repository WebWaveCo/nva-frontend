<template>
  <v-container
    fluid
    class="d-flex justify-center align-center"
    style="height: 100%"
  >
    <v-card
      class="d-flex flex-column justify-center align-center"
      min-height="98%"
      min-width="95%"
      elevation="0"
    >
      <p v-if="!isProcessFinished" class="mb-8" style="font-size: 20px">
        New member
      </p>
      <v-form
        v-if="!isProcessFinished"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="Name"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          label="Phone Number"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          outlined
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="confirmationPassword"
          :rules="confirmationPasswordRules"
          label="Confirmation Password"
          outlined
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="date"
          :rules="dateRules"
          label="Entry Date"
          type="date"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="jobTitle"
          :rules="jobTitleRules"
          label="Job Title"
          outlined
        ></v-text-field>
        <div
          class="d-flex flex-column justify-center align-center"
          style="width: 100%"
        >
          <p class="text-center" style="width: 90%">
            This information will be used to identify the roofer within the
            platform and their respective equipment history, forming the
            database.
          </p>
          <v-btn @click="register" :disabled="!valid" class="edit-button mt-10"
            >Confirm Account</v-btn
          >
        </div>
      </v-form>
      <div
        style="width: 420px; max-width: 90%"
        class="d-flex flex-column justify-center align-center text-center"
        v-else
      >
        <v-img
          v-if="isProcessOk"
          class="mb-6"
          src="@/assets/aproved.png"
        ></v-img>
        <!-- <v-img v-else class="mb-6" src="@/assets/failed.png"></v-img> -->

        <div v-if="isProcessOk">
          <p>
            The account has been created.
          </p>
          <v-btn class="edit-button" @click="isProcessFinished = false"
            >Create another account</v-btn
          >

          <v-btn
            @click="$router.push({ name: 'Team' })"
            class="edit-button mt-5"
            >View team</v-btn
          >
        </div>

        <div v-else>
          <p>Account creation failed.</p>
          <v-btn class="edit-button" @click="isProcessFinished = false"
            >Try again</v-btn
          >

          <v-btn
            @click="$router.push({ name: 'Team' })"
            class="edit-button mt-5"
            >View team</v-btn
          >
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import user from "@/api/user";
export default {
  name: "RegisterMemberTeam",
  data: () => ({
    valid: true,
    isProcessFinished: false,
    isProcessOk: true,
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmationPassword: "",
    date: "",
    jobTitle: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length >= 5) || "Name must be at least 5 characters",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    phoneRules: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length >= 5) || "Phone must be at least 5 characters",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must be at least 5 characters",
    ],
    dateRules: [(v) => !!v || "Date is required"],
    jobTitleRules: [
      (v) => !!v || "Job Title is required",
      (v) => (v && v.length >= 5) || "Job Title must be at least 5 characters",
    ],
  }),
  computed: {
    confirmationPasswordRules() {
      return [
        (v) => !!v || "Confirmation Password is required",
        (v) => v === this.password || "Passwords must match",
      ];
    },
  },
  methods: {
    async register() {
      if (this.$refs.form.validate()) {
        this.valid = false;
        try {
          const data = {
            email: this.email,
            entry_date: this.date,
            job_title: this.jobTitle,
            name: this.name,
            phone: this.phone,
            password: this.password,
          };
          const response = await user.createUser(data);
          if (response.code == 200) {
            this.isProcessFinished = true;
            this.isProcessOk = true;
            this.$refs.form.reset();
          } else {
            this.isProcessFinished = true;
            this.isProcessOk = false;
          }
        } catch (error) {
          this.isProcessFinished = true;
          this.isProcessOk = false;
        }
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 90%;
}

@media (min-width: 768px) {
  form {
    width: 40%;
  }
}

.edit-button {
  background-color: #2b58e2 !important;
  color: white !important;
  text-transform: none;
  width: 90% !important;
}
</style>
