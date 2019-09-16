<template>
<div>
    <app-header class="navWrapper"></app-header>
    <router-view></router-view>
    <app-footer class="mt-5"></app-footer>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import appFooter from "./components/Footer.vue"

export default {
    data() {
        return {};
    },
    components: {
        appHeader: Header,
        appFooter: appFooter
    },

};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~bootstrap-vue/dist/bootstrap-vue.min.css';
@import 'assets/custom';


</style>
