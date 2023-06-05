<template>
    <div class="accordio-title mb-4 text-uppercase fs-1 mt-2">Domande Frequenti</div>
    <div class="accordion-box mb-5">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button fs-5" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cos'è Deliveboo?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        La missione di DeliveBoo è quella di trasformare il mondo del cibo a domicilio. Collaboriamo con i
                        migliori ristoranti della città, dalle gemme locali alle grandi catene nazionali per portarti dove
                        vuoi i tuoi piatti preferiti. Con centinaia di ristoranti e rider esperti, ti consegniamo il tuo
                        ordine il più velocemente possibile.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Come Funziona?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Puoi ordinare sia dal sito sia dalla nostra app, disponibile per iOS e Android. Aggiungi il tuo
                        indirizzo di consegna per vedere quali ristoranti consegnano da te, scegli i tuoi piatti preferiti
                        ed effettua l'ordine. Quando il tuo ordine viene accettato, il ristorante inizia a prepararlo e a
                        confezionarlo. Una volta pronto, un nostro rider lo ritira e lo porta da te. Se vuoi essere super
                        organizzato, puoi ordinare fino a 24 ore in anticipo con un ordine programmato.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed fs-5" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Che Tipo Di Ristoranti Trovo Su Deliveboo?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Ci prendiamo cura personalmente di proporti un'ampia selezione di ristoranti di alta qualità nella
                        tua area. Questo significa che puoi trovare dal miglior ristorante giapponese, all'hamburgheria più
                        gustosa, alla pizzeria italiana tradizionale con forno a legna. L'unica cosa che non troverai su
                        DeliveBoo sono ristoranti di scarsa qualità.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@use '../style/partials/color.scss' as *;

.accordio-title {
    color: $principale;
    font-size: 50px;
    width: 68vw;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin: 0 auto;
}

.accordion-box {
    margin: 0 auto;
    width: 80vw;
}

.accordion-button:not(.collapsed) {
    color: white;
    background-color: $principale;
}

.accordion-button:focus {
    box-shadow: 0 0 0 0.25rem #fc866fac;
}





.accordion-button:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}
</style>