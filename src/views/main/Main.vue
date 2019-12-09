<template>
  <div>
    <el-header>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <p>用户名</p>
    </el-header>
    <el-main>
      <div class="likes">
        <h1>我的收藏</h1>
        <div v-for="recipe in likes">
          <RecipeCard :url="recipe.url" :title="recipe.title" :author="recipe.author" />
        </div>
      </div>
      <div class="created">
        <h1>我的发布</h1>
        <div v-for="recipe in created">
          <RecipeCard :url="recipe.url" :title="recipe.title" :author="recipe.author" />
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
import RecipeCard from "@/views/home/components/recipeCard";
import recipes from "@/data/recipes";

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      likes:[],
      created:[],
    };
  },
  methods: {
    getData() {
      this.likes = recipes.recipes;
      this.created = recipes.recipes;
    }
  },
  mounted(){
      this.getData();
  }
};
</script>

<style>
</style>