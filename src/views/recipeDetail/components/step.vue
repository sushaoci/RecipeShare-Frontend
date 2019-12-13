<template>
  <div>
    <el-row>
        <div class="content">
      <el-col :span="10">
      
        <p>{{content}}斤不需要这么多）</p>
       
      </el-col>
       </div>
      <div class="image">
      <el-col :span="14">
        <img :src="img" alt="img" />
      </el-col>
      </div>
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
.content{
 
   background: #d3dce6;
   width: 640px;
}
 .el-col {
    border-radius: 4px;
    
  }
  p{
    margin-block-start: 0%;
  }
</style>