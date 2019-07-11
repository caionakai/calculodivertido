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

