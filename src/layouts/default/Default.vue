<template>
  <v-app>
    <default-header />

    <default-view>
      <slot />
    </default-view>

    <default-footer />
  </v-app>
</template>

<script setup>
import DefaultHeader from "./Header.vue";
import DefaultView from "./View.vue";
import DefaultFooter from "./Footer.vue";
</script>
