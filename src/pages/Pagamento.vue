<template>
    <div>
        <!-- Contenuto del pagamento -->
        <h2>Riepilogo dell'ordine</h2>
        <ul>
            <li v-for="dish in dishes" :key="dish.id">{{ dish.name }}</li>
        </ul>
        <p>Totale: {{ totale }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dishes: [],
        };
    },
    created() {
        const dishesQuery = this.$route.query.dishes;
        if (dishesQuery) {
            this.dishes = JSON.parse(dishesQuery);
        }
    },
    computed: {
        totale() {
            // Calcola il totale qui in base all'array dishes
            // e restituiscilo come risultato
            // ad esempio:
            return this.dishes.reduce((acc, dish) => acc + dish.price, 0);
        },
    },
};
</script>

