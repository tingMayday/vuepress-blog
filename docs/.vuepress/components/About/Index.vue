<template>
  <div class="about">
    <Meteor :delay="2" :w="2" :h="100" :rotateDeg="30" />
    <!-- <img src="/about/bg.jpeg" class="bg-1" /> -->
    <a-main />
    <intro />
    <exper :experience="experience" />
    <skill :skills="skills" />
    <project :projects="projects" />
    <contact />
  </div>
</template>

<script>
import Meteor from "./components/Meteor";
import AMain from "./components/Main";
import Intro from "./components/Intro";
import Exper from "./components/Exper";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
export default {
  name: "Index",
  components: {
    Meteor,
    AMain,
    Intro,
    Exper,
    Skill,
    Project,
    Contact,
  },
  data() {
    return {
      experience: [
        {
          logo: "/about/logo-1.png",
          date: "2018/07~至今",
          job: "前端开发工程师",
          company: "杜工智能",
          work: [
            "客户端程序开发，与C++工程师通过管道控制硬件功能，完成客户端与硬件交互通讯，实现客户端，硬件和后台数据的连通",
            "蓝牙小程序前端开发，与硬件工程师通过蓝牙模块进行与硬件的对接，实现小程序端与蓝牙硬件以及后台数据之间的通讯交流",
            "商城小程序前端开发，与后台配合完成数据通讯，实现商城的购买、拼团、秒杀、砍价、分销、优惠券、支付等功能",
          ],
        },
        {
          logo: "/about/logo-2.png",
          date: "2016/06~2018/04",
          job: "前端开发工程师",
          company: "搜众计算机",
          work: [
            "负责整理客户需求，进行网站的平面设计及售后修改工作",
            "负责将设计稿切片打包，上传装修客户电商店铺",
            "负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化",
          ],
        },
        {
          logo: "/about/logo-3.png",
          date: "2016/02~2016/06",
          job: "网页设计师",
          company: "源厂电子商务",
          work: [
            "负责整理客户需求，进行网站的平面设计及售后修改工作",
            "负责将设计稿切片打包，上传装修客户电商店铺",
            "负责根据设计稿及客户需求进行网站前端UI交互开发，与后台配合进行网站数据交互优化",
          ],
        },
      ],
      skills: [
        { name: "nodeJs", percen: 60 },
        { name: "electron", percen: 75 },
        { name: "小程序", percen: 80 },
        { name: "vue", percen: 80 },
        { name: "javascript", percen: 85 },
        { name: "h5+css3", percen: 90 },
        // { name: "photoshop", percen: 60 },
      ],
      projects: [
        {
          title: "sass商城小程序",
          date: "2020/11~2021/06",
          cover: "/about/project1-1.png",
          content: [
            "实现小程序用户授权和获取手机号绑定",
            "实现商城功能：购物车、产品的支付购买、优惠券领取使用、分销赚取收益功能、限时秒杀活动、邀请砍价活动、拼团活动，趣拼团活动等",
            "实现产品的收藏，个人中心可查看优惠券，订单，钱包收益，拼团，砍价记录等",
          ],
        },
        {
          // title: "AI Probes & AI Doctor客户端",
          title: "AI客户端",
          date: "2019/03 ~ 2020/12",
          cover: "/about/project1-2.png",
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
          cover: "/about/project1-3.png",
          content: [
            "包括小程序基本的用户授权和获取手机号绑定，后台存储用户信息",
            "通过小程序蓝牙API连接硬件设备，与硬件工程师约定操作指令，通过API发送不同指令控制设备的开关，暂停等功能",
            "通过API发送指令控制设备运行，展示设备的进程运行进度，获取硬件设备存储的数据，提交保存至后台",
          ],
        },
        {
          title: "小程序自主建站",
          date: "2017/12~2018/04",
          cover: "/about/project1-4.png",
          content: [
            "PC端实现小程序的组件化(banner、购物车、产品列表、文章列表、外卖组件、秒杀、拼团等等)，各功能组件可进行可视化拖拽编辑和排序，美化UI设置，自定义展示与设计",
            "实现后台的数据操作，在对应组件内展示关联数据",
            "PC端小程序页面功能设计完成后，可进行打包生成小程序代码包，对接到小程序端，展示或直接上传小程序",
          ],
        },
        {
          title: "自适应自主建站",
          date: "2017/07~2017/12",
          cover: "/about/project1-5.png",
          content: [
            "实现网站模块的组件化(banner、导航、文章列表、表单提交等等)，可对组件进行拖拽编辑和排序，并可设置UI样式和交互，设计完成网站页面",
            "设计的网站页面可适应不同分辨率的展示，可在不同客户端具有良好的兼容性",
          ],
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="stylus" scoped>
.about {
  position: relative;
  margin-top: -22px;
  background: #071021;
  overflow: hidden;
  z-index: 2;
}

.bg-1 {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.1;
  filter: grayscale(80%);
  z-index: -1;
}

::v-deep {
  .title {
    padding: 50px 0;
    font-size: 120px;
    color: transparent;
    font-weight: bold;
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.1);
  }
}
</style>