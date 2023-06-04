<template>
    <div class="container text-center">
        <div class="row justify-content-center">
            <h3 class="col-12 title">
                Grazie per il tuo acquisto !!!
            </h3>
            <router-link class="col-12 mt-5 home" :to="{ name: 'home' }">
                Torna alla schermata home
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        localStorage.clear();
    }
}

</script>

<style lang="scss" scoped>
.title {
    font-size: 50px;
    text-transform: uppercase;
    font-family: Roboto;
}

.container {
    margin-top: 20% !important;
}

.home {
    border-radius: 999px;
    border: 1px solid #FF7659;
    color: #FF7659;
    background-color: white;
    padding: 5px;
    width: 20%;

    &:hover {
        color: white;
        background-color: #FF7659;
        border: 1px solid white;

        .icon {
            color: white
        }
    }
}
</style>