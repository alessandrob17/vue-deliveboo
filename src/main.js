import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { router } from './router'
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faMagnifyingGlass, faStar, faCartPlus, faTrashCan, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCreditCard, faCircleCheck } from '@fortawesome/free-regular-svg-icons'
library.add(faUserSecret, faMagnifyingGlass, faStar, faGithub, faCartPlus, faTrashCan, faCirclePlus, faCircleMinus, faCreditCard, faCircleCheck)



// createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');

