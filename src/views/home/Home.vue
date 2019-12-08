<template>
  <div>
    <RankList :rankList="rankList" />
    <!-- <el-col :span="6">
      <Profile :profile="profile"/>
    </el-col>-->

    <!-- <el-col :span="4">
      <LeftFilter :tags="tags" @filter="filter(arguments)" />
    </el-col>

    <el-col :span="15">
      <div v-for="recipe in recipeShow">
        <RecipeCard :url="recipe.url" :title="recipe.title" :author="recipe.author" />
      </div>
    </el-col>-->
  </div>
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
  }
};
</script>

<style>
</style>