<template>
  <div class="wrapper">
    <!-- <ul class="rate-list">
      <li v-for="(item,index) in goodsinfo.rate.list" :key="index">
        <div class="user">
          <img :src="item.user.avatar" alt class="avatar" />
          <span class="name">{{item.user.uname}}</span>
        </div>
        <div class="rate">
          <span class="main">{{item.content}}</span>
          <span class="time">{{item.created}}</span>
        </div>
      </li>
    </ul> -->
    {{goodsinfo.rate}}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "rateTab",
  data() {
    return {
      // goodsinfo: []
    };
  },
  computed: {
    ...mapState(["goodsinfo"])
  },
  mounted() {
    // console.log(this.$store.state.goodsinfo);
    // this.getdata()
    // console.log(this.rate)
  },
  methods: {
    getdata() {
      if(!this.$store.state.rate){
        let a = window.sessionStorage.getItem('goodsinfo')
        this.goodsinfo = JSON.parse(a)
      }
    }
  }
};
</script>

<style scoped>
.wrapper{
  min-height: 600px;
}
.rate-list li > div {
  float: left;
}
.rate-list li::after {
  display: block;
  content: "";
  clear: both;
}
.rate-list li {
  position: relative;
}
.user {
  /* display: inline-block; */
  width: 60px;
  height: 60px;
  margin: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.avatar {
  width: 40px;
  height: 40px;
}
.name {
  display: block;
  font-size: 12px;
}
.rate {
  /* display: inline-block; */
  height: 60px;
  width: 600px;
  /* text-align: center; */
  margin-left: 20px;
  /* line-height: 60px; */
  margin-top: 20px;
}
.time {
  position: absolute;
  right: 45px;
  top: 10px;
  /* margin-left: 336px; */
}
</style>