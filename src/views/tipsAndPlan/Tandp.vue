<template>
  <div>
    <el-container>
      <el-aside width=300px>
       <Tips :tips="tips" />
      </el-aside>
      <el-main class="plan">
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="今日计划" name="first">
        <p>根据您的今日计划，预计您今日将摄入{{this.energy}}卡路里</p>
        <Plan :plans="plans" />
      </el-tab-pane>
      <el-tab-pane label="Tips" name="second">
        <Tips :tips="tips" />
      </el-tab-pane>
    </el-tabs> -->
    <div class="dptitle">
    <h3>今日计划</h3>
    <p></p>
     <span class="cal">根据您的今日计划，预计您今日将摄入</span>
     <span class="col">{{this.energy}}</span>
     <span class="cal">卡路里</span>
    </div>
     <el-divider></el-divider>
    <Plan :plans="plans" />
      </el-main>
    <el-aside width=100px></el-aside>
    </el-container>
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
      // axios.get(global.url + "").then(res => {
      //   this.tips = res.
      //   this.plans = res.
      //   this.energy = res.
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
.nav-menu {
    margin-bottom: 10px;
    }
    
.dptitle{
  margin:13px;
  margin-bottom:13px
}
.plan{
  text-align: left
}
.cal{
  color:#909399;
  font-size:15px;
}
.col{
  color:#F9D349;
  font-size:15px;
  font-weight:bolder;
}
  h3{
  margin-block-end: 1em;
   margin-block-start: 3em;
}
</style>