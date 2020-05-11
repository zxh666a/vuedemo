<template>
  <div class="detail">
    <ul class="list">
      <li v-for="(item,index) in goodsinfo.info" :key="index">
        <span>{{item.key}}：{{item.value}}</span>
        <!-- <span></span> -->
      </li>
    </ul>
    <div class="line"></div>
    <ul class="image">
      <li v-for="(item,index) in goodsinfo.image" :key="index">
        <span class="title">{{item.key}}</span>
        <!-- <div v-for="(items,index) in item.list" :key="index" class="box">
          <img :src="items" alt class="dimg" />
        </div> -->
        <img :src="items" alt class="dimg"  v-for="(items,index) in item.list" :key="index"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "detailTab",
  data() {
    return {
      // info: [],
      // rule: [],
      // image: []
    };
  },
  computed:{
    ...mapState(['goodsinfo'])
  },
  created() {
    this.$nextTick(()=>{
      this.getdata();
    })
    // console.log(this.info);
  },
  methods: {
    getdata() {
      // let sessioninfo = window.sessionStorage.getItem("goodsinfo");
      // if (this.info === sessioninfo) {
      //   this.info = this.$store.state.goodsinfo.info;
      //   this.rule = this.$store.state.goodsinfo.rule;
      //   this.image = this.$store.state.goodsinfo.image;
      // } else {
      //   this.info = JSON.parse(sessioninfo).info;
      //   this.rule = JSON.parse(sessioninfo).rule;
      //   this.image = JSON.parse(sessioninfo).image;
      // }
        // this.info = this.$store.state.goodsinfo.info;
      //   this.rule = this.$store.state.goodsinfo.rule;
      //   this.image = this.$store.state.goodsinfo.image;
      // console.log(this.goodsinfo);
      // console.log(this.$store.state.goodsinfo)
    }
  }
};
</script>

<style scoped>
.list::after {
  clear: both;
  display: block;
  content: "";
}
.list li {
  width: 289px;
  float: left;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.dimg {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.title{
  display: inline-block;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: bolder;
  color: red;
}
.title::before{
  content: '|';
  display: inline-block;
  color: red;
  margin-right: 5px;
}
.line{
  /* width: 80%; */
  /* margin: 0 auto; */
  border: 3px dashed #ccc;
}
</style>