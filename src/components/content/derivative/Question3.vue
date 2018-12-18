<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs class="nav-fill" card v-model="tabIndex">

                    <b-tab @click="goMain()">
                     <template slot="title"><i class="material-icons"> keyboard_arrow_left</i></template>    
                    </b-tab>
                    <b-tab title="Conteúdo Teórico" active>
                        <h4>Regra da Potência</h4>
                        <video width="30%" height="15%" controls>
                            <source src="../../../assets/Videos/q3.mp4" type="video/mp4">
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
                                Encontre a derivada da equação f(x)=x² - 2x + 10, utilizando a regra da potência.   
                            </p>
                        </div>
                        <hr>
                        <p>
                            <label id="1a" for="input1A">a)</label>
                            <input type="radio" id="input1A" value="1a" name="quest" v-model="selected">
                            <label for="input1A">
                                f'(x) = x - 2
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1b" for="input1B">b)</label>
                            <input type="radio" id="input1B" value="1b" name="quest" v-model="selected">
                            <label for="input1B">
                                f'(x) = 2x - 2
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1c" for="input1C">c)</label>
                            <input type="radio" id="input1C" value="1c" name="quest" v-model="selected">
                            <label for="input1C">
                                f'(x) = 2x + 8
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="1d" for="input1D">d)</label>
                            <input type="radio" id="input1D" value="1d" name="quest" v-model="selected">
                            <label for="input1D">
                                f'(x) = 2x³ + 8
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
            <ModalFailure v-if="error" :isLast=isLast :show="error" @modal="changeTabfromChild"></ModalFailure>
        </div>


    </div>

</template>

<script>
import ModalSuccess from "./ModalSuccess";
import ModalFailure from "./ModalFailure";
import { setTimeout } from 'timers';
export default {
  name: "Question3Derivative",
  components: {
    ModalSuccess,
    ModalFailure,
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
              third: true,
          }
      }
  },
  methods: {
    goMain(){
        this.$router.push({ name: "IndexDerivative" });
    },
    checkForm(){
        // condições para habilitar os outros exercícios.
        if(this.selected == "1b"){
            this.iconTab3 = true;
            // ativa variavel para redirecionar pra pagina inicial
            this.isLast = true;
            // abre o modal
            this.ok = true;
            // armazena no locastorage qnd a questao é resolvida
            this.test = JSON.parse(localStorage.getItem("derivada"));
            if(this.test == null){
                localStorage.setItem('derivada', JSON.stringify(this.data));
            }else{
                this.test.third = true;
                localStorage.setItem('derivada', JSON.stringify(this.test));                
            }

        }
        else{
            alert("Resposta Incorreta")
            if(this.error_count == 1){
                // se for a ultima questao nao tem o botao "pular questao"
                if(this.tabIndex==2){
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
        this.tabIndex++;
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
    // verifica se o exercicio já foi feito antes, se sim então libera a navegação entre as tabs
    if(this.derivada.third){
        this.isDisabled2 = false;
        // this.isDisabled3 = false;
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
