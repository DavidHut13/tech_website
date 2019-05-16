<template>
  <v-container id="we-sell">
    <div>
      <h2>WHAT WE OFFER</h2>
    </div>
    <v-layout row>
      <v-flex align-self-center="true" xs3>
        <div>
          <p>www.LoanData.com (3 to 1)</p>
          <p>From the moment the property is received all the way until it’s sold. Shovel snow, mow yards, etc. Asset (property) tracker.</p>
        </div>
      </v-flex>
      <v-flex xs4>
        <div>
          <img
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt
          >
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <div>
          <img
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt
          >
        </div>
      </v-flex>
      <v-flex align-self-center="true" xs3>
        <div>
          <p>IPC</p>
          <p>custom software that we created to track insurance claims. Look at photos, check out damages. Upload any document you want, can communicate it, talk to various insurance companies.</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex align-self-center="true" xs3>
        <div>
          <p>Bidding Software</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur hic error quae voluptatum dignissimos asperiores dolorem velit, sunt rem!</p>
        </div>
      </v-flex>
      <v-flex xs4>
        <div>
          <img
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "WeSell"
};
</script>

<style lang="scss" scoped>
.layout {
  justify-content: center;
}

#we-sell {
  div {
    text-align: center;

    h2 {
      font-weight: 400;
      font-size: 2.4rem;
      letter-spacing: 5px;
      margin-bottom: 4rem;
      margin-top: 4rem;
    }
  }
}

img {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
