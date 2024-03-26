<template>
  <v-container fluid class="ma-3">
    <v-row class="d-flex align-stretch">
      <v-col class="my-1" cols="12" lg="4">
        <v-card class="mx-auto flex-grow-1" elevation="0">
          <v-row class="px-5 py-2">
            <v-col cols="7">
              <p>Client</p>
              <p class="font-weight-regular text-h5 text-lg-h4">
                Juan Martinez Vegas Aguilar
              </p>
            </v-col>
            <v-col class="d-flex flex-column justify-start align-end" cols="5">
              <v-img
                max-height="92"
                max-width="110"
                src="@/assets/projectfullview/profile.svg"
              ></v-img>
              <p class="px-10 text-center">
                Sub#<span class="d-block"> 4231 </span>
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="my-1" cols="12" lg="4">
        <v-card class="mx-auto flex-grow-1" elevation="0">
          <v-row class="px-5 py-2">
            <v-col cols="9">
              <p class="mb-0">Claim Status</p>
              <p
                style="color: #2b58e2"
                class="font-weight-regular text-h5 text-lg-h4"
              >
                Open
              </p>
              <p class="mt-6">3 Days 7 hours ago - 01/03/2024</p>
            </v-col>
            <v-col class="d-flex flex-column justify-start align-end" cols="3">
              <v-img
                max-height="92"
                max-width="110"
                src="@/assets/projectfullview/house.svg"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col class="my-1" cols="12" lg="4">
        <v-card class="mx-auto flex-grow-1" elevation="0">
          <v-row class="px-5 py-2">
            <v-col cols="9">
              <p class="mb-0">Total Payments</p>
              <p
                style="color: #399652"
                class="font-weight-regular text-h5 text-lg-h4"
              >
                $ 8,939.33
              </p>
              <p class="mt-6">Last payment 02 / 03 / 2024</p>
            </v-col>
            <v-col class="d-flex flex-column justify-start align-end" cols="3">
              <v-img
                max-height="92"
                max-width="110"
                src="@/assets/projectfullview/dolar.svg"
              ></v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HeaderProjectFullView",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 19px;
}

.text-lg-h4 {
  font-size: 28px !important;
}

.v-card {
  height: 100%;
}
</style>
