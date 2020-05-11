<template>
  <div>
    <IndexNav></IndexNav>
    <TopHeader class="topheader" containerheight="80px">
      <div class="nav" slot="mid">
        <a :href="topbar.link" target="_blank" title="点击下载手机版">
          <img :src="topbar.img" alt />
        </a>
      </div>
    </TopHeader>
    <div class="container">
      <!-- 轮播图 -->
      <div class="mid" ref="mid">
        <Swiper
          class="swiper"
          :swiperitem="banner"
          wrapwidth="350px"
          imgwidth="350px"
          containerwidth="350px"
          height="350px"
          :auto-play="true"
        ></Swiper>
        <GoodsDetail
          class="goodsdetail"
          :goodsobj="goodsobj"
          :promotions="promotions"
          ref="goodsdetail"
        ></GoodsDetail>
      </div>
      <div class="shop-desc">
        <ShopInfo :shopinfo="shopinfo"></ShopInfo>
        <!-- <GoodsMore :title="['详情','宝贝评价','商家服务']"></GoodsMore> -->
        <GoodsMore :title="title"></GoodsMore>
      </div>
    </div>
  </div>
</template>

<script>
import IndexNav from "../components/Nav/IndexNav";
import TopHeader from "../components/Topheader/Topheader";
import Swiper from "../components/Swiper/swiper";
import GoodsDetail from "../components/Goods/goodsdetail";
import ShopInfo from "../components/UserInfo/shopInfo";
import GoodsMore from "../components/Goods/goodsmore";
export default {
  name: "detail",
  data() {
    return {
      iid: "",
      // 轮播
      banner: [],
      // 头部图片
      topbar: "",
      // title:'',
      // 商品信息
      goodsobj: [],
      // 活动信息
      promotions: [],
      //店铺信息
      shopinfo: [],
      //商品详情
      goodsdetail: [],
      title: [
        { title: "详情", num: 0 },
        { title: "宝贝评价", num: 0 },
        { title: "商家服务", num: 0 }
      ]
    };
  },
  components: {
    IndexNav,
    Swiper,
    TopHeader,
    GoodsDetail,
    ShopInfo,
    GoodsMore
  },
  mounted() {
    this.getgoods();
    // console.log(this.$route)
  },
  methods: {
    getgoods() {
      // let that = this
      // console.log(this.$route)
      // this.iid = this.$route.params.iid;
      this.iid = this.$route.query.iid;
      this.$request({
        url: "/detail",
        params: {
          iid: this.iid
        }
      }).then(res => {
        // this.goods = res;
        // banner图数据的处理
        let banners = res.result.itemInfo.topImages;
        banners.forEach((item, index) => {
          let tmp = {
            image: item
          };
          this.$set(this.banner, index, tmp);
        });

        // 商品详情信息
        //判断是否有活动
        if (res.result.promotions) {
          this.promotions = res.result.promotions.list;
        } else {
          this.promotions = ["该商品暂时没有活动"];
        }
        // 价格区间的处理
        let tmp =
          "￥" +
          res.result.itemInfo.highNowPrice +
          "~" +
          "￥" +
          res.result.itemInfo.highPrice;
        // 发货地的处理
        let address = res.result.itemInfo.extra.sendAddress
          ? res.result.itemInfo.extra.sendAddress
          : "未知";
        this.goodsobj = {
          title: res.result.itemInfo.title,
          // lowPrice:res.result.itemInfo.lowPrice,
          // 价格区间
          lowPrice: tmp,
          // lowNowPrice:res.result.itemInfo.lowNowPrice,
          // 销量
          sell: res.result.columns[0],
          // 收藏
          fav: res.result.columns[1],
          // 快递公司
          express: res.result.columns[2],
          // sendAddress:res.result.itemInfo.extra.sendAddress,
          // 发货地
          sendAddress: address,
          skus: res.result.skuInfo.skus,
          // 商品价格
          defaultPrice: res.result.skuInfo.defaultPrice,
          image:this.banner[0],
          iid:this.iid,
        };
        this.shopinfo = {
          // 店铺名
          name: res.result.shopInfo.name,
          //店铺等级
          level: res.result.shopInfo.level,
          //数据
          score: res.result.shopInfo.score,
          //商铺标志
          logo: res.result.shopInfo.shopLogo,
          //全部商品的连接
          allgoods: res.result.shopInfo.allGoodsUrl,
          //id
          id: res.result.shopInfo.shopId,
          //粉丝
          cFans: res.result.shopInfo.cFans,
          //总商品数
          cGoods: res.result.shopInfo.cGoods,
          //总销量
          cSells: res.result.shopInfo.cSells
        };
        this.goodsdetail = {
          // 信息
          info: res.result.itemParams.info.set,
          // 尺码
          rule: res.result.itemParams.rule,
          // 评价
          rate: res.result.rate,
          //服务
          services: res.result.shopInfo.services,
          image: res.result.detailInfo.detailImage
        };
        //顶部图片
        this.topbar = res.result.topBar;
        this.$store.commit("getinfo", this.goodsdetail);
        // this.title = res.result.itemInfo.title
        // console.log(this.goodsdetail);
        // this.$bus.$emit("goodsinfo", this.goodsdetail);
        // this.gettop();
      });
    },
  }
};
</script>

<style  scoped>
.swiper {
  position: absolute;
  left: 0;
  top: 40px;
}
.topheader {
  background-color: #2c3e50;
}
.goodsdetail {
  position: relative;
  left: 475px;
  width: 703px;
  /* top: 38px; */
  /* border: 1px solid; */
}
.shop-desc {
  /* position: absolute; */
  width: 100%;
  /* top: 550px; */
  height: 400px;
  margin-top: 50px;
}
.mid {
  /* top: 38px;
  position: relative; */
  width: 100%;
  margin-top: 38px;
  /* height: 300px; */
}
</style>