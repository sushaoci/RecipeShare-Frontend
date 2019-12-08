<template>
  <div class="hi">
    <el-row>
      <el-col :span="4">
        <i>{{id}}</i>
      </el-col>
      <el-col :span="20">
        <el-row>
            <h1>{{title}}</h1>
        </el-row>
        <el-row>{{likes}} 喜欢</el-row>
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
</style>