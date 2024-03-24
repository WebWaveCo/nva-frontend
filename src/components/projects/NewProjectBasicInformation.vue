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
      <header class="d-flex flex-column mt-5">
        <p class="mb-7 text-center" style="font-size: 20px">
          New Submission
          <span class="d-block">LET’S GET STARTED</span>
        </p>
        <p class="mb-7">
          Enter a unique name. this can be an address, client name, or other
          info you can identify this scope by later.
        </p>
      </header>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <div class="map"></div>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="address"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field v-model="address2" label="address line 2" outlined>
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="city"
              :rules="cityRules"
              label="City"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="state"
              :rules="stateRules"
              label="State"
              outlined
            >
            </v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="zip"
              :rules="zipRules"
              label="Zip Code"
              outlined
              type="number"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center mb-5" style="width: 100%">
          <v-btn
            @click="createProject"
            :disabled="!valid"
            class="edit-button mt-10"
            >Confirm Project Location</v-btn
          >
        </div>
      </v-form>
      <v-alert v-if="error" type="error" dense text
        >An error has occurred, please try again
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
import project from "@/api/project";
export default {
  name: "NewProjectBasicInformation",
  data() {
    return {
      valid: true,
      error: false,
      name: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 5) || "Name must be at least 5 characters",
      ],
      addressRules: [
        (v) => !!v || "Address is required",
        (v) => (v && v.length >= 5) || "Address must be at least 5 characters",
      ],
      cityRules: [
        (v) => !!v || "City is required",
        (v) => (v && v.length >= 5) || "City must be at least 5 characters",
      ],
      stateRules: [
        (v) => !!v || "State is required",
        (v) => (v && v.length >= 2) || "State must be at least 2 characters",
      ],
      zipRules: [
        (v) => !!v || "Zip is required",
        (v) => /^\d+$/.test(v) || "Zip Code must be a number",
      ],
    };
  },
  methods: {
    async createProject() {
      if (this.$refs.form.validate()) {
        this.valid = false;
        this.error = false;
        try {
          const data = {
            name: this.name,
            address: this.address,
            address_line: this.address2,
            city: this.city,
            state: this.state,
            zip_code: this.zip,
          };

          const response = await project.createProject(data);
          if (response.code == 200) {
            this.valid = true;
            this.$refs.form.reset();
            this.$emit("completed", response.data.project);
          } else {
            this.valid = true;
            this.error = true;
          }
        } catch (error) {
          this.valid = true;
          this.error = true;
        }
      }
    },
  },
};
</script>

<style scoped>
header,
form {
  width: 90%;
}

@media (min-width: 768px) {
  header,
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

.col {
  padding-top: 0;
  padding-bottom: 0;
}

.map {
  background-color: #ccc;
  border-radius: 15px;
  margin-bottom: 30px;
  aspect-ratio: 4/3;
  padding: 50px;
}
</style>
