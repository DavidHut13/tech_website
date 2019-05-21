<template>
  <div id="about-us">
    <v-container>
      <div id="about-header">
        <h2>ABOUT US</h2>
      </div>
      <v-layout justify-space-around row>
        <v-flex class="left-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-star</v-icon>
          </div>
          <div>
            <p class="bolded">Help Desk Services</p>
            <p>badge accesses, employee terminations, phone issues, customer service</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-smile</v-icon>
          </div>
          <div>
            <p class="bolded">System Administrator</p>
            <p>server patching, hacking & cyber attacks, assures our systems are current</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-space-around row>
        <v-flex class="left-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-network-wired</v-icon>
          </div>
          <div>
            <p class="bolded">Network Administrator</p>
            <p>oversees firewall switches, cyber attacks, phone systems</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-wrench</v-icon>
          </div>
          <div>
            <p class="bolded">Development</p>
            <p>full-stack development, can integrate with anybody on anything. Create websites, custom software</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-space-around row>
        <v-flex class="left-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">far fa-clock</v-icon>
          </div>
          <div>
            <p class="bolded">Procurement Analyst</p>
            <p>tracks the trends of profit and loss, funds, tracks all the money</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-phone</v-icon>
          </div>
          <div>
            <p class="bolded">Report Writer</p>
            <p>does all kinds of custom reports and automates them if she can. SSRS specialist.</p>
          </div>
        </v-flex>
      </v-layout>
      <v-layout justify-space-around row>
        <v-flex class="left-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-laptop-code</v-icon>
          </div>
          <div>
            <p class="bolded">Database Administrator</p>
            <p>oversees all the databases, keeps them efficient and streamlined</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-chart-line</v-icon>
          </div>
          <div>
            <p class="bolded">Senior IT Project Manager</p>
            <p>manages infrastructure and development</p>
          </div>
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
  border-top-right-radius: 50% 20%;
  border-bottom-left-radius: 50% 20%;
  padding-top: 6.5rem;
  padding-bottom: 10rem;

  .container {
    width: 61%;
    @media only screen and (max-width: 768px) {
      //for mobile phones
      width: 100%;
    }

    .layout {
      @media only screen and (max-width: 768px) {
        //for mobile phones
        flex-direction: column;
      }

      i {
        margin-right: 1rem;
      }

      .left-section {
        margin-right: 1rem;
        @media only screen and (max-width: 768px) {
          //for mobile phones
          margin-right: 0rem;
        }
      }

      .right-section {
        margin-left: 1rem;
        @media only screen and (max-width: 768px) {
          //for mobile phones
          margin-left: 0rem;
        }
      }
    }

    .flex {
      display: flex;
      .div-icon {
        align-self: center;
      }
    }
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
      border-bottom: 7px dotted #110672;
    }
  }
}
</style>
