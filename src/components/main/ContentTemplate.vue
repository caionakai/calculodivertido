<template>
    <div>
         <b-card no-body>
             <b-tabs class="nav-fill" card v-model="tabIndex">
                <b-tab @click="goMain()">
                    <template slot="title"><i class="material-icons"> keyboard_arrow_left</i></template>    
                </b-tab>

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

             </b-tabs>
         </b-card>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        quantityOfExercises: Integer,
    },
}
</script>

<style>
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

</style>
