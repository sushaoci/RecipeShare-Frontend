<template>
  <el-row>
    <el-col :span="12">
      <el-input placeholder="食材" v-model="name" clearable></el-input>
    </el-col>
    <el-col :span="4">
      <el-autocomplete
        v-model="amount"
        class="inline-input"
        :fetch-suggestions="querySearch"
        placeholder="用量"
        @select="handleSelect"
      ></el-autocomplete>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      amount: '',
      data: []
    };
  },
  methods: {
    getOne(){
      // 先不考虑只填了1/2的情况了
      if(this.name!=''&&this.amount!=''){
        let one={};
        one.name=this.name;
        one.amount=this.amount;
        return one;
      }
    },
    // 下拉框的内容
    loadAll() {
      return [{ "value": "一杯"},
          { "value": "一勺"},
          { "value": "一碗"},];
    },
    // 用于下拉框的函数querySearch，createFilter
    querySearch(queryString, cb) {
      var data = this.data;
      var results = queryString
        ? data.filter(this.createFilter(queryString))
        : data;
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelect(item) {
    }
  },
  mounted() {
    // 渲染下拉框
    this.data = this.loadAll();
  }
};
</script>

<style>
</style>