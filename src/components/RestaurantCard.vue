<template>
    <div class="restaurant-card">
        <img :src="'http://127.0.0.1:8000/storage' + '/' + item.cover_image" alt="Restaurant Image"
            class="restaurant-image" /> <!-- provvisorio -->

        <div class="restaurant-details">

            <a class="restaurant-name" :href="`/restaurants/${item.id}`">{{ item.restaurant_name }}</a>
            <p class="restaurant-description">{{ item.description }}</p>

            <span v-for="typology in item.typologies" class="restaurant-typology badge rounded-pill bg-secondary">{{
                typology.name }}</span>
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
        typologies: {
            type: Array,
            required: true
        }
    },
    // created() {
    //     console.log(this.item.typologies);
    // }
};
</script>

<style lang="scss" scoped>
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
