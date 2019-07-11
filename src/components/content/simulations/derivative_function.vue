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

