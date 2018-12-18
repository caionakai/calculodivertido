<template>
  <div>
    <b-modal v-model="show" @hidden="onHidden" header-bg-variant="primary" footer-bg-variant="primary">
        <div slot="modal-header" id="header">Parece que você está com dificuldades</div>
            <div class="w3-container">
                <p>Talvez seja melhor reassistir o conteúdo teórico..</p>
                <p>Clique no botão conteúdo teórico para acessá-lo novamente!</p>
                <p v-if="!isLast">Você também pode pular essa questão e refazê-la mais tarde, clicando no botão "Pular Questão"!</p>
            </div>
        <div slot="modal-header-close"></div>
       <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="center" variant="success" @click="goHomeTab()">
           Conteúdo Teórico
         </b-btn>
         <b-btn v-if="!isLast" size="sm" class="center" variant="warning" @click="hopQuest()">
           Pular Questão
         </b-btn>         
       </div>
    </b-modal>
  </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    props: {
        show: Boolean,
        isLast: Boolean,
    },
    methods:{
        goHomeTab(){
            this.$emit("modal", false);
        },
        hopQuest(){
            this.$emit("modal", true);
        },
        // metodo executado qnd o usuario fecha o modal sem clicar em nenhum botao
        onHidden(evt){
            this.goHomeTab();
        },
        goHome(){
            this.$router.push({ name: "IndexDerivative" });

        }
    }
}
</script>


<style scoped>
#header{
    /* text-align: center; */
    color: white;
    margin-left: 20%;
}
</style>