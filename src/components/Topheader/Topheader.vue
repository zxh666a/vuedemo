<template>
  <div class="c" :style="{height:containerheight}">
    <div :style="{width:leftwidth}" :class="{left:iscenter}">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div :style="{width:rightwidth}" :class="{right:iscenter}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topheader",
  props: ["leftwidth", "rightwidth", "iscenter", "containerheight"]
};
</script>

<style scoped>
.c {
  display: flex;
}
.mid {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left,
.right {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>