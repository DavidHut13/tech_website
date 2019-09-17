<template>
<div>
    <app-header id="navbarTop" class="navWrapper"></app-header>
    <router-view></router-view>
    <app-footer class="mt-5"></app-footer>
</div>
</template>

<script>
// Scrolling Effect
$(window).on("scroll", function() {
  if ($(window).scrollTop() >= 300) {
    $(navbar).addClass("navbar-background");
  } else {
    $(navbar).removeClass("navbar-background"); 
  }
});

if (window.addEventListener)
  window.addEventListener("DOMMouseScroll", wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
  var animationInterval = 20; //lower is faster
  var scrollSpeed = 20; //lower is faster

  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function() {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (
        scrollTop <= 0 ||
        scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
        (goUp && step > -1) ||
        (!goUp && step < 1)
      ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step);
    }, animationInterval);
  }
}
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

.navbar-background{
    background:rgba(255, 255, 255, 0.980);
-webkit-box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);
box-shadow: 0px 10px 18px -19px rgba(0,0,0,0.75);

}
</style>
