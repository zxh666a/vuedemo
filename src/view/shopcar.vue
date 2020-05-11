<template>
  <div>
    <Nav></Nav>
    <div class="container">
      <TopHeader leftwidth="150px" rightwidth="150px" iscenter="true" containerheight="97px">
        <!-- 左侧 -->
        <img src="../../public/vip.svg" alt slot="left" />
        <!-- 中间 -->
        <div class="mid" slot="mid">
          <span>购物车</span>
        </div>
      </TopHeader>
      <ShopcarList></ShopcarList>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav/IndexNav";
import TopHeader from "../components/Topheader/Topheader";
import ShopcarList from "../components/Shopcar/shopcarlist";
export default {
  name: "shopcar",
  components: {
    Nav,
    TopHeader,
    ShopcarList
  }
};
</script>

<style scoped>
span {
  font-size: 20px;
  font-weight: bolder;
}
</style>