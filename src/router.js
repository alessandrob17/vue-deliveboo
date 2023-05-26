import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Restaurant from './pages/Restaurant.vue'
import Research from './pages/Research.vue'
import RestaurantsShow from './pages/Restaurants.show.vue'
import NotFound from './pages/404.vue'


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

            path: '/research',
            name: 'research',
            component: Research,
        },
        {
            path: '/404',
            name: '404',
            component: NotFound,
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
