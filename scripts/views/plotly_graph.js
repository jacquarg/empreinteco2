Vue.component('plotly-graph', {
  template: '<div v-bind:id="randomId" style="width: 330px;height: 330px;margin: auto;" ></div>',
  data: function() {
    return {
      randomId: "a" + Math.floor(Math.random() * 10000)
    }
  },
  props: ['plotData'],
  watch: {
    plotData: {
      immediate: true,
      handler: function(plotData) {
        const id = this.randomId
        this.$nextTick(function() {
          Plotly.newPlot(id, [plotData],
            {
              showlegend: false,
              height: 330,
              width: 330,
              margin:  {"t": 0, "b": 0, "l": 0, "r": 0},
            },
            {
              responsive: false,
              displayModeBar: false
          })
        })
      }
    }
  }
})
