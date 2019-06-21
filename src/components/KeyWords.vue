<template>
  <v-container id="keywords-container" fluid>
    <v-layout justify-center row wrap>
      <div>
        <p class="p-title">Innovative</p>
        <div class="icon-ctn">
          <i class="far fa-lightbulb"></i>
        </div>
        <p>Advanced IT Solutions</p>
      </div>
      <div>
        <p class="p-title">Integrative</p>
        <div class="icon-ctn">
          <i class="fas fa-bolt"></i>
        </div>
        <p>Business + Technology</p>
      </div>
      <div>
        <p class="p-title">Collaborative</p>
        <div class="icon-ctn">
          <i class="fas fa-users"></i>
        </div>
        <p>Expectations Meet Standards</p>
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
  font-weight: 300;
}

.p-title {
  font-size: 28px;
  letter-spacing: 1px;
  font-weight: 400;
}

.icon-ctn i {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  color: rgba(46, 94, 170, 0.7);
  background: white;
  font-size: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}

.icon-ctn i::before {
  position: relative;
  top: calc(50% - 14px);
}
</style>
