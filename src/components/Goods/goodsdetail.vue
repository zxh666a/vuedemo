<template>
  <div ref="goods-main">
    <span class="title">{{goodsobj.title}}</span>
    <!-- 价格 -->
    <div class="price">
      <dl>
        <dt>价格</dt>
        <dd class="op">{{goodsobj.lowPrice}}</dd>
      </dl>
      <dl>
        <dt>促销价格</dt>
        <dd class="np">{{goodsobj.defaultPrice}}</dd>
      </dl>
      <dl>
        <dt>本店活动</dt>
        <dd v-for="(item,index) in promotions" :key="index">{{item}}</dd>
      </dl>
    </div>
    <!-- 发货地址 -->
    <dl>
      <dt>发货地址</dt>
      <dd>{{goodsobj.sendAddress}}</dd>
    </dl>
    <!-- 销售数量 -->
    <div class="sell">
      <ul class="list">
        <li>{{goodsobj.sell}}</li>
        <li>{{goodsobj.fav}}</li>
        <li>{{goodsobj.express}}</li>
      </ul>
    </div>
    <!-- 型号 -->
    <div class="size">
      <ul>
        <li
          v-for="(item,index) in goodsobj.skus"
          :key="index"
          :class="{active:index==currentindex}"
        >
          <a
            href="javascript:;"
            :data-sizeid="item.sizeId"
            :data-price="item.nowprice"
            :data-styleid="item.styleId"
            :data-stockid="item.stockId"
            :data-style="item.style"
            :data-size="item.size"
            class="goodsitem"
            @click="itemclick($event,index)"
          >{{item.style}} {{item.size}}</a>
        </li>
      </ul>
    </div>
    <!-- button -->
    <div class="btn">
      <a href="javascript:;" class="button" @click="goshopcar">加入购物车</a>
      <a href="javascript:;" class="button">立即购买</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodsdetail",
  data() {
    return {
      currentindex: -1
    };
  },
  props: ["goodsobj", "promotions"],
  mounted() {
    console.log;
  },
  methods: {
    itemclick(e, index) {
      this.currentindex = index;
      let price;
      if (e.toElement.dataset.price.length < 5) {
        price = "￥" + e.toElement.dataset.price.slice(0, 2);
      } else {
        price = "￥" + e.toElement.dataset.price.slice(0, 3);
      }
      this.goodsobj.defaultPrice = price;
      this.goodsobj.sizeid = e.toElement.dataset.sizeid;
      this.goodsobj.styleid = e.toElement.dataset.styleid;
      this.goodsobj.stockid = e.toElement.dataset.stockid;
      this.goodsobj.style = e.toElement.dataset.style;
      this.goodsobj.size = e.toElement.dataset.size;
      //sizeid
      // console.log(e);
    },
    goshopcar() {
      // this.$router.push("/shopcar");
      let goods = {
        checked:false,
        title: this.goodsobj.title,
        image: this.goodsobj.image,
        iid: this.goodsobj.iid,
        price: this.goodsobj.defaultPrice,
        sizeid: this.goodsobj.sizeid,
        styleid: this.goodsobj.styleid,
        stockid: this.goodsobj.stockid,
        style:this.goodsobj.style,
        size:this.goodsobj.size
      };
      // this.$store.commit('addtocar',goods)
      if (!goods.sizeid) {
        alert("请选择型号");
      } else {
        this.$store.dispatch("addTocar", goods);
      }

      // console.log(this.goodsobj.title)
    }
  }
};
</script>

<style scoped>
dt,
dd {
  display: inline-block;
}
dl {
  padding-top: 3px;
  padding-left: 20px;
}
/* 标题 */
.title {
  display: inline-block;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
}
/* 价格区域 */
.price {
  height: 110px;
  background-color: #e5e4e4;
}
.op {
  margin-left: 71px;
  text-decoration: line-through;
}
.np {
  color: red;
}
/* 选项 */
.size li {
  display: inline-block;
  border: 2px solid #cccccc;
  margin: 10px 20px;
  box-sizing: border-box;
  padding: 4px;
}
.size li a {
  color: black;
}
/* 收藏点赞区域 */
.list {
  border-top: 1px solid #bdc3c7;
  border-bottom: 1px solid #bdc3c7;
  display: flex;
  justify-content: space-around;
}
/* .list::after {
  content: "";
  display: block;
  clear: both;
} */
.sell .list li {
  /* float: left; */
  margin-left: 50px;
  padding: 10px 0;
}
.goodsitem {
  font-weight: bolder;
}
/* button */
.button {
  display: inline-block;
  width: 150px;
  height: 50px;
  text-align: center;
  font-size: 20px;
  font-weight: bolder;
  color: black;
  line-height: 50px;
  background-color: #1abc9c;
  margin-left: 20px;
  margin-bottom: 20px;
}
.btn {
  width: 350px;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 15px auto;
  /* transform: translate(-50%,-50%); */
}
.active {
  border: 2px solid red !important;
}
/* .goods-main{
  position: absolute;
} */
</style>