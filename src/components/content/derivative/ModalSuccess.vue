<template>
  <div>
    <b-modal v-model="show" @hidden="onHidden" header-bg-variant="primary" footer-bg-variant="primary">
        <div slot="modal-header" id="header">Bom Trabalho!</div>
        <img src="../../../assets/Main/star.png" />
        <div slot="modal-header-close"></div>
       <div slot="modal-footer" class="w-100">
         <b-btn size="sm" class="center" variant="success" @click="alteraComponentePai()">
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
            show: false,
        }
    },
    props: {
        show: Boolean,
    },
    methods:{
        alteraComponentePai(){
            this.$emit("modal", false);
        },
        onHidden(evt){
            this.alteraComponentePai();
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