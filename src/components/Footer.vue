<template>
<div>
    <b-container>
        <b-row>
            <b-col cols="4" offset="2" offset-md="2" md="2">
                <div class="text-left">
                    <h4 class="pt-4 footerHeader">About</h4>
                    <p class="footerLink">Contact</p>
                    <p class="footerLink">Clients</p>
                    <p class="footerLink">Support</p>
                </div>
            </b-col>
            <b-col cols="4" md="3" class="solutionsWrapper">
                <div class="text-left">
                    <h4 class="pt-4 footerHeader">Solutions</h4>
                    <p class="footerLink">Help Desk</p>
                    <p class="footerLink">Admin Solutions</p>
                    <p class="footerLink">Development</p>
                </div>
            </b-col>
            <b-col class="mb-5 text-center" cols="12"  md="3">
                <div class=" SocialLinksFooter">
                    <div>
                        <img class="pt-4 pb-4 footerLogo" src="/img/TestLogo.png">
                    </div>
                </div>
            </b-col>
        </b-row>
        <p class="pt-4 text-center">
            help@eLogic.com
            Phone: 867.530.9000
            Address: 1234 Innovate, Austin TX, 78652
        </p>
    </b-container>

</div>
</template>

<script>
export default {
    name: "appFooter",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
/* @media screen and (min-width: 768px) {
    .solutionsWrapper {
        border-right: 1px solid black;
    }

} */

.bottomFooter {
    color: rgb(41, 39, 39);
    height: 100%;
    width: 100%;
    font-size: 1.8vh;

}

.footerLine {
    color: black;
}

.footerLink {
    margin-bottom: 0;
}

.footerHeader {
    color: rgb(253, 130, 30);
}

.footerLogo {
    width: 170px;
    margin: 0;
}

.social_icon {
    color: black;
}

.social_icon:hover {
    color: rgb(85, 84, 84);
}
</style>
