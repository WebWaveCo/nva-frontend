<template>
  <v-container
    fluid
    class="d-flex flex-column justify-start align-center"
    style="height: 100%"
  >
    <Header />
    <div style="width: 98%">
      <v-tabs v-model="tab" center-active show-arrows="">
        <v-tab>Details</v-tab>
        <v-tab>Scope</v-tab>
        <v-tab>Contacts</v-tab>
        <v-tab>Files</v-tab>
        <v-tab>Forms</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <Details />
        </v-tab-item>
        <v-tab-item>
          <Scope />
        </v-tab-item>
        <v-tab-item>
          <Contacts />
        </v-tab-item>
        <v-tab-item>
          <Files />
        </v-tab-item>
        <v-tab-item>
          <Forms />
        </v-tab-item>
      </v-tabs-items>
    </div>
  </v-container>
</template>

<script>
import Header from "@/components/history/fullview/Header.vue";
import Details from "@/components/history/fullview/Details.vue";
import Scope from "@/components/history/fullview/Scope.vue";
import Contacts from "@/components/history/fullview/Contacts.vue";
import Files from "@/components/history/fullview/Files.vue";
import Forms from "@/components/history/fullview/Forms.vue";
export default {
  name: "HistoryFullView",
  data() {
    return {
      tab: null,
    };
  },
  components: { Header, Scope, Contacts, Files, Forms, Details },
};
</script>

<style scoped>
.v-tabs-items {
  background-color: transparent !important;
}
</style>
