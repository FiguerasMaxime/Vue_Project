<template>
  <div>
    <h1>Voici tous les films disponibles :</h1>
    <div class="films">
      <div v-for="obj in info" :key="obj.imdbID">
        <div class="card" style="width: 18rem;">
          <li class="list-group-item">
            <img :src="obj.Poster" alt="img" class="cardImg" />
            <h2>{{obj.Title}}</h2>
            <a class="letsSee" :href="`#/Films/${obj.imdbID}`">Voir plus</a>
            <div class="link">
              <a href="#">Ajoutez aux favoris</a>
            </div>
          </li>
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
const axios = require("axios").default;



export default {
  name: "Films",
  props: {
    msg: String
  },
  data() {
    return {
      info: []
    };
  },
  mounted() {
    if (!this.obj) {
      //une fois chargé, elle se lance qu'une fois, cela évite la répétition de films
      axios
        .get("http://www.omdbapi.com/?s=batman&apikey=904eed5c")
        .then(response => (this.info = response.data.Search));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.films{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px;
}
.cardImg {
  width: 100%;
  height: 100%;
}

.link a{
  font-size: 10px;
}

.letsSee {
  text-transform: uppercase;
}
</style>
