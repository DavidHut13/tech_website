<template>
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
                        <i class="flexCenter icon-circle my-5 fas fa-server fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">System Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="200" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle my-5 fas fa-code fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Software Development</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="300" cols="12" md="6" lg="4" class="my-3">
                <b-card>
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle my-5 fas fa-network-wired fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Network Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="100" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle my-5 fas fa-database fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Database Admin</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="200" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle icon my-5 fas fa-desktop fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Procurement</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
            <b-col data-aos="fade-right" data-aos-delay="300" cols="12" md="6" lg="4">
                <b-card class="my-3">
                    <div class="flexCenter">
                        <i class="flexCenter icon-circle icon my-5 fas fa-phone fa-3x"></i>
                    </div>
                    <h4 class="serviceTitle">Help Desk</h4>
                    <p class="text-left servicePara">With an ecommerce solution in your website, your customers can view your storefront through their PC or mobile device at anytime and anywhere they prefer.</p>
                </b-card>
            </b-col>
        </b-row>
</template>

<script>
export default {
    name:'serviceSection'
    
}
</script>

<style scoped>
.ServicesWrapper {
    margin-top: 3em;
    margin-bottom: 6em;
}

.servicePara {
    color: rgb(104, 104, 104);
}

.flexCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
.card:hover {
    -webkit-box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 4px 18px -7px rgba(0, 0, 0, 0.75);
    border-radius: 15px;
}
.icon-circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
    color: white;
}

.card {
    border: none;
}
.underline {
    width: 10%;
    float: left;
    margin-bottom: .5rem;
    margin-top: .25rem;
    background: #ff5858;
}
</style>