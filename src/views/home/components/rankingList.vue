<template>
  <el-card>
    <div v-for="i in rankList">
      <rank :id="i.id" :title="i.title" :likes="i.likes" />
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