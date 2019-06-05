<template>
  <v-toolbar @mouseover="mouseOver" id="navbar">
    <h1>eLoanLogic.</h1>
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
    },
    mouseOver() {
      document.getElementById("navbar").style.opacity = "1";
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

#navbar h1 {
  font-family: "Kaushan Script", cursive;
  font-size: 2rem;
}

#navbar:hover {
  background: white;
}

.nav-items button {
  font-weight: 400;
  font-size: 1.2rem;
  color: black;
}
</style>
