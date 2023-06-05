<template>
    <Default>

        <div class="container mt-5 mb-5">
            <div v-if="showPopup">
                <div class="modal" tabindex="-1" role="dialog" @click="closePopup">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">ATTENZIONE</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <p>Non è possibile ordinare da più ristoranti contemporaneamte!</p>
                            </div>
                            <div class="modal-footer">
                                <router-link :to="`/restaurants/${restaurant_id_modal}`" class="btn btn-secondary">Torna
                                    Indietro</router-link>
                                <button type="button" class="btn btn-primary" @click="removeAllDish()">Svuota
                                    Carrello</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-7">
                    <div class="row">
                        <div v-for="dish in dishesList" :key="dish.id">
                            <DishCard @add-to-cart="addDishToCart(dish)" :item="dish"
                                v-if="dish.restaurant_id == getIdRestaurant('id') && dish.visible" />
                        </div>
                    </div>
                </div>
                <div class="col-5">
                    <div class="card text-dark bg-light">
                        <h3 class="card-header text-center" style="color:#555">CARRELLO</h3>
                        <div class="card-body">
                            <div @click="removeAllDish()" class="text-danger pointer">
                                <font-awesome-icon icon="fa-solid fa-trash-can" />
                                Rimuovi tutti
                            </div>
                            <div>
                                <div>
                                    <div v-for="(dish, index) in dishes" :key="dish.id"
                                        class="d-flex fs-6 flex-column  flex-md-row">
                                        <ul class="cart-text p-0">
                                            <li>{{ dish.name }}</li>
                                            <li>&#8364; {{ dish.price }} x {{ dish.quantity }}</li>
                                        </ul>
                                        <div class="my-button d-flex  gap-3 justify-content-center mx-2 mb-2">
                                            <div @click="addDishToCart(dish)" class="pointer">
                                                <!-- <font-awesome-icon icon="fa-solid fa-cart-plus" />Aggiungi -->
                                                <font-awesome-icon icon="fa-solid fa-circle-plus" class="icon" />
                                            </div>
                                            <div @click="removeDishFromCart(index)" class="pointer">
                                                <font-awesome-icon icon="fa-solid fa-circle-minus" class="icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <p class="total-text">Somma totale: &#8364; {{ totalPrice }}</p>

                                    <button @click="vaiAlPagamento" class="button-style rounded-4" style="padding:4px 8px">
                                        <span>Checkout
                                            <font-awesome-icon icon="fa-regular fa-credit-card" />

                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </Default>
</template>

<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
import DishCard from '../components/DishCard.vue';

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    components: {
        Default,
        DishCard
    },
    data() {
        return {
            dishes: [],
            dishesList: [],
            showPopup: false,

            restaurant_id_modal: localStorage.restaurant_id !== undefined ? JSON.parse(localStorage.restaurant_id) : null,
        };
    },
    setup() {
        const dishes = ref([]);
        const store = useStore();
        const router = useRouter();

        const vaiAlPagamento = () => {
            const order = [...dishes.value];

            store.dispatch('setOrder', order);
            router.push({ name: 'payment' });
        };

        return {
            dishes,
            vaiAlPagamento
        };
    },

    watch: {
        dishes: {
            handler(newDishes) {
                localStorage.dishes = JSON.stringify(newDishes);
                localStorage.setItem('restaurant_id', JSON.stringify(this.getIdRestaurant('id')));
            },
            deep: true
        }
    },
    props: ['id'],
    methods: {
        fetchRestaurants(id) {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${id}`)
                .then(res => {
                    const { success, restaurant } = res.data;
                    if (success) {
                        this.restaurant = restaurant;
                    } else {
                        //   this.$router.replace({ name: '404' });
                        console.log('errore')
                    }
                });
        },
        fetchDishes() {
            axios.get('http://127.0.0.1:8000/api/dishes/').then((res) => {
                let result = res.data.results;
                this.dishesList = result.map((dish) => ({ ...dish, quantity: 0 }));
            });
        },
        addDishToCart(dish) {
            const existingDish = this.dishes.find((d) => d.id === dish.id);
            if (existingDish) {
                existingDish.quantity++;
            } else {
                this.dishes.push({ ...dish, quantity: 1 });
            }

            console.log(this.dishes);
        },
        removeDishFromCart(index) {
            const dish = this.dishes[index];
            if (dish.quantity > 1) {
                dish.quantity--;
            } else {
                this.dishes.splice(index, 1);
            }
        },

        getIdRestaurant(parameter) {
            const IdRestaurant = this.$route.params.id;
            if (parameter === 'id') {
                return IdRestaurant;
            } else {
                return null;
            }
        },
        removeAllDish() {
            this.dishes = [];
        },
        closePopup() {
            this.showPopup = false;
        },
    },
    computed: {
        totalPrice() {
            return this.dishes.reduce((total, dish) => total + (dish.price * dish.quantity), 0).toFixed(2);
        },
    },
    created() {
        const id = this.$route.params.id;
    },
    beforeRouteUpdate(to, from) {
        const newId = to.params.id;
        this.fetchRestaurants(newId);
    },
    mounted() {
        this.fetchDishes();

        if (localStorage.dishes) {
            this.dishes = JSON.parse(localStorage.dishes);
        }

        if (localStorage.restaurant_id) {
            this.restaurant_id = JSON.parse(localStorage.restaurant_id);
        }

        if (this.restaurant_id != this.getIdRestaurant('id') && this.dishes.length > 0) {
            this.showPopup = true;
        }

        console.log(this.restaurant_id_modal);

    }
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as *;
@use '../style/partials/reset.scss' as *;

.pointer {
    cursor: pointer;
}

.icon {
    color: $principale;
}

.modal {
    display: block;
    background: rgba(0, 0, 0, 0.5);
}

.button-style {
    border: 1px solid $principale;
    color: $principale;
    background-color: white;
    padding: 5px;
    display: flex;

    &:hover {
        color: white;
        background-color: $principale;

        span {
            color: white;
        }
    }

    span {
        color: $principale;

        &:hover {
            color: white;
        }
    }
}

.cart-text,
.total-text {
    font-size: 16px;
    color: #555
}
</style>