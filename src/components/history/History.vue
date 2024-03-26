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
      <v-card-title style="width: 100%" class="px-10 py-7">
        <v-row>
          <v-col class="d-flex justify-start align-center" cols="12" sm="8">
            <v-chip-group active-class="primary--text" v-model="selection">
              <v-chip class="chip" outlined>All</v-chip>
              <v-chip class="chip" outlined>Closed</v-chip>
              <v-chip class="chip" outlined>Rejected</v-chip>
              <v-chip class="chip" outlined>Archived</v-chip>
            </v-chip-group>
          </v-col>
          <v-col cols="12" sm="4">
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
        </v-row>
      </v-card-title>
      <v-data-table
        style="width: 100%"
        height="75vh"
        :headers="headers"
        :items="projects"
        :search="search"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        @page-count="pageCount = $event"
      ></v-data-table>
      <div class="text-center py-5">
        <v-pagination v-model="page" :length="pageCount"></v-pagination>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import history from "@/api/history";
import moment from "moment";
export default {
  name: "Team",
  data() {
    return {
      selection: 0,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      search: "",
      headers: [
        { text: "SUB#", value: "sub", width: "10%", sortable: false },
        { text: "Client", value: "client", width: "10%", sortable: false },
        { text: "LOR", value: "lor", width: "10%", sortable: false },
        { text: "Intake", value: "intake", width: "10%", sortable: false },
        { text: "Status", value: "status", width: "10%", sortable: false },
        { text: "Address", value: "address", width: "15%", sortable: false },
        { text: "Scope", value: "scope", width: "10%", sortable: false },
        { text: "Date", value: "date", width: "15%", sortable: false },
        { text: "", value: "fullview", width: "10%", sortable: false },
      ],
      projects: [],
    };
  },
  methods: {
    async getProjects() {
      try {
        const response = await history.fetchHistory();
        if (response.code == 200) {
          return response.data.history.map((project) => ({
            ...project,
            entry_date: moment(project.entry_date).format("YYYY-MM-DD"),
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
    this.projects = await this.getProjects();
  },
};
</script>

<style scoped>
@media (min-width: 760px) {
  .chip {
    min-width: 85px !important;
    display: flex;
    justify-content: center;
  }
}
</style>
