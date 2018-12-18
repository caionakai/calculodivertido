<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs class="nav-fill" card v-model="tabIndex">

                    <b-tab @click="goMain()">
                     <template slot="title"><i class="material-icons"> keyboard_arrow_left</i></template>    
                    </b-tab>
                    <b-tab title="Conteúdo Teórico" active>
                        <h4>Regra da Cadeia</h4>
                        <video width="30%" height="15%" controls>
                            <source src="../../../assets/Videos/q6-1.mp4" type="video/mp4">
                            Há algum problema com o vídeo, utilize outro navegador!
                        </video> 
                    </b-tab>

                    <!-- Exercícios a partir daqui  -->
                    <b-tab>
                        <template slot="title">Exercício 1
                            <i class="material-icons" id="icone" v-if="!isDisabled2"> done </i>
                        </template>
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p> 
                                Determine a  reta tangente à curva da função 
                                    <vue-mathjax style="display:inline-block" :formula="formula"></vue-mathjax>
                                para x = 3.   
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="1a" for="input1A">a)</label>
                            <input type="radio" id="input1A" value="1a" name="quest" v-model="selected">
                            <label for="input1A">
                                <vue-mathjax style="display:inline-block" :formula="formula3"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1b" for="input1B">b)</label>
                            <input type="radio" id="input1B" value="1b" name="quest" v-model="selected">
                            <label for="input1B">
                                <vue-mathjax style="display:inline-block" :formula="formula2"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1c" for="input1C">c)</label>
                            <input type="radio" id="input1C" value="1c" name="quest" v-model="selected">
                            <label for="input1C">
                                <vue-mathjax style="display:inline-block" :formula="formula4"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1d" for="input1D">d)</label>
                            <input type="radio" id="input1D" value="1d" name="quest" v-model="selected">
                            <label for="input1D">
                                <vue-mathjax style="display:inline-block" :formula="formula5"></vue-mathjax>
                            </label>
                        </p>
                        <hr>

                        <b-button  @click="checkForm()" variant="success">
                            Confirmar Resposta
                        </b-button>

                    </b-tab>

                    <b-tab :disabled=isDisabled2>
                        <template slot="title">Exercício 2
                            <i class="material-icons" id="icone" v-if="!isDisabled3"> done </i>
                            </template>
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p class="title"> 
                                Um investidor deposita R$ 2.000,00 em um determinado banco, a uma taxa anual de r de juros, capitalizados
                                mensalmente. Após 3 anos, o montante da conta é dado por:
                                    <vue-mathjax style="display:inline-block" :formula="formulaEx2"></vue-mathjax>
                                Determine a taxa de variação de M em relação a r, quando r = 0,06. (CDI, pág:551)
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="2a" for="input2A">a)</label>
                            <input type="radio" id="input2A" name="quest" value="2a" v-model="selected">
                            <label for="input2A">
                                7.144,36
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="2b" for="input2B">b)</label>
                            <input type="radio" id="input2B" value="2b" name="quest" v-model="selected">
                            <label for="input2B">
                                6.324,21
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="2c" for="inputC">c)</label>
                            <input type="radio" id="input2C" value="2c" name="quest" v-model="selected">
                            <label for="input2C">
                                9.951,42
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="2d" for="inputD">d)</label>
                            <input type="radio" id="input2D" value="2d" name="quest" v-model="selected">
                            <label for="input2D">
                                8.456,77
                            </label>
                        </p>
                        <hr>
                        <b-button  @click = "checkForm()" variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>

                </b-tabs>
            </b-card>
            <ModalSuccess v-if="ok" :isLast="isLast? true : false" :show="ok" @modal="changeOkfromChild"></ModalSuccess>
            <ModalFailure v-if="error" :isLast=isLast :show="error" @modal="changeTabfromChild"></ModalFailure>
        </div>


    </div>

</template>

