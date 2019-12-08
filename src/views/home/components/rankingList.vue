<template>
  <div>
    <div v-for="i in rankList">
      <el-row>
        <el-col :span="5">
          <rank :id="i.id" :title="i.title" :likes="i.likes" />
        </el-col>
      </el-row>
    </div>
  </div>
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