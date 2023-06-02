<template>
    <div>
        <div class="dropdown d-block d-sm-none">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Descrizione
            </button>
            <div class="dropdown-menu">
                <div class="dropdown-item">
                    <p>
                        <slot />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.dropdown-menu {
    max-height: 280px;
    overflow-y: auto;
    min-width: 100% !important;
    background-attachment: local, local, scroll, scroll;
}

.dropdown-item {
    white-space: normal;
}
</style>