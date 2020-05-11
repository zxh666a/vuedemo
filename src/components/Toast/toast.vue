<template>
    <div class="box" v-if="show">
      <span>{{text}}</span>
      <a @click="close">X</a>
    </div>
</template>

<script>
export default {
  name: "toast",
  props: ["text"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    close() {
      this.show = false;
    }
  }
};
</script>

<style scoped>
.box {
  position: fixed;
  width: 300px;
  height: 300px;
  background-color: #1abc9c;
  z-index: 100;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  margin-top: -150px;
  border-radius: 20px;
}
span {
  position: absolute;
  display: block;
  font-size: 18px;
  font-weight: bolder;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 25px;
}
a {
  position: absolute;
  right: 20px;
  top: 15px;
  color: white;
  font-weight: bolder;
}
</style>