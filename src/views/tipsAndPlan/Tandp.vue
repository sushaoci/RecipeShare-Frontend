<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="今日计划" name="first">
        <Plan />
      </el-tab-pane>
      <el-tab-pane label="Tips" name="second">
        <Tips />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Tips from "./components/tips";
import Plan from "./components/plan";
export default {
  components: {
    Tips,
    Plan
  },
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    }
  }
};
</script>

<style>
</style>