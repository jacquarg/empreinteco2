Vue.component('graph-objectives', {
  template:
  '<div><h4 style="margin-bottom: 15px; margin-top: 60px; text-align: center;">Mon empreinte Carbone annuelle <span style="font-size: 50%;">(kg éqCO2)</span></h4><plotly-graph v-bind:plotData="plotData"></plotly-graph></div>',
  data: function() {
    return {
      usrData,
    }
  },
  computed: {
    plotData: function() {
      const yValue = [computeTotal(refData, this.usrData), objectiv2050]
      const labels = [
        `Un Français<br>${yValue[0]}`,
        `Objectif 2050<br>${yValue[1]}`,
      ]
      const viewData = {
          x: ['Un Français', 'Objectif 2050'],
          y: yValue,
          text: labels,
          //textposition: 'auto',
          textposition: "inside",
          type: 'bar'
        }

      return viewData
    }
  }
})
