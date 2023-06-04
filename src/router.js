import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Research from './pages/Research.vue'
import RestaurantsShow from './pages/Restaurants.show.vue'
import NotFound from './pages/404.vue'
import Payment from './pages/Payment.vue'
import EndPayment from './pages/EndPayment.vue'

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
            path: '/restaurants/:id',
            name: 'restaurants.show',
            component: RestaurantsShow,
            props: true
        },
        {

            path: '/payment',
            name: 'payment',
            component: Payment,
        },
        {

            path: '/endpayment',
            name: 'endpayment',
            component: EndPayment,
        },

    ],
})
export { router }
