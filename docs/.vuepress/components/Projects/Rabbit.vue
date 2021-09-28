<template>
  <div class="rabbit">
    <!-- 兔子 -->
    <div class="rabbit-container">
      <div class="ears">
        <div class="ear-left"></div>
        <div class="ear-right"></div>
      </div>
      <div class="body">
        <div class="eyes">
          <span class="eye-left"></span>
          <span class="eye-right"></span>
        </div>
        <div class="nose"></div>
        <div class="cheeks">
          <span class="cheek-left"></span>
          <span class="cheek-right"></span>
        </div>
        <div class="mouth"></div>
      </div>
      <div class="tail"></div>
      <div class="hand"></div>
      <div class="foots">
        <span class="foot-left"></span>
        <span class="foot-right"></span>
      </div>
    </div>
    <!-- 草坪 -->
    <div class="lawn"></div>
    <!-- 泡泡 -->
    <div class="bubbles">
      <div class="bubble" v-for="item in 18"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Rabbit"
};
</script>

<style lang="stylus" scoped>
.rabbit {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;

  .rabbit-container {
    .ears {
      .ear-left, .ear-right {
        position: absolute;
        top: 0;
        width: 50px;
        height: 100px;
        background: #ffc0cb;
        border-radius: 50% 50% 0 50%;
        box-shadow: inset 0 15px #f0a4cb;
      }

      .ear-left {
        left: 110px;
        transform: rotate(15deg);
        animation: earLeft 10s linear infinite;
      }

      .ear-right {
        top: 8px;
        left: 185px;
        transform: rotate(25deg);
        animation: earRight 10s linear infinite;
      }
    }

    .body {
      position: absolute;
      top: 70px;
      right: 40px;
      width: 200px;
      height: 200px;
      background: #ffc0cb;
      border-radius: 100px 100px 30px 0;
      z-index: 9;

      .eyes {
        position: absolute;
        top: 35px;
        left: 45px;
        transform: rotateZ(6deg);
        animation: eyes 10s linear infinite;

        .eye-left, .eye-right {
          display: inline-block;
          width: 12px;
          height: 12px;
          background: #473929;
          border-radius: 50%;
        }

        .eye-right {
          margin-left: 60px;
        }
      }

      .nose {
        position: absolute;
        left: 75px;
        top: 50px;
        width: 16px;
        height: 10px;
        background: #473929;
        border-radius: 50%;
        animation: nose 10s linear infinite;

        &:after {
          position: absolute;
          left: 5px;
          top: 5px;
          content: '';
          width: 6px;
          height: 26px;
          background: #473929;
        }
      }

      .cheeks {
        position: absolute;
        left: 12px;
        top: 58px;
        transform: rotate(5deg);
        animation: cheeks 10s linear infinite;

        .cheek-left, .cheek-right {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: #ff0000;
          border-radius: 50%;
        }

        .cheek-right {
          margin-left: 65px;
        }
      }

      .mouth {
        position: absolute;
        top: 76px;
        left: 72px;
        width: 20px;
        height: 16px;
        background: #ff0000;
        border-radius: 50%;
        box-shadow: inset 5px 8px #473929;
        animation: mouth 10s linear infinite;
      }
    }

    .tail {
      position: absolute;
      width: 40px;
      height: 50px;
      right: 10px;
      top: 190px;
      background: #f0a4cb;
      border-radius: 50%;
      z-index: 8;
      transform: rotate(8deg);
      animation: tail 3s linear infinite;
    }

    .hand {
      position: absolute;
      top: 180px;
      left: 10px;
      width: 50px;
      height: 50px;
      background: #ffc0cb;
      transform: rotate(10deg);
      border-radius: 50px 0 0 50px;
      animation: hand 10s linear infinite;

      &:before {
        content: '';
        position: absolute;
        top: -5px;
        left: 12px;
        width: 10px;
        height: 45px;
        background: #ff8819;
        border-radius: 0 0 10px 10px;
      }

      &:after {
        content: '';
        position: absolute;
        top: -52px;
        left: 0;
        width: 19px;
        height: 35px;
        background: linear-gradient(-45deg, #9e9eff 0% 30%, #fff 30% 40%, #9e9eff 40% 55%, #fff 55% 60%, #9e9eff 60% 100%);
        border-radius: 50%;
        border: 8px solid #ff8819;
      }
    }

    .foots {
      position: absolute;
      bottom: 5px;
      left: 60px;
      z-index: 8;

      .foot-left, .foot-right {
        display: inline-block;
        height: 35px;
        width: 65px;
        background: #f0a4cb;
        border-radius: 0 0 25px 50%;
        transform: rotate(10deg) skewY(-20deg);
      }

      .foot-right {
        margin-left: 45px;
      }
    }
  }

  .lawn {
    position: relative;
    margin-top: 250px;
    width: 300px;
    height: 70px;
    background: #84cc84;
    box-shadow: 0 5px 0 15px #90ee90;
    border-radius: 50%;
  }

  .bubbles {
    position: absolute;
    left: 20px;
    top: 150px;

    .bubble {
      position: absolute;
      border-radius: 50%;
      opacity: 0;
      animation: bubble 10s linear infinite;

      &::before, &::after {
        content: '';
        position: absolute;
        top: 15px;
        border-radius: 50%;
        background: white;
      }

      &::before {
        left: 8px;
        width: 7px;
        height: 7px;
        opacity: 0.7;
      }

      &::after {
        width: 10px;
        height: 10px;
        opacity: 0.6;
      }

      &:nth-child(n) {
        background: #4fd5e7;
        width: 24px;
        height: 24px;
        transform: rotate(10deg);
        offset-path: path('m0,0 l -500, -35');
      }

      &:nth-child(2n) {
        background: #829fff;
        width: 16px;
        height: 16px;
        offset-path: path('m0,0 l -500, -25');
      }

      &:nth-child(3n) {
        background: #76e0cf;
        width: 30px;
        height: 30px;
        offset-path: path('m0,0 l -500, 10');
      }

      &:nth-child(4n) {
        background: #86befd;
        width: 20px;
        height: 20px;
        offset-path: path('m0,0 l -500, 30');
      }

      &:nth-child(5n) {
        background: #91f1d9;
        width: 34px;
        height: 34px;
        offset-path: path('m0,0 l -500, 20');
      }

      &:nth-child(1) {
        animation-delay: 3s;
      }

      &:nth-child(2) {
        animation-delay: 3.2s;
      }

      &:nth-child(3) {
        animation-delay: 3.4s;
      }

      &:nth-child(4) {
        animation-delay: 3.6s;
      }

      &:nth-child(5) {
        animation-delay: 3.8s;
      }

      &:nth-child(6) {
        animation-delay: 4s;
      }

      &:nth-child(7) {
        animation-delay: 4.2s;
      }

      &:nth-child(8) {
        animation-delay: 4.4s;
      }

      &:nth-child(9) {
        animation-delay: 4.6s;
      }

      &:nth-child(10) {
        animation-delay: 4.8s;
      }

      &:nth-child(11) {
        animation-delay: 5s;
      }

      &:nth-child(12) {
        animation-delay: 5.2s;
      }

      &:nth-child(13) {
        animation-delay: 5.4s;
      }

      &:nth-child(14) {
        animation-delay: 5.6s;
      }

      &:nth-child(15) {
        animation-delay: 5.8s;
      }

      &:nth-child(16) {
        animation-delay: 6s;
      }

      &:nth-child(17) {
        animation-delay: 6.2s;
      }

      &:nth-child(18) {
        animation-delay: 6.4s;
      }
    }
  }
}

@keyframes earLeft {
  0%, 10%, 75% {
    transform: rotate(15deg);
  }

  15%, 17%, 65% {
    transform: rotate(-5deg);
  }

  16% {
    transform: rotate(-10deg);
  }

  25%, 29%, 42%, 46%, 56%, 60% {
    transform: rotate(-7deg);
  }

  23%, 27%, 31%, 40%, 44%, 48%, 54%, 58%, 62% {
    transform: rotate(-5deg);
  }
}

@keyframes earRight {
  0%, 10%, 75% {
    transform: var(25deg);
  }

  13%, 15%, 65% {
    transform: rotate(5deg);
  }

  14% {
    transform: rotate(0deg);
  }

  28%, 32%, 44%, 48%, 55%, 59% {
    transform: rotate(3deg);
  }

  26%, 30%, 34%, 42%, 46%, 50%, 53%, 57%, 61% {
    transform: rotate(5deg);
  }
}

@keyframes eyes {
  0%, 15%, 17%, 79%, 81% {
    top: 35px;
    transform: rotateZ(6deg);
  }

  16%, 80% {
    top: 35px;
    transform: rotateZ(6deg) scaleY(0.3);
  }

  60% {
    top: 25px;
    transform: rotateZ(6deg);
  }

  10%, 70%, 100% {
    top: 35px;
    transform: rotateZ(6deg);
  }
}

@keyframes nose {
  60% {
    top: 40px;
  }

  10%, 70%, 100% {
    top: 50px;
  }
}

@keyframes mouth {
  0%, 10%, 75%, 78%, 82%, 86%, 90%, 94%, 98%, 100%, 4%, 8% {
    left: 74px;
  }

  60% {
    left: 76px;
    transform: scale(3, 2.5);
  }

  76%, 80%, 84%, 88%, 92%, 96%, 2%, 6% {
    left: 72px;
  }
}

@keyframes cheeks {
  60% {
    top: 53px;
    opacity: 0.5;
  }

  10%, 70%, 100%, 0% {
    top: 58px;
    opacity: 0.2;
  }
}

@keyframes tail {
  0%, 15%, 25%, 75%, 85%, 95% {
    top: 190px;
    transform: rotate(8deg);
  }

  20%, 80%, 90% {
    top: 188px;
    transform: rotate(-8deg);
  }
}

@keyframes hand {
  0%, 75%, 100% {
    transform: rotate(-2deg);
  }

  65% {
    transform: rotate(10deg);
  }
}

@keyframes bubble {
  40% {
    offset-distance: 0%;
  }

  60% {
    offset-distance: 100%;
  }

  42%, 58% {
    opacity: 1;
  }

  0%, 40%, 60%, 100% {
    opacity: 0;
  }
}
</style>