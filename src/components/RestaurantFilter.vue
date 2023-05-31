<template>
  <div class="mb-5 filter-bg">

    <!-- advanced search -->
    <!-- 
    <a class="d-flex justify-content-center" href="/research">
      <button class="btn-search">Esegui una ricerca avanzata!</button>
    </a> -->
    <AdvanceSearch></AdvanceSearch>

    <div class="box row">
      <div v-for="tcard in typologies" class="col-3 p-2 m-auto">
        <a class="filter-link fs-2" :href="'/research/'+ tcard.id">{{tcard.name}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import AdvanceSearch from './AdvanceSearch.vue';

export default defineComponent({
  components: {
    AdvanceSearch
  },
    data() {
        return {
            restaurants: [],
            typologies: [],
        };
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
    },
})
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;

.box {
  margin: 0 auto;
  width: 80vw;
}

a {
  text-decoration: none;
}

.btn-search:hover {
  background-color: $principale;
}

.filter-link {
  width: 100%;
  background-color: white;
  border-radius: 5px;
  color: $principale;
  display: block;
  padding: 10px 5px;
  text-align: center;
  border: 2px solid $principale;
  transition: background-color 0.5s;
  transition: color 0.5s;
}
.filter-link:hover{
  background-color: $principale;
  color: white;
}

.filter-bg{
  background-color: rgb(68, 130, 6);
  padding: 100px;
}
</style>

