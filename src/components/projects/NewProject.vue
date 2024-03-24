<template>
  <div style="height: 100%">
    <NewProjectBasicInformation
      v-if="!sendBasicInformation"
      @completed="handleCompleted"
    />
    <NewProjectChargeData
      v-else
      @completedProject="changeComponent"
      :projectData="projectData"
    />
  </div>
</template>

<script>
import NewProjectBasicInformation from "@/components/projects/NewProjectBasicInformation.vue";
import NewProjectChargeData from "@/components/projects/NewProjectChargeData.vue";

export default {
  components: { NewProjectBasicInformation, NewProjectChargeData },
  name: "newProject",
  data() {
    return {
      sendBasicInformation: false,
      projectData: {},
    };
  },
  methods: {
    changeComponent() {
      this.sendBasicInformation = !this.sendBasicInformation;
    },
    handleCompleted(projectData) {
      this.changeComponent();
      this.projectData = projectData;
    },
  },
};
</script>

<style></style>
