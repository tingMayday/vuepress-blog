<template>
  <div class="skill">
    <div class="title">SKILLS</div>
    <div class="content">
      <span class="angle top-left"></span>
      <div class="skill-list">
        <div v-for="(item, index) in skills" :key="index" class="skill-item">
          <div class="label">{{ item.name }}</div>
          <div class="bar">
            <div class="bar-inner" :style="'width:' + item.percen + '%'">
              <div class="percen">{{ item.percen }}%</div>
              <div class="lines"></div>
            </div>
          </div>
          <el-progress
            :text-inside="true"
            :stroke-width="20"
            :percentage="item.percen"
            color="#a38981"
          ></el-progress>
        </div>
      </div>
      <span class="angle bottom-right"></span>
      <!-- <div class="wuxia">
        <img src="/about/women.png" class="women" />
        <img :src="gif" class="circle" v-if="gif" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    skills: Array,
  },

  data() {
    return {
      gif: null,
    };
  },

  mounted() {
    setTimeout(() => {
      this.gif = "/about/circle.gif";
    }, 1e3);
  },
};
</script>

<style lang="stylus" scoped>
.skill {
  padding-bottom 200px
  .title {
    text-align: center;
  }

  .content {
    position: relative;
    width: 60%;
    margin: 0 auto 50px;
    padding: 0 80px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    .angle {
      position: absolute;
      width: 200px;
      height: 2px;
      background: #6d514f;

      &:after {
        content: '';
        position: absolute;
        width: 1px;
        height: 300px;
        background: #fff;
        opacity: 0.5;
      }

      &.top-left {
        top: 0;
        left: -60px;

        &:after {
          top: -30px;
          left: 60px;
        }
      }

      &.bottom-right {
        bottom: 0;
        right: -30px;

        &:after {
          bottom: -50px;
          right: 30px;
        }
      }
    }

    .skill-list {
      padding: 20px 0;

      .skill-item {
        position: relative;
        display: flex;
        align-items: center;
        margin: 35px 0;

        .label {
          flex-shrink: 0;
          width: 200px;
          color: #ccc;
          font-size: 32px;
        }

        .bar {
          width: 100%;
          height: 25px;
          // padding: 2px 3px;
          background: #071021;
          border-radius: 50px;
          box-shadow: inset 3px 0px 10px rgba(0, 0, 0, 0.1);
          z-index: 99;

          .bar-inner {
            width: 100%;
            height: 25px;
            background: $accentColor;
            text-align: center;
            border-radius: 50px;
            overflow: hidden;

            .percen {
              position: relative;
              line-height: 25px;
              font-size: 20px;
              color: #fff;
              font-family: Helvetica, sans-serif;
              text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }

            .lines {
              width: 200%;
              height: 120%;
              background: url('/about/lines.svg') repeat-x;
              margin-top: -35px;
              overflow: hidden;
              text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
              animation: moveBars 2s linear infinite;
            }
          }
        }
      }
    }
  }
}

@keyframes moveBars {
  100% {
    margin-left: -180px;
  }
}
</style>