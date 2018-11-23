<template>
    <div>
        <div>
            <b-card no-body>
                <b-tabs class="nav-fill" card>

                    <b-tab title="Voltar" @click="goMain()"> </b-tab>

                    <b-tab title="Conteúdo Teórico" active>
                        <h4>Taxa de Variação, Coeficiente Angular e Variação de uma função não linear.</h4>
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
                    <b-tab title="Exercício 1">
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p> 
                                Dada a função: f(x) = x²-2x.
                                Encontre o coeficiente angular de uma reta tangente no ponto P(1,-1).
                            </p>
                        </div>
                        <hr>
                        <p id="t">
                            <label id="a" for="inputA">a)</label>
                            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
                            <label for="inputA">
                                f'(1) = 0
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="b" for="inputB">b)</label>
                            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
                            <label for="inputB">
                                f'(1) = 2
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="c" for="inputC">c)</label>
                            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
                            <label for="inputC">
                                f'(1) = 4
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="d" for="inputD">d)</label>
                            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
                            <label for="inputD">
                                f'(1) = 6
                            </label>
                        </p>
                        <hr>

                        <b-button  variant="success">
                            Confirmar Resposta
                        </b-button>

                    </b-tab>

                    <b-tab title="Exercício 2">
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p class="title"> Uma garota chutou uma bola perto de um físico/matemático e este por sua vez, estimou através
                            de equipamentos de precisão que a posição da bola é dada pela equação x = 4+12t-3t², onde t representa o 
                            tempo em segundos e x a posição dada em metros, qual a velocidade da bola depois de 1 segundo?
                            </p>
                        </div>
                        <hr>
                        <p id="t">
                            <label id="a" for="inputA">a)</label>
                            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
                            <label for="inputA">
                                v = 4m/s
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="b" for="inputB">b)</label>
                            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
                            <label for="inputB">
                                v = 6m/s
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="c" for="inputC">c)</label>
                            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
                            <label for="inputC">
                                v = 5m/s
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="d" for="inputD">d)</label>
                            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
                            <label for="inputD">
                                v = 3m/s
                            </label>
                        </p>
                        <hr>
                        <b-button  variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>

                    <b-tab title="Exercício 3">
                        <div class="enunciado">
                            <a id="quest">Questão:</a>
                            <p class="title"> 
                                Uma bola é atirada no ar com uma velocidade de 40 pés/s, e sua altura em pés após t segundos é
                                dada por y = 40t - 16t². Encontre a velocidade instantânea quando t = 2.
                            </p>
                        </div>
                        <hr>
                        <p id="t">
                            <label id="a" for="inputA">a)</label>
                            <input type="radio" id="inputA" name="quest" value="a" v-model="selected">
                            <label for="inputA">
                                v = 24 pés/s
                            </label>
                        </p>
                        <hr>
                        <p>
                            <label id="b" for="inputB">b)</label>
                            <input type="radio" id="inputB" value="b" name="quest" v-model="selected">
                            <label for="inputB">
                                v = 16 pés/s
                            </label>
                        </p>
                        <hr>
                        
                        <p>
                            <label id="c" for="inputC">c)</label>
                            <input type="radio" id="inputC" value="c" name="quest" v-model="selected">
                            <label for="inputC">
                                v = -16 pés/s
                            </label>
                        </p>
                        <hr>

                        <p>
                            <label id="d" for="inputD">d)</label>
                            <input type="radio" id="inputD" value="d" name="quest" v-model="selected">
                            <label for="inputD">
                                v = -24 pés/s
                            </label>
                        </p>
                        <hr>
                        <b-button  variant="success">
                            Confirmar Resposta
                        </b-button>
                    </b-tab>

                </b-tabs>
            </b-card>
        </div>


    </div>

</template>

<script>
import Header from "../../main/Header";
export default {
  name: "Question1Derivative",
  components: {
    Header
  },
  methods: {
    goMain(){
      this.$router.push({ name: "IndexDerivative" });
    },
  }
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
</style>
