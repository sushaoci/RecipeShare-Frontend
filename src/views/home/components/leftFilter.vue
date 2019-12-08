<template>
  <el-menu default-active="0" class="el-menu-vertical-demo">
    <div v-for="(tag,index) in tags">
      <el-menu-item :index="index.toString()" @click="filter(index)">
        <i :class="tag.icon"></i>
        <span slot="title">{{tag.name}}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  props: {
    tags: Array
  },
  methods: {
    filter(index) {
        this.$emit('filter',this.tags[index].name);
    }
  }
};
</script>

<style>
</style>