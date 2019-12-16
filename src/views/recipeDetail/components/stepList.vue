<template>
  <div>
      <div v-for="(i,index) in steps">
        <div class="step">
          <span class="step-index"> {{index+1}} </span>
          <step :content="i.stepDesc" :img="i.image"/>
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
