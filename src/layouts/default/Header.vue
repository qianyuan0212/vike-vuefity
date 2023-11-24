<template>
  <v-app-bar flat class="sologo-header">
    <div class="w-100 d-flex align-center px-4">
      <a href="#">
        <v-img src="@/assets/logo.svg" width="160" height="40" />
      </a>
      <v-spacer />
      <v-tabs :model-value="tabValue" color="primary" align-tabs="center">
        <v-tab :value="1" to="/logomaker">AI LogoMaker</v-tab>
        <v-tab :value="2" to="/logoideas">Logo Ideas</v-tab>
        <v-tab :value="3" to="/faqs">FAQs</v-tab>
      </v-tabs>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultHeader",
  data() {
    return {
      tabValue: 1,
    };
  },
});
</script>

<style lang="scss" scoped>
@use "/vuetify/styles/settings";
.sologo-header {
  box-shadow: settings.$floated-shadow !important;
}
</style>
