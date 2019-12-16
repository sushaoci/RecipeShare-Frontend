<template>
  <div>
    <h3> 评论({{commentsNum}})</h3>
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
    <div class="boxcard20">
      <el-card class="box-card20">
        <div v-for="i in comments">
          <Comment :avatar="avatar" :name="i.userName" :time="i.commentTime" :content="i.content" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
    import Comment from "./comment";
    import global from '@/global/global'

    export default {
        components: {
            Comment
        },
        props: {
            // avatar: String,
            comments: Array
        },
        data() {
            return {
                input: "",
                avatar:global.avatar
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
  .boxcard20{
    padding-top:20px;
    margin:10px;
  }
</style>
