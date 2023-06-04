<template>
  <div class="mb-5">

    <AdvanceSearch></AdvanceSearch>

    <div class="box row container">
      <div v-for="typology in typologies" :key="typology.id" class="col-3 p-2 m-auto">
        <!-- <a class="filter-link fs-2" :href='/research'>{{ typology.name }}</a> -->
        <a class="filter-link pointer rounded-4" @click="selectTypology(typology.id)">{{ typology.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import AdvanceSearch from './AdvanceSearch.vue';
import axios from 'axios';

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
}
</script>

<style lang="scss" scoped>
@use'../style/partials/reset.scss';
@use '../style/partials/color.scss' as *;

.box {
  margin: 0 auto;
}

.filter-link {
  font-size: 14px;

  width: 100%;
  background-color: white;
  color: $principale;
  display: block;
  padding: 10px 5px;
  text-align: center;
  border: 2px solid $principale;
  transition: background-color 0.5s;
  transition: color 0.5s;
}

.filter-link:hover {
  background-color: $principale;
  color: white;
}

.pointer {
  cursor: pointer;
}
</style>
