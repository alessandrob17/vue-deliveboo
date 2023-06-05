<template>
    <div class="background">
        <div class="container">
            <div class="row">
                <div class="col-md-6 p-0">
                    <div class=" d-flex flex-column h-100 p-5">
                        <img src="../assets/buste-d.jpg" alt="" class="rounded-4">
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class=" d-flex flex-column align-items-center h-100 justify-content-center">
                        <p class="card-text text-center text-uppercase fs-4">Il tuo ordine direttamente a casa in soli 20sec
                        </p>
                    </div>
                </div>
                <div class="col-md-6 p-0 my-card">
                    <div class="d-flex flex-column align-items-center h-100 justify-content-center">
                        <p class="card-text text-center text-uppercase fs-4">Ordina ovunque tu sia con Deliveboo</p>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class=" d-flex flex-column h-100 p-5 ">
                        <img src="../assets/deliveboo4.jpg" alt="" class="rounded-4">
                    </div>
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

.background {
    background-color: #F5F3F1;
}

@media screen and (max-width: 768px) {
    .my-card {
        order: 10;
    }
}
</style>