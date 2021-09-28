<template>
  <div class="cow">
    <div :class="'cloud cloud-' + item" v-for="item in 3">
      <div :class="'cloud-mass-' + sitem" v-for="sitem in 3"></div>
    </div>

    <div class="container">
      <div class="cow-body">
        <div class="body">
          <div class="udder"></div>
          <div class="arms arm-left"></div>
          <div class="arms arm-right"></div>
          <div :class="'spot-' + item" v-for="item in 4"></div>
        </div>
        <div class="horns horn-left"></div>
        <div class="horns horn-right"></div>
        <div class="ears ear-left"></div>
        <div class="ears ear-right"></div>
        <div class="eyes eye-left"></div>
        <div class="eyes eye-right"></div>
        <div class="mouth"></div>
        <div class="nose"></div>
        <div :class="'teats teat-' + item" v-for="item in 3"></div>
        <div class="foot foot-left"></div>
        <div class="foot foot-right"></div>
        <div class="wing wing-front-1"></div>
        <div class="wing wing-front-2"></div>
        <div class="wing wing-back-1"></div>
        <div class="wing wing-back-2"></div>
        <div class="guitar">
          <div class="guitar-head"></div>
          <div class="guitar-tuners-1"></div>
          <div class="guitar-tuners-2"></div>
          <div class="guitar-neck"></div>
          <div class="guitar-body"></div>
          <div class="guitar-hole"></div>
          <div class="guitar-bridge"></div>
          <div :class="'guitar-string guitar-string-' + item" v-for="item in 4"></div>
        </div>
      </div>
      <div class="note note-1">♩</div>
      <div class="note note-2">♪</div>
      <div class="note note-3">♫</div>
      <div class="note note-4">♬</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cow"
};
</script>

