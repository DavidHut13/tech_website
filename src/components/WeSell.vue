<template>
  <v-container data-aos="slide-left" id="we-sell">
    <div>
      <h2>WHAT WE OFFER</h2>
    </div>
    <v-layout row>
      <v-flex align-self-center="true" xs12 lg6>
        <div>
          <p class="title">www.LoanData.com (3 to 1)</p>
          <p>From the moment the property is received all the way until it’s sold. Shovel snow, mow yards, etc. Asset (property) tracker.</p>
        </div>
      </v-flex>
      <v-flex xs12 lg6>
        <div>
          <img
            src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt
          >
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 lg6>
        <div id="middle-pic">
          <img
            src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt
          >
        </div>
      </v-flex>
      <v-flex align-self-center="true" xs12 lg6>
        <div>
          <p class="title">IPC</p>
          <p>custom software that we created to track insurance claims. Look at photos, check out damages. Upload any document you want, can communicate with it, talk to various insurance companies.</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex align-self-center="true" xs12 lg6>
        <div>
          <p class="title">Bidding Software</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel pariatur hic error quae voluptatum dignissimos asperiores dolorem velit, sunt rem!</p>
        </div>
      </v-flex>
      <v-flex xs12 lg6>
        <div>
          <img
            src="https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
.layout.row {
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
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

    #middle-pic {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    .title {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 200;
      letter-spacing: 2px;
    }

    p {
      font-size: 16px;
    }

    img {
      @media only screen and (max-width: 768px) {
        width: 24rem;
      }
    }
  }
}

img {
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
