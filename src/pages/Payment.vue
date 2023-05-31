<template>
    <div class="container">
        <div class="col-6 offset-3">
            <div class="card bg-light">
                <div class="card-header">Informazioni sul pagamento</div>
                <div class="card-body">
                    <div class="alert alert-success" v-if="nonce">
                        Successfully generated nonce.
                    </div>
                    <!-- <form @submit="postOrder">
                        <div class="form-group">
                            <label>Nome</label>
                            <input id="" class="form-control" placeholder="Inserisci Nome">
                        </div>
                        <div class="form-group">
                            <label>Indirizzo di consegna</label>
                            <input id="" class="form-control" placeholder="Inserisci l'indirizzo di consegna">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Numero di telefono</label>
                                    <input id="" class="form-control" placeholder="numero di telefono">
                                </div>
                                <div class="col-6">
                                    <label>Totale</label>
                                    <input id="" class="form-control" placeholder="Questo dato non deve essere un input">
                                </div>
                            </div>
                        </div>

                        <hr />
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
                        <button class="btn btn-primary btn-block">
                            Paga stronzo
                        </button>
                    </form> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import braintree from 'braintree-web';

export default {
    data() {
        return {
            hostedFieldInstance: false,
            nonce: "",
        }
    },
    mounted() {
        braintree.client.create({
            authorization: "sandbox_q76fr39z_pwygckh8zgzr2g5y"
        })
            .then(clientInstance => {
                let options = {
                    client: clientInstance,
                    styles: {
                        input: {
                            'font-size': '14px',
                            'font-family': 'Open Sans'
                        }
                    },
                    fields: {
                        number: {
                            selector: '#creditCardNumber',
                            placeholder: 'Enter Credit Card'
                        },
                        cvv: {
                            selector: '#cvv',
                            placeholder: 'Enter CVV'
                        },
                        expirationDate: {
                            selector: '#expireDate',
                            placeholder: '00 / 0000'
                        }
                    }
                }
                return braintree.hostedFields.create(options)
            })
            .then(hostedFieldInstance => {
                this.hostedFieldInstance = hostedFieldInstance;
            })
            .catch(err => {
            });
    },
    methods: {
        //Se vuoi lanciare entrambe le funzioni con un unico button
        // sendOrder() {
        //     this.payWithCreditCard();
        //     this.postOrder();
        // },
        payWithCreditCard() {
            if (this.hostedFieldInstance) {
                this.hostedFieldInstance.tokenize().then(payload => {
                    console.log(payload);
                    this.nonce = payload.nonce;
                    console.log(this.nonce);
                })
                    .catch(err => {
                        console.error(err);

                    })
            }
        },
    }
}
</script>
<style>
body {
    padding: 20px;
}
</style>