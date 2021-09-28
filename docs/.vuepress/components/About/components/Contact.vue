<template>
  <div class="contact">
    <div class="title">CONTACT</div>
    <div class="content">
      <!-- 电话，email,城市 -->
      <!-- <div class=""></div> -->
      <div class="item">
        <i class="el-icon-message"></i>
        <div class="label">E-MAIL</div>
        <div class="value">144826491@qq.com</div>
      </div>
      <div class="item">
        <i class="el-icon-map-location"></i>
        <div class="label">ADDRESS</div>
        <!-- <div class="value">广东省广州市</div> -->
        <div class="value">Guangzhou, Guangdong Province</div>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.contact {
  position: relative;
  padding: 50px 100px 200px;
  font-size: 48px;

  .title {
    position: absolute;
    right: 50px;
    bottom 0px
    -webkit-text-stroke: 2px rgba(244, 53, 52, 0.2);
  }

  .content {
    display: flex;
    text-align: center;
    padding-top 60px
    .item {
      position: relative;
      width: 40%
      padding: 60px 0;
      color: #fff;
      background rgba(7, 16, 33, 0.6);
      border 1px solid rgba(255,255,255,.3);
      border-radius: 10px;
      overflow: hidden;

      & + .item{
        margin-left 50px
      }

      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: rgba(244, 53, 52, 0.1);
        font-size: 150px;
        font-weight: bold;
      }

      .value {
        padding-top: 20px;
        opacity: 0.5;
        font-size 20px;
      }
    }
  }
}
</style>