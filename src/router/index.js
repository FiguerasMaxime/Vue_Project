import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import Favoris from './../views/Favoris.vue'
import HomeFilms from './../views/HomeFilms.vue'
import HomePage from './../views/HomePage.vue'
import Film from './../components/Film.vue'

Vue.use(VueRouter)
Vue.use(Vuex)


export default new VueRouter({
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/Favoris',
            component: Favoris
        },
        {
            path: '/Films',
            component: HomeFilms
        },
        {
            path: '/Films/:id',
            component: Film
        }
    ]
})