<template>
 <el-container>
   
 <el-aside width="200px">
  </el-aside>
 
 <el-container>

     <el-main>
   <div>
    <img :src="cover" alt="cover" />
    <el-row>
      <el-col :span="12">
        <el-button @click="plan">加入今日计划</el-button>
      </el-col>
      <el-col :span="12">
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
      <el-table :data="tableData"  stripe ="true" fit= "true" style="width: 100%">
        <el-table-column prop="mater" label="食材" min-width="170"></el-table-column>
        <el-table-column prop="amount" label="用量" min-width="180"></el-table-column>
      </el-table>
    </div>
    <div>
      <h3>具体步骤</h3>
      <stepList :steps="steps"/>
    </div>
    <Comments :comments="comments" @clicked="clicked(arguments)" />
  </div> -->
     </el-main>
     </el-container>
   
       <el-aside width="200px">
     
       </el-aside> 
  </el-container>
</template>

<script>
import Comments from "./components/comments";
import stepList from './components/stepList'
import axios from "axios";
import global from "@/global/global";

import comments from "@/data/comments";
export default {
  components: {
    Comments,
    stepList,
  },
  data() {
    return {
      cover: "",
      avatar: "",
      name: "",
      content: "",
      tableData: [],
      steps:[],
      comments: [],

      authorid: "",

      recipeid: ""
    };
  },
  methods: {
    getData() {
      this.recipeid = this.$route.query.id;

      // let formData = new FormData();
      // formData.append("recipeid", this.recipeid);

      // axios.post(global.url + "", formData).then(res => {
      //   this.cover = res.
      //   this.avatar = res.
      //   this.name = res.
      //   this.content = res.
      //   this.tableData = res.
      //   this.steps = res.
      //   this.comments = res.
      //   this.authorid = res.
      // });

      this.cover = comments.cover;
      this.avatar = comments.avatar;
      this.name = comments.name;
      this.content = comments.content;
      this.tableData = comments.tableData;
      this.steps = comments.steps;
      this.comments = comments.comments;

      this.authorid = comments.authorid;
    },
    clicked(arg) {
      // console.log('fu',arg[0])
      let formData = new FormData();
      formData.append("id", global.id);
      formData.append("recipeid", this.recipeid);
      formData.append("comment", arg[0]);

      let _this = this;
      axios.post(global.url + "", formData).then(res => {
        _this.getData();
      });
    },
    plan() {
      // let formData = new FormData();
      // formData.append("id", global.id);
      // formData.append("recipeid", this.recipeid);
      // axios.post(global.url + "", formData).then();
    },
    like() {
      // let formData = new FormData();
      // formData.append("id", global.id);
      // formData.append("recipeid", this.recipeid);
      // axios.post(global.url + "", formData).then();
    },
    into() {
      if (global.id == this.authorid) {
        this.$router.push({
          path: "/main",
          query: {id:global.id}
        });
      } else {
        this.$router.push({
          path: "/otherMain",
          query: {id:this.authorid}
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