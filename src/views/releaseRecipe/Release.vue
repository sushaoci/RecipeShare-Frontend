<template>
  <div>
    <div class ="middle" >
    <el-card class="box-card1">
    <div slot="header" class="clearfix">
      <span style="font-weight: bold;font-size: 20px">上传菜谱</span>
    </div>
    <div class="block">
      <el-timeline>
        <el-timeline-item  timestamp="菜谱名称" placement="top">
          <div class="name">
          <el-input v-model="name" placeholder="菜谱名称"></el-input>
         </div>
        </el-timeline-item>
        <el-timeline-item timestamp="用料" placement="top">
           <div class="material">
      <el-card class="box-card2">
        <Material ref="material" />
      </el-card>
    </div>
        </el-timeline-item>
        <el-timeline-item timestamp="做法" placement="top">
         <div class="step">
         <StepList ref="steps" />
         </div >
        </el-timeline-item>
    
        <el-timeline-item >
        <div class="step">
         </div >
        </el-timeline-item>
      </el-timeline>


    </div>
    <div class="button">
      <el-button type="primary" @click.prevent="submit">确定上传</el-button>
</div>
  </el-card>
    </div>

    
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
.middle{
  position: relative;
  margin: 18%;
   
}
.button{
  display: flex;
  justify-content: center;
}
 .box-card1 {
    text-align: left;
    margin: 0 auto; 
  }
  .material{
   align-content :center;
}
  .el-timeline-item{
    font-weight: bold;
    font-size: 30px；
  }
  .block{

    width:90%;
  }
</style>