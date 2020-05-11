<template>
  <div class="main">
    <!-- 导航 -->
    <div class="tab">
      <div class="one">
        <div class="check" @click="allchecked">
          <img src="../../../public/nocheck.svg" alt id="all" v-if="!isall" />
          <img src="../../../public/check.svg" alt id="all" v-else />
        </div>
        <span class="allcheck cen">全选</span>
        <span class="detail cen">商品详情</span>
        <span class="price cen">单价</span>
        <span class="num cen">数量</span>
        <span class="total cen">总价</span>
      </div>
    </div>
    <!-- 列表 -->
    <ul class="list">
      <li v-for="(item,index) in carlist" :key="index" class="list-item">
        <img
          src="../../../public/nocheck.svg"
          alt
          class="checkbox"
          @click="itemcheck(item)"
          v-if="!item.checked"
        />
        <img src="../../../public/check.svg" alt class="checkbox" v-else @click="itemcheck(item)" />
        <img :src="item.image.image" alt class="goods-img" />
        <a class="title" @click="itemclick(item.iid)">{{item.title}}({{item.style}}-{{item.size}})</a>
        <span class="goodsprice">{{item.price}}</span>
        <div class="control">
          <span class="add" @click="add(item)">+</span>
          <span class="goodsnum">{{item.count}}</span>
          <span class="jian" @click="jian(item)">-</span>
        </div>
        <span class="totalprice">{{goodstotalprice(item)}}</span>
        <a class="deletegoods" @click="deletegoods(index)">X</a>
      </li>
    </ul>
    <!-- 底部 -->
    <div class="bottom">
      <div class="bottom-total">￥{{totalprice}}</div>
      <div class="button" @click="pay">去支付</div>
      <div class="bottom-check">选中{{checkedlength}}个/共{{carlist.length}}个</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "shopcarlist",
  data() {
    return {
      allcheck: false,
      sum: 0
    };
  },
  computed: {
    ...mapState(["carlist"]),
    goodstotalprice() {
      return function(item) {
        let price = item.price.substring(1);
        return "￥" + parseInt(price) * parseInt(item.count);
      };
    },
    totalprice() {
      // let goods = this.carlist.filter(element => {
      //   return (element.checked = true);
      // });
      // console.log(goods);
      let sum = 0;
      this.carlist.forEach(item => {
        if (item.checked === true) {
          let price = parseInt(item.price.substring(1));
          let count = parseInt(item.count);
          return (sum += price * count);
        }
      });
      return sum;
    },
    checkedlength() {
      let checked = [];
      this.carlist.forEach(item => {
        if (item.checked === true) {
          checked.push(item);
        }
      });
      return checked.length;
    },
    isall() {
      if(this.carlist.length==0) return false
      let tmp = this.carlist.every(item => {
        return item.checked == true;
      });
      // console.log(tmp);
      return tmp ? true : false;
    }
  },
  mounted() {
    // console.log(this.$store.state.carlist);
  },
  methods: {
    itemclick(id) {
      // console.log(id)
      // this.$router.push("/detail" + id);
      this.$router.push({ name: "detail", query: { iid: id } });
    },
    allchecked() {
      if (this.isall) {
        this.carlist.forEach(item => {
          item.checked = false;
        });
      } else {
        this.carlist.forEach(item => {
          if (item.checked == false) {
            item.checked = true;
          }
        });
      }
    },
    add(item) {
      this.$store.commit("addCount", item);
    },
    jian(item) {
      // console.log(item)
      this.$store.commit("jianCount", item);
    },
    pay() {
      alert("假的，不能支付");
    },
    deletegoods(i) {
      // console.log(i);
      this.$store.commit("deletegoods", i);
      // console.log(this.carlist)
    },
    itemcheck(item) {
      item.checked = !item.checked;
    }
  }
};
</script>

<style scoped>
.cen {
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
}
.main {
  position: relative;
  /* width: 100px;
  height: 100px; */
  border: 3px dashed red;
  min-height: 400px;
}
.list {
  margin-bottom: 100px;
}
.list-item {
  position: relative;
}
.goods-img {
  display: inline-block;
  width: 80px;
  height: 80px;
  margin: 5px 10px;
  vertical-align: top;
  margin-left: 30px;
}
.title {
  display: inline-block;
  height: 50px;
  min-width: 400px;
  max-width: 400px;
  margin-left: 10px;
  vertical-align: top;
  padding-top: 10px;
  cursor: pointer;
}
.checkbox {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 50%;
  margin-top: -10px;
  left: 5px;
}

.tab {
  height: 50px;
}
#all {
  width: 20px;
  height: 20px;
  margin-left: 5px;
  margin-top: 10px;
  vertical-align: middle;
}
.allcheck {
  /* display: inline-block; */
  margin-left: 10px;
  /* vertical-align: middle; */
  /* margin-top: 10px; */
  margin-left: 15px;
}
.check {
  display: inline-block;
}
.detail {
  /* display: inline-block; */
  /* margin-left: 10px; */
  /* vertical-align: middle; */
  /* margin-top: 10px; */
  margin-left: 150px;
  width: 400px;
}
.goodsprice {
  min-width: 120px;
  margin-left: 90px;
  display: inline-block;
  margin-top: 20px;
}
.price {
  width: 80px;
}
.control {
  margin-left: 60px;
  display: inline-block;
}
.add {
  display: inline-block;
  width: 20px;
  text-align: center;
  border: 2px solid red;
  /* margin-left: 90px; */
}
.jian {
  display: inline-block;
  width: 20px;
  text-align: center;
  border: 2px solid red;
}
.goodsnum {
  padding: 10px;
}
.num {
  margin-left: 120px;
}
.total {
  margin-left: 150px;
}
.totalprice {
  display: inline-block;
  margin-left: 125px;
  width: 50px;
}
.bottom {
  position: absolute;
  width: 100%;
  height: 80px;
  /* background-color: red; */
  border-top: 3px dashed #ccc;
  bottom: 0px;
}
.bottom::after {
  clear: both;
  display: block;
  content: "";
}
.bottom .button {
  float: right;
  height: 50px;
  width: 100px;
  background-color: aqua;
  margin-right: 20px;
  margin-top: 15px;
  text-align: center;
  line-height: 50px;
  font-weight: bolder;
  font-size: 20px;
  cursor: pointer;
}
.bottom-total {
  position: absolute;
  display: inline-block;
  right: 190px;
  top: 30px;
  font-weight: bolder;
  font-size: 18px;
}
.bottom-check {
  height: 50px;
  display: inline-block;
  margin-left: 20px;
  line-height: 50px;
  margin-top: 15px;
  font-weight: bolder;
  font-size: 18px;
}
.deletegoods {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  font-size: 12px;
  text-align: center;
  line-height: 15px;
  color: aliceblue;
  font-weight: bolder;
  margin-left: 100px;
}
</style>