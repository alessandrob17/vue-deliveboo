<template>
    <div>
        <!-- Contenuto del carrello -->
        <button @click="vaiAlPagamento">Vai al pagamento</button>
    </div>
</template>

<script>
import { router } from '../router';

export default {
    methods: {
        vaiAlPagamento() {
            const dishes = [
                { name: "Pasta alla Carbonara", id: 1 },
                { name: "Pizza Margherita", id: 2 },
                { name: "Bistecca alla Griglia", id: 3 },
                { name: "Insalata Caesar", id: 4 }
            ]; // Il tuo array con i piatti dell'ordine
            // Aggiungi i dati come parte dell'URL
            router.push({ path: '/pagamento', query: { dishes: JSON.stringify(dishes) } });
        },
    },
};
</script>