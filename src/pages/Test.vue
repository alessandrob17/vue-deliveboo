<template>
    <div>
        <form @submit="handleSubmit">
            <input type="text" v-model="name" placeholder="Nome">
            <button type="submit">Invia</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            address: 'via roma 104',
            phone_number: '3484245698',

            total: '23',
        };
    },
    methods: {
        handleSubmit(event) {
            event.preventDefault();

            const formData = {
                name: this.name,
                address: this.address,
                phone_number: this.phone_number,

                total: this.total,
            };

            // axios.post('/api/save-name', formData)
            axios.post('http://localhost:8000/api/save-name', formData)
                .then(response => {
                    console.log(response.data);
                    // Esegui altre azioni dopo il salvataggio dei dati
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
};
</script>
