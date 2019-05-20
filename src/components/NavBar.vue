<template>
  <v-toolbar id="navbar">
    <company-logo></company-logo>
    <v-spacer></v-spacer>
    <v-toolbar-items class="nav-items">
      <v-btn class="nav-button" @click="scrollToAbout" flat>About Us</v-btn>
      <v-btn class="nav-button" @click="scrollToSell" flat>Services We Offer</v-btn>
      <v-btn class="nav-button" @click="scrollToContact" flat>Contact</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import CompanyLogo from "../components/CompanyLogo";

export default {
  name: "NavBar",
  components: {
    CompanyLogo
  },
  methods: {
    scrollToAbout() {
      document
        .getElementById("about-us")
        .scrollIntoView({ behavior: "smooth" });
    },
    scrollToSell() {
      document.getElementById("we-sell").scrollIntoView({ behavior: "smooth" });
    },
    scrollToContact() {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
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
}
</style>
