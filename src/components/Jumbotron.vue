<template>
  <v-img
    data-aos="fade-in"
    id="jumbotron"
    :gradient="gradient"
    position="bottom"
    height="700px"
    dark
    src="https://images.pexels.com/photos/1029606/pexels-photo-1029606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  >
    <v-container fill-height>
      <v-layout id="jumb-content-ctnr" align-center>
        <v-flex text-xs-right>
          <h3 class="display-3">
            We create high quality
            <strong>digital solutions.</strong>
          </h3>
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
      // gradient: "to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)"
    };
  }
};
</script>

<style lang="scss" scoped>
.display-3 {
  font-size: 3.5rem !important;
  font-weight: 200;
  color: black;
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
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    @media only screen and (max-width: 768px) {
      //for mobile phones
      width: 102%;
    }
  }
}
</style>


