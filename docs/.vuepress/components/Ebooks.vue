<template>
  <div class="Ebooks">
    <ul>
      <li v-for="(item, index) in books" :key="index">
        <span class="book-name" @click="preview(item.url)"
          >《{{ item.name }}》</span
        >
        <span class="download-btn" @click="download(item.url)">下载</span>
      </li>
    </ul>
    <div class="preview" v-if="ebooksPreview">
      <iframe :src="books[0].url" type="application/x-google-chrome-pdf" />
    </div>
  </div>
</template>

<script>
export default {
  mame: "Ebooks",
  data() {
    return {
      books: [
        {
          name: "AngularJS高级程序设计",
          url: "https://github.com/tingMayday/ebooks/raw/master/AngularJS%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1.pdf",
        },
        {
          name: "CSS揭秘",
          url: "https://github.com/tingMayday/ebooks/raw/master/css%E6%8F%AD%E7%A7%98.pdf",
        },
        {
          name: "ES6标准入门",
          url: "https://github.com/tingMayday/ebooks/raw/master/ES6%E6%A0%87%E5%87%86%E5%85%A5%E9%97%A8%20.pdf",
        },
        {
          name: "GitHub入门与实践",
          url: "https://github.com/tingMayday/ebooks/raw/master/GitHub%E5%85%A5%E9%97%A8%E4%B8%8E%E5%AE%9E%E8%B7%B5.pdf",
        },
        {
          name: "JavaScript函数式编程",
          url: "https://github.com/tingMayday/ebooks/raw/master/JavaScript%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B.pdf",
        },
        {
          name: "JavaScript权威指南(第6版)(中文版)",
          url: "https://github.com/tingMayday/ebooks/raw/master/JavaScript%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97(%E7%AC%AC6%E7%89%88)(%E4%B8%AD%E6%96%87%E7%89%88).pdf",
        },
        {
          name: "JavaScript设计模式与开发实践",
          url: "https://github.com/tingMayday/ebooks/raw/master/JavaScript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E4%B8%8E%E5%BC%80%E5%8F%91%E5%AE%9E%E8%B7%B5.pdf",
        },
        {
          name: "啊哈！算法",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E5%95%8A%E5%93%88%EF%BC%81%E7%AE%97%E6%B3%95.pdf",
        },
        {
          name: "你不知道的JavaScript上卷",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84JavaScript%E4%B8%8A%E5%8D%B7.pdf",
        },
        {
          name: "你不知道的JavaScript中卷",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84JavaScript%E4%B8%AD%E5%8D%B7.pdf",
        },
        {
          name: "你不知道的JavaScript下卷",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84JavaScript%E4%B8%8B%E5%8D%B7.pdf",
        },
        {
          name: "权威指南Vue.js",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97Vue.js.pdf",
        },
        {
          name: "深入REACT技术栈",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E6%B7%B1%E5%85%A5REACT%E6%8A%80%E6%9C%AF%E6%A0%88.pdf",
        },
        {
          name: "深入浅出Node.js",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BANode.js.pdf",
        },
        {
          name: "深入浅出Webpack",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E6%B7%B1%E5%85%A5%E6%B5%85%E5%87%BAWebpack.pdf",
        },
        {
          name: "学习JavaScript数据结构与算法（第2版）",
          url: "https://github.com/tingMayday/ebooks/raw/master/%E5%AD%A6%E4%B9%A0JavaScript%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%EF%BC%88%E7%AC%AC2%E7%89%88%EF%BC%89.pdf",
        },
      ],
      ebooksPreview: true,
      ebooksUrl: "",
    };
  },
  methods: {
    download(url) {
      window.open(url);
    },

    preview(url) {
      this.ebooksUrl = url;
      this.ebooksPreview = true;
    },
  },
};
</script>

<style lang="stylus" scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0 0.5rem 2rem;

    &:before {
      content: '❤';
      position: absolute;
      left: 0.5rem;
      color: #f99;
    }

    &:hover {
      color: #f99;
    }

    .download-btn {
      cursor: pointer;
      padding: 0.1rem 1rem;
      color: #fff;
      background: #f99;
      border-radius: 5rem;

      .&:hover {
        background: #f66;
      }
    }
  }
}

.preview {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>