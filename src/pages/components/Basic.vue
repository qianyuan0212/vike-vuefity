<template>
  <div class="ma-4">
    <v-card class="pa-4 my-4">
      <v-card-title class="mb-4">Button</v-card-title>
      <v-card-text>
        <div class="my-2">
          <sologo-btn
            color="primary"
            size="small"
            prepend-icon="$sparkle"
            class="mr-4 mb-4"
            >Small button</sologo-btn
          >
          <sologo-btn
            color="primary"
            size="small"
            variant="outlined"
            class="mr-4 mb-4"
            >Small button</sologo-btn
          >
          <sologo-btn color="gray-dark" size="small" class="mr-4 mb-4"
            >Small button</sologo-btn
          >
          <sologo-btn color="gray-light" size="small" class="mr-4 mb-4"
            >Small button</sologo-btn
          >
          <sologo-btn size="small" class="mr-4 mb-4">Small button</sologo-btn>

          <sologo-btn size="small" floated class="mr-4 mb-4"
            >Small button</sologo-btn
          >
        </div>
        <div class="my-2">
          <sologo-btn color="primary" append-icon="$generate" class="mr-4 mb-4"
            >Mid button</sologo-btn
          >
          <sologo-btn
            color="primary"
            append-icon="mdi-download"
            variant="outlined"
            class="mr-4 mb-4"
            >Mid button</sologo-btn
          >
          <sologo-btn
            color="gray-dark"
            append-icon="mdi-arrow-right"
            class="mr-4 mb-4"
            >Mid button</sologo-btn
          >
          <sologo-btn
            color="gray-light"
            append-icon="mdi-chevron-down"
            class="mr-4 mb-4"
            >Mid button</sologo-btn
          >
          <sologo-btn class="mr-4 mb-4">Mid button</sologo-btn>
          <sologo-btn floated class="mr-4 mb-4">Mid button</sologo-btn>
        </div>
        <div class="my-2">
          <sologo-btn color="primary" size="large" class="mr-4 mb-4"
            >Large button</sologo-btn
          >
          <sologo-btn
            color="primary"
            size="large"
            variant="outlined"
            class="mr-4 mb-4"
            >Large button</sologo-btn
          >
          <sologo-btn color="gray-dark" size="large" class="mr-4 mb-4"
            >Large button</sologo-btn
          >
          <sologo-btn color="gray-light" size="large" class="mr-4 mb-4"
            >Large button</sologo-btn
          >
          <sologo-btn class="mr-4 mb-4">Large button</sologo-btn>
          <sologo-btn floated class="mr-4 mb-4">Large button</sologo-btn>
        </div>
      </v-card-text>
    </v-card>

    <v-card class="pa-4 my-4">
      <v-card-title class="mb-4">Label</v-card-title>
      <v-card-text>
        <v-chip class="sologo mr-2" label> Label </v-chip>
        <v-chip class="mr-2" color="primary" closable label>
          <v-icon start icon="mdi-account-circle-outline"></v-icon>
          John Leider
        </v-chip></v-card-text
      >
    </v-card>

    <v-card class="pa-4 my-4">
      <v-card-title class="mb-4">Menu</v-card-title>
      <v-card-text>
        <sologo-btn
          id="menu-activator"
          size="small"
          color="gray-light"
          append-icon="mdi-chevron-down"
          style="margin-left: 200px"
          >Download</sologo-btn
        >
        <sologo-menu activator="#menu-activator">
          <v-list>
            <v-list-item
              v-for="(item, index) in menuItems"
              :key="index"
              :value="index"
            >
              <v-list-item-title @click="item.handler">
                <div class="d-flex justify-space-between align-center">
                  <span>{{ item.title }}</span>
                  <span
                    class="visible-hover d-flex align-center ml-5"
                    style="font-weight: 500"
                    >Download
                    <v-icon icon="mdi-download" size="20" class="ml-1"></v-icon>
                  </span>
                </div>
              </v-list-item-title>
            </v-list-item>
          </v-list> </sologo-menu
      ></v-card-text>
    </v-card>

    <v-card class="pa-4 my-4">
      <v-card-title class="mb-4">TextField</v-card-title>
      <v-card-text>
        <div style="max-width: 500px">
          <sologo-text-field
            v-model="brandname"
            label="Name"
            class="my-4 append-inside"
            autocomplete="new-password"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-arrow-right"
                @click="appendClickHandler(brandname)"
              ></v-btn>
            </template>
          </sologo-text-field>
          <sologo-text-field
            v-model="brandname2"
            label="Name"
            variant="solo"
            class="my-4"
            autocomplete="new-password"
          >
            <template v-slot:append-inner>
              <v-btn
                variant="text"
                icon="mdi-arrow-right"
                @click="appendClickHandler(brandname2)"
              ></v-btn>
            </template>
          </sologo-text-field>
          <sologo-text-field
            v-model="brandname3"
            label="Name"
            variant="solo"
            class="outlined my-4"
            autocomplete="new-password"
          >
            <template v-slot:append-inner>
              <v-btn
                variant="text"
                icon="mdi-arrow-right"
                @click="appendClickHandler(brandname3)"
              ></v-btn>
            </template>
          </sologo-text-field>
          <sologo-text-field
            v-model="brandname4"
            placeholder="Enter your brand name"
            variant="solo"
            class="floated my-4"
            autocomplete="new-password"
          >
            <template v-slot:append-inner>
              <sologo-btn
                color="primary"
                append-icon="$generate"
                @click="appendClickHandler(brandname4)"
                >Get Started</sologo-btn
              >
            </template>
          </sologo-text-field>
        </div></v-card-text
      >
      <v-card-title class="mb-4">AutoComplete</v-card-title>
      <v-card-text>
        <div style="max-width: 500px">
          <sologo-autocomplete
            v-model="business"
            :items="businessItems"
            label="Design for"
            autocomplete="new-password"
            class="append-inside"
            @input="inputHandler"
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-arrow-right"
                @click="appendClickHandler2"
              ></v-btn>
            </template>
          </sologo-autocomplete>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandname: "SologoAi",
      brandname2: "SologoAi",
      brandname3: "SologoAi",
      brandname4: "",

      menuItems: [
        { title: "JPG", handler: () => console.log("JPG") },
        { title: "PNG", handler: () => console.log("PNG") },
        { title: "PDF", handler: () => console.log("PDF") },
        { title: "SVG", handler: () => console.log("SVG") },
        { title: "Zip All", handler: () => console.log("Zip All") },
      ],

      business: undefined,
      businessItems: [
        "California",
        "Colorado",
        "Florida",
        "Georgia",
        "Texas",
        "Wyoming",
      ],
    };
  },
  methods: {
    appendClickHandler(val) {
      console.log("appendClickHandler", val);
    },
    appendClickHandler2() {
      console.log("appendClickHandler2", this.business);
    },
    inputHandler(e) {
      this.business = e.target.value;
    },
  },
};
</script>

<style lang="scss" scoped></style>
