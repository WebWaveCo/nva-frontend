<template>
  <v-container fluid style="height: 100%">
    <v-card
      class="d-flex flex-column justify-center align-center"
      min-height="98%"
      min-width="95%"
      elevation="0"
    >
      <header class="d-flex flex-column mt-5 mb-10">
        <p class="mb-12 text-center" style="font-size: 20px">New Submission</p>
        <p class="text-center font-weight-regular text-h4">Create New File</p>
      </header>
      <v-row class="card-container">
        <v-col cols="12" md="6" lg="3">
          <v-card
            class="pa-5 fill-height"
            elevation="0"
            :class="{ 'blue-background': customerUpload }"
            style="border: 1px solid #ccc"
          >
            <v-card-title class="d-flex flex-column text-center">
              <v-img src="@/assets/cards/information.svg"></v-img>
              <span :class="{ 'blue-text': customerUpload }">Customer</span>
              <span :class="{ 'blue-text': customerUpload }">Information</span>
            </v-card-title>

            <v-card-text
              class="text-center mt-5 mb-10"
              :class="{ 'blue-text-principal': customerUpload }"
            >
              Please fill out your contact details and address accurately for
              efficient communication and service delivery.
            </v-card-text>

            <v-card-actions>
              <v-btn class="edit-button" block @click="goToCustomer"
                >Upload Now</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card
            class="pa-5 fill-height"
            elevation="0"
            :class="{ 'blue-background': scopeUpload }"
            style="border: 1px solid #ccc"
          >
            <v-card-title class="d-flex flex-column text-center">
              <v-img src="@/assets/cards/scope.svg"></v-img>
              <span :class="{ 'blue-text': scopeUpload }">New Damage</span>
              <span :class="{ 'blue-text': scopeUpload }">Scope</span>
            </v-card-title>

            <v-card-text
              class="text-center mt-5 mb-10"
              :class="{ 'blue-text-principal': scopeUpload }"
            >
              Describe the new roof damage in detail, including location and
              extent, to ensure accurate assessment and repair.
            </v-card-text>

            <v-card-actions>
              <v-btn class="edit-button" block>Upload Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card
            class="pa-5 fill-height"
            elevation="0"
            :class="{ 'blue-background': estimateUpload }"
            style="border: 1px solid #ccc"
          >
            <v-card-title class="d-flex flex-column text-center">
              <v-img src="@/assets/cards/file.svg"></v-img>
              <span :class="{ 'blue-text': estimateUpload }">Estimate</span>
              <span :class="{ 'blue-text': estimateUpload }">File</span>
            </v-card-title>

            <v-card-text
              class="text-center mt-5 mb-10"
              :class="{ 'blue-text-principal': estimateUpload }"
            >
              Provide all relevant information for an accurate cost estimation,
              including materials needed and labor costs.
            </v-card-text>

            <v-card-actions>
              <v-btn class="edit-button" block>Upload Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" lg="3">
          <v-card
            class="pa-5 fill-height"
            elevation="0"
            :class="{ 'blue-background': documentsUpload }"
            style="border: 1px solid #ccc"
          >
            <v-card-title class="d-flex flex-column text-center">
              <v-img src="@/assets/cards/documents.svg"></v-img>
              <span :class="{ 'blue-text': documentsUpload }">Project</span>
              <span :class="{ 'blue-text': documentsUpload }">Documents</span>
            </v-card-title>

            <v-card-text
              class="text-center mt-5 mb-10"
              :class="{ 'blue-text': documentsUpload }"
            >
              Upload any necessary documents such as permits, insurance claims,
              or previous repair records for a comprehensive project overview.
            </v-card-text>

            <v-card-actions>
              <v-btn class="edit-button" block>Upload Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <footer>
        <v-btn
          class="edit-button"
          @click="goToDashboard"
          block
          :disabled="!customerUpload"
          >Complate&nbsp;
          <span
            v-if="
              !customerUpload ||
              !scopeUpload ||
              !estimateUpload ||
              !documentsUpload
            "
            >Late</span
          ></v-btn
        >
        <p class="text-center mt-15">
          Please note: It's essential to complete at least the customer
          information to enable the ‘Complete Later’ button. Your cooperation
          ensures smooth progress.
        </p>
      </footer>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  name: "NewProjectBasicInformation",
  computed: {
    ...mapGetters(["getNewProject"]),
    customerUpload() {
      return this.getNewProject.customerUpload;
    },
    scopeUpload() {
      return this.getNewProject.scopeUpload;
    },
    estimateUpload() {
      return this.getNewProject.estimateUpload;
    },
    documentsUpload() {
      return this.getNewProject.documentsUpload;
    },
  },
  props: {
    projectData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(["resetNewProject"]),
    goToCustomer() {
      this.$router.push({
        name: "CustomerInformation",
        params: { id: this.projectData.id },
      });
    },
    goToDashboard() {
      this.resetNewProject();
      this.$emit("completedProject");
      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
header {
  width: 90%;
}

footer {
  width: 70%;
  margin-top: 40px;
  margin-bottom: 60px;
}

.card-container {
  width: 80%;
}

.row {
  flex: 0 1 auto;
}

@media (min-width: 992px) {
  header {
    width: 40%;
  }

  footer {
    width: 35%;
  }
}

.edit-button {
  background-color: #2b58e2 !important;
  color: white !important;
  text-transform: none;
  width: 90% !important;
}

.card-container .v-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-container .v-card-title,
.card-container .v-card-text,
.card-container .v-card-actions {
  flex: 0 0 auto; /* No permite que estos hijos crezcan o se encojan */
}

.card-container .v-card-text {
  flex-grow: 1; /* Permite que el texto de la tarjeta crezca para llenar el espacio disponible */
}

.blue-background {
  background-color: #edf2fd;
}

.blue-text {
  color: #2b58e2 !important;
}

.blue-text-principal {
  color: #7290ec !important;
}
</style>
