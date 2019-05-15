<template>
  <div id="about-us">
    <v-container>
      <div id="about-header">
        <h2>ABOUT US</h2>
      </div>
      <v-layout row>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Help Desk Services</p>
          <p>badge accesses, employee terminations, phone issues, customer service</p>
        </v-flex>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">System Administrator</p>
          <p>server patching, hacking & cyber attacks, assures our systems are current</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Network Administrator</p>
          <p>oversees firewall switches, cyber attacks, phone systems</p>
        </v-flex>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Development</p>
          <p>full-stack development, can integrate with anybody on anything. Create websites, custom software</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Procurement Analyst</p>
          <p>tracks the trends of profit and loss, funds, tracks all the money</p>
        </v-flex>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Report Writer</p>
          <p>does all kinds of custom reports and automates them if she can. SSRS specialist.</p>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Database Administrator</p>
          <p>oversees all the databases, keeps them efficient and streamlined</p>
        </v-flex>
        <v-flex align-self-center="true" xs1>
          <v-icon size="34px">fab fa-facebook</v-icon>
        </v-flex>
        <v-flex xs5>
          <p class="bolded">Senior IT Project Manager</p>
          <p>manages infrastructure and development</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs"
};
</script>

<style lang="scss" scoped>
#about-us {
  background-color: #2193c7;
  color: white;
  font-size: 16px;
  // border-top-left-radius: 50% 20%;
  border-top-right-radius: 50% 20%;
  border-bottom-left-radius: 50% 20%;
  // border-bottom-right-radius: 50% 20%;
  padding-top: 10rem;
  padding-bottom: 10rem;

  .container {
    width: 61%;
  }

  .bolded {
    font-weight: 500;
    font-size: 20px;
  }

  #about-header {
    text-align: center;
    padding-bottom: 4.5rem;

    h2:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 7%;
      padding-top: 10px;
      border-bottom: 5px dotted whitesmoke;
    }
  }
}
</style>
