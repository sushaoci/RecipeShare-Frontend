<template>
  <div class="block">
    <div v-for="(i,index) in tips">
        <p> tip{{index}}:{{i}} </p>
    </div>
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
</style>