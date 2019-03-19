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

