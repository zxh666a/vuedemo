<template>
  <div class="shopinfo">
    <!-- 店铺标题 -->
    <div class="title">
      <img :src="shopinfo.logo" alt />
      <span>{{shopinfo.name}}</span>
      <span style="fontSize:12px;color:red">lv：{{shopinfo.level}}</span>
    </div>
    <!-- 服务 -->
    <ul class="score">
      <li v-for="(item,index) in shopinfo.score" :key="index">
        <span>{{item.name}}</span>
        <span class="num">{{item.score}}</span>
      </li>
    </ul>
    <!-- 详情 -->
    <div class="detail">
      <ul class="detail-list">
        <li>
          <span>总点赞数</span>
          <span>{{cFans}}</span>
        </li>
        <li>
          <span>上架商品</span>
          <span>{{cGoods}}</span>
        </li>
        <li>
          <span>总销量数</span>
          <span>{{cSells}}</span>
        </li>
      </ul>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <a href="javascript:alert('正在装修')" class="button">收藏店铺</a>
      <a :href="shopinfo.allgoods" class="button">进入店铺</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopInfo",
  props: ["shopinfo"],
  mounted() {

  },
  methods: {
  },
  computed: {
    cFans() {
      let fans = String(this.shopinfo.cFans);
      let cfans;
      if (fans > 10000) {
        cfans = fans.substring(0, 1) + "w+";
      } else {
        cfans = fans;
      }
      return cfans;
    },
    cSells() {
      let sells = String(this.shopinfo.cSells);
      let csells;
      if (sells > 10000) {
        csells = sells.substring(0, 1) + "w+";
      } else {
        csells = sells;
      }
      return csells;
    },
    cGoods() {
      let goods = String(this.shopinfo.cGoods);
      let cgoods;
      if (goods > 10000) {
        cgoods = goods.substring(0, 1) + "w+";
      } else {
        cgoods = goods;
      }
      return cgoods;
    }
  }
};
</script>

<style scoped>
span {
  display: block;
}
.shopinfo {
  width: 250px;
  position: absolute;
  /* border: 1px solid red; */
    border: 3px dashed #ccc;
}
.score {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 10px;
}
.num {
  text-align: center;
}
.title {
  /* box-sizing: border-box; */
  height: 40px;
  width: 100%;
  background-color: #cccc;
}
.title span {
  /* display: inline-block; */
  float: left;
  line-height: 40px;
  margin-left: 10px;
  font-weight: bolder;
}
.title img {
  float: left;
  width: 25px;
  height: 25px;
  margin: 7.5px;
}
.title::after {
  display: block;
  clear: both;
  content: "";
}
.btn {
  display: flex;
  justify-content: center;
}
.button {
  display: inline-block;
  width: 80px;
  height: 30px;
  border: 1px solid;
  text-align: center;
  line-height: 30px;
  margin: 5px 5px;
  background-color: #1abc9c;
  color: white;
  font-weight: bolder;
}
.good {
  color: green;
}
.yiban {
  color: dodgerblue;
}
.laji {
  color: red;
}
.detail{
  margin-bottom: 10px;
}
.detail-list {
  display: flex;
  justify-content: space-around;
}
.detail span {
  font-size: 14px;
  text-align: center;
}
</style>