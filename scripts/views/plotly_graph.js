Vue.component('plotly-graph', {
  template: '<div v-bind:id="randomId" style="width: 290px;height: 290px;margin: auto;" ></div>',
  data: function() {
    return {
      randomId: "a" + Math.floor(Math.random() * 10000)
    }
  },
  props: ['plotData'],
  watch: {
    plotData: {
      immediate: true,
      handler: function(d) {
        const id = this.randomId
        // If there is only one curve, accept object, instead of [object]
        if (!Array.isArray(d)) {
          d = [d]
        }
        this.$nextTick(function() {
          Plotly.newPlot(id, d,
            {
              showlegend: false,
              height: 290,
              width: 290,
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
