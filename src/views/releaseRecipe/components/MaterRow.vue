<template>
  <el-row :gutter="22">
    <el-col :span="1">
      <p></p>
    </el-col>
    <div class="left">
      <el-col :span="12">
        <el-input placeholder="食材" v-model="name" clearable></el-input>
      </el-col>
    </div>
    <div class="right">
      <el-col :span="6">
        <el-autocomplete
          v-model="amount"
          class="inline-input"
          :fetch-suggestions="querySearch"
          placeholder="用量"
          @select="handleSelect"
        ></el-autocomplete>
      </el-col>
    </div>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      amount: "",
      data: []
    };
  },
  methods: {
    getOne() {
      // 先不考虑只填了1/2的情况了
      if (this.name != "" && this.amount != "") {
        let one = {};
        one.name = this.name;
        one.amount = this.amount;
        return one;
      }
    },
    // 下拉框的内容
    loadAll() {
      return [{ value: "一杯" }, { value: "一勺" }, { value: "一碗" }];
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
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    handleSelect(item) {}
  },
  mounted() {
    // 渲染下拉框
    this.data = this.loadAll();
  }
};
</script>

<style>
.el-row {
  margin-bottom: 15px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
</style>