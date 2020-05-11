<template>
  <div>
    <indexNav></indexNav>
    <div class="container">
      <!-- 头部的搜索框 + 图标 -->
      <TopHeader leftwidth="150px" rightwidth="150px" iscenter="true" containerheight="97px">
        <!-- 左侧 -->
        <img src="../../public/vip.svg" alt slot="left" />
        <!-- 中间 -->
        <div class="mid" slot="mid">
          <form class="search">
            <input type="text" placeholder="switch港版日版" v-model="search" />
            <div class="btn">
              <span>搜索</span>
            </div>
          </form>
        </div>
        <!-- 右侧 -->
        <img src="../../public/wx.png" alt="加个微信交流学习" class="right-img" slot="right" />
      </TopHeader>
      <TopHeader
        leftwidth="150px"
        rightwidth="150px"
        iscenter="true"
        containerheight="60px"
        ref="topheadertwo"
        v-show="isfixed"
        class="isfixed"
      >
        <!-- 左侧 -->
        <img src="../../public/vip.svg" alt slot="left" style="width:100px;height:80px" />
        <!-- 中间 -->
        <div class="mid" slot="mid">
          <form class="search">
            <input type="text" placeholder="switch港版日版" v-model="search" />
            <div class="btn">
              <span>搜索</span>
            </div>
          </form>
        </div>
      </TopHeader>
      <!-- 主区域 -->
      <div class="main">
        <div class="Navigation">
          <Category></Category>
          <!-- 轮播图组件 -->
          <Swiper
            class="homeswiper"
            :swiperitem="banners"
            wrapwidth="560px"
            imgwidth="560px"
            containerwidth="560px"
            height="316px"
            :auto-play="true"
          ></Swiper>
          <!-- 广告 -->
          <div class="ad">
            <img
              src="//img.alicdn.com/imgextra/i4/1541853/O1CN01aLu3Mf1PYiVUyF38n_!!1541853-0-lubanu.jpg_290x290q90.jpg_.webp"
              alt
            />
          </div>
          <!-- 用户信息 -->
          <UserInfo></UserInfo>
        </div>
        <!-- 两列商品区域 -->
        <div class="goodslist">
          <span class="top"></span>
          <GoodsList
            :goodsitem="pop"
            width="590px"
            title="爱逛街"
            desc="献给热爱生活的你"
            backgroundColor="blue"
          ></GoodsList>
          <GoodsList
            :goodsitem="sell"
            width="590px"
            title="热卖商品"
            desc="与品质生活不期而遇"
            class="right"
            backgroundColor="red"
          ></GoodsList>
        </div>
        <!-- 底部商品区域 -->
        <div class="new">
          <GoodsList
            :goodsitem="news"
            width="1190px"
            title="时尚爆料王"
            desc="加入这场时尚专场吧"
            backgroundColor="deeppink"
          ></GoodsList>
        </div>
        <HomeFooter></HomeFooter>
      </div>
    </div>
    <Toast :text=text></Toast>
  </div>
</template>

<script>
import indexNav from "../components/Nav/IndexNav";
import TopHeader from "../components/Topheader/Topheader";
import Category from "../components/Category/category";
import UserInfo from "../components/UserInfo/UserInfo";
import GoodsList from "../components/Goods/goodslist";
import HomeFooter from "../components/Footer/homefooter";
import Swiper from "../components/Swiper/swiper";
import Toast from "../components/Toast/toast"
export default {
  name: "home",
  data() {
    return {
      //轮播图
      banners: [],
      //流行商品数据
      pop: {},
      //热卖商品数据
      sell: {},
      //最新商品数据
      news: {},
      //是否吸顶
      isfixed: false,
      search: "",
      text:"这不是真的商城网页，只是一个小的demo，用于我面试时的展示，数据均由codewhy老师提供，需要接口的请加微信：codewhy001"
    };
  },
  created() {
    this.$nextTick(() => {
      //获取数组
      this.getHomedata();
      //获取流行商品数据
      this.getGoodslist("pop", 1).then(res => {
        let data = res.data.list;
        this.pop = data.slice(0, 9);
        // console.log(res);
      });
      //获取热卖商品数据
      this.getGoodslist("sell", 1).then(res => {
        let data = res.data.list;
        this.sell = data.slice(0, 9);
      });
      //获取最新商品数据
      this.getGoodslist("new", 1).then(res => {
        let data = res.data.list;
        this.news = data.slice(0, 12);
      });
    });
  },
  mounted() {
    //监听滚动
    window.addEventListener("scroll", this.scroll);
  },
  components: {
    TopHeader,
    Swiper,
    Category,
    UserInfo,
    GoodsList,
    HomeFooter,
    indexNav,
    Toast
  },
  methods: {
    //获取首页数据
    getHomedata() {
      this.$request({
        url: "/home/multidata"
      }).then(res => {
        // console.log(res)
        this.banners = res.data.banner.list;
        // console.log(this.banners);
      });
    },
    //获取商品数据的函数
    getGoodslist(type, page) {
      return this.$request({
        url: "/home/data",
        params: {
          // type: "pop",
          // page: 1
          type: type,
          page: page
        }
      });
      // .then(res => {
      //   this.pop = res.data.list;
      //   console.log(this.pop);
      // });
    },
    //监听滚动 吸顶效果
    scroll() {
      let y = parseInt(document.documentElement.scrollTop);
      // let el = this.$refs.topheadertwo.$el.offsetTop + 40;
      this.isfixed = y > 163;
    }
  }
};
</script>

<style scoped>
/* 右边二维码图片 */
.right-img {
  width: 80px;
  height: 80px;
  border-radius: 10px;
}
/* 搜索的输入框 */
.search input {
  box-sizing: border-box;
  width: 400px;
  height: 50px;
  border-radius: 30px;
  border: 3px solid red;
  padding-left: 10px;
}
.search {
  position: relative;
}
/* 搜索按钮 */
.btn {
  position: absolute;
  width: 70px;
  height: 50px;
  right: 2px;
  top: 0px;
  background-color: red;
  border-radius: 0px 20px 20px 0px;
  line-height: 50px;
  cursor: pointer;
}
.btn span {
  padding-left: 17px;
  font-weight: bolder;
  color: white;
}
.homeswiper {
  position: relative;
  left: -111px;
}
.main {
  height: 100%;
  position: relative;
  background-color: #f4f4f4;
}
/* 广告 */
.ad {
  position: absolute;
  /* border: 2px solid red; */
  width: 150px;
  height: 312px;
  right: 265px;
  top: 0;
}
.ad img {
  width: 100%;
  height: 100%;
}
/* 商品部分 */
.goodslist div {
  box-sizing: border-box;
  /* border: 1px solid red; */
  float: left;
}
.goodslist .right {
  margin-left: 10px;
}
.goodslist::after {
  content: "";
  display: block;
  clear: both;
}
/* 固定导航 */
.isfixed {
  position: fixed;
  z-index: 9;
  top: 0;
  width: 1190px;
  background-color: #fff;
}
.new {
  width: 100%;
  margin-top: 10px;
}
/* 轮播图 用户信息 menu的包裹块 */
.Navigation {
  height: 316px;
}
</style>