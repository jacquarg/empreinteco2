Vue.component('graph-main-categories', {
  template:
  '<div><h4 style="margin-bottom: 15px; margin-top: 60px; text-align: center;">Répartition par postes <span style="font-size: 50%;">(kg éqCO2)</span></h4><plotly-graph v-bind:plotData="plotData"></plotly-graph></div>',
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
