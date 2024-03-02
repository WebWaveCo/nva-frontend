<template>
    <v-app-bar
      color="white"
      elevate-on-scroll
      elevation-2
    >
      <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>
      
      <v-spacer></v-spacer>

      <v-btn color="error" @click="logout">
        Logout
      </v-btn>
    </v-app-bar>
</template>

<script>

import user from '@/api/user';
export default {
    name: 'Header',
    methods: {
        async logout() {
          try {
            await user.logout();
            this.$store.commit('resetState');
            this.$router.push({ name: 'Login' });
          } catch (error) {
            console.log(error);
          }
        }
    }
}
</script>

<style>

</style>