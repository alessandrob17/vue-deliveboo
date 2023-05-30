<template>
  <div class="mb-5">
    <h2 class="filter-title mb-4">Di cosa hai voglia?</h2>
    <div class="box">
      <carousel :items-to-show="9" :wrapAround="true" :transition="500">
        <slide v-for="slide in 20" :key="slide">
          <div class="card-box">
              <img class="card-img-top" src="https://picsum.photos/1000/1000" alt="Pizza">
            <a class="title" href="">Pizza</a>
          </div>
        </slide>

        <template #addons>
          <navigation/>
          <pagination/>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  name: 'Autoplay',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
</script>

<style lang="scss">
.transition {
    transition: transform .2s;
    box-shadow: 0px 4px 33px -7px #000000;


    &:hover {
        transform: scale(1.1);
    }
}
.title{
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all;
    top: 50%;
    left: 50%;
    color: white;
    font-size: 32px;
    transition: transform .2s;
    text-decoration: none;
    font-weight: bolder;

    &:hover {
      color: #FF7659;
  }
}
.box{
    margin: 0 auto;
}
.card-box{
  height: 100%;
  width: 100%;
}
.filter-title{
    color: #FF7659;
    text-shadow: 1px 1px rgb(157, 157, 157);
    font-size: 50px;
    width: 68vw;
    text-align: center;
    font-family: 'Playfair', serif;
    font-style: italic;
    margin: 0 auto;
}

.carousel__next, .carousel__prev{
  color: black;
  background-color: #FF7659;
  border-radius: 25%;
  height: 25%;
  width: 3%;
}
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}
.carousel__pagination-item{
  color: #FF7659;
}
</style>
