<template>
  <el-card>
    <el-avatar :src="profile.avatar"></el-avatar>
    <h1>{{profile.name}}</h1>
    <p>
      {{profile.likes}} 喜欢
      {{profile.creates}} 创建
    </p>
    <el-button>创建菜单</el-button>
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
  }
};
</script>

<style>
</style>