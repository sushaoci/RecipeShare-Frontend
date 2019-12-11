<template>
  <div class="block">
    <el-timeline>
      <div v-for="recipe in plans">
        <el-timeline-item :timestamp="recipe.time" placement="top">
          <RecipeCard
            :url="recipe.url"
            :title="recipe.title"
            :author="recipe.author"
            :thumb="recipe.thumb"
            :id="recipe.id"
          />
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