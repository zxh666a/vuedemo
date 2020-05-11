<template>
  <div class="userinfo">
    <!-- 头像部分 -->
    <div class="header">
      <a href="javascript:;">
        <img src="../../../public/touxiang.jpg" alt class="touxiang" />
      </a>
    </div>
    <!-- 按钮部分 -->
    <div class="footer">
      <a href="javascript:;" @click="gotologin">登录</a>
      <a href="javascript:alert('施工中');">注册</a>
      <a href="javascript:alert('施工中');">开店</a>
    </div>
    <!-- 小功能分类 -->
    <div class="util">
      <a href="javascript:;">
        <i class="iconfont icon-youxi"></i>
        <span>游戏</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-dianying"></i>
        <span>电影</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-jiudian"></i>
        <span>酒店</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-dianhua"></i>
        <span>话费充值</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-financing"></i>
        <span>理财</span>
      </a>
      <a href="javascript:;">
        <i class="iconfont icon-lvhang"></i>
        <span>旅游</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  methods: {
    gotologin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
.userinfo {
  position: absolute;
  top: 0;
  right: 0;
  /* border: 2px solid red; */
  width: 253px;
  height: 312px;
  background: url("../../../public/timg.jpg") no-repeat;
  background-size: 100% 100%;
    border-radius: 20px;
}
.header {
  width: 76px;
  height: 76px;
  margin: 25px auto;
  border-radius: 50%;
  overflow: hidden;
}
.touxiang {
  width: 100%;
}
.footer {
  padding-left: 26px;
}
.footer a {
  display: inline-block;
  width: 62px;
  height: 30px;
  background-color: #1abc9c;
  margin: 3px;
  line-height: 30px;
  text-align: center;
  border-radius: 10%;
  color: white;
  font-weight: bolder;
}
.util {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100px;
  width: 200px;
  /* border: 1px solid red; */
  margin-left: 27px;
  margin-top: 32px;
}
.util a {
  display: inline-block;
  width: 60px;
  height: 40px;
  /* border: 1px solid blue; */
}
.util a i {
    font-size: 25px;
    padding-left: 17px;
    color:#d35400
}
span{
    display: block;
    font-size: 15px;
    text-align: center;
    color:#1abc9c;
    font-weight: bolder;
}
</style>