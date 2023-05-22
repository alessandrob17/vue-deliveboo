<template>
    <div>
        <NavBar></NavBar>
        <main class="container">
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

<style lang="scss" scoped></style>