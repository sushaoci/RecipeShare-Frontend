<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="今日计划" name="first">
        <p>根据您的今日计划，预计您今日将摄入{{this.energy}}卡路里</p>
        <Plan :plans="plans" />
      </el-tab-pane>
      <el-tab-pane label="Tips" name="second">
        <Tips :tips="tips" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Tips from "./components/tips";
import Plan from "./components/plan";

import tandp from "@/data/tipsAndPlan.json";

export default {
  components: {
    Tips,
    Plan
  },
  data() {
    return {
      activeName: "first",
      tips: [],
      plans: [],
      energy: ""
    };
  },
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
    getData() {
      let formData = new FormData();
      formData.append("userId", global.id);

      // axios.post(global.url + "/mydailyplan",formData).then(res => {
      //   this.plans = res.data;
      // });
      
      this.tips = tandp.tips;
      this.plans = tandp.plans;
      this.energy = tandp.energy;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>