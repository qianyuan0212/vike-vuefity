<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>

  <CommonComponents />
</template>

<script setup>
import Counter from "./Counter.vue";
import CommonComponents from "./CommonComponents.vue";
</script>

<script>
// Custom Export
export const documentProps = {
  // This title and description will override the defaults
  title: "About SpaceX",
  description: "Our mission is to explore the galaxy.",
};
</script>
