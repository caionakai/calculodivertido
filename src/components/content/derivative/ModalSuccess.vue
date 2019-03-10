<template>
  <div>
    <b-modal v-model="show" @hidden="onHidden" header-bg-variant="primary" footer-bg-variant="primary">
        <div slot="modal-header" id="header">Bom Trabalho!</div>
        <img src="../../../assets/Main/star.png" />
        <div slot="modal-header-close"></div>
       <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="center" variant="success" @click="isLast? goHome() : alteraComponentePai()">
           Próximo
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
        isIntegrate: Boolean,
    },
    methods:{
        alteraComponentePai(){
            this.$emit("modal", false);
        },
        onHidden(evt){
            this.alteraComponentePai();
        },
        goHome(){
            // se o modal for clicado pelas questoes de integral
            if(this.isIntegrate){
                this.$router.push({ name: "IndexIntegral" });
            }else{
                this.$router.push({ name: "IndexDerivative" });
            }
        }
    }
}
</script>


<style scoped>
#header{
    text-align: center;
    color: white;
    margin-left: 40%;
}
</style>