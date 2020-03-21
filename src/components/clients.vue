<template>
<b-row class="clientsWrapper">
    <b-col cols="12">
        <div class="mb-3">
            <h2 data-aos="fade-right" class="headerTitle">Our Clients.</h2>
            <hr data-aos="fade-right" data-aos-delay="300" class="underline">
        </div>
    </b-col>
    <b-col data-aos="fade-right" data-aos-delay="50" class="m-auto text-center " cols="6" md="2" o lg="2" offset="1">
        <b-link class="circle-1 circle flexCenter bounce my-3" href="https://www.williamsauction.com" target="_blank">
            <b-img fluid class="clients " src="/img/home/ww-logo.png"></b-img>
        </b-link>
    </b-col>
    <b-col data-aos="fade-right" data-aos-delay="100" class="m-auto text-center" cols="6" md="2" lg="2">
        <b-link class="circle-2 circle flexCenter my-3" href="https://www.auctionnetwork.com/" target="_blank">
            <b-img fluid class="clients" src="/img/home/AN-Logo.png"></b-img>
        </b-link>
    </b-col>
    <b-col data-aos="fade-right" data-aos-delay="150" class="m-auto text-center" cols="6" md="2" lg="2">
        <b-link class="circle-3  circle flexCenter my-3" href="https://www.msionline.com/#/home" target="_blank">
            <b-img fluid class="clients roundedCorner" md="3" src="/img/home/MSILogo1.jpg"></b-img>
        </b-link>
    </b-col>
    <b-col data-aos="fade-right" data-aos-delay="200" id="IPClogo" class="m-auto text-center" cols="6" md="2" offset-md="1" lg="2">
        <b-link class="circle-4 circle flexCenter my-3" href="https://ipropertyclaims.com/#/Home" target="_blank">
            <b-img fluid class="clients roundedCorner" src="/img/home/IPCLogo.png"></b-img>
        </b-link>
    </b-col>
</b-row>
</template>

<script>
export default {
    name: 'clients'

}
</script>

<style scoped>
.roundedCorner {
    border-radius: 30%;
}

.underline {
    width: 10%;
    float: left;
    margin-bottom: .5rem;
    margin-top: .25rem;
    background: #ff5858;
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

.circle {
    width: 130px;
    height: 130px;
    border-radius: 90px;
    -webkit-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 7px -2px rgba(0, 0, 0, 0.3);
    animation-iteration-count: infinite;
    transform-origin: bottom;
    transition: all .3s ease-in;
}

.circle:hover {
    transform: translateY(-6px);
    -webkit-box-shadow: 0px 5px 9px -2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 5px 9px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 12px -2px rgba(0, 0, 0, 0.2);
}

.clientsWrapper {
    margin-top: 8em;
    margin-bottom: 8em;
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

.clients {
    width: 110px;
}
</style>
