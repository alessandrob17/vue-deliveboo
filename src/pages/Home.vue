<template>
    <!-- BOOLFINE GRAZIE DI TUTTO È STATO UN PIACERE -->
    <Default>
        <Hero></Hero>
        <RestaurantFilter></RestaurantFilter>
        <CardHome></CardHome>
        <Accordion></Accordion>

    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import Accordion from '../components/Accordion.vue';

import RestaurantFilter from '../components/RestaurantFilter.vue';

import Hero from '../components/Hero.vue';
import CardHome from '../components/CardHome.vue';

export default {
    components: {
        Default,
        Accordion,
        RestaurantFilter,
        Hero,
        CardHome
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as *;
</style>