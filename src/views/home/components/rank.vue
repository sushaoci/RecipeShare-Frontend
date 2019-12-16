<template>
  <div class="hi">
    <el-row>
      <el-col :span="4">
        <i>{{id}}</i>
      </el-col>
      <el-col :span="20">
        <el-row >
          <div class="row-tit">
            <span class="title">{{title}}</span>
          </div>
        </el-row>
        <el-row>
           <div class="row-title">
          {{likes}} 喜欢
           </div>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
      id: Number,
      title: String,
      likes:Number
  },
};
</script>

<style>
h1{
    font-size: 1em
}
.title{
  font-weight: bold;
}
.row-tit{
  display: flex;
  justify-content: left;
}
.row-title{
  display: flex;
  justify-content:flex-end;
  color:#909399;
}
</style>