<script>
import ModalSuccess from "./ModalSuccess";
import ModalFailure from "./ModalFailure";
import { setTimeout } from 'timers';
import { VueMathjax } from 'vue-mathjax'
export default {
  name: "Question2Derivative",
  components: {
    ModalSuccess,
    ModalFailure,
    'vue-mathjax': VueMathjax,    
  },
  data(){
      return{
          tabIndex: 1,
          isDisabled2: true,
          isDisabled3: true,
          ok: false,
          isLast: false,
          selected: false,
          error: false,
          error_count: 0,
          data:{
              sixth: true,
          }
      }
  },
  methods: {
    goMain(){
        this.$router.push({ name: "IndexDerivative" });
    },
    updateFormula: function () {
      this.$nextTick(function () {
        this.formula = '$$y = {\\sqrt{3x^2+7}}$$'
        this.formula2 = '$$y\' = {\\sqrt{6x}}.$$'
        this.formula3 = '$$y\' = {3x\\over2}.$$'
        this.formula4 = '$$y\' = {3x\\over2\\sqrt{3x^2+7}}.$$'
        this.formula5 = '$$y\' = {3x\\over\\sqrt{3x^2+7}}.$$'
        this.formulaEx2 = '$$M = {2000.{(1+{r\\over12})}^{36}}$$'        
      })
    },    
    checkForm(){
        // condições para habilitar os outros exercícios.
        if(this.selected == "1d"){
            this.isDisabled2 = false;
            this.tabIndex++;
            this.ok = true;
        }
        else if(this.selected == "2a"){
            this.iconTab3 = true;
            // ativa variavel para redirecionar pra pagina inicial
            this.isLast = true;
            // abre o modal
            this.ok = true;
            this.test = JSON.parse(localStorage.getItem("derivada"));
            if(this.test == null){
                localStorage.setItem('derivada', JSON.stringify(this.data));
            }else{
                this.test.sixth = true;
                localStorage.setItem('derivada', JSON.stringify(this.test));                
            }

        }
        else{
            alert("Resposta Incorreta")
            if(this.error_count == 1){
                // se for a ultima quest nao tem o botao "pular questao"
                if(this.tabIndex==3){
                    this.isLast=true;
                }else{
                    this.isLast=false;
                }
                this.error = true;
                this.error_count = 0;
            }else{
                this.error_count++;
            }
        }

    },
    // when the 'Confirmar' button on ModalSuccess component is clicked this method is executed
    changeOkfromChild(boolean){
        this.tabIndex++;
        this.ok = boolean;
        this.selected = false;
    },
    trocaTab(){
        this.tabIndex = 3;
    },
    // metodo executado pelo componente ModalFailure
    changeTabfromChild(controle){
        // entra no if se é para pular a questão
        if(controle){
            if(this.tabIndex == 2){
                // var that = this;
                // let oi = new Promise(function(resolve, reject){
                //     resolve(that.isDisabled2 = false);
                //     // console.log("entrei aq")
                // });
                // oi.then( () => this.tabIndex = 3);
                this.isDisabled2 = false;
                // espera 100ms (tempo para atualizar o disabled) antes de trocar a tab    
                setTimeout(this.trocaTab, 100)

            }
            else if(this.tabIndex == 3){
                this.isDisabled3 = false;
            }
        }
        // senão, volta pro inicio (conteudo teorico)
        else{
            this.tabIndex = 1;
        }
        this.selected = false;
        this.error = false;
    }
  },
  beforeCreate(){
    // retrieve 'derivada' data available on localStorage
    this.derivada = JSON.parse(localStorage.getItem("derivada"));
  },
  mounted() {
    this.updateFormula();
    // verifica se o exercicio já foi feito antes, se sim então libera a navegação entre as tabs
    if(this.derivada.sixth){
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        // this.iconTab3 = true;
    }
  },
};
</script>

<style scoped>
h4{
    text-align: justify;
    margin-left: 25%;
    margin-top: 1%;
}
.title{
    text-align: justify;
    padding-right: 10%;
}
#quest{
    font-weight: bold;
    text-decoration: underline;
}

.enunciado{
    text-align: justify;
    margin-left: 10%;

}
#icone{
    position: relative;
    top: 4px;
    margin-left: 1%;
    color: green;
}

b-tab:disabled{
    cursor: not-allowed;
}

</style>
