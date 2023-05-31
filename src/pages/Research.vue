<template>
    <DefaultLayout>
        <div class="container my-5">
            <div class="filters">
                <div>{{id}}</div>
                <input class="mb-5" type="text" v-model="searchTerm" placeholder="Cerca per nome" />

                <label v-for="tcard in typologies" :key="tcard.id">
                    <input v-if="tcard.id == id" checked type="checkbox" :value="tcard.id" v-model="selectedTypologies">
                    <input v-else type="checkbox" :value="tcard.id" v-model="selectedTypologies">
                    {{ tcard.id }} - {{ tcard.name }}
                </label>

            </div>

            <div class="restaurants">
                <RestaurantCard v-for="restaurant in filteredRestaurants" :key="restaurant.id" :item="restaurant" />
            </div>
        </div>
    </DefaultLayout>
</template>

<script>
import DefaultLayout from '../layouts/Default.vue';
import RestaurantCard from '../components/RestaurantCard.vue';
import axios from 'axios';

export default {
    components: {
        DefaultLayout,
        RestaurantCard
    },
    data() {
        return {
            restaurants: [],
            typologies: [],
            selectedTypologies: [],
            searchTerm: '',
            id: 0,
        };
    },

    computed: {
        filteredRestaurants() {
            let filtered = this.restaurants;

            if (this.selectedTypologies.length > 0) {
                filtered = filtered.filter(restaurant =>
                    this.selectedTypologies.every(selectedTypology =>
                        restaurant.typologies.some(typology => typology.id === selectedTypology)
                    )
                );
            }

            if (this.searchTerm) {
                const searchTermLower = this.searchTerm.toLowerCase();
                filtered = filtered.filter(restaurant =>
                    restaurant.restaurant_name.toLowerCase().includes(searchTermLower)
                );
            }

            return filtered;
        }
    },

    methods: {
        fetchRestaurants() {
            axios
                .get('http://127.0.0.1:8000/api/restaurants')
                .then((res) => {
                    this.restaurants = res.data.results;
                });
        },
        fetchTypologies() {
            axios
                .get('http://127.0.0.1:8000/api/typologies')
                .then((res) => {
                    this.typologies = res.data.results;
                });
        }
    },

    created() {
        this.fetchRestaurants();
        this.fetchTypologies();
        this.id = this.$route.params.id;
    },

    watch: {
        selectedTypologies(newSelectedTypologies) {
            console.log(newSelectedTypologies);
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row;
    justify-content: left;
    gap: 5rem;

    .filters {
        display: flex;
        flex-direction: column;
    }

    .restaurants {
        display: flex;
        flex-direction: column;
    }
}
</style>