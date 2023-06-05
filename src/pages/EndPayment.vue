<template>
    <!-- <div class="container text-center ">
        <div class="row justify-content-center">
            <h1 class="col-12 title">
                Ordine effettuato con successo <font-awesome-icon :icon="['far', 'circle-check']" />
            </h1>

            <h3>
                Grazie per aver acquistato da noi! 
            </h3>
            <router-link class=" mt-5 home" :to="{ name: 'home' }">
                Torna alla schermata home
            </router-link>
        </div>
    </div> -->

    <div class="container-end-payment">
        <h1>Ordine effettuato con successo
            <font-awesome-icon class="success-icon" icon="fa-regular fa-circle-check" />
        </h1>
        <h3 class="mt-2">Grazie per aver acquistato da noi! </h3>
        <router-link class="home mt-4" to="/">Torna alla pagina principale</router-link>
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
.success-icon {
    color: #39AF48;
}

.container-end-payment {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

h1 {
    font-size: 62px;
    margin-bottom: 20px;
    text-transform: uppercase;
}



// router-link {
//   color: #fff;
//   background-color: #007bff;
//   padding: 12px 24px;
//   border-radius: 4px;
//   text-decoration: none;
//   font-size: 18px;
// }

a {
    text-decoration: none;
}

// .title {
//     font-size: 50px;
//     text-transform: uppercase;
//     font-family: Roboto;
// }

// .container {
//     margin-top: 20% !important;
// }

.home {
    border-radius: 999px;
    border: 1px solid #FF7659;
    color: #FF7659;
    background-color: white;
    padding: 8px;
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