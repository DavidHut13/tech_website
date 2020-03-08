<template>
<b-container class="navWrapper" fluid>
    <b-row>
        <b-col>
            <b-navbar id="navbar" fixed="top" toggleable="md">
                <router-link to="/">
                    <b-img fluid class="logo-img" src="/img/TestLogo.png" alt="logo"> </b-img>
                </router-link>
                <b-button variant="none" class="contactBtn ml-auto"  @click="showModal">Contact Us</b-button>
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
        showModal() {
            this.$bvModal.show('contact-modal')
        },
        hideModal() {
            this.$bvModal.hide('contact-modal')
        },
    }

}
</script>

<style scoped>
.navbar {
    height: 70px;
}

.hide {
    background: red;
}

.logo-img {
    width: 150px;
}

.modal {
    overflow: scroll;
}

.contactBtn {
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
    border: none;
    color: white;
    background-image: linear-gradient(to right, #f6d365, #f7be49, #f9a72f, #fb8f16, #fd7302);
    border: none;
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
}

.contactBtn:hover {
    color:white;
    -webkit-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 13px -4px rgba(0, 0, 0, 0.75);
}
.contactBtn:focus{
    box-shadow:none;
}

.nav-item.contactBtn a.nav-link {
    color: white;
    position: relative;
}

.nav-item.contactBtn a.nav-link:hover {
    color: white;
}
</style>
