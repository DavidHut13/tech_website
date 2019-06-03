<template>
  <v-app>
    <nav-bar></nav-bar>
    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <v-btn bottom right fixed fab @click="topFunction()" id="myBtn" v-on="on">
          <i class="fas fa-arrow-up"></i>
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
}

#myBtn {
  display: none; /* Hidden by default */
  // position: fixed; /* Fixed/sticky position */
  // bottom: 20px; /* Place the button at the bottom of the page */
  // right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: rgba(76, 193, 246, 0.8);
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  // padding: 15px; /* Some padding */
  // border-radius: 50%; /* Rounded corners */
  font-size: 18px; /* Increase font size */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  // width: 55px;
}
</style>
