<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="2">
        <h3> {{this.index}} </h3>
      </el-col>
      <el-col :span="10">
        <el-input type="textarea" :rows="6" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="12">
        <ImgUpload />
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import ImgUpload from "./ImgUpload";
export default {
  props:['index'],
  components: {
    ImgUpload
  }
};
</script>

<style>
</style>