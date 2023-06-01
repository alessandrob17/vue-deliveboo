<template>
  <div class="mb-5 filter-bg">

    <!-- advanced search -->
    <!-- 
    <a class="d-flex justify-content-center" href="/research">
      <button class="btn-search">Esegui una ricerca avanzata!</button>
    </a> -->
    <AdvanceSearch></AdvanceSearch>

    <div class="box row">

      <div v-for="typology in typologies" :key="typology.id" class="col-3 p-2 m-auto">
        <!-- <a class="filter-link fs-2" :href='/research'>{{ typology.name }}</a> -->
        <a class="filter-link" @click="selectTypology(typology.id)">{{ typology.name }}</a>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';
import AdvanceSearch from './AdvanceSearch.vue';

import { router } from '../router';

export default {

  components: {
    AdvanceSearch,
  },
  data() {
    return {
      typologies: [],
    };
  },
  methods: {
    fetchTypologies() {
      axios
        .get('http://127.0.0.1:8000/api/typologies')
        .then((res) => {
          this.typologies = res.data.results;
        });
    },
    selectTypology(id) {
      const typologyid = id; // Il tuo array con i piatti dell'ordine
      // Aggiungi i dati come parte dell'URL
      router.push({ path: '/research', query: { typologyid: JSON.stringify(typologyid) } });
    },
  },
  created() {
    this.fetchTypologies();
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
  font-size: 14px;

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
  background-color: rgb(110, 110, 110);
  padding: 100px;
}
</style>
