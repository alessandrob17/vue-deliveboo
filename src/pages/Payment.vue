<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 mb-4">
                <div class="card">
                    <!-- Contenuto del pagamento -->
                    <h4 class="card-header titleOrder" style="color:#555">Riepilogo dell'ordine</h4>
                    <ul class="card-body mb-0">
                        <li class="card-text" v-for="dish in dishes" :key="dish.id">
                            {{ dish.name }} x {{ dish.quantity }}
                        </li>
                    </ul>
                    <span class="ps-3 mb-3">Totale: {{ this.totalPrice.toFixed(2) }}€</span>
                    <!-- <p>Totale: {{ this.totalPrice }}</p> -->
                </div>
            </div>

            <div class="col-12 col-md-6 container-cc-info m-0">
                <div class="card color-sal">
                    <h4 class="card-header titlepayment">Informazioni consegna</h4>
                    <div class="card-body">
                        <div class="alert alert-success" v-if="nonce">
                            Successfully generated nonce.
                        </div>
                        <form @submit="HandlePayPostRedirectOrder" class="d-flex flex-column">
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
                                    <div class="col-6 d-flex flex-column justify-content-between d-none">
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
                                    <div class="col-6 d-flex flex-column justify-content-between">
                                        <label>CVV</label>
                                        <div id="cvv" class="form-control"></div>
                                    </div>
                                </div>
                            </div>


                            <button class="btn btn-light btn-block my-3 payment-button align-self-center" type="submit">

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

        async HandlePayPostRedirectOrder(event) {
            event.preventDefault();

            await this.payWithCreditCard();
            this.redirectToEndPayment();
            await this.postOrder();
        },
        redirectToEndPayment() {
            setTimeout(() => {
                this.$router.push('/endpayment');
            }, 5000)
        },

        calcolaTotale() {
            let totalPrice = 0;
            for (const dish of this.dishes) {
                totalPrice += dish.price * dish.quantity;
            }
            this.totalPrice = totalPrice;
        },

        postOrder() {

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
            setTimeout(() => {
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
            }, 2000);
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
        color: white;
    }

    .payment-button {
        border: 1px solid $principale;
        color: $principale;
        background-color: white;
        padding: 5px;
        width: 40%;

        &:hover {
            color: white;
            background-color: #D3574A;
            border: 1px solid white;

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
    .container-cc-info {
        margin-top: 2rem;
    }

}
</style>