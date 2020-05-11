<template>
  <div>
    <!-- navbar -->
    <Nav color="#F5F5F5">
      <!-- 左侧nav -->
      <div slot="left">
        <ul class="nav-list">
          <li>
            <a href="javascript:;" @click="gohome">回到主页</a>
          </li>
          <li>
            <a href="javascript:;" class="nav-login">亲，请登录</a>
          </li>
          <li>
            <a href="javascript:;" class="nav-register" @click="itemclick">免费注册</a>
          </li>
        </ul>
      </div>
      <!-- 右侧nav -->
      <div slot="right">
        <ul class="nav-list">
          <li>
            <a href="javascript:;">我的购物街</a>
          </li>
          <li class="shopcar" @click="shopcarhover">
            <a href="javascript:;" class="shopcar-item">
              <img src="../../../public/购物车.svg" class="shopcar-icon" />
              <span>购物车</span>
            </a>
            <span class="goodscarnum">{{cartLength}}</span>
          </li>
          <li>
            <a href="javascript:;">联系客服</a>
          </li>
          <li>
            <a href="javascript:;">网站分类</a>
          </li>
          <li>
            <a href="javascript:;">联系卖家</a>
          </li>
        </ul>
      </div>
    </Nav>
  </div>
</template>

<script>
import Nav from "./Nav";
import { mapGetters } from "vuex";
export default {
  name: "indextab",
  components: {
    Nav
  },
  computed: {
    ...mapGetters(["cartLength"])
  },
  methods: {
    gohome() {
      if (this.$route.path !== "/" && this.$route.path !== "/home") {
        this.$router.replace("/");
      } else {
        alert("您已经在主页了");
      }
    },
    itemclick() {
      this.$router.replace("/login");
    },
    shopcarhover() {
      // console.log('123')
      this.$router.push("/shopcar");
    }
  }
};
</script>

<style scoped>
li {
  display: inline-block;
  padding: 0 8px;
}
a {
  color: #9c9c9c;
}
.nav-login {
  color: deeppink;
}
.nav-register:hover {
  color: deeppink;
}
.shopcar:hover {
  background-color: #fff;
}
.shopcar-item {
  display: inline-block;
  height: 40px;
}
.shopcar-icon {
  height: 20px;
  width: 20px;
}
.goodscarnum {
  display: inline-block;
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  line-height: 15px;
  color: #fff;
}
</style>