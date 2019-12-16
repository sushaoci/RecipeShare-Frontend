<template>
  <div @click="onclick">
    <el-card :body-style="{ padding: '0px' }">
      <div class="coverimage">
      <img :src="url" class="image" />
        </div>
      <div style="padding: 14px;">
        <span>{{title}}</span>
        <div class="bottom clearfix">
          <span class="author">{{author}}</span>
          <span>{{ thumb }} 点赞</span>
          <!-- <time class="time">{{ currentDate }}</time> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import global from '@/global/global'

export default {
  props: {
    url: String,
    title: String,
    author: String,
    thumb:Number,
    id:Number,
  },
  methods: {
    onclick() {
      this.$router.push({
        path: "/detail",
        query: {id:this.id}
      });
    }
  }
};
</script>

<style>
.author {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}



.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
