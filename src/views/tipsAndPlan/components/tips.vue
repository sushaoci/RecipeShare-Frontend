<template>
  <div class="block">
    <div v-for="(i,index) in tips">
        <p> tip{{index}}:{{i}} </p>
    </div>
  </div>
</template>

<script>
import tandp from "@/data/tipsAndPlan.json";

export default {
  data() {
    return {
      tips: []
    };
  },
  methods: {
    getData() {
      this.tips = tandp.tips;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>