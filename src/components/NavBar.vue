<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link :to="{ name: 'home' }" class="navbar-brand">
                    <img src="../assets/logo 1 v2.JPG" alt="Logo" class="d-inline-block align-text-top">

                </router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mb-2 mb-lg-0 ">
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="#">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Registrati</a>
                        </li>

                    </ul>
                </div>
                <font-awesome-icon icon="fa-solid fa-star" />
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
    width: 100%;
    max-width: 200px;
}
</style>