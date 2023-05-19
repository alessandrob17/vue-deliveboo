import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'

const history = createWebHistory()

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
    ],
})
export { router }