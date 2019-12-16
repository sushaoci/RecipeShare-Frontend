<template>
  <div>
    <div  class="item">
      <el-row>
        <el-col :span="2">
          <el-avatar :src="avatar"></el-avatar>
        </el-col>
        <el-col :span="22">
          <el-row class="content5">
            <el-col :span="6"> {{name}} </el-col>
            <el-col :span="8"> {{time}} </el-col>
          </el-row>
          <el-row class="content4"> <p style="text-indent：2em;">{{content}}</p> </el-row>
          <el-divider></el-divider>
        </el-col>

      </el-row>
    </div>

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
  .content5{
    text-align: left;
  }
  .content4{
    text-align: left;

  }
  .el-divider--horizontal {
    margin-top: 2px;
  }
</style>
