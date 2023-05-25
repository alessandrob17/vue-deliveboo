import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Restaurant from './pages/Restaurant.vue'

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
    ],
})
export { router }
