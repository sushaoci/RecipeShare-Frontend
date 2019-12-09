<template>
  <div class="block">
    <el-timeline>
      <div v-for="i in plans">
        <el-timeline-item :timestamp="i.time" placement="top">
          <RecipeCard :url="i.url" :title="i.title" :author="i.author" />
        </el-timeline-item>
      </div>
    </el-timeline>
  </div>
</template>

<script>
import RecipeCard from "@/views/home/components/recipeCard";
import tandp from "@/data/tipsAndPlan.json";

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      plans: []
    };
  },
  methods: {
    getData() {
      this.plans = tandp.plans;
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>