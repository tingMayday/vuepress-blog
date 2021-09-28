<template>
  <div class="main">
    <!-- <nav>
      <section @click="bindMenu('intro')">介绍</section>
      <section @click="bindMenu('exper')">经验</section>
      <section @click="bindMenu('skill')">技能</section>
      <section @click="bindMenu('project')">项目</section>
      <section @click="bindMenu('contact')">联系</section>
    </nav> -->
    <div class="bubble">
      <span v-for="item in 6" :key="item"></span>
    </div>
    <!-- banner -->

    <div class="flex">
      <div class="info">
        <div class="job">
          <i class="el-icon-potato-strips"></i>
          <span>前端开发工程师</span>
        </div>
        <div class="name" data-text="婷/Ating">婷/Ating</div>
        <div class="intro">
          5年前端开发经验 热心诚恳、乐观向上、认真细致<br />
          喜欢五月天、爱看侦探小说、懒癌患者
        </div>

        <el-button class="download-btn">
          <i class="el-icon-download"></i>
          <span>简历下载</span>
        </el-button>
      </div>
      <el-image src="/about/own.png" class="avatar"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style lang="stylus" scoped>
.main {
  position: relative;
  width: 100%;
  color: #fff;
  font-family: 'KaiTi';
  font-size: 24px;

  .flex {
    display: flex;
    align-items: flex-end;

    .info {
      flex: 1;
      padding-left: 100px;
      padding-bottom: 100px;

      .job {
        position: relative;
        font-size: 32px;
        color: #eee;

        &::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 10px;
          height: 1px;
          width: 150px;
          background: rgba(255, 255, 255, 0.2);
        }

        i {
          color: $accentColor;
        }
      }

      .name {
        position: relative;
        margin-top: 30px;
        font-size: 84px;
        font-weight: bold;
        color: #fff;

        &::before {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 2px;
          text-shadow: -2px 0 #f99;
          clip: rect(24px, 550px, 90px, 0);
          animation: name-2 3s infinite linear alternate-reverse;
        }

        &::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: -2px;
          text-shadow: -2px 0 #b300fc;
          clip: rect(85px, 550px, 140px, 0);
          animation: name-1 2.5s infinite linear alternate-reverse;
        }
      }

      .intro {
        position: relative;
        display: inline-block;
        margin-top: 50px;
        padding: 30px 80px;
        background: rgba(2555, 255, 255, 0.05);
        line-height: 50px;
        color: #ccc;
        font-size: 20px;
      }

      .download-btn {
        display: flex;
        align-items: center;
        margin-top: 50px;
        padding: 8px 30px 8px 10px;
        background: #f43534;
        color: #fff;
        font-size: 16px;
        border: 0;
        border-radius: 30px;
        transition: all 0.2s ease 0s;
        box-shadow: 0px 5px 5px rgba(252, 53, 73, 0.5);

        &:hover {
          box-shadow: none;

          i {
            transform: rotate(-90deg);
          }
        }

        i {
          display: inline-block;
          width: 28px;
          height: 28px;
          line-height: 28px;
          background: #fff;
          color: #f43534;
          border-radius: 50%;
          transition: all 0.2s ease 0s;
        }
      }
    }

    .avatar {
      width: 500px;
      opacity: 0.8;
    }
  }

  .bubble {
    position: absolute;
    top: 0;
    z-index: 0;

    span {
      position: absolute;
      width: 80px;
      height: 80px;
      background: #fff;
      border-radius: 50%;
      opacity: 0.06;
      animation: bubble 5s ease-in-out infinite;

      &:nth-child(1) {
        top: 0;
        left: 900px;
        width: 250px;
        height: 250px;
        background: #fff;
      }

      &:nth-child(2) {
        top: 600px;
        left: 250px;
        width: 200px;
        height: 200px;
        background: #f99;
        animation-delay: 0.5s;
      }

      &:nth-child(3) {
        top: 370px;
        left: 515px;
        animation-delay: 1s;
      }

      &:nth-child(4) {
        top: 440px;
        left: 825px;
        width: 120px;
        height: 120px;
        background: #2298d4;
        animation-delay: 1.5s;
      }

      &:nth-child(5) {
        top: 100px;
        left: 210px;
        width: 100px;
        height: 100px;
        background: #ff7d15;
        animation-delay: 2s;
      }

      &:nth-child(6) {
        top: 50px;
        left: 600px;
        width: 50px;
        height: 50px;
        background: #f99;
        animation-delay: 2.5s;
      }
    }
  }
}

