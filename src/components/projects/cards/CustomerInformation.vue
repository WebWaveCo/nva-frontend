<template>
  <v-container fluid style="height: 100%">
    <v-card
      class="d-flex flex-column justify-center align-center"
      min-height="98%"
      min-width="95%"
      elevation="0"
    >
      <header class="d-flex flex-column mt-5 mb-10">
        <p class="mb-2 text-center" style="font-size: 20px">New Submission</p>
        <p class="text-center font-weight-regular text-h4">
          Customer Information
        </p>
      </header>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="FirstName"
              :rules="FirstNameRules"
              label="Customer first name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="LastName"
              :rules="LastNameRules"
              label="Customer last name"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-8 text-h6 font-weight-regular"
            >Loss address</v-col
          >
          <v-col cols="6">
            <v-text-field
              v-model="address"
              :rules="addressRules"
              label="Address"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="address2"
              label="Address line 2"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="city"
              :rules="cityRules"
              label="City"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="state"
              :rules="stateRules"
              label="State"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="zip"
              :rules="zipRules"
              label="Zip code"
              type="number"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-8 text-h6 font-weight-regular"
            >Insured Mailing Address</v-col
          >
          <v-col cols="6">
            <v-text-field
              v-model="addressMail"
              :rules="addressRules"
              label="Address"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="address2Mail"
              label="Address line 2"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="cityMail"
              :rules="cityRules"
              label="City"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="stateMail"
              :rules="stateRules"
              label="State"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="zipMail"
              :rules="zipRules"
              label="Zip code"
              type="number"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="mb-8 text-h6 font-weight-regular"
            >Contact Info</v-col
          >
          <v-col cols="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Customer e-mail address"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Customer cell phone number"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <div
          class="d-flex justify-center mb-5"
          style="width: 100%; gap: 0.5rem"
        >
          <v-btn @click="goBack" class="edit-button mt-10"
            >Back To Options</v-btn
          >
          <v-btn
            @click="updateCustomer"
            :disabled="!valid"
            class="edit-button mt-10"
            >Confirm Information</v-btn
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
import { mapMutations } from "vuex";
import project from "@/api/project";
export default {
  name: "CustomerInformation",
  data() {
    return {
      valid: true,
      error: false,
      FirstName: "",
      LastName: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      addressMail: "",
      address2Mail: "",
      cityMail: "",
      stateMail: "",
      zipMail: "",
      email: "",
      phone: "",
      FirstNameRules: [
        (v) => !!v || "First name is required",
        (v) =>
          (v && v.length >= 4) || "First name must be at least 4 characters",
      ],
      LastNameRules: [
        (v) => !!v || "Last name is required",
        (v) =>
          (v && v.length >= 4) || "Last name must be at least 4 characters",
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
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (v) => !!v || "Phone number is required",
        (v) =>
          (v && v.length >= 10) ||
          "Phone number must be at least 10 characters",
      ],
    };
  },
  methods: {
    ...mapMutations(["setCustomerUpload"]),
    goBack() {
      this.$router.go(-1);
    },
    async updateCustomer() {
      if (this.$refs.form.validate()) {
        this.valid = false;
        this.error = false;
        try {
          const customerData = {
            project_id: this.$route.params.id,
            customer_first_name: this.FirstName,
            customer_last_name: this.LastName,
            loss_address: this.address,
            loss_address_line: this.address2,
            loss_city: this.city,
            loss_state: this.state,
            loss_zip_code: this.zip,
            insured_address: this.addressMail,
            insured_address_line: this.address2Mail,
            insured_city: this.cityMail,
            insured_state: this.stateMail,
            insured_zip_code: this.zipMail,
            customer_email_address: this.email,
            customer_phone_number: this.phone,
          };

          const response = await project.createCustomer(customerData);
          if (response.code == 200) {
            this.valid = true;
            this.$refs.form.reset();
            this.setCustomerUpload(true);
            this.goBack();
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
  async mounted() {
    const response = await project.fetchCustomer(this.$route.params.id);
    if (response.code == 200) {
      this.FirstName = response.data.customer_information.customer_first_name;
      this.LastName = response.data.customer_information.customer_last_name;
      this.address = response.data.customer_information.loss_address;
      this.address2 = response.data.customer_information.loss_address_line;
      this.city = response.data.customer_information.loss_city;
      this.state = response.data.customer_information.loss_state;
      this.zip = response.data.customer_information.loss_zip_code;
      this.addressMail = response.data.customer_information.insured_address;
      this.address2Mail =
        response.data.customer_information.insured_address_line;
      this.cityMail = response.data.customer_information.insured_city;
      this.stateMail = response.data.customer_information.insured_state;
      this.zipMail = response.data.customer_information.insured_zip_code;
      this.email = response.data.customer_information.customer_email_address;
      this.phone = response.data.customer_information.customer_phone_number;
    }
  },
};
</script>

<style scoped>
header,
form {
  width: 95%;
}

@media (min-width: 768px) {
  header,
  form {
    width: 90%;
  }
}

.edit-button {
  background-color: #2b58e2 !important;
  color: white !important;
  text-transform: none;
  min-width: 175px !important;
  max-width: 48% !important;
  font-size: 15px !important;
  font-family: sans-serif !important;
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
