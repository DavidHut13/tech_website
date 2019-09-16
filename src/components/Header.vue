<template>
<b-container class="navWrapper" fluid>
    <b-row>
        <b-col >
            <b-navbar   toggleable="xl">
                <b-navbar-brand  href="#">
                    <router-link to="/"> <img class="logo-img" src="/img/TestLogo.png" alt="logo"></router-link>
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <!-- <router-link class="mx-3" to="/"  tag="b-nav-item">Home</router-link>
                        <router-link class="mx-3" to="/"  tag="b-nav-item">Services</router-link>
                        <router-link class="mx-3" to="/"   tag="b-nav-item">About</router-link> -->
                        
                    </b-navbar-nav>
                    <b-button class="contactBtn ml-auto" to="/" @click="showModal">Contact Us</b-button>
                </b-collapse>
            </b-navbar>
           <contact-form></contact-form>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import contactForm from './contactForm.vue'
export default {
    name: "Header",
    data() {
        return {

        }
    },
    components: {
        contactForm,
    },
    methods: {
        showModal(){
            this.$bvModal.show('my-modal')
        },
        hideModal(){
            this.$bvModal.show('my-modal')
        }
    }
}
</script>

<style>
img {
    width: 200px;
}

.modal{
      overflow: scroll;
}
.contactBtn{
    background-image: linear-gradient(to right, #f6d365, #f7be49, #f9a72f, #fb8f16, #fd7302);
    border-radius: 20px;
    border:none;
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
}
.btn.contactBtn{
    border-radius:20px;
    padding: 8px 20px 8px 20px;
    border:none;
}
.contactBtn:hover {
    -webkit-box-shadow: 0px 3px 28px -5px rgba(255, 102, 0, 1);
    -moz-box-shadow: 0px 3px 28px -5px rgba(255, 102, 0, 1);
    box-shadow: 0px 3px 28px -5px rgba(255, 102, 0, 1);
    border:none;
}

.nav-item.contactBtn a.nav-link {
    color: white;
    position: relative;
}

.nav-item.contactBtn a.nav-link:hover {
    color: white;
}


</style>
