import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Restaurant from './pages/Restaurant.vue'
import RestaurantsShow from './pages/Restaurants.show.vue'

const history = createWebHistory()

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/restaurant',
            name: 'restaurant',
            component: Restaurant,
        },
        {
            path: '/restaurant/:id',
            name: 'restaurants.show',
            component: RestaurantsShow,
            props: true
        }
    ],
})
export { router }
