<template>
<b-container>
    <b-modal size="lg" centered hide-footer hide-header id="my-modal">
        <b-row>
            <b-col cols="5">
                <b-card class="text-center shadow-sm">
                    <i class="fa-lg fas fa-map-marker-alt orange"></i>
                    <h5>Address</h5>
                    <p>6032 Innovation Way, Fort Worth TX, 76244</p>
                </b-card>
                <b-card class="text-center shadow-sm mt-2">
                    <i class="fa-lg far fa-envelope-open orange"></i>
                    <h5>Email</h5>
                    <p>helpdesk@eloanLogic.com</p>
                </b-card>
                <b-card class="text-center shadow-sm mt-2">
                    <i class="fa-lg fas fa-phone orange"></i>
                    <h5>Phone</h5>
                    <p>817-428-0000</p>
                </b-card>
            </b-col>
            <b-col cols="7">
                <div class="text-center my-4">
                    <img class="logo-img" src="/img/TestLogo.png" alt="logo">
                </div>

                <h2 class="text-left contactHeader">Contact Us.</h2>
                <h6 class="contactPara">What can we do to help?</h6>
                <b-form-group>
                    <b-form-input class="my-2 inputBox" placeholder="First Name" v-model="senderName"></b-form-input>
                    <b-form-input class="my-3 inputBox" placeholder="Email" v-model="senderEmail" id="input-default"></b-form-input>
                    <b-form-textarea class="inputBox" v-model="senderMessage" placeholder="Your Message" rows="3" max-rows="6"></b-form-textarea>
                </b-form-group>
                <div class="text-center">
                    <b-button block @click="showModal" class="sendBtn">Send</b-button>
                </div>
            </b-col>
        </b-row>
    </b-modal>
</b-container>
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
            this.$bvModal.show('my-modal')
        },
        hideModal() {
            this.$bvModal.show('my-modal')
        }
    }

}
</script>

<style scoped>
.card.login-card {
    border: none;
}



.inputBox {
    border-radius: 5px;
    -webkit-box-shadow: inset 0px 0px 16px -12px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset 0px 0px 16px -12px rgba(0, 0, 0, 0.75);
    box-shadow: inset 0px 0px 16px -12px rgba(0, 0, 0, 0.75);
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

.cancelBtn {
    background-image: linear-gradient(to left, #fd3869 0%, #fa908c 100%);
    border: none;
    padding: 5px 20px 5px 20px;
    position: relative;
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);

}

.sendBtn {
    background-image: linear-gradient(to right, #f6d365, #f7be49, #f9a72f, #fb8f16, #fd7302);
    border: none;
    padding: 5px 20px 5px 20px;
    position: relative;
    -webkit-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 7px 29px -16px rgba(0, 0, 0, 0.75);

}

.sendBtn:hover {
    -webkit-box-shadow: 0px 3px 18px -5px rgba(255, 102, 0, 1);
    -moz-box-shadow: 0px 3px 18px -5px rgba(255, 102, 0, 1);
    box-shadow: 0px 3px 18px -5px rgba(255, 102, 0, 1);
    border-color: #fb8f16;
}
</style>