<style lang="stylus" scoped>
.cloud {
  position: absolute;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.1));

  &.cloud-1 {
    top: 15%;
    animation: cloud 20s linear infinite reverse -15s;
  }

  &.cloud-2 {
    bottom: 10%;
    animation: cloud 24s linear infinite reverse -16s;
  }

  &.cloud-3 {
    top: 25%;
    animation: cloud 32s linear infinite reverse -10s;
  }

  .cloud-mass-1 {
    height: 100px;
    width: 100px;
    background: #fff;
    border-radius: 50%;
  }

  .cloud-mass-2 {
    position: absolute;
    top: -66px;
    left: 38px;
    width: 152px;
    height: 166px;
    background: #fff;
    border-radius: 50% 50% 0 10px;
  }

  .cloud-mass-3 {
    position: absolute;
    top: -28px;
    left: 128px;
    width: 128px;
    height: 128px;
    background: #fff;
    border-radius: 50%;
  }
}

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .cow-body {
    position: relative;
    height: 300px;
    width: 300px;
    border-radius: 50%;
    animation: body 500ms infinite linear;
    z-index: 99;

    .body {
      position: absolute;
      bottom: 0;
      right: 0;
      height: 100%;
      width: 100%;
      background: #fff;
      border: 3px solid #262626;
      border-radius: 50%;
      overflow: hidden;

      .udder {
        position: absolute;
        right: -30px;
        bottom: -30px;
        height: 180px;
        width: 180px;
        background: #f2d5e0;
        border-radius: 50%;
        border: 3px solid #f0a2c3;
        transform: rotate(-30deg);
      }

      .arms {
        position: absolute;
        background: #fff;
        border-radius: 50%;
        border: 3px solid #262626;
        z-index: 3;

        &.arm-left {
          left: 116px;
          top: 142px;
          width: 35px;
          height: 100px;
          border-color: #262626 #262626 transparent #262626;
          transform: rotate(55deg);
        }

        &.arm-right {
          left: 255px;
          top: 100px;
          height: 90px;
          width: 35px;
          border-color: transparent #262626 #262626 #262626;
          transform: rotate(21deg);
          transform-origin: center;
          animation: armRight 500ms infinite linear;
        }
      }

      .spot-1 {
        position: absolute;
        top: 50px;
        left: 20px;
        width: 30px;
        height: 40px;
        background: #262626;
        border-radius: 50%;

        &:after {
          content: '';
          position: absolute;
          left: -30px;
          top: 20px;
          width: 40px;
          height: 50px;
          background: #262626;
          border-radius: 30%;
        }
      }

      .spot-2 {
        position: absolute;
        top: 135px;
        left: -10px;
        width: 30px;
        height: 40px;
        background: #262626;
        border-radius: 50%;

        &:after {
          content: '';
          position: absolute;
          top: 30px;
          left: 5px;
          width: 30px;
          height: 60px;
          background: #262626;
          border-radius: 40%;
          transform: rotate(-10deg);
        }
      }

      .spot-3 {
        position: absolute;
        top: 158px;
        left: 25px;
        width: 10px;
        height: 15px;
        background: #262626;
        border-radius: 40%;
      }

      .spot-4 {
        position: absolute;
        top: 180px;
        left: 36px;
        width: 25px;
        height: 35px;
        background: #262626;
        border-radius: 30px 50px 20px 60px / 30px 60px 20px 80px;
      }
    }

    .horns {
      position: absolute;
      width: 40px;
      height: 40px;
      background: #fff;
      border: 4px solid #262626;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-radius: 4px;

      &.horn-left {
        top: 6px;
        left: 70px;
        transform: skew(25deg, 25deg);
        animation: hornLeft 500ms infinite linear;
      }

      &.horn-right {
        top: -16px;
        left: 150px;
        transform: rotate(50deg) skew(25deg, 25deg);
        animation: hornRight 500ms infinite linear;
        z-index: -1;
      }
    }

    .ears {
      position: absolute;
      height: 80px;
      width: 20px;
      background: #fff;
      border: 3px solid #262626;
      border-top-color: transparent;
      border-radius: 50%;
      animation-delay: 100ms;

      &.ear-left {
        left: 115px;
        top: 50px;
        transform: rotate(70deg);
        transform-origin: center top;
        animation: earLeft 500ms infinite linear;
        z-index: 3;
      }

      &.ear-right {
        left: 184px;
        top: 12px;
        transform: rotate(-140deg);
        transform-origin: center top;
        animation: earRight 500ms infinite linear;
        z-index: -1;
      }
    }

    .eyes {
      position: absolute;
      width: 12px;
      height: 25px;
      background: #fff;
      border: 3px solid #262626;
      border-top-color: transparent;
      border-radius: 50%;
      z-index: 3;

      &.eye-left {
        top: 40px;
        left: 180px;
        transform: rotate(-80deg);
      }

      &.eye-right {
        top: 18px;
        left: 195px;
        transform: rotate(-70deg);
      }
    }

    .mouth {
      position: absolute;
      top: 65px;
      left: 170px;
      width: 30px;
      height: 20px;
      border: 3px solid;
      border-color: transparent transparent #262626 transparent;
      border-radius: 50%;
      transform: rotate(-15deg);

      &:after {
        content: '';
        position: absolute;
        left: 8px;
        top: 14px;
        width: 70px;
        height: 20px;
        border: 3px solid;
        border-color: transparent transparent #262626 #262626;
        border-radius: 50%;
      }
    }

    .nose {
      position: absolute;
      top: 20px;
      left: 240px;
      width: 85px;
      height: 60px;
      background: #f2d5e0;
      border: 3px solid #f0a2c3;
      border-radius: 25px 20px 50px 30px / 30px 20px 40px 30px;
      transform: rotate(-25deg);

      &:before, &:after {
        content: '';
        position: absolute;
        top: 5px;
        width: 6px;
        height: 13px;
        background: #262626;
        border-radius: 50%;
        transform: rotate(20deg) translate(40px);
      }

      &:before {
        left: 0;
      }

      &:after {
        left: 12px;
      }
    }

    .teats {
      position: absolute;
      height: 70px;
      background: #f2d5e0;
      border: 3px solid #f0a2c3;
      border-top-color: transparent;
      border-radius: 50%;
      transform-origin: center center;

      &.teat-1 {
        bottom: -25px;
        left: 195px;
        width: 18px;
        transform: rotate(-40deg);
        animation: teat1 500ms infinite linear;
      }

      &.teat-2 {
        bottom: 5px;
        left: 230px;
        width: 25px;
        transform: rotate(-45deg);
        animation: teat2 500ms infinite linear;
      }

      &.teat-3 {
        bottom: 40px;
        left: 265px;
        width: 20px;
        transform: rotate(-50deg);
        animation: teat3 500ms infinite linear;
      }
    }

    .foot {
      position: absolute;
      width: 30px;
      height: 70px;
      background: #fff;
      border: 3px solid #262626;
      border-radius: 50%;
      transform: rotate(10deg);

      &.foot-left {
        bottom: -45px;
        left: 85px;
        border-top-color: transparent;
        animation: footLeft 500ms infinite linear;
      }

      &.foot-right {
        bottom: -35px;
        left: 156px;
        animation: footRight 500ms infinite linear;
        z-index: -1;
      }
    }

    .wing {
      position: absolute;
      background: #fff;
      border: 3px solid #262626;
      border-radius: 50%;
      animation-delay: -210ms;

      &.wing-front-1 {
        top: -30px;
        left: -20px;
        width: 50px;
        height: 100px;
        border-bottom-color: transparent;
        transform: rotate(-5deg);
        animation: wingFront1 500ms infinite linear;
        z-index: -1;
      }

      &.wing-front-2 {
        top: 48px;
        left: -46px;
        width: 45px;
        height: 70px;
        transform: rotate(55deg);
        border-top-color: transparent;
        animation: wingFront2 500ms infinite linear;
        z-index: -1;
      }

      &.wing-back-1 {
        top: -30px;
        left: 0;
        width: 40px;
        height: 100px;
        transform: rotate(10deg);
        animation: wingBack1 500ms infinite linear;
        z-index: -2;
      }

      &.wing-back-2 {
        top: 61px;
        left: -35px;
        width: 35px;
        height: 60px;
        transform: rotate(45deg);
        animation: wingBack2 500ms infinite linear;
        z-index: -2;
      }
    }

    .guitar {
      position: absolute;
      top: 120px;
      left: 95px;
      transform: rotate(5deg);

      .guitar-head {
        position: absolute;
        top: 0;
        left: 0;
        width: 35px;
        height: 50px;
        background: #bf9b7a;
        transform: rotate(-83deg);
        border-radius: 10%;
        border: 4px solid #574737;
        box-sizing: border-box;
        z-index: 2;
      }

      .guitar-tuners-1, .guitar-tuners-2 {
        position: absolute;
        width: 10px;
        height: 10px;
        background: #bf9b7a;
        border: 4px solid #574737;
        border-radius: 50%;
        box-sizing: border-box;

        &:after {
          content: '';
          position: absolute;
          left: 20px;
          width: 10px;
          height: 10px;
          background: #bf9b7a;
          border: 4px solid #574737;
          border-radius: 50%;
          box-sizing: border-box;
        }
      }

      .guitar-tuners-1 {
        top: -1px;
        transform: rotate(-4deg);
      }

      .guitar-tuners-2 {
        top: 37px;
        left: -5px;
        transform: rotate(-2deg);
      }

      .guitar-neck {
        position: absolute;
        top: -7px;
        left: 67px;
        width: 22px;
        height: 80px;
        background: #bf9b7a;
        border: 4px solid #574737;
        transform: rotate(-83deg);
        box-sizing: border-box;
        z-index: 2;
      }

      .guitar-body {
        position: absolute;
        left: 142px;
        width: 90px;
        height: 95px;
        background: #bf9b7a;
        border: 4px solid #574737;
        border-radius: 50%;
        box-sizing: border-box;
        transform: rotate(-10deg);

        &:before {
          content: '';
          position: absolute;
          left: -33px;
          width: 50px;
          height: 55px;
          background: #bf9b7a;
          border: 4px solid #574737;
          border-right-color: transparent;
          border-radius: 50%;
          box-sizing: border-box;
          transform: rotate(14deg);
        }
      }

      .guitar-hole {
        position: absolute;
        top: 25px;
        left: 150px;
        width: 40px;
        height: 40px;
        background: #3b3026;
        border-radius: 50%;
      }

      .guitar-bridge {
        position: absolute;
        top: 36px;
        left: 200px;
        width: 12px;
        height: 30px;
        background: #574737;
        transform: rotate(10deg);
      }

      .guitar-string {
        position: absolute;
        width: 1px;
        height: 158px;
        background: #f2dac4;
        transform: rotate(-83deg);
        z-index: 3;
        animation: guitarString 500ms infinite linear;

        &.guitar-string-1 {
          top: -45px;
          left: 121px;
        }

        &.guitar-string-2 {
          top: -42px;
          left: 121px;
        }

        &.guitar-string-3 {
          top: -39px;
          left: 120px;
        }

        &.guitar-string-4 {
          top: -36px;
          left: 120px;
        }
      }
    }
  }

  .note {
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 40px;
    text-shadow: 1px 1px 1px #262626;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    z-index: 99;

    &.note-1 {
      color: #f2c438;
      transform: rotate(10deg);
      animation-name: note1;
    }

    &.note-2 {
      color: #394eff;
      transform: rotate(10deg);
      animation-name: note2;
      animation-delay: 275ms;
    }

    &.note-3 {
      color: #fff;
      transform: rotate(-20deg);
      animation-name: note3;
      animation-delay: 470ms;
    }

    &.note-4 {
      color: #fa3138;
      transform: rotate(-30deg);
      animation-name: note4;
      animation-delay: 795ms;
    }
  }
}

