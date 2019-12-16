<template>
  <div>
    <div class="head">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <p></p>
      <p>{{name}}</p>
    </div>
    <el-container>
      <el-aside width="250px">
        <el-table :data="tableData" style="width: 100%" height="250" max-height="250">
          <el-table-column prop="username" label="关注列表" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="see(scope.row)" type="text" size="small">查看</el-button>
              <el-button @click="rm(scope.row)" type="text" size="small">移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-aside>
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
      name: "",
      tableData: [],
      likes: [],
      created: []
    };
  },
  methods: {
    see(row) {
      this.$router.push({
        path: "/otherMain",
        query: { id: row.userId }
      });
    },
    rm(row) {
      let formData = new FormData();
      formData.append("userId", global.id);
      formData.append("followingUserId", row.userId);

      axios.post(global.url + "/unfollow", formData).then(res => {
        console.log(res)
      });
    },
    getData() {
      // console.log(window.localStorage.getItem("user"))

      let formData = new FormData();
      formData.append("userId", global.id);

      axios.post(global.url + "/getRecipeByUserId", formData).then(res => {
        this.created = res.data;
      });

      axios.post(global.url + "/getUserCollection", formData).then(res => {
        console.log(res.data)
        this.likes = res.data;
      });

      axios.post(global.url + "/followinglist", formData).then(res => {
        this.tableData = res.data;
      });
        axios.post(global.url + "/getUserInfoById", formData).then(res => {
            console.log(res)
            this.name = res.data.data.username;
        });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
.head {
  background: #f9d349;
  padding-top: 25px;
  padding-bottom: 15px;
}
.first {
  margin-block-start: 0em;
}
p {
  font-weight: bolder;
}
</style>
