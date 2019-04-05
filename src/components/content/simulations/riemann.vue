<template>
  <div class="whole">
    <h1 id="titulo">
      <a href="#/simulacoes">
        <i class="material-icons" id="icon">keyboard_arrow_left</i>
      </a>
      Soma de Riemann
    </h1>
    <hr>
    <p id="description">
        A integral definida pode ser definida através da área abaixo da curva com um determinado intervalo. Essa área pode ser calculada dividindo-a em retângulos e somando suas áreas. Nesta simulação você pode digitar uma função, o intervalo e a quantidade de retângulos, note que quanto mais divisões maior é a precisão do resultado. 
    </p>
    <p id="description">
      Experimente:
    </p>
    <ol>
      <li>
        Digitar uma função (exemplo:x^2).
      </li>
      <li>
        Definir o intervalo.
      </li>
      <li>
        Configurar a quantidade de retângulos para um número pequeno (exemplo: 15).
      </li>
    </ol>
    <div id="botoes">
      <div id="ggb-element"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RiemannSimulation",
  mounted() {
    // var temp = this.$route.params.simCod;
    // console.log(temp);
    // var tempEnableDrag = true;
    // verifica se o applet vai permitir zoom
    // if(!this.$route.params.enableDrag){
    //   tempEnableDrag = false;
    // }
      var ggbApp = new GGBApplet({
        id: "ggbApplet",
        width: 1300,
        height: 600,
        // showMenuBar: true,
        showAlgebraInput: true,
        // showToolBar: true,
        enable3d: true,
        enableCAS: true,
        algebraInputPosition: "algebra",
        customToolBar:
          "0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
        showToolBarHelp: false,
        showResetIcon: false,
        enableLabelDrags: false,
        enableShiftDragZoom: true,
        enableRightClick: false,
        errorDialogsActive: false,
        useBrowserForJS: true,
        allowStyleBar: false,
        preventFocus: false,
        showZoomButtons: true,
        capturingThreshold: 3,
        // add code here to run when the applet starts
        appletOnLoad: function(api) {
          /* api.evalCommand('Segment((1,2),(3,4))');*/
        },
        showFullscreenButton: true,
        scale: 1,
        // autoscale lets the app with low resolution
        disableAutoScale: true,
        allowUpscale: false,
        clickToLoad: false,
        appName: "classic",
        showSuggestionButtons: true,
        buttonRounding: 0.7,
        buttonShadows: false,
        language: "en",
        ggbBase64: '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'
      });
    
    ggbApp.inject("ggb-element");
  },
  data() {
    return {};
  },
  methods: {
    changeRoute(nameRoute) {
      window.location.href += nameRoute;
    }
  }
};
</script>

<style scoped>
.whole {
  padding: 3%;
}
ol{
  text-align: left;
}
#botao {
  border-color: rgb(79, 146, 255);
  color: rgb(79, 146, 255);
  margin-top: 1%;
  width: 50%;
}

#botao:hover {
  background-color: rgb(79, 146, 255);
  color: white;
}

#titulo {
  text-align: left;
}

#botoes {
  text-align: left;
  padding-bottom: 0.5%;
}

#icon {
  font-size: 100%;
  position: relative;
  top: 8px;
}
#description {
  text-align: left;
  font-size: 1.3pc;
}
</style>

