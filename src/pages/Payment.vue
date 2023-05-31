<template>
    <div class="container">

        <div>
            <!-- Contenuto del pagamento -->
            <h4>Riepilogo dell'ordine</h4>
            <ul>
                <li v-for="dish in dishes" :key="dish.id">{{ dish.name }} x {{ dish.quantity }}</li>
            </ul>
            <!-- <p>Totale: {{ this.totalPrice }}</p> -->
        </div>

        <div class="col-6 offset-3">
            <div class="card bg-light">
                <div class="card-header">Informazioni sul pagamento</div>
                <div class="card-body">
                    <div class="alert alert-success" v-if="nonce">
                        Successfully generated nonce.
                    </div>
                    <form @submit="postOrder">
                        <div class="form-group">
                            <label>Nome</label>
                            <input type="text" v-model="name" class="form-control" placeholder="Inserisci Nome">
                        </div>
                        <div class="form-group">
                            <label>Indirizzo di consegna</label>
                            <input type="text" v-model="address" class="form-control"
                                placeholder="Inserisci l'indirizzo di consegna">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Numero di telefono</label>
                                    <input type="text" v-model="phone_number" class="form-control"
                                        placeholder="numero di telefono">
                                </div>
                                <div class="col-6">
                                    <label>Totale</label>
                                    <input type="text" v-model="totalPrice" class="form-control" placeholder="Totale"
                                        readonly>
                                </div>
                            </div>
                        </div>

                        <!-- <hr />
                        <div class="form-group">
                            <label>Numero carta di credito</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Expire Date</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div> -->


                        <button class="btn btn-primary btn-block my-3" type="submit">
                            Paga <!-- stronzo -->
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import braintree from 'braintree-web';

import { useStore } from 'vuex';

export default {
    data() {
        return {
            hostedFieldInstance: false,
            nonce: '',

            name: '',
            address: '',
            phone_number: '',

            totalPrice: 0, // Modificato il nome della variabile da 'total' a 'totalPrice'
        };
    },

    computed: {
        dishes() {
            const store = useStore();
            return store.state.dishes;
        },
    },

    created() {
        this.calcolaTotale();
    },

    methods: {
        calcolaTotale() {
            let totalPrice = 0;
            for (const dish of this.dishes) {
                totalPrice += dish.price * dish.quantity;
            }
            this.totalPrice = totalPrice;
        },

        postOrder(event) {
            event.preventDefault();

            const formData = {
                name: this.name,
                address: this.address,
                phone_number: this.phone_number,

                total: this.totalPrice, // Modificato il nome della variabile da 'total' a 'totalPrice'
            };

            axios
                .post("http://localhost:8000/api/order-post", formData)
                .then((response) => {
                    console.log(response.data);
                    // Esegui altre azioni dopo il salvataggio dei dati
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        mounted() {
            braintree.client
                .create({
                    authorization: "sandbox_q76fr39z_pwygckh8zgzr2g5y",
                })
                .then((clientInstance) => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                "font-size": "14px",
                                "font-family": "Open Sans",
                            },
                        },
                        fields: {
                            number: {
                                selector: "#creditCardNumber",
                                placeholder: "Enter Credit Card",
                            },
                            cvv: {
                                selector: "#cvv",
                                placeholder: "Enter CVV",
                            },
                            expirationDate: {
                                selector: "#expireDate",
                                placeholder: "00 / 0000",
                            },
                        },
                    };
                    return braintree.hostedFields.create(options);
                })
                .then((hostedFieldInstance) => {
                    this.hostedFieldInstance = hostedFieldInstance;
                })
                .catch((err) => {
                    console.error(err);
                });
        },

        payWithCreditCard() {
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance
                    .tokenize()
                    .then((payload) => {
                        console.log(payload);
                        this.nonce = payload.nonce;
                        console.log(this.nonce);
                    })
                    .catch((err) => {
                        console.error(err);
                    });
            }
        },
    },
};
</script>
<style lang="scss" scoped>
body {
    padding: 20px;
}

ul,
ol {
    list-style: none;
}
</style>