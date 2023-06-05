<template>
    <div class="d-flex flex-column min-vh-100">
        <NavBar></NavBar>
        <main class="prova flex-grow-1">
            <slot />
        </main>
        <Footer></Footer>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        NavBar,
        Footer,
    }
}
</script>

<style lang="scss" scoped>
.prova {
    min-height: 0;
}
</style>