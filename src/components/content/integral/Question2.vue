<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs class="nav-fill" card v-model="tabIndex">

                    <b-tab @click="goMain()">
                     <template slot="title"><i class="material-icons"> keyboard_arrow_left</i></template>    
                    </b-tab>
                    <b-tab title="Conteúdo Teórico" active>
                        <h4>Substituição de Variáveis</h4>
                        <video width="30%" height="15%" controls>
                            <source src="../../../assets/Videos/integral-q2.webm" type="video/mp4">
                            Há algum problema com o vídeo, utilize outro navegador!
                        </video> 
                    </b-tab>

                    <!-- Exercícios a partir daqui  -->
                    <b-tab>
                        <template slot="title">Exercício 1
                            <i class="material-icons" id="icone" v-if="!isDisabled2"> done </i>
                        </template>
                        <div class="enunciado">
                            <a id="quest">Questão:
                            </a>
                                Calcule a seguinte integral através da substituição de variáveis:
                                <vue-mathjax style="display:inline-block" :formula="formula"></vue-mathjax>
                            <p> 
                                
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="1a" for="input1A">a)</label>
                            <input type="radio" id="input1A" value="1a" name="quest" v-model="selected">
                            <label for="input1A">
                                <vue-mathjax style="display:inline-block" :formula="formula2"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1b" for="input1B">b)</label>
                            <input type="radio" id="input1B" value="1b" name="quest" v-model="selected">
                            <label for="input1B">
                                <vue-mathjax style="display:inline-block" :formula="formula3"></vue-mathjax>
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
                            Calcule a seguinte integral através da substituição de variáveis:
                            <vue-mathjax style="display:inline-block" :formula="formula6"></vue-mathjax>
                        </div>
                        <hr>
                        <p>
                            <label id="2a" for="input2A">a)</label>
                            <input type="radio" id="input2A" name="quest" value="2a" v-model="selected">
                            <label for="input2A">
                                <vue-mathjax style="display:inline-block" :formula="formula8"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="2b" for="input2B">b)</label>
                            <input type="radio" id="input2B" value="2b" name="quest" v-model="selected">
                            <label for="input2B">
                                <vue-mathjax style="display:inline-block" :formula="formula7"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="2c" for="inputC">c)</label>
                            <input type="radio" id="input2C" value="2c" name="quest" v-model="selected">
                            <label for="input2C">
                                <vue-mathjax style="display:inline-block" :formula="formula9"></vue-mathjax>
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="2d" for="inputD">d)</label>
                            <input type="radio" id="input2D" value="2d" name="quest" v-model="selected">
                            <label for="input2D">
                                <vue-mathjax style="display:inline-block" :formula="formula10"></vue-mathjax>
                            </label>
                        </p>
                        <hr>
                        <b-button  @click = "checkForm()" variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>


                </b-tabs>
            </b-card>
            <ModalSuccess v-if="ok" :isIntegrate=true :isLast="isLast? true : false" :show="ok" @modal="changeOkfromChild"></ModalSuccess>
            <ModalFailure v-if="error" :isLast="isLast" :show="error" @modal="changeTabfromChild"></ModalFailure>
        </div>


    </div>

</template>

<script>
import ModalSuccess from "../derivative/ModalSuccess";
import ModalFailure from "../derivative/ModalFailure";
import { VueMathjax } from 'vue-mathjax'
export default {
  name: "Question2Integral",
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
          iconTab3: false,
          ok: false,
          isLast: false,
          selected: false,
          error: false,
          error_count: 0,
          data: {
              second: true,
          }
      }
  },
  methods: {
    goMain(){
        this.$router.push({ name: "IndexIntegral" });
    },
    updateFormula: function () {
        this.$nextTick(function () {
        this.formula = '$$\\int { ({x^3}-1)^4 x^2 dx}$$'
        this.formula5 = '$${{({x^3}-1)}^5\\over15}+c$$'
        this.formula3 = '$${{({x-1})}^5\\over15}+c$$'
        this.formula4 = '$${{({x^3}-1)}^5}+c$$'
        this.formula2 = '$${{({x^3}-1)}}+c$$'
        this.formula6 = '$$\\int {{x\\over{(x^2-1)}}dx}$$'
        this.formula8 = '$${1\\over2}ln|(x^2-1)|+c$$'
        this.formula7 = '$$ln|(x^2-1)|+c$$'
        this.formula9 = '$$|(x^2+1)|+c$$'
        this.formula10 = '$${1\\over2}ln|(x+1)|+c$$'
      })
    },    
    trocaTab(){
        this.tabIndex++;
    },
    checkForm(){
        // condições para habilitar os outros exercícios.
        if(this.selected == "1d"){
            this.isDisabled2 = false;
            setTimeout(this.trocaTab, 100)
            this.ok = true;
        }
        else if(this.selected == "2a"){
            // libera a terceira tab
            this.isDisabled3 = false;

            // soma na variável pra trocar o tabs
            setTimeout(this.trocaTab, 100)
            
            // abre o modal
            this.ok = true;
            // ativa variavel para redirecionar pra pagina inicial
            this.isLast = true;
            // verifica se existe o objeto derivada no localStorage            
            this.test = JSON.parse(localStorage.getItem("integral"));
            if(this.test == null){
                localStorage.setItem('integral', JSON.stringify(this.data));
            }else{
                this.test.second = true
                localStorage.setItem('integral', JSON.stringify(this.test));                
            }
        }
        else{
            alert("Resposta Incorreta")
            if(this.error_count == 1){
                // se for a ultima questao nao tem o botao "pular questao"
                if(this.tabIndex==4){
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
        // this.tabIndex++;
        this.ok = boolean;
        this.selected = false;
    },
    // metodo executado pelo componente ModalFailure
    changeTabfromChild(controle){
        // entra no if se é para pular a questão
        if(controle){
            if(this.tabIndex == 2){
                this.isDisabled2 = false;
            }
            else if(this.tabIndex == 3){
                this.isDisabled3 = false;
            }
            else if(this.tabIndex == 4){
                this.$router.push({ name: "IndexDerivative" });
            }
            setTimeout(this.trocaTab, 100)
        }
        // senão volta pro inicio (conteudo teorico)
        else{
            this.tabIndex = 1;
        }
        this.selected = false;
        this.error = false;
    }
  },
  beforeCreate(){
    // retrieve 'derivada' data available on localStorage
    this.integral = JSON.parse(localStorage.getItem("integral"));
  },
  mounted() {
    this.updateFormula();
    // verifica se o exercicio já foi feito antes, se sim então libera a navegação entre as tabs
    if(this.integral.second){
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
    margin-left: 41%;
    margin-top: 1%;
    margin-bottom: 2%;
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
