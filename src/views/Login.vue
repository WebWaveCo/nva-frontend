<template>
  <v-main>
    <v-container class="login-container d-flex justify-center align-md-center">
      <div class="login-card d-flex">
        <v-row no-gutters>
          <v-col cols="12" md="6">
            <login-form />
          </v-col>
          <v-col
            class="image-style d-flex justify-center align-center"
            cols="12"
            md="6"
          >
            <p
              class="text-center white--text font-weight-black text-h4 text-md-h3 text-lg-h2"
              style="line-height: 1.3"
            >
              Roofers,<br />
              We Increase<br />
              <span class="font-weight-black" style="color: #dea328"
                >YOUR Revenue</span
              >
            </p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>
<!-- ... -->

<script>
import LoginForm from "@/components/login/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.login-container {
  min-width: 100vw;
  min-height: 100vh;
}

.login-card {
  height: auto;
  width: 90vw;
  margin: 0 auto;
  border-radius: 11px;
  overflow: hidden;
}

.image-style {
  width: 100%;
  height: 100%;
  background-image: url("@/assets/login-background.png");
  background-size: cover;
  background-position: center center;
  margin-top: 25px;
  height: 200px;
  border-radius: 10px;
}

.image-font {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (min-width: 768px) {
  .login-card {
    min-height: 80vh;
    width: 90vw;
  }
  .image-style {
    margin-top: 0px;
    border-radius: 0px;
    height: 100%;
  }
}

@media (min-width: 992px) {
  .login-card {
    width: 70dvw;
  }
}
</style>
