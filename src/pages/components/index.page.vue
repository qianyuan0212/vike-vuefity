<template>
  <Components />
</template>

<script setup>
import Components from "./Components.vue";
</script>

<script>
// Custom Export
export const documentProps = {
  // This title and description will override the defaults
  title: "About SpaceX",
  description: "Our mission is to explore the galaxy.",
  // layout: "other",
};
</script>

<style></style>
