<template>
    <div class="d-flex justify-content-center mt-5">
        <a class="btn-search rounded-4" href="/research">Esegui una ricerca avanzata!</a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
@use '../style/partials/color.scss' as *;
@use '../style/partials/reset.scss' as *;
@use '../style/partials/reset.scss' as *;

.btn-search {

    background-color: $principale;
    padding: 13px 35px;
    border: none;
    color: white;
    font-size: 23px;
    margin-bottom: 50px;
}
</style>