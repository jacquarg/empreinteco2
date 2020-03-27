const displayObjectivesGraph = (data) => {
  const divId = 'objectivesGraph'

  const yValue = [data.totalFrenchies, data.objectiv2050]
  const labels = [
    `Un Français<br>${yValue[0]}`,
    `Objectif 2050<br>${yValue[1]}`,
  ]
  const viewData = [
    {
      x: ['Un Français', 'Objectif 2050'],
      y: yValue,
      text: labels,
      //textposition: 'auto',
      textposition: "inside",
      type: 'bar'
    }
  ]

  Plotly.newPlot(divId, viewData,
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
}

const displayDistributionGraph = (data) => {
  var display = {
    labels: Object.keys(data).sort(), //res.map(it => it[0]),
    //values: Object.keysres.map(it => it[1]),
    type: "pie",
    textinfo: "label+value",
    textposition: "inside",
  }
  display.values = display.labels.map(it => data[it].total)

  const layout = {
    // title: `Mon empreinte Carbone annuelle : ${computeAnnualTotal(data)} kgéqCO2`,
    showlegend: false,
    height: 330,
    width: 330,
    margin:  {"t": 0, "b": 0, "l": 0, "r": 0},
  }

  Plotly.newPlot('distributionGraph', [display], layout, { responsive: false, displayModeBar: false })
}

const displayItemSubGraph = (tag, data) => {
  var display = {
    labels: Object.keys(data).sort().filter(it => !it.startsWith('total')), //res.map(it => it[0]),
    //values: Object.keysres.map(it => it[1]),
    type: "pie",
    textinfo: "label+value",
    textposition: "inside",
  }
  display.values = display.labels.map((it) => {
    const item = data[it]
    if (isNaN(item)) {
      return item.total
    } else {
      return item
    }
  })

  const layout = {
    // title: `Mon empreinte Carbone annuelle : ${computeAnnualTotal(data)} kgéqCO2`,
    showlegend: false,
    height: 330,
    width: 330,
    margin:  {"t": 0, "b": 0, "l": 0, "r": 0},
  }

  Plotly.newPlot(`${tag}Graph`, [display], layout, { responsive: false, displayModeBar: false })
}

// const displayPie = (data, divId) => {
//   var display = {
//     labels: Object.keys(data).sort(), //res.map(it => it[0]),
//     //values: Object.keysres.map(it => it[1]),
//     type: "pie",
//     hole: 2000 / computeAnnualTotal(data),
//     textinfo: "label+value",
//     textposition: "inside",
//
//   }
//   display.values = display.labels.map(it => data[it].total)
//
//   const layout = {
//     // title: `Mon empreinte Carbone annuelle : ${computeAnnualTotal(data)} kgéqCO2`,
//     showlegend: false,
//     height: 330,
//     width: 330,
//     margin:  {"t": 0, "b": 0, "l": 0, "r": 0},
//     annotations: [{
//       font: {
//         size: 16,
//       },
//       showarrow: false,
//       text: "Obj.<br>2000",
//       x: 0.5,
//       y: 0.505,
//     }],
//   }
//
//   Plotly.newPlot(divId, [display], layout, { responsive: false, displayModeBar: false })
// }
