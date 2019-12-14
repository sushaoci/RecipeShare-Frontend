<template>
  <div class="block">
    <el-timeline>
      <div v-for="plan in plans">
        <el-timeline-item :timestamp="plan.dailyPlan.dpdate" placement="top">
          <RecipeCard
            :url="plan.recipe.recipeImage"
            :title="plan.recipe.recipeName"
            :author="plan.recipe.recipeUsername"
            :thumb="plan.recipe.likeNum"
            :id="plan.recipe.recipeId"
          />
        </el-timeline-item>
         <el-timeline-item >
        </el-timeline-item>
      </div>
    </el-timeline>
  </div>
</template>

<script>
import RecipeCard from "@/views/home/components/recipeCard";

export default {
  components: {
    RecipeCard
  },
  props: {
    plans: Array
  }
};
</script>

<style>
</style>