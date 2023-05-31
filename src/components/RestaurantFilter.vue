<template>
  <div class="mb-5">

    <AdvanceSearch></AdvanceSearch>

    <div class="box row">
      <div v-for="typology in typologies" :key="typology.id" class="col-3 p-2 m-auto">
        <a class="filter-link fs-2" :href='/research/'>{{ typology.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import AdvanceSearch from './AdvanceSearch.vue';
import axios from 'axios';

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
    }
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
  width: 80vw;
}

.filter-link {
  width: 100%;
  background-color: $principale;
  border-radius: 25px;
  color: white;
  display: block;
  padding: 10px 5px;
  text-align: center;
  border: 2px solid $principale;
  transition: background-color 0.5s;
  transition: color 0.5s;
}

.filter-link:hover {
  background-color: white;
  color: $principale;
}
</style>

