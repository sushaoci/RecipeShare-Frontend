<template>
  <el-card>
    <div v-for="(i,index) in rankList">
      <rank :id="index+1" :title="i.recipeName" :likes="i.likeNum" />
    </div>
  </el-card>
</template>

<script>
import rank from "./rank";

export default {
  components: {
    rank
  },
  props: {
    rankList: Array
  }
};
</script>

<style>
</style>