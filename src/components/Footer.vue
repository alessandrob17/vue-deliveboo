<template>
    <footer class="background">
        <div class="container-fluid">
            <div class="row mt-2">
                <div class="description m-auto d-flex flex-column text-white">
                    <img src="../assets/deliveboo-white.png" alt="" class="m-auto my-3" style="max-width:200px">
                    <h3 class="text-center text-white">Team 5</h3>
                    <p class="text text-white">Ciao a tutti! Siamo un gruppo di 5 giovani studenti Boolean che hanno
                        lavorato duramente
                        per portare a termine questo progetto di DeliveBoo. Qui trerete il frutto del nostro lavoro e delle
                        nostre ideee. Speriamo che ilnostro progetto possa ispirarvi e farvi apprezzare la passione che
                        abbiamo messo in esso. Qui sotto i link a GitHub dove potrete visionare i nostri progetti.
                    </p>
                </div>
            </div>
            <div class="container">
                <div class="row justify-content-center gap-3">
                    <div class="card shadow-sm col-12 col-lg-2 text-center mb-2" v-for="item in  items " :key="item.id">
                        <div class="img-hover-zoom img-hover-zoom--colorize text-center">
                            <img class="shadow rounded-circle" :src="item.imageSrc" alt="" style="aspect-ratio: 1;">
                        </div>
                        <div class="card-body d-flex flex-column justify-content-between">
                            <div class="my-2 text-center">
                                <p class="fs-5">{{ item.name }}</p>
                            </div>
                            <div class="box">
                                <div>
                                    <ul class="list-inline">
                                        <li>
                                            <a :href="item.githubLink">
                                                <font-awesome-icon icon="fa-brands fa-github" class="fs-3" />
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
                    githubLink: "https://github.com/Ant0C"
                },
                {
                    id: 2,
                    name: "BoolBerto",
                    imageSrc: "/src/assets/BoolBerto-profile.jpg",
                    githubLink: "https://github.com/albertopiffer"
                },
                {
                    id: 3,
                    name: "Giorgio Bocchio",
                    imageSrc: "/src/assets/Giorgio-Bocchio-profile.jpg",
                    githubLink: "https://github.com/gautr0n"
                },
                {
                    id: 4,
                    name: "Alessandro Baldi Pardi",
                    imageSrc: "/src/assets/Alessandro-Baldi-Pardi.jpg",
                    githubLink: "https://github.com/alessandrob17"
                },
                {
                    id: 5,
                    name: "Francesco Gentile",
                    imageSrc: "/src/assets/profile-pic (1).png",
                    githubLink: "https://github.com/francescogentile25"
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

.background {
    background-color: $principale;
}
</style>