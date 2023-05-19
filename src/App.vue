<script>
import Main from './components/Main.vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    NavBar,
    Main,
    Footer,
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
