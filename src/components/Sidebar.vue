<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    mini-variant-width="120"
    width="240"
    app
    overlay
  >
    <!-- Profile -->
    <v-list nav>
      <div class="mx-5 my-5 d-flex justify-center align-center flex-column">
        <v-img
          max-height="60px"
          max-width="60px"
          src="@/assets/logo-sidebar.png"
          alt=""
          class="mb-2"
        />
        <h3
          class="text-center font-weight-light text-subtitle-1 mb-2"
          style="color: blue; line-height: 1; width: 80%"
          v-if="!mini"
        >
          National Virtual Adjuster
        </h3>
      </div>
      <v-list-item
        style="background-color: #2b58e2"
        :class="mini ? 'mx-5' : 'mx-7'"
        to="/settings"
        link
        active-class="active-class-profile"
      >
        <v-tooltip color="black" right :disabled="!mini">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-icon v-bind="attrs" v-on="on">
              <v-icon dark large>mdi-account-cog-outline</v-icon>
            </v-list-item-icon>
          </template>
          <span>Profile</span>
        </v-tooltip>
        <v-list-item-content>
          <v-list-item-title style="color: white">Profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item :class="mini ? 'mx-5' : 'mx-7'" to="/project" link>
        <v-tooltip color="black" right :disabled="!mini">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item-icon class="mr-2" v-bind="attrs" v-on="on">
              <v-icon size="50" color="yellow darken-2">mdi-plus-circle</v-icon>
            </v-list-item-icon>
          </template>
          <span>New submission</span>
        </v-tooltip>

        <v-list-item-content>
          <v-list-item-title class="d-flex flex-column"
            >New<span>Submission</span></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- End profile -->

    <v-divider></v-divider>

    <!-- Navigation -->
    <v-list nav class="mt-7">
      <v-list-item-group v-model="selectedItem" active-class="active-class">
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :class="mini ? 'mx-5' : 'mx-7'"
          :to="item.path"
          link
        >
          <v-tooltip color="black" right :disabled="!mini">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon large>{{ item.icon }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>{{ item.title }}</span>
          </v-tooltip>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <!-- End navigation -->

    <!-- Close -->
    <template v-slot:append>
      <v-list nav>
        <v-list-item
          class="my-5"
          :class="mini ? 'mx-5' : 'mx-7'"
          @click="mini = !mini"
          link
        >
          <v-tooltip color="black" right :disabled="!mini">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon large>{{
                  mini ? "mdi-arrow-collapse-right" : "mdi-arrow-collapse-left"
                }}</v-icon>
              </v-list-item-icon>
            </template>
            <span>Dropdown</span>
          </v-tooltip>

          <v-list-item-content>
            <v-list-item-title>Dropdown</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          class="my-5"
          :class="mini ? 'mx-5' : 'mx-7'"
          link
          @click="logout"
        >
          <v-tooltip color="black" right :disabled="!mini">
            <template v-slot:activator="{ on, attrs }">
              <v-list-item-icon v-bind="attrs" v-on="on">
                <v-icon large>mdi-logout-variant</v-icon>
              </v-list-item-icon>
            </template>
            <span>Log Out</span>
          </v-tooltip>

          <v-list-item-content>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </template>
    <!-- End close -->
  </v-navigation-drawer>
</template>

<script>
import user from "@/api/user";
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard-outline", path: "/" },
        {
          title: "History",
          icon: "mdi-text-box-search-outline",
          path: "/history",
        },
        { title: "Team", icon: "mdi-account-hard-hat-outline", path: "/team" },
        { title: "Files", icon: "mdi-folder-open-outline", path: "/files" },
      ],
      drawer: true,
      mini: true,
      selectedItem: 0,
    };
  },
  methods: {
    async logout() {
      try {
        await user.logout();
        this.$store.commit("resetState");
        this.$router.push({ name: "Login" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.active-class-profile {
  color: white !important;
}
.active-class {
  background-color: black !important;
  color: white !important;
}
</style>
