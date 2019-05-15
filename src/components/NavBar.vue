<template>
  <v-toolbar id="navbar">
    <company-logo></company-logo>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click="scrollToAbout" flat>About Us</v-btn>
      <v-btn @click="scrollToSell" flat>Services We Offer</v-btn>
      <v-btn @click="scrollToContact" flat>Contact</v-btn>
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
