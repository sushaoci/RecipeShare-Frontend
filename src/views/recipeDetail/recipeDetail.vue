<template>
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
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="mater" label="食材" width="180"></el-table-column>
        <el-table-column prop="amount" label="用量" width="180"></el-table-column>
      </el-table>
    </div>
    <Comments :comments="comments" @clicked="clicked(arguments)" />
  </div>
</template>

<script>
import Comments from "./components/comments";
import axios from 'axios';
import global from '@/global/global'

import comments from "@/data/comments";
export default {
  components: {
    Comments
  },
  data() {
    return {
      cover: "",
      avatar: "",
      name: "",
      content: "",
      tableData: [],
      comments: []
    };
  },
  methods: {
    getData() {
      // this.cover = comments.cover;
      // this.avatar = comments.avatar;
      // this.name = comments.name;
      // this.content = comments.content;
      // this.tableData = comments.tableData;
      // this.comments = comments.comments;

      // this.$route.query.env
      axios.get(global.url+'/user').then();
      axios.get(global.url+'/').then();
    },
    clicked(arg) {
      // console.log('fu',arg[0])
    },
    plan() {},
    like() {},
    into(){
        console.log('into');
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style>
</style>