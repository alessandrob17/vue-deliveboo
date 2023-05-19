<template>
    <div>
        <NavBar></NavBar>
        <main>
            <slot />
        </main>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
export default {
    components: {
        NavBar,
    }
}
</script>

<style lang="scss" scoped></style>