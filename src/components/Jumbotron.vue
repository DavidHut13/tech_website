<template>
  <v-jumbotron
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
          <h3
            class="display-3"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos.</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      // gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  }
};
</script>

<style lang="scss" scoped>
.display-3 {
  font-size: 33px !important;
  @media only screen and (max-width: 768px) {
    //for mobile phones
    font-size: 24px !important;
    text-align: center;
  }
}

#jumb-content-ctnr {
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


