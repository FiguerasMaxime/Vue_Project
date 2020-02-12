<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/">
                <img alt="Vue logo" src="./../assets/logo.png" class="logo" />
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/Films">Films</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <router-link to="/Favoris">Favoris</router-link>
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            v-model="message"
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <p>Vous recherchez le film :{{ message }}</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {
    msg: String
  },
  data() {
    return {
      message: "",
    };
  }
};
</script>

<style scoped>
.logo {
  height: 30px;
}
</style>