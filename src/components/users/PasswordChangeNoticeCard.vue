<template>
  <v-card
    class="pa-4 d-flex flex-column justify-center align-center"
    height="100%"
  >
    <p class="text-center mx-15">
      For password change, a confirmation email will be sent to the associated
      email to verify identity and proceed with the respective account change.
      If you didn’t request an account change, please contact customer service.
    </p>
  </v-card>
</template>

<script>
export default {
  name: "PasswordChangeNoticeCard",
};
</script>
