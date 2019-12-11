<template>
  <el-card>
    <div class="info" @click="onclick">
      <el-avatar :src="profile.avatar"></el-avatar>
      <h1>{{profile.name}}</h1>
    </div>
    <p>
      {{profile.likes}} 喜欢
      {{profile.creates}} 创建
      {{profile.follow}} 关注
      {{profile.fan}} 粉丝
    </p>
    <el-button @click="create">创建菜单</el-button>
    <el-button @click="plan">今日计划</el-button>
  </el-card>
</template>

<script>
export default {
  props: {
    profile: {
      avatar: String,
      name: String,
      likes: Number,
      creates: Number
    }
  },
  methods: {
    onclick() {
      this.$router.push({ path: "/main" });
    },
    create() {
      this.$router.push({ path: "/release" });
    },
    plan() {
      this.$router.push({ path: "/tandp" });
    }
  }
};
</script>

<style>
</style>