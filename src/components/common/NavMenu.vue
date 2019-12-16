<template>
  <div>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      @select="handleSelect"
      background-color="#F9D349"
      text-color="#fff"
      active-text-color="red"
      style="min-width: 130px"
    >
      <!-- <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}

      </el-menu-item> -->
      <div @click="back">
          <i class="el-icon-food"></i>
      </div>
      
      <i class="el-icon-switch-button" v-on:click="logout"></i>
      <span class="title-name">Fit    Recipe</span>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      navList: [
        { name: "/index", navItem: "首页" },
        { name: "/jotter", navItem: "笔记本" },
        { name: "/library", navItem: "图书馆" },
        { name: "/admin", navItem: "个人中心" }
      ],
      keywords: ""
    };
  },
  computed: {
    hoverBackground() {
      return "#ffd04b";
    }
  },
  methods: {
    back(){
      this.$router.push({
        path:"/index"
      })
    },
    handleSelect(key, keyPath) {
    },

    logout() {
      var _this = this;
      this.$axios
        .get("/logout")
        .then(resp => {
          if (resp.data.code === 200) {
            // 前后端状态保持一致
            _this.$store.commit("logout");
            _this.$router.replace("/login");
          }
        })
        .catch(failResponse => {});
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

  span {
    pointer-events: none;
  }
.el-icon-food{
font-size: 40px;
color:#000;
float: left;
padding: 10px;
padding-left:20px;
cursor: pointer;
}

.title-name{
  padding-top: 12px;
  padding-left: 15px;
  color:#000;
  float: left;
  font-size: 32px;
  font-weight: bold;
  word-spacing:6px
  }
  .el-icon-switch-button {
    cursor: pointer;
    /*去除点击时的框线*/
    outline:0;
    float:right;
    font-size: 20px;
    color:#000;
    padding: 20px
  }
</style>
