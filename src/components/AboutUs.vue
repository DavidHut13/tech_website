<template>
  <div data-aos="fade-in" id="about-us">
    <v-container>
      <div id="about-header">
        <h2>ABOUT US</h2>
      </div>
      <v-layout justify-space-around row>
        <v-flex class="left-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-star fa-fw</v-icon>
          </div>
          <div>
            <p class="bolded">Help Desk Services</p>
            <p>badge accesses, employee terminations, phone issues, customer service</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-smile fa-fw</v-icon>
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
            <v-icon size="34px">fas fa-network-wired fa-fw</v-icon>
          </div>
          <div>
            <p class="bolded">Network Administrator</p>
            <p>oversees firewall switches, cyber attacks, phone systems</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-wrench fa-fw</v-icon>
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
            <v-icon size="34px">far fa-clock fa-fw</v-icon>
          </div>
          <div>
            <p class="bolded">Procurement Analyst</p>
            <p>tracks the trends of profit and loss, funds, tracks all the money</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-phone fa-fw</v-icon>
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
            <v-icon size="34px">fas fa-laptop-code fa-fw</v-icon>
          </div>
          <div>
            <p class="bolded">Database Administrator</p>
            <p>oversees all the databases, keeps them efficient and streamlined</p>
          </div>
        </v-flex>
        <v-flex class="right-section" align-self-center="true" xs12 md6>
          <div class="div-icon">
            <v-icon size="34px">fas fa-chart-line fa-fw</v-icon>
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
  background: #55d6be;
  // font-size: 16px;
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media only screen and (max-width: 768px) {
    //for mobile phones
    border-radius: 0%;
    padding-bottom: 0;
  }
  .container {
    width: 61%;
    background: white;
    color: black;
    border-radius: 1rem;
    border: 1px solid #eceff1;
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
    @media only screen and (max-width: 768px) {
      //for mobile phones
      width: 100%;
    }

    .layout {
      @media only screen and (max-width: 768px) {
        //for mobile phones
        flex-direction: column;
      }

      .div-icon {
        margin-right: 1rem;
      }

      i {
        color: #100856;
        background: #ff8552;
        margin: 0 auto;
        // padding: 1rem;
        padding: 10px;
        color: white;
        // display: inline-block;
        width: 4rem;
        // text-align: center;
        // font-size: 2rem;
        border-radius: 50%;
      }

      .left-section {
        margin-right: 1rem;
        margin-top: 1rem;
        @media only screen and (max-width: 768px) {
          //for mobile phones
          margin-right: 0rem;
        }
      }

      .right-section {
        margin-left: 1rem;
        margin-top: 1rem;
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
    color: black;
    letter-spacing: 2px;
  }

  p {
    font-size: 14px;
    font-weight: 300;
  }

  #about-header {
    text-align: center;
    padding-bottom: 4.5rem;
    letter-spacing: 4px;
    font-size: 2.5rem;

    h2 {
      font-weight: 300;
    }

    h2:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 7%;
      padding-top: 10px;
      border-bottom: 7px dotted #2e5eaa;
    }
  }
}
</style>
