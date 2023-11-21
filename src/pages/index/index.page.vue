<template>
  <v-container fluid class="first-section" :class="'first-section-' + name">
    <v-row>
      <v-spacer />
      <v-col cols="12" md="9" lg="7" xl="6" class="text-center">
        <h1 class="text-h1">Ai native Logo genaerator</h1>
        <p class="text-subtitle-1">
          Get inspired from our thousands of logo design strategic model and get
          high quolity logos in minutes
        </p>
        <p class="search-area">
          <sologo-text-field
            :model-value="brandname"
            placeholder="Enter your brand name"
            variant="solo"
            class="floated"
            autocomplete="new-password"
            @click:append-inner="toggleMarker"
          >
            <template v-slot:append-inner>
              <sologo-btn color="primary" append-icon="$generate"
                >Get Started</sologo-btn
              >
            </template>
          </sologo-text-field>
        </p>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>

  <v-divider
    :thickness="20"
    color="gray-light"
    class="border-opacity-100"
  ></v-divider>

  <v-container class="second-section" :class="'second-section-' + name">
    <v-row>
      <v-col cols="12" md="5">
        <div class="info">
          <h2 class="text-h2">the most easy and powerful logo maker</h2>
          <ul class="key-list">
            <li>Ai copilot design assistant</li>
            <li>Thousands of logo design strategic model</li>
            <li>Commercial permmit</li>
          </ul>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <div class="banner">
          <v-img src="@/assets/images/index-banner.webp" width="88%" />
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-divider
    :thickness="20"
    color="gray-light"
    class="border-opacity-100"
  ></v-divider>
</template>

<script setup>
import { useDisplay } from "vuetify";

// Destructure only the keys you want to use
const { name } = useDisplay();
</script>

<script>
// Custom Export
export const documentProps = {
  // This title and description will override the defaults
  title: "About SpaceX",
  description: "Our mission is to explore the galaxy.",
};
</script>

<style lang="scss" scoped>
@media (min-width: 1440px) {
  .v-container:not(.v-container--fluid) {
    max-width: 1400px;
  }
}

.first-section {
  padding-top: 84px;
  padding-bottom: 118px;
  .text-h1 {
    text-transform: capitalize !important;
  }
  .text-subtitle-1 {
    color: rgb(var(--v-theme-gray));
    margin: 30px 50px 70px;
  }
  .search-area {
    width: 60%;
    margin: 0 auto;
  }
  &-sm .search-area {
    width: 75%;
  }
  &-xs .search-area {
    width: 90%;
  }
}

.second-section {
  .info {
    padding-top: 20px;

    .text-h2 {
      text-transform: capitalize !important;
    }

    .key-list {
      list-style: none;
      padding: 0;
      margin: 0;
      margin-top: 1rem;
      font-size: calc(20 / 16) * 1rem;
      line-height: 1.8;
      font-weight: 700;
      color: rgb(var(--v-theme-gray));

      li {
        display: flex;
        align-items: center;
        &::before {
          content: "•";
          font-size: 0.8em;
          margin-left: 0.4em;
          margin-right: 0.7em;
        }
      }
    }
  }

  .banner {
    padding-top: 20px;
    margin-bottom: -16px;
    max-height: 465px;
    overflow: hidden;
  }

  &-sm,
  &-xs {
    .info {
      padding-bottom: 0px;
    }
  }
}
</style>
