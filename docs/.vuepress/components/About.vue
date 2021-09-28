<template>
  <div>
    <img src="/about/bg.gif" class="bg-1" />
    <div class="main">
      <nav>
        <section @click="bindMenu('about')">介绍</section>
        <section @click="bindMenu('experience')">经验</section>
        <section @click="bindMenu('skills')">技能</section>
        <section @click="bindMenu('projects')">项目</section>
        <section @click="bindMenu('contact')">联系</section>
      </nav>
      <!-- banner -->
      <el-row type="flex" justify="center" align="middle">
        <el-col :span="8" class="info">
          <span class="name-tag">Hello, 我是</span>
          <div class="name" data-text="Ating">Ating</div>
          <div class="job">
            <i class="el-icon-bangzhu"></i>
            <span>前端开发工程师</span>
          </div>
          <div class="intro">
            5年前端开发经验 热心诚恳、乐观向上、<br />
            认真细致， 有良好的团队协作精神
          </div>

          <el-button class="download-btn">
            <i class="el-icon-download"></i>
            <span>简历下载</span>
          </el-button>
        </el-col>
        <el-col :span="8">
          <div class="avatar">
            <el-avatar :size="450" src="/avatar.jpg"></el-avatar>
            <img src="/about/border-avatar.png" class="avatar-border" />
          </div>
        </el-col>
      </el-row>
    </div>

    <el-drawer
      :visible.sync="showDrawer"
      :append-to-body="true"
      :show-close="false"
      size="100%"
    >
      <img src="/about/bg-rain.gif" class="bg-rain" />
      <img src="/about/close.png" class="close" @click="closeDrawer" />

      <!-- 关于我 -->
      <div class="wrap about" v-if="menuOpen === 'about'">
        <div class="w-title" data-text="关于我">关于我</div>
        <div class="content">
          <div class="big-text">Hello， 我是<span>吖婷</span></div>
          <div>
            热心诚恳、乐观向上、认真细致，有良好的团队协作精神；具有网站设计及web端和小程序前端工作经验，能独立完成网站前端的设计开发，能有效配合产品和后台工程师完成网站的数据交互与优化；
          </div>
          <div>
            喜欢学习和钻研web前端技术，希望通过不断地学习，掌握更多前沿的前端知识；
          </div>
          <div>
            能承受工作带来的压力，与同事和睦相处，虚心向他人学习，会用100%的热情和精力投入到工作当中
          </div>
        </div>
        <img src="/about/motto1.png" class="motto1" />
        <div class="motto2">
          <img src="/about/motto2.png" />
        </div>
        <div class="motto3">
          <img src="/about/motto3.png" />
        </div>
      </div>

      <!-- 工作经验 -->
      <div class="wrap experience" v-if="menuOpen === 'experience'">
        <div class="w-title" data-text="5年开发经验">5年开发经验</div>
        <div class="content">
          <div
            class="exper-item"
            v-for="(item, index) in experience"
            :key="index"
          >
            <div class="company">{{ item.company }}</div>
            <!-- <el-tag type="danger">{{ item.job }}</el-tag> -->
            <div class="job">{{ item.job }}</div>
            <div class="work">
              <p v-for="(it, idx) in item.work" :key="idx">{{ it }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能 -->
      <div class="wrap skills" v-if="menuOpen === 'skills'">
        <div class="w-title" data-text="掌握技能">掌握技能</div>
        <div class="content">
          <div v-for="(item, index) in skills" :key="index" class="skill-item">
            <div class="label">{{ item.name }}</div>
            <div class="bar">
              <div class="bar-line" :style="'width:' + item.percen + '%'"></div>
              <div class="percen" :style="'left:' + item.percen + '%'">
                <img src="/about/bird.gif" class="bird" />
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
      </div>

      <!-- 项目 -->
      <div class="wrap projects" v-if="menuOpen === 'projects'">
        <div class="w-title" data-text="项目经验">项目经验</div>
        <div class="projects">
          <div
            class="project-item"
            v-for="(item, index) in projects"
            :key="index"
          >
            <div class="title">{{ item.title }}</div>
            <div class="date">{{ item.date }}</div>
            <ul class="content">
              <li v-for="(it, idx) in item.content" :key="idx">{{ it }}</li>
            </ul>
            <img src="/about/lotus.gif" class="lotus" />
          </div>
        </div>
      </div>

      <!-- 联系 -->
      <el-row v-if="menuOpen === 'contact'">
        <el-col :span="12"> </el-col>
      </el-row>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      experience: [
        {
          date: "2018/07~至今",
          job: "前端开发工程师",
          company: "广州杜工智能健康科技发展有限公司",
          work: [
            "客户端程序开发，负责与C++工程师通过管道控制硬件功能，完成客户端对硬件的交互控制，实现客户端，硬件和后台数据的连通交互",
            "蓝牙小程序的前端开发，负责与硬件工程师沟通配合完成小程序蓝牙模块的对接与交互，实现小程序端与蓝牙硬件以及后台数据之间的通讯交流",
            "商城小程序前端开发，与后台配合完成数据通讯，实现商城的购买、拼团、秒杀、砍价、分销、优惠券、支付等功能",
          ],
        },
        {
          date: "2016/06~2018/04",
          job: "前端开发工程师",
          company: "搜众计算机网络有限公司",
          work: [
            "负责整理客户需求，进行网站的平面设计及售后修改工作",
            "负责将设计稿切片打包，上传装修客户电商店铺",
            "负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化",
          ],
        },
        {
          date: "2016/02~2016/06",
          job: "网页设计师",
          company: "佛山市源厂电子商务有限公司",
          work: [
            "负责整理客户需求，进行网站的平面设计及售后修改工作",
            "负责将设计稿切片打包，上传装修客户电商店铺",
            "负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化",
          ],
        },
      ],
      skills: [
        { name: "nodeJs", percen: 60 },
        { name: "小程序", percen: 80 },
        { name: "electron", percen: 75 },
        { name: "vue", percen: 80 },
        { name: "javascript", percen: 85 },
        { name: "html(5) + css(3)", percen: 90 },
        { name: "photoshop", percen: 60 },
      ],
      projects: [
        {
          title: "sass商城小程序",
          date: "2020/11~2021/06",
          content: [
            "实现小程序用户授权和获取手机号绑定",
            "实现商城功能：购物车、产品的支付购买、优惠券领取使用、分销赚取收益功能、限时秒杀活动、邀请砍价活动、拼团活动，趣拼团活动等",
            "实现产品的收藏，个人中心可查看优惠券，订单，钱包收益，拼团，砍价记录等",
          ],
        },
        {
          title: "AI Probes & AI Doctor客户端",
          date: "2019/03 ~ 2020/12",
          content: [
            "通过客户端与C++的管道通讯，实现客户端对硬件设备交互与控制，实现硬件数据可视化；进行硬件设备对人体的评估筛查和修复功能",
            "利用管道通讯，通过客户端控制控制硬件设备进行人体健康的评估筛查和修复，并将检测的客户健康数据进行上传保存",
            "客户端个人信息微信认证，通过微信扫码进行微信身份认证绑定账户，实现手机号验证码进行客户信息的保存修改",
            "可使用身份证读卡器读取身份证信息并进行绑定账户，完成实名认证；并可自定义信息的显示隐藏，保障客户个人隐私信息",
            "客户端微信支付和支付宝扫码支付，支持产品和套餐购买，进行账户的充值和扣费，可用于客户评估和修复次数的预扣和生成报告的扣费",
            "可进行评估结果报告的生成查看和下载，并可将报告结果打印和微信推送",
          ],
        },
        {
          title: "蓝牙小程序",
          date: "2020/04~2020/08",
          content: [
            "包括小程序基本的用户授权和获取手机号绑定，后台存储用户信息",
            "通过小程序蓝牙API连接硬件设备，与硬件工程师约定操作指令，通过API发送不同指令控制设备的开关，暂停等功能",
            "通过API发送指令控制设备运行，展示设备的进程运行进度，获取硬件设备存储的数据，提交保存至后台",
          ],
        },
        {
          title: "小程序自主建站",
          date: "2017/12~2018/04",
          content: [
            "PC端实现小程序的组件化(banner、购物车、产品列表、文章列表、外卖组件、秒杀、拼团等等)，各功能组件可进行可视化拖拽编辑和排序，美化UI设置，自定义展示与设计",
            "实现后台的数据操作，在对应组件内展示关联数据",
            "PC端小程序页面功能设计完成后，可进行打包生成小程序代码包，对接到小程序端，展示或直接上传小程序",
          ],
        },
        {
          title: "自适应自主建站",
          date: "2017/07~2017/12",
          content: [
            "实现网站模块的组件化(banner、导航、文章列表、表单提交等等)，可对组件进行拖拽编辑和排序，并可设置UI样式和交互，设计完成网站页面",
            "设计的网站页面可适应不同分辨率的展示，可在不同客户端具有良好的兼容性",
          ],
        },
      ],
      showDrawer: false,
      menuOpen: null,
    };
  },

  methods: {
    bindMenu(menu) {
      this.showDrawer = true;
      this.menuOpen = menu;
    },

    closeDrawer() {
      this.showDrawer = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.main {
  position: relative;
  height: 100vh;
  width: 100%;
  padding-top: 160px;
  color: #a38981;
  font-family: 'KaiTi';
  font-size: 24px;

  nav {
    position: absolute;
    top: 100px;
    left: 40%;
    width: 600px;
    height: 600px;
    z-index: 99;

    section {
      position: absolute;
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background: url('/about/border-nav.png') left bottom / contain no-repeat;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      animation: nav 5s ease-in-out infinite;

      &:nth-child(1) {
        top: -50px;
        left: 250px;
      }

      &:nth-child(2) {
        top: 25px;
        left: 100px;
        animation-delay: 0.5s;
      }

      &:nth-child(3) {
        top: 170px;
        left: 15px;
        animation-delay: 1s;
      }

      &:nth-child(4) {
        top: 340px;
        left: 25px;
        animation-delay: 1.5s;
      }

      &:nth-child(5) {
        top: 470px;
        left: 110px;
        animation-delay: 2s;
      }

      &:hover {
        background-color: #643024;
        color: #fff;
      }
    }
  }

  .name-tag {
    display: inline-block;
    padding: 20px 30px;
    background: url('/about/title-bg.png') center center / contain no-repeat;
    color: #643024;
    font-weight: bold;
  }

  .name {
    position: relative;
    font-size: 90px;
    font-weight: bold;
    color: #ff9999;

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

  .job {
    margin: 30px 0 20px;
    font-size: 24px;
    color: #999;
  }

  .intro {
    margin-top: 10px;
    line-height: 30px;
    color: #545454;
    font-size: 14px;
  }

  .download-btn {
    display: flex;
    align-items: center;
    margin-top: 20px;
    padding: 8px 30px 8px 10px;
    background-color: #f99;
    color: #fff;
    font-size: 16px;
    border: 0;
    border-radius: 30px;
    transition: all 0.2s ease 0s;
    box-shadow: 0px 9px 29px rgba(252, 53, 73, 0.22);

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
      color: #f99;
      border-radius: 50%;
      transition: all 0.2s ease 0s;
    }
  }

  .avatar {
    position: relative;

    .avatar-border {
      position: absolute;
      top: -14px;
      left: -20px;
    }
  }
}

>>> .el-drawer {
  .el-drawer__header {
    display: none;
  }

  .el-drawer__body {
    position: relative;
    font-size: 22px;
    font-family: 'FangSong';
    font-weight: bold;
    color: #6d514f;
    z-index: 99;

    .bg-rain {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.3;
    }

    .close {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 50px;
      cursor: pointer;
    }
  }
}

.wrap {
  .w-title {
    position: relative;
    display: inline-block;
    padding: 0 100px 30px;
    margin-top: 50px;
    color: #6d514f;
    font-size: 42px;
    font-weight: bold;
    font-family: 'FangSong';
    text-shadow: 1px 1px 0 #6d514f;
    background: url('/about/spray.png') left bottom / contain no-repeat;
    z-index: 99;

    &::after {
      content: attr(data-text);
      position: absolute;
      top: 2px;
      left: 105px;
      text-shadow: none;
      background-image: linear-gradient(45deg, transparent 45%, red 45%, red 55%, transparent 0);
      background-size: 0.05em 0.05em;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: title 15s linear infinite;
      z-index: -1;
    }
  }

  &.about {
    .content {
      line-height: 2.4;
      margin-right: 100px;
      padding: 80px 150px 150px;
      margin-left: 20%;
      background: url('/about/border-about.png') center center / 100% 100% no-repeat;

      .big-text {
        font-size: 32px;
        font-style: italic;

        span {
          color: #ec4933;
          font-weight: bold;
        }
      }
    }

    .motto1 {
      position: absolute;
      bottom: 50px;
      right: 100px;
      width: 800px;
    }

    .motto2, .motto3 {
      position: absolute;
      width: 60px;
      height: 0;
      animation: motto 20s linear infinite;
      overflow: hidden;
      opacity: 0.5;

      img {
        width: 100%;
      }
    }

    .motto2 {
      left: 100px;
      top: 200px;
    }

    .motto3 {
      left: 220px;
      top: 300px;
      animation-delay: 10s;
    }
  }

  &.experience {
    .content {
      display: flex;
      align-items: flex-start;
      margin-top: 80px;
      background: url('/about/border-exper.png') center bottom / 100% 100% no-repeat;

      .exper-item {
        flex: 1;
        padding: 80px 30px;
        border-radius: 10px;

        .company {
          font-size: 24 px;
          font-weight: bold;
          color: #ff9999;
        }

        .job {
          position: relative;
          text-align: right;
          padding-right: 50px;
          margin: 30px 0;
          font-size: 20px;
          opacity: 0.8;

          &:before {
            content: '';
            position: absolute;
            right: 20px;
            width: 25px;
            height: 25px;
            background: url('/about/flower.png') center center / 100% 100% no-repeat;
            animation: flower 2s linear infinite;
          }
        }

        .work {
          text-indent: 1em;

          p {
            padding: 10px 0;
          }
        }
      }
    }
  }

  &.skills {
    .content {
      width: 80%;
      margin: 0 auto;
      padding: 50px;
      background: #fff;
    .skill-item {
      position: relative;
      margin-bottom: 20px;

      .bar {
        position: absolute;
        height: 20px;
        width: 100%;
        bottom: 0;
        z-index: 99;

        .bar-line {
          background: url('/about/cloud2.png') 0% 0% / auto 100%;
          height: 100%;
          border-radius: 10px;
          transition: all 3s;
        }

        .percen {
          position: absolute;
          left: 0;
          top: -20px;

          .bird {
            width: 50px;
          }
        }
      }
    }
    }
  }

  .projects {
    .project-item {
      position: relative;
      margin-bottom: 50px;
      padding: 100px;
      // border: 1px solid #c19c75;
      background: url('/about/border-4.png') center center / 100% 100% no-repeat;
      box-sizing: border-box;
      border-radius: 6px;

      .lotus {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 150px;
        opacity: 0.5;
        filter: grayscale(60%);
      }

      .title {
        font-size: 20px;
        font-weight: bold;
        color: #f99;
      }

      .date {
        margin: 10px 0;
        color: #999;
        font-size: 14px;
      }

      .content {
        padding: 0;
        color: #666;
        list-style: none;
      }
    }
  }
}

.bg-1 {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.2;
  filter: grayscale(60%);
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

@keyframes nav {
  0%, 100% {
    transform: translate(10px, 0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes title {
  0% {
    background-position: 0 0;
  }

  0% {
    background-position: 100% -100%;
  }
}

@keyframes motto {
  0% {
    height: 0;
  }

  50%, 100% {
    height: 100%;
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
</style>