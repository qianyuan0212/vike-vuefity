<template>
  <v-app-bar flat class="sologo-header">
    <div class="w-100 d-flex align-center px-4">
      <a href="#">
        <v-img src="@/assets/logo.svg" width="160" height="40" />
      </a>
      <v-spacer />
      <div class="nav">
        <sologo-btn>AI LogoMaker</sologo-btn>
        <sologo-btn>Logo Ideas</sologo-btn>
        <sologo-btn>FAQs</sologo-btn>
      </div>
      <v-spacer />
      <div>
        <sologo-btn size="small">Sign in</sologo-btn>
        <sologo-btn size="small" color="primary" variant="outlined" class="ml-2"
          >Sign up</sologo-btn
        >
      </div>
    </div>
  </v-app-bar>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
@use "/vuetify/styles/settings";
.sologo-header {
  box-shadow: settings.$floated-shadow !important;

  .nav {
    .sologo-btn {
      font-size: 18px;
    }
  }
}
</style>
