<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 p-0">
                <div class="my-card d-flex flex-column align-items-center h-100">
                    <h2 class="card-text text-center text-uppercase">Il tuo ordine direttamente a casa in soli 20sec</h2>
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="my-card d-flex flex-column h-100">
                    <img src="../assets/food delivery.jpg" alt="">
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="my-card d-flex flex-column h-100">
                    <img src="../assets/order-online.jpeg" alt="">
                </div>
            </div>
            <div class="col-md-6 p-0">
                <div class="my-card d-flex flex-column align-items-center h-100">
                    <h2 class="card-text text-center text-uppercase">Ordina ovunque tu sia con Deliveboo</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;
@use '../style/partials/reset.scss' as *;

.card-text {
    max-width: 70%;
}
</style>