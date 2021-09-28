<template>
  <div class="tab">
    <ul class="tab-menu">
      <li
        v-for="(item, index) in tabMenu"
        :key="index"
        :class="tabActive === index ? 'active' : ''"
        @click="tabClick(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="tab-con">
      <div class="tab-0" v-if="tabActive === 0">
        <ul class="skill">
          <li v-for="(item, index) in skills" :key="index">
            <div class="label">{{ item.name }}</div>
            <div class="bar">
              <div class="bar-line" :style="'width:' + item.percen + '%'"></div>
            </div>
          </li>
        </ul>
      </div>
      <div class="tab-1" v-if="tabActive === 1">
        <ul class="works">
          <li v-for="(item, index) in works" :key="index">
            <div>{{ item.date }}</div>
            <div>{{ item.company }}</div>
            <div>{{ item.job }}</div>
          </li>
        </ul>
      </div>
      <div class="tab-2" v-if="tabActive === 2">
        <div class="b-title">正在看的</div>
        <ul class="books">
          <li v-for="(item, index) in books.reading" :key="index">
            {{ item }}
          </li>
        </ul>
        <div class="b-title">我喜欢的</div>
        <ul class="books">
          <li v-for="(item, index) in books.like" :key="index">{{ item }}</li>
        </ul>
        <div class="b-title">已看完的</div>
        <ul class="books">
          <li v-for="(item, index) in books.read" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="tab-3" v-if="tabActive === 3">
        <ul class="games">
          <li v-for="(item, index) in games" :key="index">
            <div class="game-logo">
              <img :src="'/game' + (index + 1) + '.png'" alt />
            </div>
            <div class="game-name">{{ item }}</div>
          </li>
        </ul>
        <div class="game">
          <img src="/game.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  data() {
    return {
      tabMenu: ["我的技能", "工作经历", "我看的书", "玩的游戏"],
      tabActive: 0,
      skills: [
        { name: "nodeJs", percen: 60 },
        { name: "小程序", percen: 80 },
        { name: "electron", percen: 75 },
        { name: "vue", percen: 80 },
        { name: "javascript", percen: 85 },
        { name: "html(html5)", percen: 90 },
        { name: "css(css3)", percen: 90 },
        { name: "photoshop", percen: 60 },
      ],
      works: [
        {
          date: "2018.07 ~ now",
          company: "DuGong",
          job: "前端开发工程师/小程序",
        },
        {
          date: "2016.06 ~ 2018.04",
          company: "SouZhong",
          job: " UI(设计组长)、 前端开发/小程序",
        },
        {
          date: "2016.02 ~ 2016.06 ",
          company: "YuanChang",
          job: "平面设计、前端开发",
        },
      ],
      books: {
        reading: ["《小孩》 - 大冰"],
        like: ["侦探", "灵异", "悬疑", "文学", "心理学"],
        read: [
          "《我有一座冒险屋》 - 我会修空调",
          "《尸案调查科》 - 九滴水",
          "《悬案组》 - 独孤求剩",
          "《明朝那些事1》 - 当年明月",
          "《人生百忌》 - 刘墉",
          "《信》 - 东野圭吾",
          "《问罪者》 - 苍狼残歌",
          "《世界上所有的童话都是写给大人的》 - 陈谌",
          "《特案侦查组》 - 陈猛",
          "《猫眼》 - 蔡俊",
          "《蝴蝶公墓》 - 蔡俊",
          "《爱人的头颅》 - 蔡俊",
          "《十宗罪1》 - 蜘蛛",
          "《十宗罪2》 - 蜘蛛",
          "《十宗罪3》 - 蜘蛛",
          "《十宗罪4》 - 蜘蛛",
          "《十宗罪5》 - 蜘蛛",
          "《活着》 - 余华",
          "《我当心理咨询师遇到的那些怪诞事件》 - 胡定乐",
          "《皮囊》 - 蔡崇达",
          "《蔡康永的说话之道》 - 蔡康永",
          "《蔡康永的说话之道2》 - 蔡康永",
        ],
      },
      games: ["和平精英", "明日之后", "王者荣耀", "巫师3"],
    };
  },
  methods: {
    tabClick(idx) {
      this.tabActive = idx;
    },
  },
};
</script>

<style lang="stylus" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.tab-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0 1.5rem;
  text-align: center;
  background: #f0f2f4;
  color: #333;

  li {
    flex: 1;
    padding: 0.5rem 0;
    cursor: pointer;

    &:hover, &.active {
      background: #f99;
      color: #fff;
    }
  }
}

.tab-con {
  margin-top: 1rem;
  padding: 3rem;
  background: #fff;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.3);

  .skill {
    li {
      display: flex;
      align-items: center;
      padding: 1rem;

      .label {
        width: 6rem;
      }

      .bar {
        flex: 1;
        height: 20px;
        background: #ccc;

        .bar-line {
          display: block;
          background: #f99;
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .works {
    li {
      padding: 1rem 0;
    }
  }

  .b-title {
    padding: 1rem 0;
    font-weight: bold;
  }

  .books {
    li {
      position: relative;
      padding-left: 2rem;

      &:before {
        content: '❤';
        color: #f99;
        position: absolute;
        left: 0.5rem;
      }
    }
  }

  .games {
    display: flex;
    text-align: center;

    li {
      flex: 1;
      padding: 1rem;
    }
  }

  .game {
    padding-top: 3rem;
    text-align: center;
  }
}
</style>