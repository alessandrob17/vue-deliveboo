<template>
    <div class="dish-card">
        <img :src="'http://127.0.0.1:8000/storage' + '/' + item.cover_image" alt="dish Image" class="dish-image" />
        <!--provvisorio -->

        <div class="dish-details">

            <h2 class="dish-name">{{ item.name }}</h2>
            <p class="dish-description d-none d-lg-block">{{ item.description }}</p>
            <DropDownText>
                {{ item.description }}
            </DropDownText>
            <h4 class="dish-price"> &#8364; {{ item.price }}</h4>

            <!-- <button @click="handleAddToCart">Aggiungi al carrello</button> -->
            <button @click="handleAddToCart" class="pointer cart-button rounded-4 fs-5 d-flex " style="padding:4px 8px">
                <span class="d-none d-lg-block">
                    Aggiungi al carrello
                    <font-awesome-icon icon="fa-solid fa-cart-plus" />
                </span>
                <font-awesome-icon icon="fa-solid fa-cart-plus" class="icon d-lg-none" />
            </button>


        </div>
    </div>
</template>

<script>
import DropDownText from '../components/DropDownText.vue';
export default {
    components: {
        DropDownText,
    },
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
    margin-bottom: 10px;
}

.dish-details {
    flex: 1;
    width: 80%;
    margin-left: 10px;
}

.dish-name,
.dish-price {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
    text-decoration: none;
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
    padding: 4px 8px;

    .cart-button:hover & {
        color: white;
    }
}

.cart-button {
    border: 1px solid $principale;
    color: $principale;
    background-color: white;
    padding: 5px;
    display: flex;

    &:hover {
        color: white;
        background-color: $principale;

        span {
            color: white;
        }
    }
}

span {
    color: $principale;

    &:hover {
        color: white;
    }
}
</style>
