Vue.component('graph-main-categories', {
  template:
  '<div><h5 style="margin-bottom: 15px; text-align: center;">Empreinte carbone par postes<br>  <span style="font-size: 75%;">kgCO2e anuels, par individu</span></h5><plotly-graph v-bind:plotData="plotData"></plotly-graph></div>',
  data: function() {
    return {
      usrData,
    }
  },
  computed: {
    plotData: function() {
      const categories = computeEachCategories(refData, this.usrData)
      var display = {
        labels: Object.keys(categories).sort(), //res.map(it => it[0]),
        //values: Object.keysres.map(it => it[1]),
        type: "pie",
        textinfo: "label+value",
        textposition: "inside",
      }
      display.values = display.labels.map(it => categories[it])
      display.marker = {
        colors: display.labels.map(it => category2Color(it))
      }
      return display
    }
  }
})
