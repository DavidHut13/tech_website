<template>
  <v-container id="keywords-container" fluid>
    <v-layout justify-center row wrap>
      <div>
        <p class="p-title">Innovative IT Solutions</p>
        <div class="icon-ctn">
          <i class="far fa-lightbulb"></i>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p class="p-title">Integrative</p>
        <div class="icon-ctn">
          <i class="fas fa-bolt"></i>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>
        <p class="p-title">Collaborative</p>
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
.layout div {
  margin: 50px;
  text-align: center;
}

p {
  font-size: 18px;
  color: #333;
}

.p-title {
  font-size: 28px;
}

.icon-ctn i {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  color: rgba(97, 192, 230, 0.7);
  background: white;
  font-size: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
}

.icon-ctn i::before {
  position: relative;
  top: calc(50% - 14px);
}
</style>
