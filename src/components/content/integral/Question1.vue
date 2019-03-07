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
                            <source src="../../../assets/Videos/video1.mp4" type="video/mp4">
                            Há algum problema com o vídeo, utilize outro navegador!
                        </video> 
                        <h4>Derivada como o coeficiente angular de uma reta tangente.</h4>
                        <video width="30%" height="15%" controls>
                        <source src="../../../assets/Videos/video1-2.mp4" type="video/mp4">
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
                                
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="1a" for="input1A">a)</label>
                            <input type="radio" id="input1A" value="1a" name="quest" v-model="selected">
                            <label for="input1A">
                                f'(1) = 0
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1b" for="input1B">b)</label>
                            <input type="radio" id="input1B" value="1b" name="quest" v-model="selected">
                            <label for="input1B">
                                f'(1) = 2
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1c" for="input1C">c)</label>
                            <input type="radio" id="input1C" value="1c" name="quest" v-model="selected">
                            <label for="input1C">
                                f'(1) = 4
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1d" for="input1D">d)</label>
                            <input type="radio" id="input1D" value="1d" name="quest" v-model="selected">
                            <label for="input1D">
                                f'(1) = 6
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
                            <p class="title"> Uma garota chutou uma bola perto de um físico/matemático e este por sua vez, estimou através
                            de equipamentos de precisão que a posição da bola é dada pela equação x = 4+12t-3t², onde t representa o 
                            tempo em segundos e x a posição dada em metros, qual a velocidade da bola depois de 1 segundo?
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="2a" for="input2A">a)</label>
                            <input type="radio" id="input2A" name="quest" value="2a" v-model="selected">
                            <label for="input2A">
                                v = 4m/s
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="2b" for="input2B">b)</label>
                            <input type="radio" id="input2B" value="2b" name="quest" v-model="selected">
                            <label for="input2B">
                                v = 6m/s
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="2c" for="inputC">c)</label>
                            <input type="radio" id="input2C" value="2c" name="quest" v-model="selected">
                            <label for="input2C">
                                v = 5m/s
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="2d" for="inputD">d)</label>
                            <input type="radio" id="input2D" value="2d" name="quest" v-model="selected">
                            <label for="input2D">
                                v = 3m/s
                            </label>
                        </p>
                        <hr>
                        <b-button  @click = "checkForm()" variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>

                    <b-tab :disabled=isDisabled3>
                        <template slot="title">Exercício 3
                            <i class="material-icons" id="icone" v-if="iconTab3"> done </i>
                        </template>
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p class="title"> 
                                Uma bola é atirada no ar com uma velocidade de 40 pés/s, e sua altura em pés após t segundos é
                                dada por y = 40t - 16t². Encontre a velocidade instantânea quando t = 2.
                            </p>
                        </div>
                        <hr>
                        <p id="t">
                            <label id="3a" for="inputA">a)</label>
                            <input type="radio" id="input3A" name="quest" value="3a" v-model="selected">
                            <label for="input3A">
                                v = 24 pés/s
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="3b" for="input3B">b)</label>
                            <input type="radio" id="input3B" value="3b" name="quest" v-model="selected">
                            <label for="input3B">
                                v = 16 pés/s
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="3c" for="input3C">c)</label>
                            <input type="radio" id="input3C" value="3c" name="quest" v-model="selected">
                            <label for="input3C">
                                v = -16 pés/s
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="3d" for="input3D">d)</label>
                            <input type="radio" id="input3D" value="3d" name="quest" v-model="selected">
                            <label for="input3D">
                                v = -24 pés/s
                            </label>
                        </p>
                        <hr>
                        <b-button  @click="checkForm()" variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>

                </b-tabs>
            </b-card>
            <ModalSuccess v-if="ok" :isLast="isLast? true : false" :show="ok" @modal="changeOkfromChild"></ModalSuccess>
            <ModalFailure v-if="error" :isLast="isLast" :show="error" @modal="changeTabfromChild"></ModalFailure>
        </div>


    </div>

</template>

<script>
import ModalSuccess from "../derivative/ModalSuccess";
import ModalFailure from "../derivative/ModalFailure";
export default {
  name: "Question1Integral",
  components: {
    ModalSuccess,
    ModalFailure,
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
        else if(this.selected == "2b"){
            // libera a terceira tab
            this.isDisabled3 = false;

            // soma na variável pra trocar o tabs
            setTimeout(this.trocaTab, 100)
            
            // abre o modal
            this.ok = true;
        }
        else if(this.selected == "3d"){
            this.iconTab3 = true;
            // ativa variavel para redirecionar pra pagina inicial
            this.isLast = true;
            // abre o modal
            this.ok = true;
            // verifica se existe o objeto derivada no localStorage            
            this.test = JSON.parse(localStorage.getItem("derivada"));
            if(this.test == null){
                localStorage.setItem('derivada', JSON.stringify(this.data));
            }else{
                this.test.first = true
                localStorage.setItem('derivada', JSON.stringify(this.test));                
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
    this.derivada = JSON.parse(localStorage.getItem("derivada"));
  },
  mounted() {
    // verifica se o exercicio já foi feito antes, se sim então libera a navegação entre as tabs
    if(this.derivada.first){
        this.isDisabled2 = false;
        this.isDisabled3 = false;
        this.iconTab3 = true;
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
