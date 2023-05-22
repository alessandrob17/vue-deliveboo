<template>
    <h1 class="text-center">Ordina stronzo</h1>
    <div class="container-fluid d-flex justify-content-center align-items-center">
        <div class="prova d-flex">
            <div id="cursor" :style="{ top: cursorY + 'px', left: cursorX + 'px', }">
                <img src="../assets/hamburgher.png" alt="" style="max-width: 400px;">
            </div>
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
.container-fluid {
    background-image: url(../assets/backgound-hero.jpg);
    min-height: 700px;
}

.prova {
    position: relative;

}

#cursor {
    position: absolute;
    transform: translate(-50%, -50%);
    transition: all;
    top: 50%;
    left: 50%;
}
</style>