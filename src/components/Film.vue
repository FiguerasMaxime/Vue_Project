<template>
  <div>
    <div style="max-width: 100vw;">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img :src="info.Poster" class="card-img" alt="..." />
        </div>
        <div class="col-md-8 card_API">
          <div class="card-body">
            <h5 class="card-title">{{info.Title}}</h5>
            <p class="card-text">{{info.Genre}}.</p>
            <p class="card-text">{{info.Plot}}.</p>
            <p class="card-text">{{info.Year}}.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  name: "example",
  props: {
    msg: String
  },
  data() {
    return {
      info: [],
      id: this.$route.params.id,
    };
  },
  mounted() {
    if (!this.obj) {
      //une fois chargé, elle se lance qu'une fois, cela évite la répétition de films
      axios
        .get("http://www.omdbapi.com/?i="+ this.id +"&plot=full&apikey=904eed5c")
        .then(response => (this.info = response.data));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card_API {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
