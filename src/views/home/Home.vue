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

import axios from "axios";
import global from "@/global/global";

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
      this.tags = tags.tags;
      // axios.get(global.url + "/recipelist").then(res => {
      //   this.recipes = res.data;
      //   // this.tags = res.
      //   // this.profile = res.
      //   // this.rankList = res.
      // });
      axios.get(global.url + "/recipelist").then(res => {
        this.recipes = res.data;
        this.recipeShow = res.data;
        // this.tags = res.
        // this.profile = res.
        // this.rankList = res.

        // global.id = res.
      });
      // this.recipes = recipes.recipes;
      axios.post(global.url + "/recipeRank").then(res => {
        this.rankList = res.data;
      });

      let formData = new FormData();
      formData.append("userId",global.id);

      axios.post(global.url + "/getUserInfoById",formData).then(res => {
        // likes: Number,
        // creates: Number,
        this.profile.avatar = res.data.image;
        this.profile.name = res.data.username;
        this.profile.follow = res.data.following_num;
        this.profile.fan = res.data.followed_num;
      });
    },
    filter(vals) {
      this.recipeShow = [];
      let tag = vals[0];
      this.recipes.forEach(i => {
        if (i.recipeTag.includes(tag)) {
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