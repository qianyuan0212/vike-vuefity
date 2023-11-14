/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import "vuetify/styles";
import "./styles/main.scss";

import "@mdi/font/css/materialdesignicons.css";
import "./iconsets/custom.scss";

// Composables
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import { custom } from "./iconsets/custom";

import { VBtn } from "vuetify/components/VBtn";
import { VMenu } from "vuetify/components/VMenu";
import { VTextField } from "vuetify/components/VTextField";
import { VAutocomplete } from "vuetify/components/VAutocomplete";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  aliases: {
    SologoBtn: VBtn,
    SologoMenu: VMenu,
    SologoTextField: VTextField,
    SologoAutocomplete: VAutocomplete,
  },
  defaults: {
    global: {
      // ripple: false,
    },
    VListItem: {
      ripple: false,
    },
    SologoBtn: {
      elevation: 0,
      style: {
        textTransform: "none",
        letterSpacing: "0",
      },
      class: "sologo-btn",
    },
    SologoMenu: {
      location: "bottom right",
      offset: 8,
      class: "sologo-menu",
    },
    SologoTextField: {
      variant: "solo-filled",
      flat: true,
      rounded: true,
      class: "sologo-text-field",
    },
    SologoAutocomplete: {
      variant: "solo-filled",
      flat: true,
      rounded: true,
      hideNoData: true,
      menuIcon: "",
      menuProps: {
        class: "sologo-autocomplete-menu",
        // offset: 2,
      },
      class: "sologo-autocomplete",
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases: {
      ...aliases,
      generate: "custom:generate",
      sparkle: "custom:sparkle",
      download: "custom:download",
    },
    sets: {
      mdi,
      custom,
    },
  },
  theme: {
    // variations: {
    //   colors: ["primary", "secondary"],
    //   lighten: 3,
    //   darken: 2,
    // },
    themes: {
      light: {
        colors: {
          primary: "#FE6726",
          "primary-lighten-1": "#FDF6EC",
          secondary: "#38C191",
          "gray-light": "#F3F6FB",
          "gray-dark": "#333333",

          error: "#FF1615",
          info: "#2196F3",
          success: "#469B1C",
          warning: "#EB8605",
        },
      },
    },
  },
});
