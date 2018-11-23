<template>
    <div class="whole">
        <div id="nave">
            <b-nav fill tabs>
                <b-nav-item active>Derivadas</b-nav-item>
                <b-nav-item> 
                    <b-progress :value="70" :max="100" show-progress animated></b-progress>
                </b-nav-item>
            </b-nav>
        </div>

        <b-button variant="outline-success" class="botao" href="/derivativeq1"> Taxa de Variação, Coeficiente Angular e Variação de uma função não linear. </b-button>

        <b-button variant="outline-success" class="botao"> Derivada pela definição. </b-button>

        <b-button variant="outline-success" class="botao"> Regra da Potência </b-button>

        <b-button variant="outline-success" class="botao"> Regras de Derivação </b-button>
    </div>

</template>

<script>

export default {
    name: 'Index',
}
</script>

<style scoped>
.botao{
    width: 100%;
    margin-top: 2%;
    text-align: justify;
    /* margin-left: 30%; */
    padding-left: 30%;

}
#nave{
    margin-top: 5%;
}

</style>