@keyframes cloud {
  0% {
    left: -250px;
  }

  100% {
    left: 2500px;
  }
}

@keyframes body {
  0%, 90%, 100% {
    transform: translateY(0px);
  }

  65% {
    transform: translateY(15px);
  }
}

@keyframes armRight {
  0%, 50%, 100% {
    left: 255px;
    transform: rotate(20deg);
  }

  20%, 80% {
    left: 260px;
    transform: rotate(5deg);
  }
}

@keyframes hornLeft {
  0%, 90%, 100% {
    transform: skew(25deg, 25deg) translateY(0);
  }

  65% {
    transform: skew(25deg, 25deg) translateY(5px);
  }
}

@keyframes hornRight {
  0%, 90%, 100% {
    transform: rotate(50deg) skew(25deg, 25deg) translateY(0);
  }

  65% {
    transform: rotate(50deg) skew(25deg, 25deg) translateY(5px);
  }
}

@keyframes earLeft {
  90% {
    transform: rotate(70deg);
  }

  30%, 60% {
    transform: rotate(40deg);
  }
}

@keyframes earRight {
  90% {
    transform: rotate(-140deg);
  }

  30%, 60% {
    transform: rotate(-110deg);
  }
}

@keyframes teat1 {
  0%, 90%, 100% {
    transform: rotate(-25deg);
  }

  65% {
    transform: rotate(-40deg);
  }
}

