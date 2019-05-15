<template>
  <v-app>
    <nav-bar></nav-bar>
    <button @click="topFunction()" id="myBtn" title="Go to top">
      <i class="fas fa-arrow-up"></i>
    </button>
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
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    },

    topFunction() {
      document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
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
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #4cc1f6; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 50%; /* Rounded corners */
  font-size: 18px; /* Increase font size */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}
</style>
