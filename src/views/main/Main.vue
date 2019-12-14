<template>
  <div>
 <div class="head">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <p></p>
      <p>用户名</p>
 </div>
 <el-container>
     <el-aside width="150px"></el-aside>
    <el-main>
       

      <div class="likes">
        <h3 class="first">我的收藏</h3>
        <div v-for="recipe in likes">
          <RecipeCard
            :url="recipe.recipeImage"
            :title="recipe.recipeName"
            :author="recipe.recipeUsername"
            :thumb="recipe.likeNum"
            :id="recipe.recipeId"
          />
        </div>
      </div>
      <div class="created">
        <h3>我的发布</h3>
        <div v-for="recipe in created">
          <RecipeCard
            :url="recipe.recipeImage"
            :title="recipe.recipeName"
            :author="recipe.recipeUsername"
            :thumb="recipe.likeNum"
            :id="recipe.recipeId"
          />
        </div>
      </div>
    
    </el-main>
     <el-aside width="150px"></el-aside>

    </el-container>
  </div>
</template>

<script>
import RecipeCard from "@/views/home/components/recipeCard";
import recipes from "@/data/recipes";

import axios from "axios";
import global from "@/global/global";

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      likes: [],
      created: []
    };
  },
  methods: {
    getData() {

      // console.log(window.localStorage.getItem("user"))

      let formData = new FormData();
      formData.append("userId", global.id);

      axios.post(global.url + "/getRecipeByUserId", formData).then(res => {
        this.created = res.data;
      });
      axios.post(global.url + "/getUserCollection", formData).then(res => {
        this.likes = res.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
 .head{
    background:#F9D349;
    padding-top:25px;
    padding-bottom:15px
  }
  .first{
  margin-block-start: 0em;
}
p{
  font-weight:bolder;
}
</style>