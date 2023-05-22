import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Resturant from './pages/Resturant.vue'

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
            path: '/resturant',
            name: 'resturant',
            component: Resturant,
        },
    ],
})
export { router }
