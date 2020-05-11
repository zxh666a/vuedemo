<template>
  <div @mouseleave="close">
    <div class="wrap">
      <ul class="category-list">
        <li v-for="(item,index) in catobj" :key="index" @mouseenter="itemclick(index)">
          <a href="javascript:;">{{item.title}}</a>
          <i class="iconfont icon-jiantou"></i>
        </li>
      </ul>
    </div>
    <div class="category-item" v-if="show">
      <ul class="list">
        <li v-for="(items,index) in right" :key="index">
          <img :src="items.image" alt class="item-image" />
          <p>{{items.title}}</p>
          <!-- {{items}} -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      //只有title和key的分类
      catobj: [],
      //所有分类的详情数据
      item: [],
      //根据index 返回相应数据
      right: [],
      show: false
    };
  },
  mounted() {
    this.getcategory();
    // this.$request({
    //   url:'/subcategory',
    //   params:{
    //     maitKey:'3627'
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })
  },
  methods: {
    //获取分类
    getcategory() {
      this.$request({
        url: "/category"
      }).then(res => {
        let category = res.data.category.list;
        // console.log(category)
        category.forEach((item, index) => {
          if (index < 10) {
            // this.catobj[index] = {
            //   keys: item.maitKey,
            //   title: item.title
            // };
            let obj = {
              keys: item.maitKey,
              title: item.title
            };
            this.$set(this.catobj, index, obj);
          }
        });
        // this.getcategoryitem();
        // console.log(this.catobj);
        // console.log(this.catobj);
      });
    },
    itemclick(index) {
      this.show = true;
      this.right = this.item[index];
      // console.log(this.right)
    },
    getcategoryitem() {
      this.catobj.forEach(item => {
        let maitKey = item.keys;
        // console.log(maitKey);
        this.$request({
          url: "/subcategory",
          params: {
            maitKey
          }
        })
          .then(res => {
            let obj = [...res.data.list];
            // obj.push(res.data.list);
            // console.log(obj)
            this.item.push(obj);
          })
          .catch(err => {
            console.log(err);
          });
      });
      // console.log(this.item);
    },
    close() {
      this.show = false;
    }
  },
  computed: {}
};
</script>

<style scoped>
.wrap {
  position: absolute;
  width: 191px;
  height: 312px;
  border: 2px solid red;
  background-color: white;
  overflow: hidden;
  border-radius: 20px;
}
.category-list {
  height: 305px;
  box-sizing: border-box;
  width: 199px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.category-list li {
  position: relative;
  top: -4px;
  padding-top: 17px;
  font-size: 14px;
  padding-left: 42px;
  height: 13.5px;
  line-height: 2px;
  font-weight: bolder;
  border-bottom: 1px solid #ccc;
}
.category-list li i {
  position: absolute;
  left: 155px;
}
.category-list li:hover {
  background-color: #1abc9c;
}
a {
  color: #34495e;
}
.category-item {
  position: absolute;
  left: 195px;
  background-color: red;
  width: 569px;
  height: 316px;
  z-index: 99;
  overflow: auto;
}
.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.list li {
  padding: 10px 10px;
  text-align: center;
}
.item-image {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}
</style>