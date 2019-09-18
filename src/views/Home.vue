<template>
<div>
    <div class="background">
        <b-container fluid>
            <b-row>
                <b-col id="home" class="mainContentWrapper" cols="12">
                    <vue-particles class="particleCanvas" color="#000000" :particleOpacity="0.3" :particlesNumber="80" shapeType="circle" :particleSize="4" linesColor="#060606" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="130" :moveSpeed="3" :hoverEffect="true" :clickEffect="false">
                    </vue-particles>
                    <div class="mainTextWrapper mb-5">
                        <div>
                            <h1 class="text-left mainSlogan">Creating Logic</h1>
                            <h6 class="text-left subSlogan">Doing some work for us.</h6>
                        </div>
                        <div class="orangeFont boldFont mt-4">
                            <div v-scroll-to="'#services'" class="solutionHeader mr-3">Our Service's</div>
                            <div v-scroll-to="'#aboutUs'" class="solutionHeader">About Us</div>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
    <b-container>
        <b-row>
            <b-col id="aboutUs">
                <b-row class="clientsWrapper">
                    <b-col cols="12">
                        <div class="mb-3">
                            <h2 data-aos="fade-right" class="headerTitle">Our Clients.</h2>
                            <hr data-aos="fade-right" data-aos-delay="300" class="underline">
                        </div>
                    </b-col>
                    <b-col data-aos="fade-right" data-aos-delay="50" class="m-auto text-center " cols="6" md="2" o lg="2" offset="1">
                            <b-link class="circle-1 circle flexCenter bounce  my-3" href="https://www.williamsauction.com" target="_blank">
                                <b-img fluid class="clients " src="/img/home/ww-logo.png"></b-img>
                            </b-link>
                    </b-col>
                    <b-col data-aos="fade-right" data-aos-delay="100" class="m-auto text-center" cols="6" md="2" lg="2">
                        <b-link class="circle-2 circle flexCenter bounce my-3" href="https://www.auctionnetwork.com/" target="_blank">
                            <b-img fluid class="clients" src="/img/home/AN-Logo.png"></b-img>
                        </b-link>
                    </b-col>
                    <b-col data-aos="fade-right" data-aos-delay="150" class="m-auto text-center" cols="6" md="2" lg="2">
                        <b-link class="circle-3  circle flexCenter bounce  my-3" href="https://www.msionline.com/#/home" target="_blank">
                            <b-img fluid class="clients roundedCorner" md="3" src="/img/home/MSILogo1.jpg"></b-img>
                        </b-link>
                    </b-col>
                    <b-col data-aos="fade-right" data-aos-delay="200" id="IPClogo" class="m-auto text-center" cols="6" md="2" offset-md="1" lg="2">
                        <b-link class="circle-4 circle flexCenter bounce  my-3" href="https://ipropertyclaims.com/#/Home" target="_blank">
                            <b-img fluid class="clients roundedCorner" src="/img/home/IPCLogo.png"></b-img>
                        </b-link>
                    </b-col>
                </b-row>
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
                            <b-img class="serverIllustration" src="/img/home/databaseGraphic.png"></b-img>
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <b-row id="services" class="ServicesWrapper">
            <b-col cols="12" class=headerTitleWrapper>
                <div class="text-left">
                    <h2 data-aos="fade-right" class="headerTitle">What We Offer.</h2>
                    <hr data-aos="fade-right" data-aos-delay="50" class="underline">
                </div>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="100" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle mt-5 mb-3 fas fa-server fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">System Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="200" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle mt-5 mb-3 fas fa-code fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Software Development</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="300" cols="12" md="6" lg="4" class="my-3">
                <b-card>
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle mt-5 mb-3 fas fa-network-wired fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Network Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="100" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle mt-5 mb-3 fas fa-database fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Database Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="200" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle icon mt-5 mb-3 fas fa-desktop fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Procurement</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="300" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle icon mt-5 mb-3 fas fa-phone fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Help Desk</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
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

}
</script>

<style scoped>
#particles-js {
    width: 100%;
    height: 100%;
    z-index: 1;
}

.clientsWrapper {
    margin-top: 8em;
    margin-bottom: 8em;
}

.aboutUsWrapper {
    margin-top: 8em;
    margin-bottom: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.ServicesWrapper {
    margin-top: 3em;
    margin-bottom: 6em;
}

.icon-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    color: white;
}

.mainImg {
    width: 100%
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}

.clientsWrapper {
    display: flex;
    justify-content: space-between;
}

.circle {
    width: 130px;
    height: 130px;
    border-radius: 90px;
    -webkit-box-shadow: 4px 6px 11px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 6px 11px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 4px 6px 11px -5px rgba(0, 0, 0, 0.75);
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
}

.roundedCorner {
    border-radius: 30%;
}

.circle-1 {
    animation-delay: .25s;
}

.circle-2 {
    animation-delay: .5s;
}

.circle-3 {
    animation-delay: .75s;
}

.circle-4 {
    animation-delay: 1s;
}

.bounce {
    animation-name: bounce;
    animation-timing-function: ease-in-out;
}

@keyframes bounce {
    0% {
        transform: translateY(0);
    }

    25% {
        transform: translateY(6px);
    }

    50% {
        transform: translateY(-7px);
    }

    75% {
        transform: translateY(6px);
    }

    100% {
        transform: translateY(0);
    }
}

.clients {
    width: 110px;
}

.serverIllustration {
    width: 100%;
}

.headerTitleWrapper {
    margin-top: 10%;
}

.card {
    border: none;
}

.servicePara {
    color: rgb(104, 104, 104);
}

.aboutPara {
    color: rgb(104, 104, 104);
    display: inline-block;
}

.solutionHeader:hover {
    color: white;
    cursor: pointer;
    background-image: linear-gradient(to right, #f6d365, #f7be49, #f9a72f, #fb8f16, #fd7302);
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
}

.solutionHeader {
    display: inline;
    padding: 7px 20px 7px 20px;
    border-radius: 30px;
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

.card:hover {
    -webkit-box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    border-radius: 15px;
}

.background {
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.mainContentWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.smallPara {
    color: rgb(83, 83, 83);
    width: 90%;
    font-size: 1.25em;
}

.mainSlogan {
    font-weight: bold;
    font-size: 3em;
}

.subSlogan {
    font-size: 2em;
    font-family: 'Montserrat', sans-serif;
}

@media screen and (min-width: 520px) {
    .mainSlogan {
        font-size: 4em;
    }

    .subSlogan {
        font-size: 2.75em;
    }

    .boldFont {
        font-size: 1.5em !important;
    }
}

.boldFont {
    font-weight: 700;
    font-size: 1.15em;
    font-family: 'Roboto', sans-serif;
}

.mainTextWrapper {
    z-index: 10;
}

.headerTitle {
    font-size: 2.5em;
    font-family: 'Montserrat', sans-serif;
}

.particleCanvas {
    position: absolute;
}

.orangeBackground {
    background-color: rgb(255, 136, 25);
}

.orangeFont {
    color: #FD7302;
}
</style>
