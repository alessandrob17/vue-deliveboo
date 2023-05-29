import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Restaurants from './pages/Restaurants.vue'
import Research from './pages/Research.vue'
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
            path: '/restaurants',
            name: 'restaurants',
            component: Restaurants,
        },
        {

            path: '/research',
            name: 'research',
            component: Research,
        },
        {
            path: '/restaurants/:id',
            name: 'restaurants.show',
            component: RestaurantsShow,
            props: true
        }

    ],
})
export { router }
