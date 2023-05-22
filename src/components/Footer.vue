<template>
    <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="description m-auto d-flex flex-column">
                    <img src="https://picsum.photos/25" alt="" class="m-auto">
                    <h3 class="text-center">DeliveBoo - Team 5</h3>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque iste adipisci,
                        nostrum natus,
                        nemo
                        beatae,
                        qui temporibus ullam fugit totam ut porro! Est sequi ex quos et animi! Ducimus?Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quis neque iste adipisci, nostrum natus, nemo
                        beatae,
                        qui temporibus ullam fugit totam ut porro! Est sequi ex quos et animi! Ducimus?Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quis neque iste adipisci, nostrum natus, nemo
                        beatae,
                        qui temporibus ullam fugit totam ut porro! Est sequi ex quos et animi! Ducimus?Lorem ipsum dolor sit
                        amet consectetur adipisicing elit. Quis neque iste adipisci, nostrum natus, nemo
                        beatae,
                        qui temporibus ullam fugit totam ut porro! Est sequi ex quos et animi! Ducimus?
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center gap-3">
                    <!-- <div class="col col-md-2 text-center mb-2">
                        <a href="">
                            <img src="https://picsum.photos/200/300" class="img-fluid">
                            <p class="text-uppercase">lorem ipsum</p>
                        </a>
                    </div>
                    <div class="col-12 col-md-2 text-center mb-2">
                        <a href="">
                            <img src="https://picsum.photos/200/300" class="img-fluid">
                            <p class="text-uppercase">lorem ipsum</p>
                        </a>
                    </div>
                    <div class="col-12 col-md-2 text-center mb-2">
                        <a href="">
                            <img src="https://picsum.photos/200/300" class="img-fluid">
                            <p class="text-uppercase">lorem ipsum</p>
                        </a>
                    </div>
                    <div class="col-12 col-md-2 text-center mb-2">
                        <a href="">
                            <img src="https://picsum.photos/200/300" class="img-fluid">
                            <p class="text-uppercase">lorem ipsum</p>
                        </a>
                    </div> -->
                    <div class="card shadow-sm col-12 col-md-2 text-center mb-2" v-for="item in  items " :key="item.id">
                        <div class="img-hover-zoom img-hover-zoom--colorize text-center">
                            <img class="shadow rounded-circle" :src="item.imageSrc" alt="" style="aspect-ratio: 1;">
                        </div>
                        <div class="card-body">
                            <div class="my-2 text-center">
                                <p class="fs-5">{{ item.name }}</p>
                            </div>
                            <div class="box">
                                <div>
                                    <ul class="list-inline">
                                        <li>
                                            <a :href="item.githubLink">
                                                <font-awesome-icon icon="fa-brands fa-github" bounce size="xl" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    name: "Antonio Cafeo",
                    imageSrc: "/src/assets/Antonio-Cafeo-profile.jpg",
                    githubLink: "https://github.com/francescogentile"
                },
                {
                    id: 2,
                    name: "BoolBerto",
                    imageSrc: "/src/assets/BoolBerto-profile.jpg",
                    githubLink: "https://github.com/francescogentile"
                },
                {
                    id: 3,
                    name: "Giorgio Bocchio",
                    imageSrc: "/src/assets/Giorgio-Bocchio-profile.jpg",
                    githubLink: "https://github.com/francescogentile"
                },
                {
                    id: 4,
                    name: "Alessandro Baldi Pardi",
                    imageSrc: "/src/assets/Alessandro-Baldi-Pardi.jpg",
                    githubLink: "https://github.com/francescogentile"
                },
                {
                    id: 5,
                    name: "Francesco Gentile",
                    imageSrc: "/src/assets/profile-pic (1).png",
                    githubLink: "https://github.com/francescogentile"
                },
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/reset.scss' as *;
@use '../style/partials/color.scss' as *;
@use '../style/general.scss' as *;

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: currentColor;
}

.description {
    max-width: 700px;
}

@media screen and (max-width: 768px) {
    .text {
        column-count: 2;
    }
}


.card {
    border-radius: 1rem;
}

.img-hover-zoom--colorize img {
    width: 150px;
    margin-top: 20px;
    padding: 1px;
    transition: transform .5s;
    filter: grayscale(100%);
}

.img-hover-zoom--colorize:hover img {
    filter: grayscale(0);
    transform: scale(1.05);
}


.box {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>