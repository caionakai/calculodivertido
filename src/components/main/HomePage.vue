<template>
    <div class="whole">
        <h1 id="titulo">Conteúdos Disponíveis</h1>
        <hr>
        <div id="botoes">
            <b-button variant="outline-success" id="botao" href="/derivative"> Derivadas </b-button>
            <b-button variant="outline-success" id="botao"> Simulações </b-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    mounted(){
    },
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.whole{
    padding: 3%;
}
#botao {
    border-color: rgb(79, 146, 255);
    color: rgb(79, 146, 255);
    margin-top: 1%;
    width: 50%;
}

#botao:hover{
    background-color:rgb(79, 146, 255);
    color:white
}

#titulo{
    text-align: left;
}

#botoes{
    text-align: left;
    padding-bottom: 0.5%;
}

</style>

