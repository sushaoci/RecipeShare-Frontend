<template>
  <div>
    <div v-for="i in length">
      <MaterRow ref="rows"/>
    </div>
    <el-button @click="addRow" icon="el-icon-plus"></el-button>
  </div>
</template>

<script>
import MaterRow from "./MaterRow";
export default {
  components: {
    MaterRow
  },
  data() {
    return {
      length: 6
    };
  },
  methods: {
    getAll(){
      let material=[];
      this.$refs.rows.map(i=>{
        let valid=i.getOne();
        if(valid){
          material.push(valid);
        }
      })
      return material;
    },
    addRow() {
      this.length++;
    },
  }
};
</script>

<style>
</style>