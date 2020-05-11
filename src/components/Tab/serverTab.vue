<template>
  <div class="wrapper">
    <ul class="list">
      <li v-for="(item,index) in goodsinfo.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "serverTab",
  data() {
    return {
      server: []
    };
  },
  computed:{
    ...mapState(['goodsinfo'])
  },
  mounted() {
    // this.getdata();
  },
  methods: {
    getdata() {
      let sessioninfo = window.sessionStorage.getItem("goodsinfo");
      if (this.server === JSON.parse(sessioninfo).services) {
        // console.log("123");
        this.server = this.$store.state.goodsinfo.services;
      } else {
        // console.log("446");
        this.server = JSON.parse(sessioninfo).services;
      }
    }
  }
};
</script>

<style scoped>
.wrapper{
  min-height: 600px;
}
.list{
  display: flex;
  justify-content: space-around;
  margin: 20px 20px;
}
</style>