@keyframes teat2 {
  0%, 90%, 100% {
    transform: rotate(-30deg);
  }

  65% {
    transform: rotate(-45deg);
  }
}

@keyframes teat3 {
  0%, 90%, 100% {
    transform: rotate(-35deg);
  }

  65% {
    transform: rotate(-50deg);
  }
}

@keyframes wingFront1 {
  80%, 100% {
    top: -30px;
    left: -20px;
    transform: rotate(-5deg);
  }

  20% {
    top: -20px;
    left: -5px;
    transform: rotate(20deg);
  }
}

@keyframes wingFront2 {
  80%, 100% {
    top: 48px;
    left: -46px;
    transform: rotate(55deg);
  }

  20% {
    top: 48px;
    left: -30px;
    transform: rotate(25deg);
  }
}

@keyframes wingBack1 {
  80%, 100% {
    top: -30px;
    left: 0;
    transform: rotate(10deg);
  }

  20% {
    top: -20px;
    left: 15px;
    transform: rotate(25deg);
  }
}

@keyframes wingBack2 {
  80%, 100% {
    top: 61px;
    left: -35px;
    transform: rotate(45deg);
  }

  20% {
    top: 61px;
    left: -20px;
    transform: rotate(15deg);
  }
}

@keyframes guitarString {
  0%, 100% {
    transform: rotate(-83deg) translate(0, 0);
  }

  20% {
    transform: rotate(-83deg) translate(-1px, -2px);
  }
}

