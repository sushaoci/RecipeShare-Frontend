<template>
  <div>
    <div v-for="i in length">
      <Step :index="i"/>
    </div>
  </div>
</template>

<script>
import Step from "./Step";
export default {
  components: {
    Step
  },
  data() {
    return {
      length: 5
    };
  }
};
</script>

<style>
</style>