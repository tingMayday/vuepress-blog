// 可爱狐狸
<template>
  <div class="fox">
    <div class="head">
      <div class="eye eye-left"></div>
      <div class="eye eye-right"></div>
    </div>
    <div class="ear ear-left"></div>
    <div class="ear ear-right"></div>
    <div class="nose"></div>
    <div class="body"></div>
    <div class="tail"></div>
  </div>
</template>

<script>
export default {
  name: "Fox"
};
</script>

<style lang="stylus" scoped>
.fox {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 215px;
  height: 280px;
  transform: translate(-50%, -50%);

  &:hover {
    .head {
      transform: rotate(15deg);
    }

    .ear {
      transform: rotate(15deg);

      &.ear-left {
        left: 45px;
      }

      &.ear-right {
        right: -4px;
        top: 18px;
      }
    }

    .nose{
        left 87px
    }
  }

  .head {
    position: absolute;
    top: 0;
    right: 0;
    width: 184px;
    height: 184px;
    background: #ff7373;
    border-radius: 50%;
    overflow: hidden;
    z-index: 9;
    transition all .1s

    &:before, &:after {
      content: '';
      position: absolute;
      bottom: -95px;
      width: 184px;
      height: 184px;
      background: #fff;
      border-radius: 50%;
    }

    &:before {
      left: -94px;
    }

    &:after {
      right: -94px;
    }

    .eye {
      position: absolute;
      bottom: 40px;
      width: 20px;
      height: 10px;
      background: #000;
      border-radius: 20px 20px 0 0;
      z-index: 8;
      animation: eyes 5s linear 0s infinite;

      &.eye-left {
        left: 30px;
        transform: rotate(45deg);
      }

      &.eye-right {
        right: 30px;
        transform: rotate(-45deg);
      }
    }
  }

  .ear {
    position: absolute;
    top: 0;
    width: 95px;
    height: 95px;
    background: #ff9090;
    z-index: 0;
    transition all .1s

    &.ear-left {
      left: 31px;
      border-radius: 0 95px 0 0;
    }

    &.ear-right {
      right: 0;
      border-radius: 95px 0 0 0;
    }
  }

  .nose {
    position: absolute;
    top: 168px;
    left: 111px;
    width: 25px;
    height: 25px;
    background: #000;
    border-radius: 50%;
    z-index: 10;
    transition all .1s
  }

  .body {
    position: absolute;
    right: 0;
    top: 65px;
    width: 110px;
    height: 215px;
    background: #ff7373;
    border-radius: 0 215px 215px 0;
  }

  .tail {
    position: absolute;
    top: 170px;
    background: #ff7373;
    width: 215px;
    height: 110px;
    border-radius: 0 0 215px 215px;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      width: 30px;
      height: 30px;
      background: #fff;
      border-radius: 50%;
    }
  }
}

@keyframes eyes {
  0% {
    height: 1px;
  }

  25% {
    height: 1px;
  }

  26% {
    height: 10px;
  }
}
</style>