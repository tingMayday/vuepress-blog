<template>
  <div class="intro">
    <div class="title">ABOUT ME</div>
    <div class="own">
      <img src="/about/own.jpg" />
    </div>
    <div class="content">
      <span class="quot">“</span>
      <div class="im">我是<span>前端开发工程师</span></div>
      <div>
        热心诚恳、乐观向上、认真细致，有良好的团队协作精神；具有网站设计及web端和小程序前端工作经验，能独立完成网站前端的设计开发，能有效配合产品和后台工程师完成网站的数据交互与优化；
      </div>
      <div>
        喜欢学习和钻研web前端技术，希望通过不断地学习，掌握更多前沿的前端知识；
      </div>

      <div class="motto">
        <p class="motto-1" data-text="逆风的方向，更适合飞翔">
          逆风的方向，更适合飞翔
        </p>
        <p class="motto-2" data-text="我不怕千万人阻挡，只怕自己投降">
          我不怕千万人阻挡，只怕自己投降
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.intro {
  position: relative;
  display: flex;
  padding: 100px 50px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;

  
  .title{
    position absolute;
    top 100px
    width 100px
    padding: 0;
    line-height 1
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  }

  .own {
    position: absolute;
    width: 350px;
    bottom: 50px;
    left: 100px;
    z-index: 999;

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      left: -60px;
      width: 300px;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
    }

    &::after {
      content: '';
      position: absolute;
      left: -15px;
      top: -30px;
      width: 1px;
      height: 150px;
      background: rgba(255, 255, 255, 0.8);
    }
  }

  .content {
    position: relative;
    padding: 60px 50px 60px 150px;
    margin-left: 20%;
    margin-right: 50px;
    line-height: 42px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);

    .quot {
      position: absolute;
      left: 20px;
      top: 20px;
      font-size: 180px;
      font-family: 'Arial';
      color: #ccc;
    }

    .im {
      font-size: 20px;
      font-style: italic;

      span {
        color: $accentColor;
        font-weight: bold;
      }
    }

    .motto {
      position: relative;
      padding: 20px 0;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: -100px;
        width: 500px;
        height: 1px;
        background: #fff;
        opacity: 0.5;
      }

      p {
        display: block;
        position: relative;
        font-size: 2.5rem;
        font-weight: bold;
        color: transparent;
        white-space: nowrap;

        &::after {
          content: attr(data-text);
          position: absolute;
          background: url('/about/source.gif');
          background-size: 43%;
          -webkit-background-clip: text;
          -webkit-text-stroke: 1px #d4d7ff;
        }
      }

      .motto-1::after {
        left: 0;
      }

      .motto-2::after {
        right: 0;
      }
    }
  }
}

@keyframes borders {
  from {
    border-right-color: #000;
  }

  to {
    border-right-color: #fff;
  }
}
</style>