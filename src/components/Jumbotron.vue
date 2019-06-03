<template>
  <v-img
    data-aos="fade-in"
    id="jumbotron"
    :gradient="gradient"
    height="600px"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-container fill-height>
      <v-layout id="jumb-content-ctnr" align-center>
        <v-flex text-xs-center>
          <img src="../assets/web_maintenance.png">
        </v-flex>
        <v-flex text-xs-right>
          <h3 class="display-3">
            We create high quality
            <strong>digital solutions.</strong>
          </h3>
          <p>eLoanLogic provides cutting-edge technology solutions to organizations of all sizes. With deep expertise and end-to-end capabilities, we’ll help your business run smarter.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  }
};
</script>

<style lang="scss" scoped>
.display-3 {
  font-size: 3rem !important;
  font-weight: 200;
  color: white;
  @media only screen and (max-width: 768px) {
    //for mobile phones
    font-size: 24px !important;
    text-align: center;
  }
}

#jumb-content-ctnr {
  p {
    font-size: 1.5rem;
    margin-top: 2rem;
    color: white;
    font-weight: 100;
  }
  @media only screen and (max-width: 768px) {
    //for mobile phones
    display: block;
    margin-top: 10rem;
  }

  img {
    @media only screen and (max-width: 768px) {
      //for mobile phones
      width: 102%;
    }
  }
}
</style>


