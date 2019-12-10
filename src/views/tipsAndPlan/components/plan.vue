<template>
  <div class="block">
    <el-timeline>
      <div v-for="i in plans">
        <el-timeline-item :timestamp="i.time" placement="top">
          <RecipeCard :url="i.url" :title="i.title" :author="i.author" />
        </el-timeline-item>
      </div>
    </el-timeline>
  </div>
</template>

<script>
import RecipeCard from "@/views/home/components/recipeCard";

export default {
  components: {
    RecipeCard
  },
  props:{
    plans:Array,
  },
};
</script>

<style>
</style>