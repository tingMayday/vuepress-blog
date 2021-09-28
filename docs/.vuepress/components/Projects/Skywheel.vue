<template>
  <div class="skywheel">
    <div class="wheels">
      <div class="rod" v-for="item in 8"></div>
      <div class="rooms">
        <div class="room" v-for="item in 16"></div>
      </div>
    </div>
    <div class="stand"></div>
  </div>
</template>

<script>
export default {
  name: "Skywheel"
};
</script>

<style lang="stylus" scoped>
.wheels {
  position: absolute;
  bottom: 175px;
  left: 50%;
  width: 502px;
  height: 502px;
  border-radius: 50%;
  border: 5px solid #333;
  transform: translateX(-50%);
  z-index: 7;
  animation: wheels 30s infinite linear;

  &:before {
    content: '';
    position: absolute;
    top: 47px;
    left: 47px;
    width: 408px;
    height: 408px;
    border-radius: 50%;
    border: 5px solid #333;
    z-index: 9;
  }

  .rod {
    position: absolute;
    top: 50%;
    width: 100%;
    height: 5px;
    background: #59402B;

    &:nth-child(1) {
      transform: rotate(0deg);
    }

    &:nth-child(2) {
      transform: rotate(22.5deg);
    }

    &:nth-child(3) {
      transform: rotate(45deg);
    }

    &:nth-child(4) {
      transform: rotate(67.5deg);
    }

    &:nth-child(5) {
      transform: rotate(90deg);
    }

    &:nth-child(6) {
      transform: rotate(112.5deg);
    }

    &:nth-child(7) {
      transform: rotate(135deg);
    }

    &:nth-child(8) {
      transform: rotate(157.5deg);
    }
  }
}

.rooms {
  position: relative;
  z-index: 9;

  .room {
    position: relative;
    width: 64px;
    height: 52px;
    background: #8419c7;
    border: 1px solid #000;
    border-radius: 5px;
    animation: room 30s infinite linear;
    transform-origin: 60% 0;

    &:before {
      content: '';
      position: absolute;
      top: -15px;
      width: 15px;
      height: 15px;
      background: #333;
      border-radius: 10px 10px 0 0;
    }

    &:after {
      content: '';
      position: absolute;
      top: 16px;
      left: 22px;
      width: 20px;
      height: 20px;
      background: #E6A23C;
      border-top: 1px solid #000;
      border-left: 1px solid #000;
      animation: lamp 30s infinite linear;
    }

    &:nth-child(2n) {
      background: #67C23A;
    }

    &:nth-child(3n) {
      background: #F56C6C;
    }

    &:nth-child(4n) {
      background: #409EFF;
    }

    &:nth-child(1) {
      margin-top: 0;
      margin-left: 213px;
      &:after{
        animation-delay: .5s;
      }
    }

    &:nth-child(2) {
      margin-top: -32px;
      margin-left: 310px;
      &:after{
        animation-delay: 1s;
      }
    }

    &:nth-child(3) {
      margin-top: 2px;
      margin-left: 392px;
      &:after{
        animation-delay: 1.5s;
      }
    }

    &:nth-child(4) {
      margin-top: 26px;
      margin-left: 445px;
      &:after{
        animation-delay: 2s;
      }
    }

    &:nth-child(5) {
      margin-top: 38px;
      margin-left: 465px;
      &:after{
        animation-delay: 2.5s;
      }
    }

    &:nth-child(6) {
      margin-top: 45px;
      margin-left: 445px;
      &:after{
        animation-delay: 3s;
      }
    }

    &:nth-child(7) {
      margin-top: 30px;
      margin-left: 392px;
      &:after{
        animation-delay: 3.5s;
      }
    }

    &:nth-child(8) {
      margin-top: 0px;
      margin-left: 310px;
      &:after{
        animation-delay: 4s;
      }
    }

    &:nth-child(9) {
      margin-top: -35px;
      margin-left: 213px;
      &:after{
        animation-delay: 4.5s;
      }
    }

    &:nth-child(10) {
      margin-top: -74px;
      margin-left: 115px;
      &:after{
        animation-delay: 5s;
      }
    }

    &:nth-child(11) {
      margin-top: -106px;
      margin-left: 34px;
      &:after{
        animation-delay: 5.5s;
      }
    }

    &:nth-child(12) {
      margin-top: -140px;
      margin-left: -20px;
      &:after{
        animation-delay: 6s;
      }
    }

    &:nth-child(13) {
      margin-top: -150px;
      margin-left: -42px;
      &:after{
        animation-delay: 6.5s;
      }
    }

    &:nth-child(14) {
      margin-top: -148px;
      margin-left: -20px;
      &:after{
        animation-delay: 7s;
      }
    }

    &:nth-child(15) {
      margin-top: -136px;
      margin-left: 34px;
      &:after{
        animation-delay: 7.5s;
      }
    }

    &:nth-child(16) {
      margin-top: -112px;
      margin-left: 120px;
      &:after{
        animation-delay: 8s;
      }
    }
  }
}

.stand {
  position: absolute;
  bottom: 385px;
  left: 50%;
  width: 90px;
  height: 90px;
  background: #333;
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 8;

  &:before, &:after {
    content: '';
    position: absolute;
    bottom: -195px;
    width: 400px;
    height: 10px;
    background: #333;
  }

  &:before {
    right: -100px;
    transform: rotate(-77deg);
  }

  &:after {
    left: -100px;
    transform: rotate(77deg);
  }
}

@keyframes wheels {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }

  100% {
    transform: translateX(-50%) rotate(360deg);
  }
}

@keyframes room {
  0% {
    transform: rotate(0deg);

    &:after {
      background: #fff;
    }
  }

  100% {
    transform: rotate(-360deg);

    &:after {
      background: #E6A23C;
    }
  }
}

@keyframes lamp {
  0%,  49% {
    background: #fff;
  }

  51%, 100% {
    background: #E6A23C;
  }
}
</style>