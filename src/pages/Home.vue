<template>
    <Default>
        <Hero></Hero>
        <RestaurantFilter></RestaurantFilter>
        <Accordion></Accordion>
    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import Accordion from '../components/Accordion.vue';

import RestaurantFilter from '../components/RestaurantFilter.vue';

import Hero from '../components/Hero.vue';

export default {
    components: {
        Default,
        Accordion,
        RestaurantFilter,
        Hero,
    },
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as*;

h1 {
    color: $principale;
}
</style>