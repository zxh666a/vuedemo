<template>
  <div class="nav-container" :style="{backgroundColor:color}">
    <div class="nav-main">
      <div class="left">
        <slot name="left" class="left"></slot>
      </div>
      <div class="right">
        <slot name="right" class="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topNav",
  props:['color'],
  methods: {
  }
};
</script>

<style scoped>
.nav-container {
  height: 40px;
  margin: 0 auto;
  /* background-color: red; */
}
.nav-main {
  display: flex;
  justify-content: space-between;
  width: 1190px;
  height: 40px;
  margin: 0 auto;
}
.left,
.right {
  font-size: 12px;
  height: 40px;
  line-height: 40px;
}
</style>