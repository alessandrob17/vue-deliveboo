<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <!-- Contenuto del pagamento -->
                    <h4 class="card-header titleOrder">Riepilogo dell'ordine</h4>
                    <ul class="card-body">
                        <li class="card-text fs-4" v-for="dish in dishes" :key="dish.id">
                            {{ dish.name }} x {{ dish.quantity }}
                        </li>
                    </ul>
                    <!-- <p>Totale: {{ this.totalPrice }}</p> -->
                </div>
            </div>

            <div class="col container-cc-info">
                <div class="card color-sal">
                    <h4 class="card-header titlepayment">Informazioni consegna</h4>
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

                            <hr />
                            <h4 class="titlepayment">Informazioni pagamento</h4>
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
                            </div>

                            <button class="btn btn-light btn-block my-3 payment-button" type="submit"
                                @click="payWithCreditCard">
                                Paga
                                <!-- stronzo -->
                            </button>
                        </form>
                    </div>
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

            listOrders: [],
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

        this.listOrders = this.dishes;

    },
    watch: {
        listOrders: {
            handler(orderlist) {
                localStorage.listOrders = JSON.stringify(orderlist);
                console.log(this.listOrders);
            },
            deep: true
        }
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

                dishes: this.dishes,
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

    mounted() {
        if (localStorage.listOrders) {
            this.listOrders = JSON.parse(localStorage.listOrders);
        }

        braintree.client
            .create({
                authorization: "sandbox_q76fr39z_pwygckh8zgzr2g5y",
            })
            .then((clientInstance) => {
                let options = {
                    client: clientInstance,
                    styles: {
                        input: {
                            "font-size": "16px",
                            "font-family": "Open Sans",
                        },
                    },
                    fields: {
                        number: {
                            selector: "#creditCardNumber",
                            placeholder: "Numero carta di credito",
                        },
                        cvv: {
                            selector: "#cvv",
                            placeholder: "CVV",
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

};
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/partials/color.scss' as *;

.color-sal {
    background-color: $principale;
    color: white;
}

.container {
    padding: 50px;

    .titleOrder {
        font-size: 2rem;
    }

    .titlepayment {
        font-size: 2rem;
    }

    .payment-button {
        border-radius: 999px;
        border: 1px solid $principale;
        color: $principale;
        background-color: white;
        padding: 5px;

        &:hover {
            color: white;
            background-color: $principale;

            .icon {
                color: white
            }
        }
    }
}

ul,
ol,
a {
    list-style: none;
    text-decoration: none;
    color: currentColor;
}

@media screen and (max-width: 532px) {
    .container-cc-info{
        margin-top: 2rem;
    }
  
}
</style>