<template>
    <Default>
        <h1>Ciao sono la tua home</h1>
        <Hero></Hero>
        <RestaurantFilter></RestaurantFilter>
        <Menu></Menu>
        <Accordion></Accordion>
        
        
    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import Accordion from '../components/Accordion.vue';

import RestaurantFilter from '../components/RestaurantFilter.vue';

import Hero from '../components/Hero.vue';

import ShoppingCart from '../components/Menu.vue';
import Menu from '../components/Menu.vue';


export default {
    components: {
    Default,
    Accordion,
    RestaurantFilter,
    Hero,
    ShoppingCart,
    Menu
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