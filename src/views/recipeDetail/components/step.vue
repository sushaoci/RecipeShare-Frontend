<template>
  <div>
    <el-row>
      <el-col :span="6">
        <p>{{content}}</p>
      </el-col>
      <el-col :span="18">
        <img :src="img" alt="img" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    props:{
        content:String,
        img:String,
    }
};
</script>

<style>
</style>