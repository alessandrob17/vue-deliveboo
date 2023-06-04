<template>
    <DefaultLayout>
        <div class="container my-5">
            <div class="row">
                <div class="col-4">
                    <div>{{ id }}</div>
                    <div class="d-flex flex-column">
                        <input class="rounded-pill border search-bar" type="text" v-model="searchTerm"
                            placeholder="Cerca" />
                        <!-- CECKBOX -->

                        <label v-for="tcard in typologies" :key="tcard.id">
                            <input type="checkbox" :value="tcard.id" v-model="selectedTypologies"
                                :checked="tcard.id == default_id" class="form-check-input">
                            {{ tcard.name }}
                            {{ console.log(tcard.id == default_id) }}
                        </label>
                    </div>
                </div>
                <div class="col-8">
                    <RestaurantCard v-for="restaurant in filteredRestaurants" :key="restaurant.id" :item="restaurant" />
                </div>
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

.search-bar {
    height: 40px;
    background-color: #eee;
    border: none;
    border-radius: 8px;
    padding-left: 40px;
    background-image: url(../assets/magnifying-glass-svgrepo-com.svg);
    background-position-y: center;
    background-position-x: 8px;
    background-repeat: no-repeat;
}

.form-check-input:focus {
    box-shadow: 0 0 0 0.2rem rgba(254, 113, 94, 0.25) !important;
    border-color: #555 !important;

}

.form-check-input:checked {
    background-color: #FE715E !important;
    border-color: #555 !important;
}
</style>