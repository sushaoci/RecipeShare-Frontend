<template>
  <div>
    <div v-for="i in length">
      <Step :index="i" ref="step" />
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
  },
  methods: {
    getAll() {
      let steps = [];
      this.$refs.step.forEach(i => {
        let step = {};
        step = i.getOne();
        if (step) {
          steps.push(step);
        }
      });
      return steps;
    }
  }
};
</script>

<style>
</style>