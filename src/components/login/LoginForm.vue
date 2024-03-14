<template>
  <v-container class="login-form-container">
    <img style="max-width: 80%" src="@/assets/logo.svg" alt="Logo" />

    <p class="text-center mt-10 mb-6" style="font-size: 30px; line-height: 1.2">
      Our interest is
      <br />
      your interest.
    </p>

    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation @submit="login">
        <v-text-field
          v-model="email"
          :rules="[rules.required, rules.email]"
          label="E-mail address"
          outlined
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.required]"
          label="Password"
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
        <v-checkbox v-model="rememberMe" label="Remember me"></v-checkbox>
        <v-alert v-if="loginError" type="error" dense text>
          {{ loginError }}
        </v-alert>
        <v-btn
          type="submit"
          class="login-button"
          :disabled="!valid"
          x-large
          block
        >
          Sign in
        </v-btn>
      </v-form>
    </v-card-text>
  </v-container>
</template>

<script>
import user from "@/api/user.js";
export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    email: "",
    password: "",
    loginError: "",
    rememberMe: false,
    showPassword: false,
    rules: {
      required: (value) => !!value || "This field is required.",
      email: (value) => /.+@.+\..+/.test(value) || "Invalid email.",
    },
  }),
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        try {
          const data = {
            email: this.email,
            password: this.password,
            remember: this.rememberMe,
          };
          this.valid = false;
          const response = await user.login(data);
          if (response.meta.code === 200) {
            this.valid = true;
            const token = response.response.user.authentication_token;
            localStorage.setItem("authToken", token);
            this.$router.push({ name: "Dashboard" });
          } else {
            this.loginError = "Invalid password or email.";
            this.valid = true;
          }
        } catch (error) {
          this.loginError = "Sign in failed. Please try again.";
          this.valid = true;
        }
      }
    },
  },
};
</script>

<style>
.login-form-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  padding: 15% 5%;
}

@media (min-width: 992px) {
  .login-form-container {
    padding: 15%;
  }
}

.login-button {
  background-color: #2b2c30 !important;
  color: white !important;
  text-transform: none;
}

.login-button:disabled {
  background-color: grey !important;
}

@media (min-width: 768px) {
  .login-form-container {
    border-radius: 0px;
  }
}
</style>
