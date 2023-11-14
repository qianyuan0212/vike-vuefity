<template>
  <v-sheet class="px-10 pb-15">
    <h2>Button</h2>
    <div>
      <sologo-btn
        color="primary"
        size="small"
        prepend-icon="$sparkle"
        class="mr-4"
        >Small button</sologo-btn
      >
      <sologo-btn color="primary" size="small" variant="outlined" class="mr-4"
        >Small button</sologo-btn
      >
      <sologo-btn color="gray-dark" size="small" class="mr-4"
        >Small button</sologo-btn
      >
      <sologo-btn color="gray-light" size="small" class="mr-4"
        >Small button</sologo-btn
      >
      <sologo-btn size="small" class="mr-4">Small button</sologo-btn>

      <sologo-btn size="small" floated class="mr-4">Small button</sologo-btn>
    </div>
    <div class="mt-4">
      <sologo-btn color="primary" append-icon="$generate" class="mr-4"
        >Mid button</sologo-btn
      >
      <sologo-btn
        color="primary"
        append-icon="mdi-download"
        variant="outlined"
        class="mr-4"
        >Mid button</sologo-btn
      >
      <sologo-btn color="gray-dark" append-icon="mdi-arrow-right" class="mr-4"
        >Mid button</sologo-btn
      >
      <sologo-btn color="gray-light" append-icon="mdi-chevron-down" class="mr-4"
        >Mid button</sologo-btn
      >
      <sologo-btn class="mr-4">Mid button</sologo-btn>
      <sologo-btn floated class="mr-4">Mid button</sologo-btn>
    </div>
    <div class="mt-4">
      <sologo-btn color="primary" size="large" class="mr-4"
        >Large button</sologo-btn
      >
      <sologo-btn color="primary" size="large" variant="outlined" class="mr-4"
        >Large button</sologo-btn
      >
      <sologo-btn color="gray-dark" size="large" class="mr-4"
        >Large button</sologo-btn
      >
      <sologo-btn color="gray-light" size="large" class="mr-4"
        >Large button</sologo-btn
      >
      <sologo-btn class="mr-4">Large button</sologo-btn>
      <sologo-btn floated class="mr-4">Large button</sologo-btn>
    </div>

    <h2>Label</h2>
    <div>
      <v-chip class="ma-2" label> Label </v-chip>

      <v-chip class="ma-2" color="primary" closable label>
        <v-icon start icon="mdi-account-circle-outline"></v-icon>
        John Leider
      </v-chip>
    </div>

    <h2>Menu</h2>
    <div>
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
        </v-list>
      </sologo-menu>
    </div>

    <h2>TextField</h2>
    <div style="max-width: 500px">
      <sologo-text-field
        model-value="SologoAi"
        label="Name"
        autocomplete="new-password"
        append-inner-icon="mdi-arrow-right"
        @click:append-inner="toggleMarker"
      ></sologo-text-field>
      <sologo-text-field
        model-value="SologoAi"
        label="Name"
        variant="solo"
        autocomplete="new-password"
        append-inner-icon="mdi-arrow-right"
        @click:append-inner="toggleMarker"
      ></sologo-text-field>
      <sologo-text-field
        model-value="SologoAi"
        label="Name"
        variant="solo"
        class="outlined"
        autocomplete="new-password"
        append-inner-icon="mdi-arrow-right"
        @click:append-inner="toggleMarker"
      ></sologo-text-field>
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
    </div>

    <h2>AutoComplete</h2>
    <div style="max-width: 500px">
      <sologo-autocomplete
        v-model="designFor"
        :items="designForItems"
        label="Design for"
        autocomplete="new-password"
      >
        <template v-slot:append-inner>
          <v-icon icon="mdi-arrow-right" @click="toggleMarker"></v-icon>
        </template>
      </sologo-autocomplete>
    </div>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      brandname: "",

      menuItems: [
        { title: "JPG", handler: () => console.log("JPG") },
        { title: "PNG", handler: () => console.log("PNG") },
        { title: "PDF", handler: () => console.log("PDF") },
        { title: "SVG", handler: () => console.log("SVG") },
        { title: "Zip All", handler: () => console.log("Zip All") },
      ],

      designFor: undefined,
      designForItems: [
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
    toggleMarker(e) {
      console.log(e);
      console.log("toggleMarker");
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 40px 0 20px;
}
</style>
