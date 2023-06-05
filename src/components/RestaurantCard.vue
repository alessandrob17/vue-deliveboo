<template>
    <a :href="`/restaurants/${item.id}`">
        <div class="restaurant-card">

            <img :src="'http://127.0.0.1:8000/storage' + '/' + item.cover_image" alt="Restaurant Image"
                class="restaurant-image d-none d-md-block" /> <!--provvisorio -->

            <div class="restaurant-details">

                <h2 class="restaurant-name">{{ item.restaurant_name }}</h2>
                <p class="restaurant-description d-none d-sm-block">{{ item.description }}</p>
                <DropDownText>
                    {{ item.description }}
                </DropDownText>
                <span v-for="typology in item.typologies" class="restaurant-typology badge rounded-pill pill-color m-1">{{
                    typology.name }}</span>
            </div>
        </div>
    </a>
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
        typologies: {
            type: Array,
            required: true
        }
    },
    components: { DropDownText }
};
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;

.restaurant-card {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
}

.restaurant-details {
    flex: 1;
}

.restaurant-name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
    text-decoration: none;
}

.restaurant-typology {
    font-size: 16px;
    margin-bottom: 5px;
    color: white;
    background-color: $principale;
}

.restaurant-description {
    font-size: 14px;
    color: #555;
}

.restaurant-image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 20px;
}
</style>
