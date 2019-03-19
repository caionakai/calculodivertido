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
        disableAutoScale: false,
        allowUpscale: false,
        clickToLoad: false,
        appName: "classic",
        showSuggestionButtons: true,
        buttonRounding: 0.7,
        buttonShadows: false,
        language: "en",
        ggbBase64: 'UEsDBBQACAgIAGQtaE4AAAAAAAAAAAAAAAAXAAAAZ2VvZ2VicmFfZGVmYXVsdHMyZC54bWztmltz4yYUgJ+7v4LhqX2ILWTL9mai7GR3ptPMZLOZJrPTVyxhmQaDKlAs+9cvAlmXtZ36ltpJk4egg7jpO4fDAXzxKZsw8EQSSQX3IWo5EBAeiJDyyIepGp0N4KfLDxcREREZJhiMRDLByodeXrKsp6WW5/byPBzHPgwYlpIGEMQMq7yKD8VoxCgnEIBM0nMubvGEyBgH5D4Ykwm+EQFWpq2xUvF5uz2dTluLXlsiidpRpFqZDCHQI+bSh8XDuW6uUWnaMcVdx0Htv77e2ObPKJcK80D3r78mJCOcMiX1I2FkQrgCahYTH8aCcgUBw0PCfHiXS+DXUULIbxAUlTQkB15++OVCjsUUiOHfJNB5KklJWc8I7byMfv1FMJGAxIf9PgSRTYY+dD1Ps2LxGPvQsYUZnpEEPGFW5uBUicDUN7kjzCRZlNU9fRUhsW+6RXlOJ4YikIpoNSAIZExIaJ7sFyKjk5lRb629QIgklCDz4S2+hWBWpHObmiKGzT2dF1169Vw1Y6Q28ot2gXUzwCGJCQ91oQZltBPl3sBQzpOhTV4z5O5LQ+69Q14HGW1P+Ruvs3V3Yotcz8A16bujqNG95n+SSI+5zrjzzvigjJsW3N2JrmPYOq+UrCliGcr8vw5mxCRmJDsgeBsIFRBvjFBCd3eLLurQnaMgd3ZGnuOw8NSYBo+cSJmTrdrNH/6goV69TH9Ch41U6ZZQf2BbIP/whsqo1hjVZZ5XwyjlgTIOpUD7JU2e6rrodJ1jaKNq89DK2Jf0epaSRLlUcrlfyJVh7xbQ/b8NW6SK5T1fc6X3WsSYq1z6tEdC4gfd1Df+kGAu8w1X05LW6y3Bs+d05r3r7PR0tvBbt99xUmoi1cH9SI89rKtvt/Bo7QLecr1j63ALb76SyP4hzUkZ9JbWehiz6u3mFVynuxpjq3/CZvWkP09UPL4XYhUjvMdr27vIFUE2ThSRFPN/27KwWVSb43cLudRH3+pj/zFuvan0OkanHlqyb+TYP9T96CDUQ+6x1fw84Mb25K7MqBCjIyE+0UmznmYgeH4KvtheWKnk2H1jruMA+zgaEW49rgQgc0yxmWMqz53ifiJDRp4h83aObLaprwee0Axc2RpXtuCVa5OOTbo28UpAu20ejWpj7bVq4fNPS0N3tx3Pa3Ikb1Lp/0EIz9MJSWqu4XYhl8bjWeeg20tJQ7UbuIJ1drLeKiSjoTahCdVKOtPam+DMaBEPpWCpIvdBQgivLumsGU9pqMZ5YKf7HtEsNxfbJhiLhM4FVyUNkM+CK2au8xonHKvMx30ugG0Y637uGfOIVbPxykqVBuwBvin089neKsXUGToFwl7LHXTQwOs4fdT/6A16GyJFgwqpfbEx0Ya7KdSxwXqCnI3NaH93s5XTcFc5DZwE1SlsxzmwYSztJX8vM6pd0CkeDRqTWSr6Yqd+TASprE6yrVQSGryx+AanGWUUJ7Plnl6MsCJZFWE8GKH2Q4QTBLz+UzT2qBratZVq9/32Y0ZUU+R4oivYTij/jIPHKBEpD5fXrYN8Ojq2ba2HNhSCEVw5os8LuXbPvBQprAO0+WrwYrMvGJPgcSiyxuL2vI+hspoBN0ao3f+umAH7rHlnRzeFXc70Nr2WPFs6AWzXfgrVXvzc6vIHUEsHCHSAZ2vVBAAAFiYAAFBLAwQUAAgICABkLWhOAAAAAAAAAAAAAAAAFwAAAGdlb2dlYnJhX2RlZmF1bHRzM2QueG1s7ZjdTtswFMevx1NYvqeN06RQREAVu9gkQEzc7NZ1TltviR1slza82t5hzzR/pCWFFo2KMcHWi/jzHNu/v3Ni9/h0URboFpTmUmSYdCKMQDCZczHJ8MyM9w/x6cne8QTkBEaKorFUJTUZTl3PlZ0tddK47+poVWWYFVRrzjCqCmqcSYbleFxwARihheZHQl7SEnRFGVyzKZT0XDJqvK+pMdVRtzufzzvLUTtSTbqTieksdI6RnbHQGW4yR9bdmtG857vHUUS6Xy/Og/t9LrShgtnx7WpyGNNZYbTNQgElCINMXYGdtxSc9ewYBR1BkeHPwtglAnMzQ2ymbq19Y5zhHkkjfLL34VhP5RzJ0TfbL8NGzWBl7wtd18c2n8lCKqQyHKcpRhYviQ8wGmXYUSuqKbW5DonCjySDiJA+iYN5QWtQ6JYWrrevoTMjmffoa8e00LDsa8e+kDmElqTpL3jpCSNtwEpEMNIVQO5zYfWR16v20rf9WdmuTV0AMlPOvgvQln7aMnKZTzzPwe2gYAN8AuLWApFKW8UjP0od+e53UbPRFsSXa+Jb70io9vZ2qoov0DBYDEPHYRySXkiSkKQrJHAjwjy1e2a4ospuMuuIufbjbqP1I9XpguuW6ENX/LgmdNTbSejIyxw9FPmNSrqdLmryYNf888fTsP1bxKgyoDkVLexnruEh9/6/zn07SOtfQIvflS+v8bMxcCd+g4EHGJOBR+jTVYRKXwojk1LlGi1CEAihwT/nK5dj6j5EzShbY+MmqNGOUGVRTyFXUtxzbVXdo+01aHd5k54rB0l7Xo+UPPpcJA2SdNCPkn7yYtrsusWfRXao2JSXkANdR2uFfS20MSEebRK+xC55H2yvahuReb7O9fW2rA8ZdvKDwDV+N3v2SnFdrlMlr0i1HwJzoDrov0mqAsxqnZcu346q6f+o+hyWNzOa+xNYs9Qvy3KbKdntlhIlm49RnYMXA/InrhYbLxauMtwe6pDcxSuHz71roGE/JAchOQzJYOs9hJdVwRk3T0upZ2psr8ObjsZN07qqyd9S9d7xqxyPye+e5Lqta313+dfByS9QSwcINSbWtCkDAADiEAAAUEsDBBQACAgIAGQtaE4AAAAAAAAAAAAAAAAWAAAAZ2VvZ2VicmFfamF2YXNjcmlwdC5qc0srzUsuyczPU0hPT/LP88zLLNHQVKiuBQBQSwcI1je9uRkAAAAXAAAAUEsDBBQACAgIAGQtaE4AAAAAAAAAAAAAAAAMAAAAZ2VvZ2VicmEueG1s7VrdbtzGFb52nmLAIoGESrucH/45uw4sFUYN2GlquUHQnxSz5OzuRFxyQw6lVZpe9qJvEbQXfY/4TfokPTNDckmtJHMlwXWBSiJIzpw5M+c735xzhvbki80qRReiKGWeTR08ch0ksjhPZLaYOpWaH4fOF88+mSxEvhCzgqN5Xqy4mjqelmzHwdvII75u4+v11IlTXpYydtA65UoPmTr5fJ7KTDhIJlPHPaUv8Olzevwr5obH7EUQHD8P6MmxG3ghCdjJ6elJ6CC0KeXTLP+Sr0S55rE4i5dixV/lMVdm1qVS66fj8eXl5ahZ3ygvFuPFYjbalImDwLasnDr1w1NQ1xt0SY04cV08/ub1K6v+WGal4lkMK9V2V/LZJ08mlzJL8kt0KRO1BJR86jtoKeRiCUgEruegsZZaAxxrESt5IUoY23k1RqvV2jFiPNP9T+wTSlt7HJTIC5mIAgAaEUbDMPCo6/mEsoA4KC+kyFQti+s5x422yYUUl1atfjIzehiGqTxPZ1zrRD8ijDwXLoQjdIT8AFoIwh5i0BJCS4CobvMwQxRpEUwRY3Bnuhn7us+D8Z6LMIZmRFxECCIYEQqvnoc8H3mBHkhA1o+MMhcuLQ3LgYvqNkrhMm2UwUX0EyjyrBpYhEd98+RpadDvEb1800hDxCKYSDd4AUYU1gDvgYtAI9XqsTGCuUj/YcS0ehIgEiLQB3ZrzS5AcyFLOUvF1JnztNTUzOYFkK19L9VVKgx2dcPWV/gIfkFC/gDingvEtxyBHtc90pcPF9Md475TWN8l4AEXbDvSN2xvxLa69tWl9kbsjdmbZ2WYHcmsqDXUZVaG0Yda2NhH97FvL1xVUfUmpUe0nZSQ4ZOGHVCxRg5IoCEzN4o0WNiApm+sfvXtq6G2i926NbStkX71H4ggvReCzI2Ch4DY9Ryhu/MGcMEW3pkXdya1OvcxtpnSD6PhpmL/IXNu4Y06c3pgnf4z186M9EH8vHlL3D2j39vxD2NUMz0LB0+PSfjB5wzcG4OcveP6/jiOiIY74qEBsQXCu3vKybjJxZMaBFQutWxNcCVWpYYloMgnbVL2ddqsM3NAUOChwO/k5yOdoX1vm6R1ig57SdoLO5ka0rSvGwOT9iE36jxrszZhTeI+qlP3jzupGzIt2yZbWKBWhRGCygD5OkTWWRdWQdq8SzydeomPIDd7BPk6DN+SgqE0zEvZArsU6bqF3GAos3WlerjFq6R5VDlI89SUfLV8ksfnJy3StSbBS9VVC+XStiiz5VOvZnsySflMQJ26ONM8QOiCp3rPmhnmeaZQTQGIW0adqQ8noopTmUiefQ1+b2qxL6vVTBTIPObaSKNED0dNIRl50baO9D1iReI8L5KzqxJogja/FwUMZj4dUcYgSeHI8yIGFedV3RNGIwxFlQvpjAY0IoBsGXPNcMKCEaUEY9/FXugHDLqubu7zIzu1uDgTSoH5JeIbUTZwLwqZdJ9flid52rasc5mpU75WVWFODbDLCm3S82yRCoOjcTFU1/H5LN+cGQD1OrWqt1dr0SI8W5zmaV4gncQjCA+L+j6zdyOj19VKuUbGNRK1Dq10q8W3EuY+s3cjpY8i1sXWTtwY6TazyNKeVJweBw09dKVeZVK9al6UjM+3hmp56/wGwL5K/EgqJ+NrvBvEQ3IDD036HMJD4gYjFnV+gpaIZOT2fvygJaLn9vow3vKQRaOuuii8hYf1FrY+6rw0TKybHoGKdIeKxPMMieAYZkhE4MB3DyreRuj9qdhkpsfk4kN17pKxDs8NFVd5Imw4rRHm1UamkhdX3d1gNPVGTs5FkYnUEjIDTlR5VVpFds1GWVWKr7haPs+SN2IBSeUrrrO6giVa0a3piYjlCgba9iaoaH78Dky2rYlYFKKByi7GeqhePyrXheBJuRRCtX6y22Ur5lpjmuVPFIe6w9QiKwlJ7xhosOIbc16CLbauM8SkjAu51tRHMyg9zsWW3IkstYqkY7iGpATbYp1IwU1Ku6iQYsWzzEG8Usu8MN8VuIIOR4eIDSy91F9tGl/PIU1udPI92ByiKeS37GDz7QE5PAS/mx0xrzKj30woUrESkAevdW2VmeACDkX57DvIq9einH0RF/oYbFADqVu2EOLpeslbeFN+paNYJx8bla9bWjVZWm5Ect3p2z2mlsDlDBCAsNQY6NqHX8skEbYcydc8luoKnoOwZre1eweBrFqJQn/pqg3MDAAwfVUvC04/dcQdAArdBYXasEFt1NC3BpcRbgIqiyCo+pgMRKopRVL9rcmyEddk1KtFfFbmaaXEWQy7INt+b7PrrHMG0ZIwguoUoAsKUGGwb+SAevIH2LGtJ8w+f26303udg91bvVPvWNjFhvXN5oFNKYQNae3ANWBhEsF2x3Q8Gecr2CgJyswB4K3YqLkUaeK05ad1RqV0JcrdqfNSN57kG7tTx/X4HU6oVlPj4e3ABzDhPtvjN/N5KZT2E/ZD66ho/+2zDdXXOhaLmY1XtgOS9tea+Qfq6FP3sJ5GZAu17EX+GBK09pxp44/mFXJfr5D/olf0SRm8Qhn9AF4h2i2f/WLDPx/mm9l+sU9dj33HeBQEdbC5Ws3yVMadtaLdsNivQu6D+2MGxWOvjorePjGxDoK1KQ+LgmRwENw39r3Hk2Qnjf3fkx+pJ/vx8g2gb6rZs2q1DZkmTkKhx7HepYgT42LEqS5YEGctlJ2wyu8Op9cpw29gTBhGLhwZGQv9iBK2D396AbhT6HeJQ1x2C3Vcfz+u7O+y3l7aqal1rsF1Xf3Z91WuPn8lV1IJdFatAbW8sI03VNR6pNNXM7iifqTsNCz7mK9hJRgz3347heP06853Urf+nLpl+Y1bz1SR2KZBnw0Dl9wE7stsvie4wzP//zS4xIKLBzKX9sD9bcXh2J1wWDf8vRHq3T+yRZXm5XCY6UcK8x2Q1aca+6nnUcpTet/ydDh6j16eMludYoz3x3Zgdao/O0w/bb6hdKvPF1X27l/v/pkPI63XI+0bUVap4kk+nKTeR0rSO2LBiDXRIBgeDTC2sZb5A8OB30P2ZVbKgiP+fSURR/PaR+hArLYvYNbmcDjy/keK/B3hwZ6lo2AYgqyH4B9lpv78F/uMfokOXvG34ps/qD8dwott/eu3u92k27/TPe/2op9/Sjb//vvffv7puhjviNX+QQMcxAY7qAkUH8ZBsjRm3bVj6kr91uTpvs/VkW93S7Dj63H346v5x8D6P6E9+w9QSwcIEr1ELYMJAABWJwAAUEsBAhQAFAAICAgAZC1oTnSAZ2vVBAAAFiYAABcAAAAAAAAAAAAAAAAAAAAAAGdlb2dlYnJhX2RlZmF1bHRzMmQueG1sUEsBAhQAFAAICAgAZC1oTjUm1rQpAwAA4hAAABcAAAAAAAAAAAAAAAAAGgUAAGdlb2dlYnJhX2RlZmF1bHRzM2QueG1sUEsBAhQAFAAICAgAZC1oTtY3vbkZAAAAFwAAABYAAAAAAAAAAAAAAAAAiAgAAGdlb2dlYnJhX2phdmFzY3JpcHQuanNQSwECFAAUAAgICABkLWhOEr1ELYMJAABWJwAADAAAAAAAAAAAAAAAAADlCAAAZ2VvZ2VicmEueG1sUEsFBgAAAAAEAAQACAEAAKISAAAAAA=='
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

