Vue.component('graph-objectives', {
  template:
  `<div><h4 style="margin-bottom: 15px; margin-top: 60px; text-align: center;">Mon empreinte Carbone annuelle <span style="font-size: 50%;">(kg éqCO2)</span></h4>
  <plotly-graph  v-bind:plotData="plotData"></plotly-graph>
  </div>`,
  data: function() {
    return {
      usrData,
    }
  },
  computed: {
    plotData: function() {
      const x = ["2018", "Objectif 2020", "Vous 2020", "Objectif 2050"]

      const yValue = [
        computeTotal(refData, {}),
        objectiv2020,
        computeTotal(refData, this.usrData),
        objectiv2050
      ]
      const labels = [
        `Un Français<br>${yValue[0]}`,
        `Objectif 2020<br>${yValue[1]}`,
        `Vous<br>${yValue[2]}`,
        `Objectif 2050<br>${yValue[3]}`,
      ]

      const barPlot = {
          x: x,
          y: yValue,
          text: labels,
          //textposition: 'auto',
          textposition: "inside",
          type: 'bar'
      }
      return barPlot
    }
  }
})
