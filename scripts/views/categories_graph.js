Vue.component('graph-categories', {
  template: '<div><h5 style="margin-bottom: 15px; margin-top: 60px; text-align: center;">{{ item.title }} répartition fine <span style="font-size: 50%;">(kg éqCO2)</span></h5><plotly-graph v-bind:plotData="plotData"></plotly-graph></div>',
  props: ['item'],
  computed: {
    plotData: function() {
      const categories = computeEachCategories(this.item.refCategory, this.item.userCategory)
      console.log(this.item.refCategory)
      console.log(categories)
      var display = {
        labels: Object.keys(categories).sort(), //res.map(it => it[0]),
        //values: Object.keysres.map(it => it[1]),
        type: "pie",
        textinfo: "label+value",
        textposition: "inside",
      }
      display.values = display.labels.map(it => categories[it])
        return display
      }
  }
})
