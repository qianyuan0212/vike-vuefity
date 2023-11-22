<template>
  <div class="first-section">
    <v-container fluid>
      <v-row>
        <v-spacer />
        <v-col cols="12" md="9" lg="7" xl="6" class="text-center">
          <h1 class="text-h1">Ai native Logo genaerator</h1>
          <p class="text-subtitle-1">
            Get inspired from our thousands of logo design strategic model and
            get high quolity logos in minutes
          </p>
          <p class="search-area">
            <sologo-text-field
              v-model="brandname"
              placeholder="Enter your brand name"
              variant="solo"
              class="floated"
              autocomplete="new-password"
            >
              <template v-slot:append-inner>
                <sologo-btn
                  color="primary"
                  append-icon="$generate"
                  @click="getStarted"
                  >Get Started</sologo-btn
                >
              </template>
            </sologo-text-field>
          </p>
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </div>

  <div class="second-section">
    <v-container>
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
  </div>
</template>

<script setup>
// import { useDisplay } from "vuetify";
// const { name } = useDisplay();
// ！！！ 因为是服务器端渲染，所以不能使用display.name，只能用css的meida query
// 如果修改了vuetify的media query断点，那么这里也要修改
</script>

<script>
// Custom Export
export const documentProps = {
  // This title and description will override the defaults
  title: "About SpaceX",
  description: "Our mission is to explore the galaxy.",
};

export default {
  name: "IndexPage",
  data() {
    return {
      brandname: "",
    };
  },
  methods: {
    getStarted() {
      console.log("getStarted", this.brandname);
      // this.$router.push({ name: "LogoIdeas", query: { brandname: this.brandname } });
    },
  },
};
</script>

<style lang="scss" scoped>
@media (min-width: 1440px) {
  .v-container:not(.v-container--fluid) {
    max-width: 1400px;
  }
}

.first-section {
  padding-top: 284px;
  padding-bottom: 118px;
  margin-bottom: 20px;
  margin-top: -200px; // 防止下拉漏出灰色背景
  background: rgb(var(--v-theme-surface));
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
}

@media only screen {
  // all screen
}
@media (max-width: 599.98px) {
  // xs
  .first-section .search-area {
    width: 90%;
  }
}
@media (min-width: 600px) and (max-width: 959.98px) {
  // sm
  .first-section .search-area {
    width: 75%;
  }
}
@media (min-width: 960px) and (max-width: 1279.98px) {
  // md
}
@media (min-width: 1280px) and (max-width: 1919.98px) {
  // lg
}
@media (min-width: 1920px) and (max-width: 2559.98px) {
  // xl
}
@media (min-width: 2560px) {
  // xxl
}

.second-section {
  // margin-bottom: 20px;
  background: rgb(var(--v-theme-surface));
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

@media (max-width: 959.98px) {
  // sm
  .second-section .info {
    padding-bottom: 0px;
  }
}
</style>