@keyframes name-1 {
  0% {
    clip: rect(80px, 9999px, 120px, 0);
  }

  4.166666666666666% {
    clip: rect(10px, 9999px, 18px, 0);
  }

  8.333333333333332% {
    clip: rect(18px, 9999px, 64px, 0);
  }

  12.5% {
    clip: rect(60px, 9999px, 27px, 0);
  }

  16.666666666666664% {
    clip: rect(138px, 9999px, 105px, 0);
  }

  20.833333333333336% {
    clip: rect(85px, 9999px, 69px, 0);
  }

  25% {
    clip: rect(128px, 9999px, 86px, 0);
  }

  29.166666666666668% {
    clip: rect(113px, 9999px, 9px, 0);
  }

  33.33333333333333% {
    clip: rect(113px, 9999px, 14px, 0);
  }

  37.5% {
    clip: rect(118px, 9999px, 108px, 0);
  }

  41.66666666666667% {
    clip: rect(92px, 9999px, 99px, 0);
  }

  45.83333333333333% {
    clip: rect(86px, 9999px, 49px, 0);
  }

  50% {
    clip: rect(148px, 9999px, 130px, 0);
  }

  54.166666666666664% {
    clip: rect(57px, 9999px, 141px, 0);
  }

  58.333333333333336% {
    clip: rect(37px, 9999px, 96px, 0);
  }

  62.5% {
    clip: rect(53px, 9999px, 130px, 0);
  }

  66.66666666666666% {
    clip: rect(142px, 9999px, 90px, 0);
  }

  70.83333333333334% {
    clip: rect(137px, 9999px, 120px, 0);
  }

  75% {
    clip: rect(91px, 9999px, 77px, 0);
  }

  79.16666666666666% {
    clip: rect(95px, 9999px, 41px, 0);
  }

  83.33333333333334% {
    clip: rect(66px, 9999px, 71px, 0);
  }

  87.5% {
    clip: rect(147px, 9999px, 17px, 0);
  }

  91.66666666666666% {
    clip: rect(113px, 9999px, 125px, 0);
  }

  95.83333333333334% {
    clip: rect(55px, 9999px, 48px, 0);
  }

  100% {
    clip: rect(24px, 9999px, 85px, 0);
  }
}

@keyframes name-2 {
  6.666666666666667% {
    clip: rect(38px, 9999px, 43px, 0);
  }

  10% {
    clip: rect(132px, 9999px, 147px, 0);
  }

  13.333333333333334% {
    clip: rect(12px, 9999px, 23px, 0);
  }

  16.666666666666664% {
    clip: rect(134px, 9999px, 97px, 0);
  }

  20% {
    clip: rect(61px, 9999px, 140px, 0);
  }

  23.333333333333332% {
    clip: rect(15px, 9999px, 98px, 0);
  }

  26.666666666666668% {
    clip: rect(36px, 9999px, 30px, 0);
  }

  30% {
    clip: rect(19px, 9999px, 120px, 0);
  }

  33.33333333333333% {
    clip: rect(106px, 9999px, 57px, 0);
  }

  36.666666666666664% {
    clip: rect(69px, 9999px, 12px, 0);
  }

  40% {
    clip: rect(39px, 9999px, 20px, 0);
  }

  43.333333333333336% {
    clip: rect(139px, 9999px, 127px, 0);
  }

  46.666666666666664% {
    clip: rect(129px, 9999px, 30px, 0);
  }

  50% {
    clip: rect(135px, 9999px, 107px, 0);
  }

  53.333333333333336% {
    clip: rect(16px, 9999px, 11px, 0);
  }

  56.666666666666664% {
    clip: rect(53px, 9999px, 36px, 0);
  }

  60% {
    clip: rect(18px, 9999px, 37px, 0);
  }

  63.33333333333333% {
    clip: rect(82px, 9999px, 123px, 0);
  }

  66.66666666666666% {
    clip: rect(0px, 9999px, 60px, 0);
  }

  70% {
    clip: rect(71px, 9999px, 79px, 0);
  }

  73.33333333333333% {
    clip: rect(92px, 9999px, 133px, 0);
  }

  76.66666666666667% {
    clip: rect(116px, 9999px, 120px, 0);
  }

  80% {
    clip: rect(56px, 9999px, 105px, 0);
  }

  83.33333333333334% {
    clip: rect(33px, 9999px, 47px, 0);
  }

  86.66666666666667% {
    clip: rect(100px, 9999px, 63px, 0);
  }

  90% {
    clip: rect(53px, 9999px, 144px, 0);
  }

  93.33333333333333% {
    clip: rect(131px, 9999px, 117px, 0);
  }

  96.66666666666667% {
    clip: rect(24px, 9999px, 103px, 0);
  }

  100% {
    clip: rect(87px, 9999px, 144px, 0);
  }
}

@keyframes bubble {
  0%, 100% {
    transform: translate(20px, 0);
  }

  50% {
    transform: translateY(-20px);
  }
}
</style>