<template>
  <el-container>
    <el-aside width="200px"></el-aside>

    <el-container>
      <el-main>
        <div>
          <img :src="cover" alt="cover" />
          <el-row>
            <el-col :span="8">
              <el-button @click="plan">加入今日计划</el-button>
            </el-col>
            <el-col :span="8">
              <el-button @click="xihuan">喜欢</el-button>
            </el-col>
            <el-col :span="8">
              <el-button @click="like">收藏</el-button>
            </el-col>
          </el-row>
          <div @click="into">
            <el-row>
              <el-col>
                <el-avatar :src="avatar"></el-avatar>
              </el-col>
              <el-col>
                <span>{{name}}</span>
              </el-col>
            </el-row>
          </div>
          <el-row>
            <p>{{content}}</p>
          </el-row>
          <div>
            <h3>用料表</h3>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="materialName" label="食材" min-width="170"></el-table-column>
              <el-table-column prop="materialCount" label="用量" min-width="180"></el-table-column>
            </el-table>
          </div>
          <div>
            <h3>具体步骤</h3>
            <stepList :steps="steps" />
          </div>
          <Comments :comments="comments" @clicked="clicked(arguments)" />
        </div>
      </el-main>
    </el-container>

    <el-aside width="200px"></el-aside>
  </el-container>
</template>

<script>
import Comments from "./components/comments";
import stepList from "./components/stepList";
import axios from "axios";
import global from "@/global/global";

import comments from "@/data/comments";
export default {
  components: {
    Comments,
    stepList
  },
  data() {
    return {
      cover: "",
      avatar: global.avatar,
      name: "",
      content: "",
      tableData: [],
      steps: [],
      comments: [],

      authorid: "",

      recipeid: ""
    };
  },
  methods: {
    getData() {
      this.recipeid = this.$route.query.id;

      let formData = new FormData();
      formData.append("recipeId", this.recipeid);

      axios.post(global.url + "/getRecipebyId", formData).then(res => {
        this.cover = res.data.recipeImage;
        this.name = res.data.recipeUsername;
        this.content = res.data.recipeName;

        // this.steps = res.

        this.authorid = res.data.recipeUserId;
      });
      axios.post(global.url + "/getRecipeMaterial", formData).then(res => {
        this.tableData = res.data;
      });
      axios.post(global.url + "/getRecipeComment", formData).then(res => {
        this.comments = res.data;
      });

      // this.cover = comments.cover;
      // this.avatar = comments.avatar;
      // this.name = comments.name;
      // this.content = comments.content;
      // this.tableData = comments.tableData;
      // this.steps = comments.steps;
      // this.comments = comments.comments;

      // this.authorid = comments.authorid;
    },
    clicked(arg) {
      // console.log('fu',arg[0])
      let formData = new FormData();
      formData.append("userId", global.id);
      formData.append("recipeId", this.recipeid);
      formData.append("content", arg[0]);

      let _this = this;
      axios.post(global.url + "/comment", formData).then(res => {
        _this.getData();
      });
    },
    plan() {
      let formData = new FormData();
      formData.append("userId", global.id);
      formData.append("recipeId", this.recipeid);
      axios.post(global.url + "/addDP", formData).then(res=>{
        console.log(res)
      });
    },
    like() {
      let formData = new FormData();
      formData.append("userId", global.id);
      formData.append("recipeId", this.recipeid);
      axios.post(global.url + "/collect", formData).then(res=>{
      });
    },
    xihuan() {
      let formData = new FormData();
      formData.append("userId", global.id);
      formData.append("recipeId", this.recipeid);
      axios.post(global.url + "/like", formData).then(res=>{
        console.log(res)
      });
    },
    into() {
      if (global.id == this.authorid) {
        this.$router.push({
          path: "/main",
          query: { id: global.id }
        });
      } else {
        this.$router.push({
          path: "/otherMain",
          query: { id: this.authorid }
        });
      }
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>