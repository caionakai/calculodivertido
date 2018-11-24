<template>
    <div class="whole">
        <div id="nave">
            <b-nav fill tabs>
                <b-nav-item href="/"> <i class="material-icons"> keyboard_arrow_left</i> </b-nav-item>
                <b-nav-item active>Derivadas</b-nav-item>
                <div class="col-sm-2" id="progress">Progresso</div>
                <b-nav-item> 
                    <b-progress id="progressBar" :value="this.value" :max="100" show-progress animated></b-progress>
                </b-nav-item>
            </b-nav>
        </div>

        <b-button :variant='this.array_styles[0]' class="botao" href="/derivativeq1"> 
            Taxa de Variação, Coeficiente Angular e Variação de uma função não linear. 
            <i class="material-icons" id="icone" v-if="this.array_styles[0] == 'success'"> done </i>
        </b-button>

        <b-button :variant='this.array_styles[1]' class="botao"> Derivada pela definição. 
            <i class="material-icons" id="icone" v-if="this.array_styles[1] == 'success'"> done </i>
        </b-button>

        <b-button :variant='this.array_styles[2]' class="botao"> Regra da Potência 
            <i class="material-icons" id="icone" v-if="this.array_styles[2] == 'success'"> done </i>
        </b-button>

        <b-button :variant='this.array_styles[3]' class="botao"> Regras de Derivação 
            <i class="material-icons" id="icone" v-if="this.array_styles[3] == 'success'"> done </i>
        </b-button>

        <b-button :variant='this.array_styles[4]' class="botao"> Regra do Produto 
            <i class="material-icons" id="icone" v-if="this.array_styles[4] == 'success'"> done </i>
        </b-button>

        <b-button :variant='this.array_styles[5]' class="botao"> Regra da Cadeia 
            <i class="material-icons" id="icone" v-if="this.array_styles[5] == 'success'"> done </i>
        </b-button>
    </div>

</template>

<script>

export default {
    name: 'Index',
    data(){
        return{
            array_styles: [],
            value: 0,
        }
    },
    mounted(){
        // size = 6 because there is six buttons, must be changed when more content be added 
        // can't think in another approach is late night
        this.array_styles = [6];
        // array is filled with outline-success style by default
        for(var i=0; i < 6; i++){
            this.array_styles[i] = 'outline-success';
        }
        // the size of 'derivada' object determine the quantity of content studied
        var size;
        size = Object.keys(this.derivada).length;
        for(var i=0; i < size; i++){
            this.array_styles[i] = 'success';
        }
        // 16.66 cuz 100/6  (number of contents) = 16.66 hence: 
        this.value = size * 16.66;
    },
    beforeCreate(){
        // retrieve 'derivada' data available on localStorage
        this.derivada = JSON.parse(localStorage.getItem("derivada"));
    },
}
</script>

<style scoped>
.botao{
    width: 100%;
    margin-top: 2%;
    text-align: justify;
    padding-left: 30%;

}
#nave{
    margin-top: 5%;
}
#icone{
    position: relative;
    margin-left: 30%;
    vertical-align: middle;
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
