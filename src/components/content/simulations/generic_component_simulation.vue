<template>
  <div class="whole">
    <h1 id="titulo">
      <a href="#/simulacoes"><i class="material-icons" id="icon"> keyboard_arrow_left</i></a>
      {{$route.params.titulo}}
    </h1>
    <hr>
    <div id="botoes">
      <div id="ggb-element"></div>
    </div>
    <p>{{$route.params.msg}}</p>
  </div>
</template>

<script>
export default {
  name: "GenericSimulationComponent",
  props: {
    titulo: String,
    codigoGgb: String,
  },
  mounted() {
    var temp = this.$route.params.simCod;
    console.log(temp);
    var ggbApp = new GGBApplet({
      id: "ggbApplet",
      width: 1300,
      height: 600,
      // showMenuBar: true,
      showAlgebraInput: true,
      // showToolBar: true,
      enable3d: true,
      enableCAS: true,
      algebraInputPosition: 'algebra',
      customToolBar:
        "0 73 62 | 1 501 67 , 5 19 , 72 75 76 | 2 15 45 , 18 65 , 7 37 | 4 3 8 9 , 13 44 , 58 , 47 | 16 51 64 , 70 | 10 34 53 11 , 24  20 22 , 21 23 | 55 56 57 , 12 | 36 46 , 38 49  50 , 71  14  68 | 30 29 54 32 31 33 | 25 17 26 60 52 61 | 40 41 42 , 27 28 35 , 6",
      showToolBarHelp: false,
      showResetIcon: false,
      enableLabelDrags: false,
      enableShiftDragZoom: false,
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
      ggbBase64:
        temp
    });
    ggbApp.inject('ggb-element');
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

#icon{
  font-size: 100%;
  position: relative;
  top: 8px;
}
</style>

