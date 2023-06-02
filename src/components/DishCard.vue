<template>
    <div class="dish-card">
        <img :src="'http://127.0.0.1:8000/storage' + '/' + item.cover_image" alt="dish Image" class="dish-image" />
        <!-- provvisorio -->

        <div class="dish-details">

            <h2 class="dish-name">{{ item.name }}</h2>
            <p class="dish-description">{{ item.description }}</p>
            <h4 class="dish-price"> &#8364; {{ item.price }}</h4>

            <!-- <button @click="handleAddToCart">Aggiungi al carrello</button> -->
            <button @click="handleAddToCart" class="pointer cart-button fs-5">
                <font-awesome-icon icon="fa-solid fa-cart-plus" class="icon" /> Aggiungi al carrello
            </button>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
        handleAddToCart() {
            this.$emit('add-to-cart', this.dish);
        }
    },
    // created() {
    //     console.log(this.item.typologies);
    // }
};
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;

.dish-card {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.dish-details {
    flex: 1;
}

.dish-name,
.dish-price {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
    text-decoration: none;
}

.dish-typology {
    font-size: 16px;
    margin-bottom: 5px;
}

.dish-description {
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;

}

.dish-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 20px;
}

.pointer {
    cursor: pointer;
}

.icon {
    color: $principale;

    .cart-button:hover & {
        color: white;
    }
}

.cart-button {
    border-radius: 999px;
    border: 1px solid $principale;
    color: $principale;
    background-color: white;
    padding: 5px;

    &:hover {
        color: white;
        background-color: $principale;

        .icon {
            color: white;
        }
    }
}
</style>
