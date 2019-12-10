<template>
  <div>
    <div class="name">
      <h1>菜谱名称</h1>
      <el-input v-model="name" placeholder="菜谱名称"></el-input>
    </div>
    <div class="img">
      <h1>上传封面</h1>
      <el-card class="box-card">
        <ImgUpload ref="cover" />
      </el-card>
    </div>
    <div class="material">
      <h1>用料</h1>
      <el-card class="box-card">
        <Material ref="material" />
      </el-card>
    </div>
    <div class="step">
      <h1>做法</h1>
      <StepList ref="steps" />
    </div>
    <el-button type="primary" @click.prevent="submit">确定上传</el-button>
  </div>
</template>

<script>
import Material from "./components/Material";
import ImgUpload from "./components/ImgUpload";
import StepList from "./components/StepList";

import global from "@/global/global";

export default {
  components: {
    Material,
    ImgUpload,
    StepList
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    submit() {
      // let recipe = {};
      // recipe.name = this.name;
      // recipe.cover = this.$refs.cover.getAll();
      // recipe.material = this.$refs.material.getAll();
      // recipe.steps = this.$refs.steps.getAll();

      // let formData = new FormData();
      // formData.append("recipe", recipe);
      // axios.post(global.url + "/recipe/release",formData).then();

      this.$router.push({path:'/home'})
    }
  },
  mounted() {}
};
</script>

<style>
</style>