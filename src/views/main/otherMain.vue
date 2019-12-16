<template>
    <div>
       <div class="head">
      <el-avatar :src="avatar"> </el-avatar>
      <p></p>
      <p> {{name}}</p>
       <p></p>
      <el-button @click="follow" :disabled="isfollow">{{status}}</el-button>
      </div>
 <el-container>
   <el-aside width="150px"></el-aside>

    <el-main>

      <div class="created">
        <h3>ta的发布</h3>
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

import axios from 'axios'
import global from '@/global/global'

export default {
  components: {
    RecipeCard
  },
  data() {
    return {
      avatar:global.avatar,
      name:"",
      likes: [],
      created: [],
      isfollow: "",
      status: "",
      id: ""
    };
  },
  methods: {
    getData() {
      this.id = this.$route.query.id;

        let formData = new FormData();
        formData.append("userId", this.id);
        console.log(this.id)


        axios.post(global.url + "/getRecipeByUserId", formData).then(res => {
            console.log(res)
          this.created = res.data;
        });

        axios.post(global.url + "/getUserInfoById", formData).then(res => {
            this.name = res.data.data.username;
            console.log(res)
        });


      this.name = recipes.name;
      this.likes = recipes.recipes;
      this.created = recipes.recipes;
      this.isfollow = recipes.isfollow;

      if (!this.isfollow) {
        this.status = "关注ta";
      } else {
        this.status = "已关注";
      }

    },
    follow() {
        let formData = new FormData();
        formData.append("userId", global.id);
        formData.append("followingUserId", this.id);

        axios.post(global.url + "/follow", formData).then(res => {
            // this.getData();
            console.log(res)
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
    height: 160px;
    padding-top:25px;
    padding-bottom: 0px
  }
h3{
  margin-block-start: 0em;
}
</style>
