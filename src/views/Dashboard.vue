<template>
  <v-main>
    <Header @handleDrawer="drawer = !drawer"/>
    <Sidebar :drawer="drawer"/>
    <router-view></router-view>
  </v-main>
</template>


<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

  export default {
    name: 'Dashboard',
    components: {
      Header,
      Sidebar
    },
    data: () => ({
      drawer: true,
    }),
  }
</script>
