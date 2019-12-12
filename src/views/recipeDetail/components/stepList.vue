<template>
  <div>
      <div v-for="(i,index) in steps">
          <span> {{index}} </span>
          <step :content="i.content" :img="i.img"/>
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
</style>