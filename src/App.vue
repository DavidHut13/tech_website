<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn bottom right fixed fab @click="topFunction()" id="myBtn" v-on="on">
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </template>
      <span>Return to top</span>
    </v-tooltip>
    <v-content>
      <jumbo-tron></jumbo-tron>
      <key-words></key-words>
      <about-us></about-us>
      <we-sell></we-sell>
      <contact-form></contact-form>
    </v-content>
    <footer>
      <app-footer></app-footer>
    </footer>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import JumboTron from "./components/Jumbotron";
import KeyWords from "./components/KeyWords";
import AppFooter from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WeSell from "./components/WeSell";
import ContactForm from "./components/ContactUs";

export default {
  name: "App",
  components: {
    NavBar,
    JumboTron,
    KeyWords,
    AppFooter,
    AboutUs,
    WeSell,
    ContactForm
  },
  data() {
    return {
      //
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("navbar").style.background = "white";
        document.getElementById("navbar").style.boxShadow =
          "0 4px 8px 0 rgba(0, 0, 0, 0.3)";
        document.getElementById("navbar").style.opacity = "0.7";
      } else {
        document.getElementById("myBtn").style.display = "none";
        document.getElementById("navbar").style.background = "transparent";
        document.getElementById("navbar").style.boxShadow = "none";
        document.getElementById("navbar").style.opacity = "1";
      }
    },

    topFunction() {
      document
        .getElementById("jumbotron")
        .scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

#myBtn {
  display: none;
  z-index: 99;
  border: none;
  background-color: rgba(76, 193, 246, 0.8);
  color: white;
  cursor: pointer;
  font-size: 18px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
</style>
