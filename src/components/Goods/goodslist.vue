<template>
  <div class="goods-list" :style="{width:width,height:height}">
    <div class="header">
      <span class="icon" :style="{backgroundColor:backgroundColor}"></span>
      <span class="title">{{title}}</span>
      <span class="desc">{{desc}}</span>
    </div>
    <div class="goods" v-if="goodsitem">
      <ul class="goods-ul">
        <li
          v-for="(item,index) in goodsitem"
          :key="index"
          class="goods-item"
          @click="itemclick(item.iid)"
          :id="item.iid"
        >
          <img :src="item.show.img" alt class="goods-image" />
          <span class="goods-title">{{jiequ(item.title)}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodslist",
  props: ["height", "width", "goodsitem", "title", "desc", "backgroundColor"],
  methods: {
    //截取商品标题
    jiequ(title) {
      return title.substring(0, 12);
    },
    itemclick(id) {
      // this.$router.push("/detail" + id);
      this.$router.push({name:'detail',query:{iid:id}});
    }
  }
};
</script>

<style scoped>
/* 最外层 */
.goods-list {
  background-color: #d2dae2;
  margin-top: 20px;
  border-radius: 20px;
  /* margin-bottom: 20px; */
}
/* 模块标题 */
.title {
  width: 100px;
  height: 40px;
  line-height: 40px;
  font-weight: bolder;
  font-size: 20px;
  margin-left: 25px;
}
/* 描述 */
.desc {
  margin-left: 20px;
  font-size: 14px;
  color: blueviolet;
  font-weight: bolder;
  line-height: 40px;
}
/* 商品图 */
.goods-image {
  width: 170px;
  height: 150px;
  border-radius: 20px;
}
.goods-ul::after {
  content: "";
  display: block;
  clear: both;
}
/* 模块标题 */
.goods-title {
  display: block;
}
/* 每个商品的li */
.goods-item {
  float: left;
  margin-left: 18px;
  margin-top: 10px;
  text-align: center;
  color: #808e9b;
  cursor: pointer;
  padding-bottom: 10px;
}
/* 竖线 */
.icon {
  position: relative;
  display: inline-block;
  width: 6px;
  height: 20px;
  left: 18px;
  top: 2px;
}
</style>