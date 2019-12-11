<template>
  <div>
    <el-row>
      <el-col :span="2">
        <el-avatar :src="avatar"></el-avatar>
      </el-col>
      <el-col :span="22">
        <el-row>
            <el-col :span="6"> {{name}} </el-col>
            <el-col :span="8"> {{time}} </el-col>
        </el-row>
        <el-row> {{content}} </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    props:{
        avatar:String,
        name:String,
        time:String,
        content:String,
    }
};
</script>

<style>
</style>