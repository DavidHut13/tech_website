<template>
  <v-toolbar id="navbar">
    <company-logo></company-logo>
    <v-spacer></v-spacer>
    <v-toolbar-items class="nav-items hidden-sm-and-down">
      <v-btn
        v-for="(item, index) in menu"
        :key="index"
        @click="scrollToContent(item.id)"
        flat
        class="nav-button"
      >{{item.title}}</v-btn>
    </v-toolbar-items>

    <v-menu class="hidden-md-and-up">
      <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
      <v-list>
        <v-list-tile v-for="(item, index) in menu" :key="index">
          <v-list-tile-content>
            <v-list-tile-title @click="scrollToContent(item.id)">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
import CompanyLogo from "../components/CompanyLogo";

export default {
  name: "NavBar",
  components: {
    CompanyLogo
  },
  data() {
    return {
      menu: [
        { id: "about-us", title: "About Us" },
        { id: "we-sell", title: "Services We Offer" },
        { id: "contact", title: "Contact" }
      ]
    };
  },
  methods: {
    scrollToContent(id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
#navbar {
  position: fixed;
  z-index: 999;
  background: transparent;
  box-shadow: none;
}

.nav-items button {
  font-weight: 400;
  font-size: 1.2rem;
  color: black;
}
</style>
