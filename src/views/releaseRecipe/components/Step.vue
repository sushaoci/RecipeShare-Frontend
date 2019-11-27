<template>
  <el-card class="box-card">
    <el-row>
      <el-col :span="2">
        <h3>{{this.index}}</h3>
      </el-col>
      <el-col :span="10">
        <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="content"></el-input>
      </el-col>
      <el-col :span="12">
        <ImgUpload ref="img" />
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import ImgUpload from "./ImgUpload";
export default {
  props: ["index"],
  components: {
    ImgUpload
  },
  data() {
    return {
      content: ""
    };
  },
  methods: {
    getOne() {
      let step = {};
      step.content = this.content;
      step.img = this.$refs.img.getAll();
      if (step.content != "" && step.img != undefined) {
        return step;
      }
    }
  }
};
</script>

<style>
</style>