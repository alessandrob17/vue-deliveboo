<template>
    <div>
        <!-- Contenuto del carrello -->
        <button @click="vaiAlPagamento">Vai al pagamento</button>
    </div>
</template>

<script>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const store = useStore();
        const router = useRouter();

        const vaiAlPagamento = () => {
            const dishes = [
                { name: "Pasta alla Carbonara", price: 1 },
                { name: "Pizza Margherita", price: 2 },
                { name: "Bistecca alla Griglia", price: 3 },
                { name: "Insalata Caesar", price: 4 }
            ]; // Il tuo array con i piatti dell'ordine

            store.dispatch('setDishes', dishes);
            router.push({ name: 'pagamento' });
        };

        return {
            vaiAlPagamento
        };
    }
};
</script>
