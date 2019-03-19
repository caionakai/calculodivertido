<template>
  <div class="whole">
    <h1 id="titulo">
      <a href="#/simulacoes">
        <i class="material-icons" id="icon">keyboard_arrow_left</i>
      </a>
      A função Derivada
    </h1>
    <hr>
    <p id="description">Aqui você pode observar a representação gráfica de uma função e sua derivada. É possível alterar a posição do ponto na função de entrada e verificar a formação da função derivada no canto direito. 
    </p>
    <p id="description">
      Experimente:
    </p>
    <ol>
      <li>
        Digitar uma função (exemplo:x^2).
      </li>
      <li>
        Deslocar o slider.
      </li>
      <li>
        Pensar sobre a forma da derivada em relação a entrada inserida.
      </li>
    </ol>
    <div id="botoes">
      <div id="ggb-element"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DerivativeFunctionSimulation",
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

