<template>
  <div>
    <el-header>
      <el-avatar :src="avatar"></el-avatar>
      <p> {{name}} </p>
    </el-header>

    <el-main>
      <el-button @click="follow" :disabled="isfollow">{{status}}</el-button>
      <div class="created">
        <h1>ta的发布</h1>
        <div v-for="recipe in created">
          <RecipeCard
            :url="recipe.url"
            :title="recipe.title"
            :author="recipe.author"
            :thumb="recipe.thumb"
            :id="recipe.id"
          />
        </div>
      </div>
    </el-main>
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

      //   let formData = new FormData();
      //   formData.append("id", this.id);

      //   axios.post(global.url + "", formData).then(res => {
      //     this.likes = res.
      //     this.created = res.
      //     this.isfollow = res.
      //   });


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
        // let formData = new FormData();
        // formData.append("id", global.id);
        // formData.append("author", this.id);

        // axios.post(global.url + "", formData).then(res => {
        //     this.getData();
        // });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>