<template>
    <Default>
        <h1>Ciao sono la tua home</h1>
        <RestaurantFilter></RestaurantFilter>
        <Accordion></Accordion>

    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import Accordion from '../components/Accordion.vue';
import RestaurantFilter from '../components/RestaurantFilter.vue';
export default {
    components: {
        Default,
        Accordion,
        RestaurantFilter,
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