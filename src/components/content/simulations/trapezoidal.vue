<template>
  <div class="whole">
    <h1 id="titulo">
      <a href="#/simulacoes">
        <i class="material-icons" id="icon">keyboard_arrow_left</i>
      </a>
      Regra Trapezoidal
    </h1>
    <hr>
    <p id="description">
        A integral definida pode ser definida através da área abaixo da curva com um determinado intervalo. Essa área também pode ser calculada dividindo-a em trapézios e somando suas áreas. Nesta simulação você pode digitar uma função, o intervalo e a quantidade de retângulos, note que quanto mais divisões maior é a precisão do resultado. 
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
  name: "TrapezoidalSimulation",
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

