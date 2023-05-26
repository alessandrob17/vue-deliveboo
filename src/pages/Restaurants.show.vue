<template>
    <Default>
        <div class="container mt-3">
            <h2>Carrello</h2>
            <ul>
                <li v-for="(dish, index) in dishes" :key="dish.id">
                    {{ dish.name }} {{ dish.price }} ({{ dish.quantity }})
                    <button @click="removeDishFromCart(index)">Rimuovi</button>
                </li>
                <p>Somma totale: {{ totalPrice }}</p>
            </ul>
            <h2 class="mt-2">Prodotti disponibili</h2>
            <ul>
                <li v-for="dish in dishesList" :key="dish.id">
                    <span v-if="dish.restaurant_id == getIdRestaurant('id')">
                        {{ dish.name }} {{ dish.price }}
                    </span>
                    <span v-else>
                        Nessun piatto
                    </span>

                    <button @click="addDishToCart(dish)">Aggiungi al carrello</button>
                </li>
            </ul>
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
</script>

<style lang="scss" scoped></style>