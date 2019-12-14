<template>
    <div>
       <div class="head">
      <el-avatar :src="avatar"> </el-avatar>
      <p></p>
      <p> {{name}} 你的名字</p>
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
            :url="recipe.url"
            :title="recipe.title"
            :author="recipe.author"
            :thumb="recipe.thumb"
            :id="recipe.id"
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