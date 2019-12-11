<template>
  <div @click="onclick">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="url" class="image" />
      <div style="padding: 14px;">
        <span>{{title}}</span>
        <div class="bottom clearfix">
          <span class="author">{{author}}</span>
          <!-- <time class="time">{{ currentDate }}</time> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
    author: String
  },
  methods: {
    onclick() {
      this.$router.push({
        path: "/detail",
        query: {  }
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

.image {
  width: 100%;
  display: block;
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