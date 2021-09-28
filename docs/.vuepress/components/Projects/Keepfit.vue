<template>
  <div class="keepfit">
    <div class="dumbbell-1">
      <div class="dumb1"></div>
      <div class="dumb2"></div>
      <div class="dumb3"></div>
    </div>
    <div class="dumbbell-2"></div>
    <div class="barbell">
      <div class="dumb1"></div>
      <div class="dumb2"></div>
      <div class="dumb3"></div>
    </div>

    <div class="bench-1"></div>
    <div class="bench-2"></div>
    <div class="bench-3"></div>

    <div class="people">
      <div class="head">
        <div class="lip1"></div>
        <div class="lip2"></div>
        <div class="hair"></div>
      </div>
      <div class="hand">
        <div class="hand-barbell"></div>
      </div>
      <div class="armpit"></div>
      <div class="chest1"></div>
      <div class="chest2"></div>
      <div class="abdomen"></div>
      <div class="body"></div>
      <div class="belt"></div>
      <div class="thigh"></div>
      <div class="leg1"></div>
      <div class="leg2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Keepfit"
};
</script>

<style lang="stylus" scoped>
.keepfit {
  .dumbbell-1 {
    position: absolute;
    bottom: 30px;
    left: 5%;
    animation: dumbbell 3s infinite linear;

    .dumb1 {
      width: 40px;
      height: 40px;
      background: #444;
      border-radius: 50%;
      z-index: 1;
    }

    .dumb2 {
      position: absolute;
      top: 0;
      left: 30px;
      width: 40px;
      height: 40px;
      background: #009688;
      border-radius: 50%;
      z-index: 3;

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 10px;
        background: #111;
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .dumb3 {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 15px;
      height: 8px;
      background: #999;
      border-radius: 15px;
      z-index: 2;
    }
  }

  .dumbbell-2 {
    position: absolute;
    bottom: 50px;
    left: 350px;
    width: 55px;
    height: 6px;
    background: #444;

    &:before, &:after {
      content: '';
      position: absolute;
      top: -16px;
      width: 20px;
      height: 40px;
      background: #444;
      border-radius: 5px;
    }

    &:before {
      left: -10px;
    }

    &:after {
      right: -10px;
    }
  }

  .barbell {
    position: absolute;
    left: 450px;
    bottom: 70px;

    .dumb1 {
      width: 209px;
      height: 8px;
      background: #666;
      border-radius: 10px;
    }

    .dumb2, .dumb3 {
      position: absolute;
      top: 50%;
      width: 20px;
      height: 40px;
      background: #666;
      border-radius: 5px;
      transform: translateY(-50%);

      &:after {
        content: '';
        position: absolute;
        top: -25px;
        width: 10px;
        height: 90px;
        background: #666;
        border-radius: 2px;
      }
    }

    .dumb2 {
      left: 10px;
    }

    .dumb3 {
      right: 10px;
      transform: rotate(180deg) translateY(50%);
    }
  }

  .bench-1 {
    position: absolute;
    bottom: 30px;
    left: 250px;
    width: 55px;
    height: 10px;
    background: #333;

    &:before {
      content: '';
      position: absolute;
      bottom: 10px;
      left: 20px;
      width: 15px;
      height: 102px;
      background: #333;
    }
  }

  .bench-2 {
    position: absolute;
    bottom: 142px;
    left: 235px;
    width: 330px;
    height: 10px;
    background: #476098;
    border-radius: 10px;
    z-index: 9;

    &:after {
      content: '';
      position: absolute;
      left: 10px;
      bottom: -5px;
      width: 310px;
      height: 5px;
      background: #222;
      border-radius: 5px;
    }
  }

  .bench-3 {
    position: absolute;
    bottom: 35px;
    left: 535px;
    width: 15px;
    height: 260px;
    background: #333;

    &:before {
      content: '';
      position: absolute;
      top: 25px;
      left: -15px;
      width: 20px;
      height: 3px;
      background: #333;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: -25px;
      width: 65px;
      height: 10px;
      background: #333;
    }
  }

  .people {
    position: absolute;
    bottom: 30px;
    left: 200px;

    .head {
      position: absolute;
      bottom: 122px;
      left: 242px;
      width: 66px;
      height: 40px;
      background: #Fda76d;
      border-radius: 5px;
      animation: head 3s infinite linear;

      .lip1, .lip2 {
        position: absolute;
        top: -6px;
        width: 5px;
        height: 6px;
        background: #fda76d;
        border-radius: 5px;
      }

      .lip1 {
        left: 35px;
        animation: lip1 3s infinite linear;
      }

      .lip2 {
        left: 40px;
      }

      .hair {
        position: absolute;
        top: -3px;
        right: -13px;
        width: 16px;
        height: 46px;
        background: #212121;
        border-radius: 2px;
      }
    }

    .hand {
      position: absolute;
      bottom: 80px;
      left: 195px;
      width: 36px;
      height: 136px;
      background: #Fda76d;
      border-radius: 60px;
      z-index: 10;
      animation: hand 3s infinite linear;

      .hand-barbell {
        position: absolute;
        top: -70px;
        left: -37px;
        width: 110px;
        height: 110px;
        background: #222;
        border-radius: 50%;

        &:before {
          content: '';
          position: absolute;
          top: 5px;
          left: 5px;
          width: 100px;
          height: 100px;
          background: #0077B5;
          border-radius: 50%;
        }

        &:after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: #eee;
          border: 30px solid #222;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    .armpit {
      position: absolute;
      bottom: 125px;
      left: 185px;
      width: 46px;
      height: 26px;
      background: #f8a781;
      border-radius: 60px;
      z-index: 5;
    }

    .chest1 {
      position: absolute;
      bottom: 122px;
      left: 150px;
      width: 103px;
      height: 80px;
      background: #FF8A65;
      border-radius: 60px;
      animation: chest 3s infinite linear;
      z-index: 1;
    }

    .chest2 {
      position: absolute;
      bottom: 124px;
      left: 165px;
      width: 86px;
      height: 60px;
      background: #cf4645;
      border-radius: 40px;
      animation: chest 3s infinite linear;
      z-index: 2;
    }

    .abdomen {
      position: absolute;
      bottom: 140px;
      left: 120px;
      width: 56px;
      height: 30px;
      background: #FF8A65;
      border-radius: 5px;
      transform: rotate(-15deg);
      z-index: 1;
    }

    .body {
      position: absolute;
      bottom: 122px;
      left: 118px;
      width: 135px;
      height: 35px;
      background: #cf4645;
      border-radius: 8px;
      z-index: 4;
    }

    .belt {
      position: absolute;
      bottom: 122px;
      left: 110px;
      width: 15px;
      height: 45px;
      background: #8BC34A;
      border-radius: 3px;
      z-index: 5;
    }

    .thigh {
      position: absolute;
      bottom: 125px;
      left: -15px;
      width: 135px;
      height: 20px;
      background: #61967B;
      border-radius: 8px;
      z-index: 2;
      animation: thigh 3s infinite linear;
    }

    .leg1, .leg2 {
      position: absolute;
      bottom: 0;
      width: 15px;
      height: 145px;
      border-radius: 8px;
      transform: rotate(-15deg);
      animation: leg 3s infinite linear;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: -23px;
        width: 40px;
        height: 20px;
        background: #333;
        border-radius: 5px;
      }
    }

    .leg1 {
      background: #FDA76D;
      z-index: 3;
    }

    .leg2 {
      left: 5px;
      background: #FDA050;
      z-index: 1;

      &:after {
        background: #555;
      }
    }
  }
}

@keyframes head {
  0%, 100% {
    transform: rotate(0deg);
  }

  35%, 56%, 65% {
    bottom: 122px;
    transform: rotate(0deg);
  }

  50%, 53% {
    bottom: 130px;
    transform: rotate(-15deg);
  }

  59% {
    transform: rotate(-4deg);
    bottom: 125px;
  }

  62% {
    transform: rotate(-2deg);
    bottom: 124px;
  }
}

@keyframes lip1 {
  0%, 45%, 100% {
    left: 25px;
  }

  50%, 65% {
    left: 33px;
  }
}

@keyframes hand {
  0%, 40%, 100% {
    bottom: 80px;
  }

  50%, 65% {
    bottom: 125px;
  }
}

@keyframes chest {
  0%, 35%, 100% {
    transform:translateY(0);
  }
  50% {
    transform:translateY(5px);
  }
}

@keyframes thigh {
  0%, 40%, 100% {
    left: -15px;
  }

  50%, 65% {
    left: 16px;
  }
}

@keyframes leg {
  0%, 40%, 100% {
    transform: rotate(-15deg);
  }

  50%, 65% {
    transform: rotate(10deg);
  }
}

@keyframes dumbbell {
  0%, 40%, 100% {
    left 18%
  }
   50% {
     left 1%
   }
}
</style>