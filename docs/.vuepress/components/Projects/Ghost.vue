<template>
  <div class="ghost">
    <div class="body">
      <div class="eyes"></div>
      <div class="mouth"></div>
      <div class="wave1"></div>
      <div class="wave2"></div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  name: "Ghost"
};
</script>

<style lang="stylus" scoped>
.ghost {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .body {
    position: relative;
    width: 160px;
    height: 288px;
    background: #fff;
    border-radius: 80px 80px 16px 16px;
    animation: ghost 2s ease-in-out infinite;

    .eyes {
      position: absolute;
      top: 60px;
      left: 40px;
      width: 30px;
      height: 42px;
      background: #195157;
      border-radius: 50%;
      animation: eyes 3s linear infinite;

      &:after {
        content: '';
        position: absolute;
        left: 70px;
        width: 30px;
        height: 42px;
        background: #195157;
        border-radius: 50%;
      }
    }

    .mouth {
      content: '';
      position: absolute;
      top: 103px;
      left: 41px;
      width: 85px;
      height: 32px;
      border-radius: 50%;
      border: 5px solid transparent;
      border-bottom-color: #195157;
      overflow: hidden;
    }

    .wave1 {
      position: absolute;
      left: 50%;
      bottom: -20px;
      width: 36px;
      height: 35px;
      background: #fff;
      border-radius: 0 0 16px 16px;
      transform: translateX(-50%);
      z-index: 9;

      &:before, &:after {
        content: '';
        position: absolute;
        width: 36px;
        height: 35px;
        background: #fff;
        border-radius: 0 0 16px 16px;
      }

      &:before {
        left: -62px;
      }

      &:after {
        right: -62px;
      }
    }

    .wave2 {
      position: absolute;
      left: 32px;
      bottom: -20px;
      width: 35px;
      height: 35px;
      background: #c3c7cb;
      border-radius: 16px;
      box-shadow: inset 0 17.5px 0 #fff;
      z-index: 8;

      &:before {
        content: '';
        position: absolute;
        left: 62px;
        width: 35px;
        height: 35px;
        background: #c3c7cb;
        border-radius: 16px;
        box-shadow: inset 0 17.5px 0 #fff;
      }
    }
  }

  .shadow {
    margin-top: 30px;
    width: 160px;
    height: 16px;
    background: #174142;
    border-radius: 50%;
    filter: blur(2px);
    animation: shadow 2s linear infinite;
  }
}

@keyframes ghost {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-16px);
  }
}

@keyframes eyes {
  0%, 30%, 38%, 100% {
    transform: scale(1);
  }

  34%, 36% {
    transform: scale(1, 0);
  }
}

@keyframes shadow {
    0%, 100% {
        opacity 1;
        transform scale(1)
    }
    50%{
        opacity .6;
        transform scale(.9,.9);
    }
}
</style>