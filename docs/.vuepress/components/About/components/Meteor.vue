<template>
  <div class="space">
    <img src="/about/bg.jpeg" class="bg" />
    <div :class="'star star' + item" v-for="item in 10" :key="item"></div>
  </div>
</template>

<script>
export default {
  name: "Meteo",
};
</script>

<style lang='stylus' scoped>
.space {
  position: fixed;
  width: 100%;
  height: 100%;
  // background: #071021 url('/about/bg.jpeg') top center / cover no-repeat;
  // opacity: 0.5;
  // filter: grayscale(80%);
  background: #071021;
  z-index: -1;

  .bg {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    opacity: 0.1;
    filter: grayscale(90%);
    z-index: -1;
  }

  .star {
    position: relative;
    top: -50px;
    left: 200px;
    display: block;
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0.3);
    transform-origin: 100% 0;
    animation: star-ani 3s infinite ease-out;
    opacity: 0;
    z-index: 2;

    &:after {
      content: '';
      display: block;
      top: -10px;
      left: 200px;
      border: 0px solid #fff;
      border-width: 0px 90px 3px 90px;
      border-color: transparent transparent transparent #fff;
      box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.1);
      transform: rotate(-45deg) translate3d(1px, 3px, 0);
      transform-origin: 0% 100%;
      animation: shooting-ani .5s infinite ease-out;
    }

    &.star1 {
      top: -10px;
      left: 60%;
      animation-delay: 0.5s;

      &:after {
        animation-delay: 0.5s;
      }
    }

    &.star2 {
      top: 100px;
      left: 50%;
      animation-delay: 0s;

      &:after {
        animation-delay: 0;
      }
    }

    &.star3 {
      top: -10px;
      left: 40%;
      animation-delay: 1.5s;

      &:after {
        animation-delay: 1.5s;
      }
    }

    &.star4 {
      top: 100px;
      left: 80%;
      animation-delay: 1.5s;

      &:after {
        animation-delay: 1.5s;
      }
    }

    &.star5 {
      top: 200px;
      left: 85%;
      animation-delay: 1.5s;

      &:after {
        animation-delay: 1.5s;
      }
    }

    &.star6 {
      top: -10px;
      left: 55%;
      animation-delay: 1.5s;

      &:after {
        animation-delay: 1.5s;
      }
    }

    &.star7 {
      top: 100px;
      left: 30%;
      animation-delay: 3s;

      &:after {
        animation-delay: 3s;
      }
    }

    &.star8 {
      top: -10px;
      left: 20%;
      animation-delay: 3s;

      &:after {
        animation-delay: 3s;
      }
    }

    &.star9 {
      top: 100px;
      left: 75%;
      animation-delay: 4s;

      &:after {
        animation-delay: 4s;
      }
    }

    &.star10 {
      top: 200px;
      left: 60%;
      animation-delay: 5s;

      &:after {
        animation-delay: 5s;
      }
    }
  }
}

@keyframes star-ani {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate3d(0, 0, 0);
    -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
    -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
  }

  50% {
    opacity: .15;
    transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
    -webkit-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
    -moz-transform: scale(1) rotate(0) translate3d(-300px, 300px, 0);
  }

  100% {
    opacity: 0;
    transform: scale(1) rotate(0) translate3d(-400px, 300px, 0);
    -webkit-transform: scale(1) rotate(0) translate3d(-400px, 400px, 0);
    -moz-transform: scale(1) rotate(0) translate3d(-400px, 400px, 0);
  }
}
</style>
