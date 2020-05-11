<template>
  <div class="main">
    <div class="tab">
      <ul>
        <li
          :class="{active:currentindex==index}"
          v-for="(item,index) in title"
          :key="index"
          @click="itemclick(index)"
        >
          <a>{{item.title}}</a>
          <a>{{item.num}}</a>
        </li>
      </ul>
    </div>
    <detailTab v-show="isshow('detail')"></detailTab>
    <rateTab v-show="isshow('rate')"></rateTab>
    <serverTab v-show="isshow('server')"></serverTab>
  </div>
</template>

<script>
import detailTab from "../Tab/detailTab";
import rateTab from "../Tab/rateTab";
import serverTab from "../Tab/serverTab";
export default {
  name: "goodsmore",
  props: ["title"],
  data() {
    return {
      currentindex: 0,
      type: "detail"
    };
  },
  computed: {
  },
  components: {
    detailTab,
    rateTab,
    serverTab
  },
  methods: {
    itemclick(index) {
      this.currentindex = index;
      switch (index) {
        case 0:
          this.type = "detail";
          break;
        case 1:
          this.type = "rate";
          break;
        case 2:
          this.type = "server";
          break;
      }
    },
    isshow(type) {
      if (this.type == type) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.main {
  margin-left: 260px;
  /* width: 678px; */
  /* height: 100px; */
  /* border: 1px solid red; */
    border: 3px dashed #ccc;
}
.tab ul::after {
  clear: both;
  display: block;
  content: "";
}
.tab ul li {
  float: left;
  /* background-color: red; */
  height: 50px;
  width: 100px;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.active {
  color: red;
}
</style>