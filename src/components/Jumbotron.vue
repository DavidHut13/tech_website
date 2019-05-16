<template>
  <v-jumbotron
    id="jumbotron"
    :gradient="gradient"
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3
            class="display-3"
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos.</h3>
        </v-flex>
        <v-flex text-xs-center>
          <img src="../assets/web_maintenance.png" alt>
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

<style scoped>
.display-3 {
  font-size: 33px !important;
}
</style>
