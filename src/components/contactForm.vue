<template>
<b-modal size="lg" centered hide-footer hide-header id="contact-modal">
    <b-container>
        <b-row>
            <b-col class="infoCards" cols="12" md="5">
                <b-card class="text-center">
                    <i class="fa-lg fas fa-map-marker-alt orange"></i>
                    <h5>Address</h5>
                    <p>1234 Innovate, Austin TX, 78652</p>
                </b-card>
                <b-card class="text-center mt-2">
                    <i class="fa-lg far fa-envelope-open orange"></i>
                    <h5>Email</h5>
                    <p>help@eLogic.com</p>
                </b-card>
                <b-card class="text-center mt-2">
                    <i class="fa-lg fas fa-phone orange"></i>
                    <h5>Phone</h5>
                    <p>867.530.9000</p>
                </b-card>
            </b-col>
            <b-col cols="12" md="7">
                <div class="text-center my-4">
                    <img class="logo-img" src="/img/TestLogo.png" alt="logo">
                </div>
                <h2 class="text-left contactHeader">Contact Us.</h2>
                <h6 class="contactPara">What can we do to help?</h6>
                <b-form-group>
                    <b-form-input class="my-2 inputBox" placeholder="First Name" v-model="senderName"></b-form-input>
                    <b-form-input class="my-3 inputBox" placeholder="Email" v-model="senderEmail" id="input-default"></b-form-input>
                    <b-form-textarea class="inputBox" v-model="senderMessage" placeholder="Your Message" rows="3" no-resize></b-form-textarea>
                </b-form-group>
                <div class="text-right">
                    <b-button @click="showModal" class="sendBtn mx-1">Send</b-button>
                </div>
            </b-col>
        </b-row>
    </b-container>
</b-modal>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            userId: '',
            password: '',
            senderName: '',
            senderEmail: '',
            senderMessage: '',

        }
    },
    computed: {
        validation() {
            if (this.userId.length != 0) {
                return this.userId.length > 4 && this.userId.length < 13
            }

        }
    },
    methods: {
        showModal() {
            this.$bvModal.show('contact-modal')
        },
        hideModal() {
            this.$bvModal.hide('contact-modal')
        }
    }

}
</script>

<style scoped>
@media screen and (max-width: 768px) {
    .infoCards {
        display: none
    }
}

.modal {
    border: none;
}

.logo-img {
    max-width: 220px;
}

.card.login-card {
    border: none;
}

.inputBox {
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 10px -9px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 10px -9px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 10px -9px rgba(0, 0, 0, 0.75);

}

.form-control:focus {
    border-color: rgba(255, 102, 0, 1);
    -webkit-box-shadow: 0px 0px 25px -10px rgba(255, 102, 0, 1);
    -moz-box-shadow: 0px 0px 25px -10px rgba(255, 102, 0, 1);
    box-shadow: 0px 0px 20px -10px rgba(255, 102, 0, 1);
}

.orange {
    color: rgba(255, 102, 0, 1);
}

.contactHeader {
    font-family: 'Fjalla One', sans-serif;
}

.contactPara {
    font-family: 'Montserrat', sans-serif;
}

.sendBtn {
    background-image: linear-gradient(to right, #f6d365, #f7be49, #f9a72f, #fb8f16, #fd7302);
    padding: 5px 25px 5px 25px;
    border: none;
    border-radius: 20px;
    position: relative;
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
}

.sendBtn:hover {
    -webkit-box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.2);
}

.card {
    transition: all .1s ease-in;
    -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.4);
}

.card:hover {
    transform: translateY(-3px);
    -webkit-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 8px -2px rgba(0, 0, 0, 0.3);
}
</style>
