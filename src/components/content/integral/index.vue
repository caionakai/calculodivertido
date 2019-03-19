<template>
    <div class="whole">
        <div id="nave">
            <b-nav fill tabs>
                <b-tooltip class="blue-tip" target="conteudo" title="Você está estudando integrais!"></b-tooltip>
                <b-nav-item href="/calculodivertido/"> <i class="material-icons"> keyboard_arrow_left</i> </b-nav-item>
                <b-nav-item active id="conteudo" >Integrais</b-nav-item>
                <div v-b-tooltip.hover title="Aqui é exibido o seu progresso dos conteúdos já estudados!" class="col-sm-2" id="progress">Progresso</div>
                <b-nav-item v-b-tooltip.hover title="Aqui é exibido o seu progresso dos conteúdos já estudados!"> 
                    <b-progress id="progressBar" :value="this.value" :max="100" show-progress animated></b-progress>
                </b-nav-item>
            </b-nav>
        </div>

        <b-button :variant="this.dictionary_styles['first']" class="botao" href="#/integralq1"> 
            Integrais Indefinidas 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['first'] == 'success'"> done </i>
        </b-button>

        <b-button :variant="this.dictionary_styles['second']" class="botao" href="#/integralq2"> 
            Integração por substituição de variáveis 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['second'] == 'success'"> done </i>
        </b-button>

        <b-button :variant="this.dictionary_styles['third']" class="botao" href="#/integralq3"> 
            Integração por partes 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['third'] == 'success'"> done </i>
        </b-button>

        <!-- <b-button :variant="this.dictionary_styles['fourth']" class="botao" href="#/derivativeq4"> 
            Integrais Trigonométricas 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['fourth'] == 'success'"> done </i>
        </b-button>

        <b-button :variant="this.dictionary_styles['fifth']" class="botao" href="#/derivativeq5"> 
            Integração de Funções Racionais por Frações Parciais 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['fifth'] == 'success'"> done </i>
        </b-button>

        <b-button :variant="this.dictionary_styles['sixth']" class="botao" href="#/derivativeq6"> 
            Integral content 
            <i class="material-icons" id="icone" v-if="this.dictionary_styles['sixth'] == 'success'"> done </i>
        </b-button> -->
    </div>

</template>

<script>

export default {
    name: 'IndexIntegral',
    data(){
        return{
            array_styles: [],
            value: 0,
            dictionary_styles: {},
        }
    },
    mounted(){
        // words to create the dictionary with default value outline-success
        this.array_styles = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
        // dictionary is filled with outline-success style by default
        for(var i=0; i < 6; i++){
            this.dictionary_styles[this.array_styles[i]] = 'outline-success';
        }
        var tam;
        if(this.derivada){
            tam = Object.keys(this.derivada).length;
        }else{
            // if you try to put zero the colors of the buttons will change 
            // for some mysterious reason
            tam = 0.000000001;
        }
        if(this.derivada){
            var temp = this.derivada;
            var tempDic = this.dictionary_styles;
            Object.keys(temp).forEach(function(key){
                // se o exercicio estiver feito, ou seja, true
                // coloca success no dicionario
                if(temp[key]){
                    tempDic[key] = 'success';
                }
                // console.log(key, temp[key]);
            });
            this.dictionary_styles = tempDic;
            // console.log(this.dictionary_styles);
        }

        // 16.66 cuz 100/6  (number of contents) = 16.66 hence: 
        // valor da barra de progresso
        this.value = tam * 33.33;
    },
    beforeCreate(){
        // retrieve 'derivada' data available on localStorage
        this.derivada = JSON.parse(localStorage.getItem("integral"));
    },
    methods:{
        changeRoute(){
            window.location.href = "derivativeq1";
        }
    }
}
</script>

<style scoped>
.botao{
    width: 100%;
    margin-top: 2%;
    text-align: justify;
    padding-left: 30%;
    font-size: 1.4vw;


}
/* tooltip background color */
.blue-tip .tooltip-inner {
   background-color: #44f !important;
   color: #fff !important;
}
/* arrrow color */
.blue-tip .tooltip-inner::before {
   border-top-color: #44f !important;
}

/* .vue-tooltip{
    background-color: blue;

    .tooltip-arrow
      border-color: blue
} */

#nave{
    margin-top: 5%;
}
#icone{
    position: absolute;
    right: 18px;
    vertical-align: middle;
    font-size: 1.7vw;
    /* padding: 2px; */
}
#progressBar{
    position: relative;
    margin-top: 6px;
}
#progress{
    position: relative;
    margin-top: 6px;   
}
</style>
