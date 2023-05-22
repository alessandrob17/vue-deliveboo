<template>
    <Default>
        <h1>Ciao sono la tua home</h1>
        <Accordion></Accordion>

    </Default>
</template>

<script>
import Default from '../layouts/Default.vue';
import Accordion from '../components/Accordion.vue';
export default {
    components: {
        Default,
        Accordion,
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