<template>
  <v-container
    fluid
    class="d-flex justify-center align-center"
    style="height: 100%"
  >
    <v-card
      class="d-flex flex-column justify-center align-center"
      min-width="95%"
      elevation="0"
    >
      <v-card-title style="width: 100%" class="pa-7">
        <v-row>
          <v-col cols="4">
            <v-text-field
              class="d-flex justify-center align-center"
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              filled
              dense
              outlined
              hide-details
            ></v-text-field>
          </v-col>
          <v-col class="d-flex justify-end align-center" cols="8">
            <v-btn
              small
              elevation="0"
              class="mx-2"
              fab
              dark
              color="yellow darken-2"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
            <span class="font-weight-light text-subtitle-1 mr-lg-10"
              >New member</span
            >
          </v-col>
        </v-row>
      </v-card-title>
      <v-data-table
        item-class="no-border"
        style="width: 100%"
        height="100%"
        :headers="headers"
        :items="desserts"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        separator="none"
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center py-5">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import team from "@/api/team";
import moment from "moment";
export default {
  name: "Team",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      search: "",
      headers: [
        { text: "Entry", value: "entry_date", width: "25%", sortable: false },
        { text: "Job", value: "job_title", width: "15%", sortable: false },
        { text: "claims", value: "claims", width: "15%", sortable: false },
        { text: "Name", value: "name", width: "15%", sortable: false },
        { text: "Contact", value: "email", width: "15%", sortable: false },
        { text: "Phone", value: "phone", width: "15%", sortable: false },
        // { text: "view", value: "iron", width: "15%", sortable: false},
      ],
      desserts: [],
    };
  },
  methods: {
    async getDesserts() {
      try {
        const response = await team.fetchTeam();
        if (response.code == 200) {
          return response.data.team.map((member) => ({
            ...member,
            entry_date: moment(member.entry_date).format("YYYY-MM-DD"),
          }));
        } else {
          return [];
        }
      } catch (error) {
        return [];
      }
    },
  },
  async mounted() {
    this.desserts = await this.getDesserts();
  },
};
</script>

<style scoped></style>
