<template>
    <footer>
        <div class="container-fluid">
            <img src="https://picsum.photos/25" alt="">
            <p>DeliveBoo - Team 5</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque iste adipisci, nostrum natus, nemo
                beatae,
                qui temporibus ullam fugit totam ut porro! Est sequi ex quos et animi! Ducimus?
            </p>
            <div class="img-dev">
                <img src="https://picsum.photos/300" alt="">
                <img src="https://picsum.photos/300" alt="">
                <img src="https://picsum.photos/300" alt="">
                <img src="https://picsum.photos/300" alt="">
                <img src="https://picsum.photos/300" alt="">
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.img-dev {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    //grid-template-columns: 1fr repeat(5, minmax(auto, 60px)) 1fr;
}

img {
    max-width: 100%;
}
</style>