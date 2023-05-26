<template>
    <Default>
        <div>
            il tuo ristorante specifico
        </div>
    </Default>
</template>

<script>
import axios from 'axios';
import Default from '../layouts/Default.vue';
export default {
    components: {
        Default
    },
    props: ['id'],
    methods: {
        fetchProjects(id) {
            axios.get(`http://127.0.0.1:8000/api/restaurants/${id}`)
                .then(res => {
                    const { success, project } = res.data;
                    if (success) {
                        this.project = project;
                    } else {
                        //   this.$router.replace({ name: '404' });
                        console.log('errore')
                    }
                });
        }
    },
    created() {
        const id = this.$route.params.id;
    },
    beforeRouteUpdate(to, from) {
        const newId = to.params.id;
        this.fetchProjects(newId);
    },
    mounted() {
        console.log(this.$route);
    }

}
</script>

<style lang="scss" scoped></style>