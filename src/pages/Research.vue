<template>
    <DefaultLayout>
        <div class="container my-5">
            <div class="filters">
                <div>{{ id }}</div>
                <div class="mb-5">
                    <input class="search" type="text" v-model="searchTerm" placeholder="Cerca" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search lens" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                    </svg>                    
                </div>


                <label v-for="tcard in typologies" :key="tcard.id">

                    <input type="checkbox" :value="tcard.id" v-model="selectedTypologies"
                        :checked="tcard.id == this.default_id">
                    {{ tcard.name }}
                    {{ console.log(tcard.id == this.default_id) }}

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

            default_id: null,

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

        const idQuery = this.$route.query.typologyid;
        if (idQuery) {
            this.default_id = JSON.parse(idQuery);
            this.selectedTypologies.push(this.default_id);
        }
        console.log(this.default_id);
    },

    watch: {
        selectedTypologies(newSelectedTypologies) {
            console.log(newSelectedTypologies);
        }
    }
};
</script>

<style lang="scss" scoped>
@use '../style/partials/reset.scss' as *;

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
    .search{
        border-radius: 25px;
        padding: 5px 10px;
    }
    .lens{
        position: relative;
        bottom: 50%;
        left: 85%;
    }
}
</style>