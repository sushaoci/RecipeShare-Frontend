<template>
  <el-card class="box-card">
    <div>
      <el-avatar :src="profile.avatar"></el-avatar>
      <h1>{{profile.name}}</h1>
      <el-row>
        <el-col :span="12">{{profile.likes}} 喜欢</el-col>
        <el-col :span="12">{{profile.creates}} 创建</el-col>
      </el-row>
      <el-row>
          <el-button>创建菜单</el-button>
      </el-row>
    </div>
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