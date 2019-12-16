<template>
  <div class="block">
      <el-card class="box-card5">
           <div slot="header" class="clearfix">

           <h3> <i class="el-icon-tickets"></i>      Tips</h3>
            </div>

    <div v-for="(i,index) in tips"  class="text item">
         tip{{index+1}}:{{i}}
    </div>
     </el-card>
  </div>
</template>

<script>
export default {
  props:{
    tips:Array,
  },

};
</script>

<style>
.text {
    font-size: 14px;
  }

  .item {
    padding: 15px 0;
  }
  h3{
  margin-block-end: 0em;
   margin-block-start: 0em;
}

.box-card5{
  background: #F9D349;
  text:#000;
  text-align:left ;
  border-radius: 20px;
  margin: 20px;
  position:fixed;
  width:250px;
}
</style>