@keyframes footLeft {
  0%, 90%, 100% {
    transform: rotate(0deg);
  }

  65% {
    transform: rotate(8deg);
  }
}

@keyframes footRight {
  0%, 90%, 100% {
    transform: rotate(0deg);
  }

  65% {
    transform: rotate(-8deg);
  }
}

@keyframes note1 {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate(0, 0);
  }

  20% {
    opacity: 1;
    transform: scale(1) rotate(10deg) translate(0, 0);
  }

  40% {
    opacity: 1;
    transform: scale(1.1) rotate(20deg) translate(10%, -100%);
  }

  60% {
    opacity: 1;
    transform: scale(1.2) rotate(10deg) translate(20%, -200%);
  }

  80% {
    opacity: 0.6;
    transform: scale(1.3) rotate(0) translate(0, -300%);
  }

  100% {
    opacity: 0;
    transform: scale(1.4) rotate(-10deg) translate(20%, -400%);
  }
}

@keyframes note2 {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate(0, 0);
  }

  20% {
    opacity: 1;
    transform: scale(1) rotate(5deg) translate(0, 0);
  }

  40% {
    opacity: 1;
    transform: scale(1.1) rotate(15deg) translate(20%, -100%);
  }

  60% {
    opacity: 1;
    transform: scale(1.2) rotate(10deg) translate(40%, -200%);
  }

  80% {
    opacity: 0.6;
    transform: scale(1.3) rotate(0) translate(-10%, -300%);
  }

  100% {
    opacity: 0;
    transform: scale(1.4) rotate(-10deg) translate(20%, -400%);
  }
}

@keyframes note3 {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate(0, 0);
  }

  20% {
    opacity: 1;
    transform: scale(1) rotate(-10deg) translate(0, 0);
  }

  40% {
    opacity: 1;
    transform: scale(1.1) rotate(-20deg) translate(-10%, -100%);
  }

  60% {
    opacity: 1;
    transform: scale(1.2) rotate(-10deg) translate(-40%, -200%);
  }

  80% {
    opacity: 0.6;
    transform: scale(1.3) rotate(0) translate(10%, -300%);
  }

  100% {
    opacity: 0;
    transform: scale(1.4) rotate(10deg) translate(-20%, -400%);
  }
}

@keyframes note4 {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0) translate(0, 0);
  }

  20% {
    opacity: 1;
    transform: scale(1) rotate(-5deg) translate(0, 0);
  }

  40% {
    opacity: 1;
    transform: scale(1.1) rotate(-15deg) translate(10%, -100%);
  }

  60% {
    opacity: 1;
    transform: scale(1.2) rotate(-10deg) translate(20%, -200%);
  }

  80% {
    opacity: 0.6;
    transform: scale(1.3) rotate(0) translate(0, -300%);
  }

  100% {
    opacity: 0;
    transform: scale(1.4) rotate(10deg) translate(20%, -400%);
  }
}
</style>