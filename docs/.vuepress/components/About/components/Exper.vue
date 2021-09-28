<template>
  <div class="exper">
    <div class="title">5 YEARS EXPERIENCE</div>
    <div class="content">
      <div
        class="exper-item"
        v-for="(item, index) in experience"
        :key="index"
        @mouseenter="show = true"
        @mouseleave="show = false"
      >
        <div class="logo">
          <img :src="item.logo" />
        </div>
        <div class="flex1">
          <div class="company">{{ item.company }}</div>
          <div class="job">{{ item.job }}</div>
        </div>
        <div class="date">{{ item.date }}</div>

        <transition-group name="slide-fade">
          <div class="exper-item-hover" v-if="show" :key="index">
            <p v-for="(it, idx) in item.work" :key="idx">{{ it }}</p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: Array,
  },

  data() {
    return {
      show: false,
    };
  },
};
</script>

<style lang="stylus" scoped>
.exper {
  // background: #071021;
  background: rgba(7, 16, 33, 0.8);
  //  background: rgba(255, 255, 255, 0.2);


  .content {
    width: 80%;
    padding-bottom: 50px;
    margin: 0 auto;
    color: $accentColor;

    .exper-item {
      position: relative;
      display: flex;
      align-items: center;
      padding: 60px 50px;
      background: rgba(255,255,255,.05);
      border-bottom: 1px solid #333;
      cursor: pointer;
      overflow: hidden;

      &:hover {
        transform: scale(1.05);
        z-index: 999;

        .exper-item-hover {
          display: flex;
        }

        .logo {
          position: absolute;
          right: 50px;
          opacity: 0.2;
          z-index: 99;
          transform: scale(1.8);
        }

        .slide-fade-enter-active {
          animation: slide 0.5s cubic-bezier(1, 0.5, 0.8, 1);
        }

        .slide-fade-leave-active {
          animation: slide 0.5s cubic-bezier(1, 0.5, 0.8, 1) reverse;
        }
      }

      .exper-item-hover {
        display: none;
        position: absolute;
        top: 0px;
        bottom: 0;
        left: 0;
        right: 0px;
        flex-direction: column;
        justify-content: center;
        padding-left: 20px;
        background: #eee;
        color: #071021;

        p {
          padding: 3px 0;
        }
      }

      .logo {
        height: 80px;

        img {
          height: 100%;
          opacity: 0.8;
        }
      }

      .flex1 {
        flex: 1;
        margin-left: 50px;
      }

      .company {
        font-size: 32px;
        color: #fff;
      }

      .job {
        position: relative;
        margin-top: 20px;
        font-size: 20px;
        opacity: 0.5;
      }

      .date {
        margin: 10px 0 30px;
        text-align: right;
        opacity: 0.5;
      }
    }
  }
}

@keyframes flower {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes hov {
  from {
    left: 100%;
    right: -100%;
  }

  to {
    left: 0;
    right: 0px;
  }
}

@keyframes bounce-in {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }

  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>