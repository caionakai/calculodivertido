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
        // verifica se existe um objeto chamado derivada no local storage caso contrário cria
        // é nesse objeto onde é guardado as informações de conteúdos já estudados
        this.test = JSON.parse(localStorage.getItem("derivada"));
        if(this.test == null){
            localStorage.setItem('derivada', JSON.stringify(this.data));
        }
    },
    data(){
        return {
            data:{
                first: false,
                // as outras variáveis que representam o conteúdo já estudado 
                // são definidas no final de cada questão.
            }
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

