<template>
  <div class="c">
    <div class="login" v-if="tab">
      <p>登录</p>
      <form action class="form">
        <div class="main">
          <span class="title">用户名:</span>
          <input type="text" id="name" ref="name" v-model="loginname" />
        </div>
        <div class="main">
          <span class="title">密码:</span>
          <input type="password" id="pwd1" ref="pwd" v-model="loginpwd" />
        </div>
      </form>
      <a href="javascript:;" class="button" @click="login">确定</a>
      <a href="javascript:;" class="button" @click="reset">重置</a>
      <div class="tab">
        <a href="javascript:;" @click="tab = true" :class="{active:tab}">登录</a>
        <a href="javascript:;" @click="tab = false" :class="{active:!tab}">注册</a>
      </div>
    </div>

    <div class="register" v-else>
      <p>注册</p>
      <form action class="form2">
        <div class="main">
          <span class="title">用户名:</span>
          <input type="text" id="name2" ref="name2" v-model="regname" />
        </div>
        <div class="main">
          <span class="title">密码:</span>
          <input type="password" id="pwd2" ref="pwd2" v-model="regpwd" />
        </div>
        <div class="main">
          <span class="title">请重复输入密码:</span>
          <input type="password" id="pwd3" ref="pwd3" v-model="regpwd2" />
        </div>
      </form>
      <a href="javascript:;" class="button2" @click="register ">确定</a>
      <a href="javascript:;" class="button2" @click="reset">重置</a>
      <div class="tab">
        <a href="javascript:;" @click="tab = true" :class="{active:tab}">登录</a>
        <a href="javascript:;" @click="tab = false" :class="{active:!tab}">注册</a>
      </div>
    </div>

    <!-- 背景 -->
    <img
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1587810522727&di=b63eb7d47e487353e28ce58b6c21b2cc&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D4105966305%2C1450124775%26fm%3D214%26gp%3D0.jpg"
      alt
    />
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      // 切换
      tab: true,
      // 登录表单的数据
      loginname: "",
      loginpwd: "",
      // 注册表单的数据
      regname: "",
      regpwd: "",
      regpwd2: ""
    };
  },
  methods: {
    //重置表单
    reset() {
      this.$refs.name.value = "";
      this.$refs.pwd.value = "";
      this.$refs.name2.value = "";
      this.$refs.pwd2.value = "";
      this.$refs.pwd3.value = "";
    },
    // 表单验证
    login() {
      // console.log(this.loginname,this.loginpwd)
      if (this.loginname.length < 6) {
        alert("必须大于6位数");
        return;
      }
      if (this.loginpwd.length < 8) {
        alert("密码必须大于8位数");
        return;
      }
      // console.log('123')
    },
    // 注册的验证
    register() {
      if (this.regname.length < 6) {
        alert("必须大于6位数");
        return;
      }
      if (this.regpwd.length < 8) {
        alert("密码必须大于8位数");
        return;
      }
      if(this.regpwd !== this.regpwd2){
        alert("两次密码必须一致")
        return
      }
      console.log('123')
    }
  }
};
</script>

<style scoped>
.active{
  background-color: #e74c3c !important
}
/* 登录框 */
.login,
.register {
  position: absolute;
  left: 25%;
  top: 25%;
  width: 350px;
  height: 356px;
  background-color: #850132;
  z-index: 99;
  border-radius: 30px;
}
/* 背景图片 */
img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  min-width: 1420px;
}
/* 表单 */
.form {
  margin-top: 71px;
  margin-left: 16px;
}
.form2 {
  margin-top: 44px;
  margin-left: 16px;
}
/* 表单内的div */
.main {
  margin-top: 40px;
}
/* 表单内的标题 */
.title {
  margin-top: 20px;
  font-size: 16px;
  font-weight: bolder;
  color: wheat;
  margin-left: 20px;
}

/* 输入框 */
input {
  border-radius: 10px;
  padding-left: 10px;
  width: 150px;
  height: 25px;
}
/* 输入框 */
#name {
  margin-left: 85px;
}
#name2 {
  margin-left: 85px;
}
#pwd1 {
  margin-left: 101px;
}
#pwd2 {
  margin-left: 100px;
}
#pwd3 {
  margin-left: 20px;
}
p {
  width: 100px;
  height: 20px;
  font-size: 20px;
  font-weight: bolder;
  color: wheat;
  margin: 20px auto;
  text-align: center;
}
.button {
  display: inline-block;
  width: 80px;
  height: 40px;
  border: 2px solid #ecf0f1;
  line-height: 40px;
  text-align: center;
  margin-top: 65px;
  margin-left: 64px;
  color: white;
  font-weight: bolder;
  border-radius: 20px;
}
.button2 {
  display: inline-block;
  width: 80px;
  height: 40px;
  border: 2px solid #ecf0f1;
  line-height: 40px;
  text-align: center;
  margin-top: 30px;
  margin-left: 64px;
  color: white;
  font-weight: bolder;
  border-radius: 20px;
}
/* tab */
.tab {
  position: absolute;
  z-index: 99;
  right: -38px;
  top: 2%;
  width: 38px;
  /* border: 1px solid red; */
  font-size: 19px;
  font-weight: bolder;
}
.tab a {
  display: inline-block;
  height: 49px;
  width: 36px;
  text-align: center;
  margin-top: 20px;
  background-color: #850132;
  border-radius: 0px 50% 50% 0px;
  color: white;
}
</style>