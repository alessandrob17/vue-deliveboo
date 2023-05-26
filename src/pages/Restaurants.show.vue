<template>
    <Default>
        <div class="d-flex">
            <div class="row row-cols-1 row-cols-md-3 g-4 ps-5 pe-5 container">
                <div class="card" v-for="dish in dishesList" :key="dish.id">
                    <img src="https://www.negroni.com/sites/negroni.com/files/styles/scale__1440_x_1440_/public/664x487_istock-504122954.jpg?itok=GolOLXC4"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ dish.name }}</h5>
                        <p class="card-text"> {{ dish.price }}</p>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button @click="addDishToCart(dish)">
                                <font-awesome-icon icon="fa-solid fa-cart-plus" />Aggiungi al carrello
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card text-dark bg-light mb-3 me-5" style="flex-grow: 1; max-height:600px">
                <h3 class="card-header text-center">CARRELLO</h3>
                <div class="card-body">
                    <button @click="removeAllDish()">
                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                        Rimuovi tutti
                    </button>
                    <ul>
                        <li v-for="(dish, index) in dishes" :key="dish.id">
                            {{ dish.name }} {{ dish.price }} ({{ dish.quantity }})
                            <button @click="removeDishFromCart(index)">
                                <font-awesome-icon icon="fa-solid fa-trash-can" />
                                Rimuovi
                            </button>
                        </li>
                        <p>Somma totale: {{ totalPrice }}</p>
                    </ul>
                </div>
            </div>
        </div>
    </Default>
</template>

<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
export default {
    components: {
        Default
    },
    data() {
        return {
            dishes: [],
            dishesList: [],
        };
    },
    watch: {
        dishes: {
            handler(newDishes) {
                localStorage.dishes = JSON.stringify(newDishes);
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
        }
    }
}
</script>

<style lang="scss" scoped></style>