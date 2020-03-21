<template>
<div>
    <div class="background">
        <b-container>
            <b-row class="landingWrapper">
                <b-col class="mainContentWrapper flexCenter" id="home" cols="12" md="6">
                    <div class="mainTextWrapper">
                        <div>
                            <h1 class="mainSlogan">Logical Solutions</h1>
                            <h3 class="subSlogan">Saving Time & money.</h3>
                        </div>
                        <div class="orangeFont mt-4">
                            <div v-scroll-to="'#services'" class="solutionHeader mr-3">Solutions</div>
                            <div v-scroll-to="'#aboutUs'" class="solutionHeader">About Us</div>
                        </div>
                    </div>
                </b-col>
                <b-col class="mainImageWrapper flexCenter" cols="12" md="6">
                    <b-img class="landingImage" src="/img/home/AdobeStock_213244932.svg" fluid></b-img>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <b-container>
        <service-section></service-section>
        <clients-section></clients-section>
        <b-row>
            <b-col id="aboutUs">
                <b-row class="aboutUsWrapper">
                    <b-col class="aboutWrapper" md="6" cols="12">
                        <div>
                            <div data-aos="fade-right" data-aos-delay="200">
                                <h2 id="aboutHeader" class="headerTitle">Who We Are.</h2>
                            </div>
                            <hr data-aos="fade-right" data-aos-delay="300" id="aboutUnderline" class="underlineAbout">
                            <div data-aos="fade-right" data-aos-delay="100">
                                <p id="aboutPara" class="text-left aboutPara">Doing some work for us "pro bono" will really add to your portfolio i promise it looks a bit empty, try to make everything bigger, for I really like the colour but can you change it I have printed it out, but the animated gif is not moving. We try your eye, but can you change everything? that sandwich needs to be more playful I need a website.</p>
                            </div>
                        </div>
                    </b-col>
                    <b-col id="aboutImg" md="6">
                        <div data-aos="fade-right">
                            <b-img class="serverIllustration" src="/img/home/AdobeStock_213244932_about.svg"></b-img>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

    </b-container>

</div>
</template>

<script>
import serviceSection from '../components/service.vue'
import clientsSection from '../components/clients.vue'

import AOS from 'aos'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    mounted() {
        import('aos').then(AOS => AOS.init({
            once: true,
        }));
    },
    destroyed() {
        AOS.refresh();
    },
    components: {
        serviceSection,
        clientsSection
    }

}
</script>

<style scoped>
@media (max-width:767px) {
    .mainImageWrapper {
        order: 1;
    }

    .landingImage {
        width: 70% !important;
        margin-bottom: -5rem;
    }

    .mainContentWrapper {
        order: 2;
        margin-top: -5rem;
    }

    .aboutWrapper {
        order: 4;
    }

    .aboutImg {
        order: 3;
    }

}

.mainSlogan {
    font-weight: bold;
    color: rgb(27, 27, 27);
}

.subSlogan {
    font-family: 'Montserrat', sans-serif;
    color: #FD7302;
}

.mainImageWrapper {
    margin-top: 6rem;
}

.aboutUsWrapper {
    margin-top: 8em;
    margin-bottom: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.mainImg {
    width: 100%
}

.landingImage {
    width: 100%;
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.serverIllustration {
    width: 100%;
}

.headerTitleWrapper {
    margin-top: 10%;
}

.aboutPara {
    color: rgb(104, 104, 104);
    display: inline-block;
}

.solutionHeader:hover {
    cursor: pointer;
    -webkit-box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
}

.solutionHeader {
    color: #FD7302;
    border: 1px solid #FD7302;
    display: inline-block;
    padding: 7px 20px 7px 20px;
    border-radius: 30px;
    transition: all .1s ease-in;
}

.underline {
    width: 10%;
    float: left;
    margin-bottom: .5rem;
    margin-top: .25rem;
    background: #ff5858;
}

.underlineAbout {
    width: 10%;
    float: left;
    display: block;
    background: #ff5858;
    margin-top: .05rem;
}

.landingWrapper {
    height: 100vh;
}

.smallPara {
    color: rgb(83, 83, 83);
    width: 90%;
    font-size: 1.25em;
}

.headerTitle {
    font-size: 2.5em;
    font-family: 'Montserrat', sans-serif;
}

.orangeBackground {
    background-color: rgb(255, 136, 25);
}

.orangeFont {
    color: #FD7302;
}
</style>
