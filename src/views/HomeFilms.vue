<template>
  <div>
      <Films/>
  </div>
</template>

<script>
import Films from './../components/Films.vue'

export default {
  name: "HomeFilms",
  components: {
    Films,
  },
  props: {
    msg: String
  },
  data() {
    return {
        
    };
  }
};
</script>

<style scoped>

</style>