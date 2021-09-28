<template>
  <div class="project">
    <div class="title">PROJECTS</div>
    <div class="projects">
      <div class="project-item" v-for="(item, index) in projects" :key="index">
        <div class="inner">
          <el-image
            :src="item.cover"
            fit="fill"
            class="cover"
            :preview-src-list="[item.cover]"
          ></el-image>
          <div class="mask">
            <div class="tit">{{ item.title }}</div>
            <div class="date">{{ item.date }}</div>
            <div class="border">
              <span class="top"></span>
              <span class="right"></span>
              <span class="bottom"></span>
              <span class="left"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projects: Array,
  },
};
</script>

<style lang="stylus" scoped>
.project {
  background: rgba(255, 255, 255, 0.2);

  .title {
    text-align: right;
  }

  .projects {
    display: inline-grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 50%);
    padding: 0 100px 100px;

    .project-item {
      position: relative;
      padding: 10px;
      line-height: 0;
      box-sizing: border-box;
      cursor: pointer;

      &:nth-child(1) {
        grid-row-start: 1;
        grid-row-end: 3;
      }

      .inner {
        position: relative;
        border-radius: 5px;
        overflow: hidden;

        &:hover {
          .mask {
            opacity: 1;
            transform: scale(1);

            .border span {
              &.top {
                transform: scaleX(1);
                transition-delay: 0.5s;
              }

              &.right {
                transform: scaleY(1);
                transition-delay: 0.8s;
              }

              &.bottom {
                transform: scaleX(1);
                transition-delay: 1.1s;
              }

              &.left {
                transform: scaleY(1);
                transition-delay: 1.4s;
              }
            }
          }
        }

        .cover {
          height: 100%;
        }

        .mask {
          position: absolute;
          top: 10px;
          right: 10px;
          bottom: 10px;
          left: 10px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: rgba(7, 16, 33, 0.8);
          color: #fff;
          border-radius: 5px;
          z-index: 99;
          opacity: 0;
          transform: scale(0);
          transition: 0.5s ease;

          .tit {
            padding: 20px 0;
            font-size: 32px;
            font-weight: bold;
          }

          .date {
            margin-top: 30px;
            color: #ccc;
            font-size: 20px;
          }

          .border {
            span {
              position: absolute;
              background: rgba(255, 255, 255, 0.5);
              transition: all 0.3s 0s linear;

              &.top {
                top: 20px;
                left: 0;
                width: 100%;
                height: 1px;
                transform-origin: left;
                transform: scaleX(0);
              }

              &.right {
                top: 0;
                right: 20px;
                width: 1px;
                height: 100%;
                transform-origin: top;
                transform: scaleY(0);
              }

              &.bottom {
                bottom: 20px;
                right: 0;
                width: 100%;
                height: 1px;
                transform-origin: right;
                transform: scaleX(0);
              }

              &.left {
                left: 20px;
                bottom: 0;
                width: 1px;
                height: 100%;
                transform: scaleY(0);
                transform-origin: bottom;
              }
            }
          }
        }
      }
    }
  }
}
</style>