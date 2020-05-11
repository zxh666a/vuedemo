<template>
  <div class="footer">
    <ul class="list">
      <li>
        <i class="iconfont icon-github"></i>
        <a href="https://github.com/zxh666a" target="_blank">github</a>
      </li>
      <li>
        <i class="iconfont icon-wodexinxi"></i>
        <a @click="itemclick">有关于我</a>
      </li>
      <li>
        <i class="iconfont icon-xieboke"></i>
        <a href="https://zxh666a.github.io/" target="_blank">我的笔记博客</a>
      </li>
    </ul>
    <!-- 个人信息显示框 -->
    <transition name="desc">
      <div class="me" v-if="isshow">
        <div class="close" @click="close">X</div>
        <p>基本资料</p>
        <ul class="me-list">
          <li>
            <span class="title">姓名</span>
            <span class="content">Coder-pander</span>
          </li>
          <li>
            <span class="title">性别</span>
            <span class="content">男</span>
          </li>
          <li>
            <span class="title">微信</span>
            <span class="content">z947966262</span>
          </li>
          <li>
            <span class="title">毕业院校</span>
            <span class="school">山东商务职业学院</span>
          </li>
          <li>
            <span class="title">毕业时间</span>
            <span class="time">2020-06</span>
          </li>
        </ul>
        <p>自我介绍</p>
        <span class="desc">
          在学校期间学习了前端课程，课下自学了vue框架，实习期间没有工作，便做了这个网页练习。
          技术不够熟练，没有实际项目经验，大佬不要喷。页面的商品数据都是由真实的后台接口生成。
          详情可以加后台老师的微信：coderwhy002
        </span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "homefooter",
  data() {
    return {
      //个人信息显示框
      isshow: false
    };
  },
  methods: {
    // 个人信息点击时间
    itemclick() {
      this.isshow = !this.isshow;
    },
    // 关闭个人信息
    close() {
      this.isshow = false;
    }
  }
};
</script>

<style scoped>
.footer {
  height: 120px;
  width: 100%;
  background-color: #cad3c8;
  margin-top: 20px;
  border-radius: 20px;
}
.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
i {
  line-height: 120px;
  font-size: 50px;
}
a {
  margin-left: 10px;
  font-size: 30px;
  vertical-align: super;
  font-weight: bolder;
  color: black;
}
li {
  cursor: pointer;
}
.me {
  width: 400px;
  height: 420px;
  position: fixed;
  background-color: #95a5a6;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  color: white;
}
.me p {
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
}
.title {
  font-size: 16px;
  font-weight: bolder;
}
.content {
  padding-left: 77px;
  font-weight: bolder;
}
.me li {
  width: 300px;
  margin: 10px auto;
  padding-left: 105px;
}
.school {
  font-weight: bolder;
  padding-left: 44px;
}
.time {
  font-weight: bolder;
  padding-left: 44px;
}
.desc {
  width: 250px;
  height: 200px;
  display: block;
  margin: 0 auto;
  font-weight: bolder;
}
.close {
  display: inline-block;
  position: relative;
  left: 366px;
  top: 10px;
  font-weight: bolder;
  font-size: 30px;
  cursor: pointer;
  transition:.5s;
  transform-origin: center center;
}
.close:hover {
  color: #2c3e50;
  transform: rotate(360deg);
}
.desc-enter-active,
.desc-leave-active {
  transition: opacity 0.5s;
}
.desc-enter,
.desc-leave-to {
  opacity: 0;
}
</style>