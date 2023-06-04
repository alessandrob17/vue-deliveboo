<template>
    <!-- <div class="container-fluid d-flex justify-content-center align-items-center mb-5">
        <div class="prova">
            <div id="cursor" :style="{ top: cursorY + 'px', left: cursorX + 'px', }">
                <div class="hero-hover">
                    <a class="advise" href="">Rendi i tuoi Ristoranti preferiti a portata di un Click</a> -->

    <!-- <img class="pizza" src="../assets/462a03f57b4441e6c8e7079d4f3583f7-removebg.png" alt="">

                </div>
            </div>
        </div>
    </div> -->

    <div class="container d-flex align-items-center justify-content-center">


        <div class="container-logo-hero">
            <img class="logo-hero " src="../assets/panino.png" alt="">
        </div>

        <div>
            <h1 class="h1-hero text-center">
                Ordina ora
            </h1>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            cursorX: 0,
            cursorY: 0,
        }
    },
    mounted() {
        window.addEventListener('mousemove', this.mouseMove)
    },
    methods: {
        mouseMove(event) {
            this.cursorX = event.clientX / 50
            this.cursorY = event.clientY / 50
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Playfair:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');



.container {
    min-height: 600px;
    background-color: $principale;
    min-width: 100%;
    flex-basis: 50%;
    flex-wrap: wrap;
    background-image: url(../assets/wave.svg);
    background-repeat: no-repeat;
    background-position: bottom;
}

.logo-hero {
    width: 465px;
}

.h1-hero {
    position: relative;
    color: white;
    font-size: 100px;
    max-width: 600px;
    text-transform: uppercase;
    font-family: Roboto;

}

.container-logo-hero {
    position: absolute;
}


@media screen and (min-width: 2560px) {
    .h1-hero {
        font-size: 100px;
        max-width: 600px;
    }

    .logo-hero {
        width: 550px;
    }

    .container {
        min-height: 715px;
    }

}

@media screen and (max-width: 767px) {
    .h1-hero {
        font-size: 90px;
        max-width: 600px;
    }

    .logo-hero {
        width: 420px;
    }

    .container {
        background-position-y: 50vh;


    }

}










// .container-fluid {
//     background-color: $principale;
//     min-height: 700px;
// }

// .prova {
//     position: relative;

// }

// #cursor {
//     position: absolute;
//     transform: translate(-50%, -50%);
//     transition: all;
//     // top: 50%;
//     // left: 50%;
// }

// .pizza {
//     width: 25vw;

// }

// // .advise{
// //     position: absolute;
// //     transform: translate(-50%, -50%);
// //     transition: all;
// //     top: 50%;
// //     left: 50%;
// //     text-decoration: none;
// //     color: white;
// //     font-size: 72px;
// //     text-shadow: 3px 3px rgb(71, 71, 71);
// //     width: 68vw;
// //     text-align: center;
// //     font-family: 'Playfair', serif;
// //     font-style: italic;
// // }
// .hero-hover {
//     transition: transform .5s;  

// }

// .hero-hover:hover {
//     transform: scale(1.1);



// }
</style>