<template>
  <div>
    <p>{{commentsNum}} 评论</p>
    <el-row>
      <el-col :span="2">
        <el-avatar :src="avatar"></el-avatar>
      </el-col>
      <el-col :span="18">
        <el-input v-model="input" placeholder="添加评论"></el-input>
      </el-col>
      <el-col :span="4">
        <el-button @click="onclick">提交</el-button>
      </el-col>
    </el-row>
    <div v-for="i in comments">
      <Comment :avatar="i.avatar" :name="i.name" :time="i.time" :content="i.content" />
    </div>
  </div>
</template>

<script>
import Comment from "./comment";
export default {
  components: {
    Comment
  },
  props: {
    avatar: String,
    comments: Array
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    commentsNum() {
      return this.comments.length;
    }
  },
  methods: {
    onclick() {
    //   console.log('zi',this.input);
      this.$emit("clicked",this.input);
      this.input = "";
    }
  }
};
</script>

<style>
</style>