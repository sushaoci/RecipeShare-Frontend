<template>
  <div>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      @select="handleSelect"
      background-color="#409EFF"
      text-color="#fff"
      active-text-color="red"
      style="min-width: 130px">
      <!-- <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item> -->
      <i class="el-icon-food" style="font-size: 40px;color:#fff;padding-right: 1003px;padding-top: 10px"></i>
      <i class="el-icon-switch-button" v-on:click="logout" style="float:right;font-size: 20px;color:#fff;padding: 20px"></i>
     
      <span class="title-name">Healthy Recipe</span>
      
      <el-input style="width: 300px;position:absolute;margin-top: 12px;right: 42%;"
        placeholder="快速搜索..."
        prefix-icon="el-icon-search"
        size="medium"
        v-model="keywords">
      </el-input>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavMenu',
    data () {
      return {
        navList: [
          {name: '/index', navItem: '首页'},
          {name: '/jotter', navItem: '笔记本'},
          {name: '/library', navItem: '图书馆'},
          {name: '/admin', navItem: '个人中心'}
        ],
        keywords: ''
      }
    },
    computed: {
      hoverBackground () {
        return '#ffd04b'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },

      logout () {
        var _this = this
        this.$axios.get('/logout').then(resp => {
          if (resp.data.code === 200) {
            // 前后端状态保持一致
            _this.$store.commit('logout')
            _this.$router.replace('/login')
          }
        }).catch(failResponse => {})
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }

.title-name{
  position: absolute;
  padding-top: 12px;
  color:#fefefe;
  right: 70%;
  font-size: 32px;
  font-weight: bold
  }
  .el-icon-switch-button {
    cursor: pointer;
    /*去除点击时的框线*/
    outline:0;
  }
</style>
