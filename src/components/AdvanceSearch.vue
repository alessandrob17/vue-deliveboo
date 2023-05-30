<template>
    <a class="d-flex justify-content-center" href="/research/0">
        <button class="btn-search">Esegui una ricerca avanzata!</button>
    </a>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/partials/color.scss' as *;
.btn-search {
    border-radius: 999px;
    background-color: $principale;
    padding: 13px 35px;
    border: none;
    color: white;
    font-size: 23px;
    margin-bottom: 50px;
  
  }</style>