<template>
  <div>
      <div v-for="(i,index) in steps">
        <div class="step">
          <span class="step-index"> {{index}} </span>
          <step :content="i.content" :img="i.img"/>
        </div>
          <el-divider></el-divider>
      </div>
  </div>
</template>

<script>
import step from "./step";
export default {
  components: {
    step
  },
  props:{
      steps:Array,
  }
};
</script>

<style>
.step{
  display: flex;
  flex-flow: row;
 
}
.step-index{
  font-size: 25px;
  color:#E6A23C;
  margin-right: 7%
  
}
</style>