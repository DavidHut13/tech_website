<template>
  <v-container id="keywords-container" fluid>
    <v-layout justify-center row wrap>
      <div>
        <p>Innovative IT Solutions</p>
        <div class="icon-ctn">
          <i class="far fa-lightbulb"></i>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p>Integrative</p>
        <div class="icon-ctn">
          <i class="fas fa-bolt"></i>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p>Collaborative</p>
        <div class="icon-ctn">
          <i class="fas fa-users"></i>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "KeyWords"
};
</script>

<style scoped>
/* #keywords-container {
  background: #195d7d;
  color: white;
} */

.layout div {
  margin: 50px;
  text-align: center;
}

.icon-ctn i {
  border-radius: 50%;
  padding: 30px;
  color: rgba(97, 192, 230, 0.7);
  background: white;
  font-size: 40px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}
</style>
