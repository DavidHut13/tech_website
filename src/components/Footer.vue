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
                    <!-- <b-link href="https://www.facebook.com/AuctionNetwork"><i class="social_icon px-2 fab fa-facebook fa-2x"></i></b-link>
                    <b-link href="https://www.linkedin.com/company/auctionnetwork.com"><i class="social_icon px-2 fab fa-linkedin fa-2x"></i></b-link>
                    <b-link href="https://twitter.com/AuctionNetwork"><i class="social_icon px-2 fab fa-twitter-square fa-2x"></i></b-link>
                    <b-link href="https://www.youtube.com/user/AuctionNetwork"><i class="social_icon px-2 fab fa-youtube fa-2x"></i></b-link> -->
                </div>
            </b-col>
        </b-row>
        <p class="pt-4 text-center">
            helpdesk@eloanLogic.com
            Phone: 817.428.0000
            Address: 6032 Innovation Way, Fort Worth TX, 76244
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
@media screen and (min-width: 768px) {
    .solutionsWrapper {
        border-right: 1px solid black;
    }

}

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
