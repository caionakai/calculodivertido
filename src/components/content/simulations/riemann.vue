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
        enableRightClick: true,
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
        disableAutoScale: false,
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

