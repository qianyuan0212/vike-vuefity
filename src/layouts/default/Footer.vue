<template>
  <v-footer class="sologo-footer">
    <div class="contact d-flex align-center">
      <span>Connect with Sologo.Ai</span>
      <v-btn variant="text" density="comfortable" icon="mdi-facebook"></v-btn>
      <v-btn variant="text" density="comfortable" icon="mdi-instagram"></v-btn>
    </div>
    <div class="links d-flex">
      <a href="">Sologoai privacy statement</a>
      <a href="">Terms of use</a>
      <a href="">Supplemental Terms</a>
      <v-spacer />
      <span class="copy">&copy;SologoAi 2023</span>
    </div>
  </v-footer>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.sologo-footer {
  flex: 0 0 auto;
  display: block;
  padding-left: 36px;
  padding-right: 36px;
  padding-top: 18px;
  padding-bottom: 18px;
  margin-top: 20px;
}
.contact {
  font-size: calc(18 / 16) * 1rem;
  color: rgb(var(--v-theme-gray-dark));
  font-family: Oswald;
  font-feature-settings: "kern" on;
  font-weight: 500;

  span {
    margin-right: 10px;
  }
  .v-btn {
    margin-left: 2px;
  }
}
.links {
  margin-top: 16px;
  font-size: calc(14 / 16) * 1rem;
  line-height: 1rem;
  font-feature-settings: "kern" on;
  a {
    color: rgb(var(--v-theme-gray-dark));
    margin-right: 1.5em;
    text-decoration: none;
  }
}
</style>
