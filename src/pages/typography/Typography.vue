<template>
  <div class="ma-4">
    <v-card v-for="[name, cls, style] in classes" :key="name" class="my-4">
      <div :class="[cls, 'pa-4']">{{ name }}</div>
      <div class="text-caption pa-4 pt-0 bg-grey-lighten-4 d-flex">
        <div class="w-50">
          <div class="text-grey">Class</div>
          <div class="font-weight-medium">{{ cls }}</div>
        </div>
        <div class="flex-fill">
          <div class="text-grey">Style</div>
          <div class="font-weight-medium">{{ style }}</div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Typography",
  data: () => ({
    classes: [
      ["Heading 1", "text-h1", "50/70, Paytone One"],
      ["Heading 2", "text-h2", "32/48, Paytone One"],
      ["Heading 3", "text-h3", "24/36, Paytone One"],
      // ["Heading 4", "text-h4"],
      // ["Heading 5", "text-h5"],
      // ["Heading 6", "text-h6"],
      ["Subtitle 1", "text-subtitle-1", "24/36, Roboto"],
      ["Subtitle 2", "text-subtitle-2", "20/30, Roboto"],
      ["Subtitle 3", "text-subtitle-3", "18/27, Roboto"],
      // ["Body 1", "text-body-1"],
      // ["Body 2", "text-body-2"],
      // ["Button", "text-button"],
      // ["Caption", "text-caption"],
      // ["Overline", "text-overline"],
      ["default", "-", "16/24, Roboto"],
    ],
  }),
});
</script>

<style></style>
