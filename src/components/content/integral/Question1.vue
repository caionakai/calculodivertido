<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs class="nav-fill" card v-model="tabIndex">

                    <b-tab @click="goMain()">
                     <template slot="title"><i class="material-icons"> keyboard_arrow_left</i></template>    
                    </b-tab>
                    <b-tab title="Conteúdo Teórico" active>
                        <h4>Integrais Indefinidas</h4>
                        <video width="30%" height="15%" controls>
                            <source src="../../../assets/Videos/integral-q1.webm" type="video/mp4">
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
                                Calcule a seguinte integral:
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
                            <p class="title"> 
                                Um botânico descobre que certo tipo de árvore cresce de tal forma que sua altura h(t),
                                após t anos, está variando a uma taxa de <vue-mathjax style="display:inline-block" :formula="formula6"></vue-mathjax> metros/ano. Se a árvore tinha 60cm de altura
                                quando foi plantada, qual sua altura daqui a 27 anos?(CDI, pág 707).
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="2a" for="input2A">a)</label>
                            <input type="radio" id="input2A" name="quest" value="2a" v-model="selected">
                            <label for="input2A">
                                34,31m
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="2b" for="input2B">b)</label>
                            <input type="radio" id="input2B" value="2b" name="quest" v-model="selected">
                            <label for="input2B">
                                32,22m
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="2c" for="inputC">c)</label>
                            <input type="radio" id="input2C" value="2c" name="quest" v-model="selected">
                            <label for="input2C">
                                37,41m
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="2d" for="inputD">d)</label>
                            <input type="radio" id="input2D" value="2d" name="quest" v-model="selected">
                            <label for="input2D">
                                35m
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
  name: "Question1Integral",
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
              first: true,
          }
      }
  },
  methods: {
    goMain(){
        this.$router.push({ name: "IndexIntegral" });
    },
    updateFormula: function () {
        this.$nextTick(function () {
        this.formula = '$$\\int { ({4x^5}+7) dx}$$'
        this.formula2 = '$${2x^6\\over3}+7x+c$$'
        this.formula3 = '$${2x^6}+x+c$$'
        this.formula4 = '$${2x^5\\over2}+7x+c$$'
        this.formula5 = '$${2x^5\\over2}+x+c$$'
        this.formula6 = '$${0.06t^{2\\over3}}+0.3t^{1\\over2}$$'
      })
    },    
    trocaTab(){
        this.tabIndex++;
    },
    checkForm(){
        // condições para habilitar os outros exercícios.
        if(this.selected == "1a"){
            this.isDisabled2 = false;
            setTimeout(this.trocaTab, 100)
            this.ok = true;
        }
        else if(this.selected == "2c"){
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
                this.test.first = true
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
    if(this.integral.first){
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
