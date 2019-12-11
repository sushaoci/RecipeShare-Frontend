<template>
<el-container>
    <el-aside width="200px"> 
      <div class="filter">
      <LeftFilter :tags="tags" @filter="filter(arguments)" />
    </div>
</el-aside>
    <el-container>
      <el-main style="padding-top:0px">
      <div class="recipe">
      <div v-for="recipe in recipeShow">
        <RecipeCard :url="recipe.url" :title="recipe.title" :author="recipe.author" />
      </div>
    </div>
    </el-main>
   <el-aside width="300px"> 
    
    <div class="profile">
      <Profile :profile="profile" />
    </div>
    <div class="ranklist">
      <RankList :rankList="rankList" />
    </div>
    
</el-aside>

    </el-container>
</el-container>

</template>

<script>
import recipes from "@/data/recipes.json";
import tags from "@/data/tags.json";
import profile from "@/data/profile.json";
import rankList from "@/data/rankList.json";

import RecipeCard from "./components/recipeCard";
import LeftFilter from "./components/leftFilter";
import Profile from "./components/rightProfile";
import RankList from "./components/rankingList";

import axios from 'axios'

export default {
  components: {
    RecipeCard,
    LeftFilter,
    Profile,
    RankList
  },
  data() {
    return {
      recipes: [],
      tags: [],
      recipeShow: [],
      profile: [],
      rankList: []
    };
  },
  methods: {
    getData() {
      this.recipes = recipes.recipes;
      this.tags = tags.tags;
      this.recipeShow = recipes.recipes;
      this.profile = profile.profile;
      this.rankList = rankList.rankList;
    },
    filter(vals) {
      this.recipeShow = [];
      let tag = vals[0];
      this.recipes.forEach(i => {
        if (i.tags.includes(tag)) {
          this.recipeShow.push(i);
        }
      });
    }
  },
  mounted() {
    this.getData();
    axios.get('http://localhost:8080/api/recipeRank').then(res=>{
      console.log(res.data);
      this.rankList = res.data;
    })
    axios.get('http://localhost:5000/',{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).then(res=>{
      console.log(res);
    })
  }
};
</script>

<style>
.main {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 300px auto;
}
.filter {
  grid-column: 1/2;
  justify-self: center;
  align-self: center;
}
 /* .recipe {
  background-color: black;
  grid-column: 2/3;
  justify-self: center;
  align-self: start;
}
.profile {
  background-color: brown;
  grid-row: 1/2;
  grid-column: 3/4;
  justify-self: center;
  align-self: center;
} */
/* .ranklist {
  background-color: cadetblue;
  grid-row: 2/3;
  grid-column: 3/4;
  justify-self: center;
  align-self: start;
}  */
</style>