const personalize = () => {
  var userData = {}
  $.extend(true, userData, refData)
  $.extend(true, userData, myData)
  return userData
}

const workTransports = () => {
  var tc = myData.typicalWorkDay * 200
  const prorata = 200 / 365
  $.extend(myData.transports, {
    voiture: {
      voitureUsage: refData.transports.voiture.voitureUsage * prorata
    },
    transportCommun: refData.transports.transportCommun * prorata + tc , // trainsBus: 85,
  })
}



// if (isNaN(value)) {
//   agg += computeCategory(value)
// } else {
//   agg += value
// }
// return agg

const displayTable = (userD, refD) => {
  const buildCatRow = (catD, catR) => {
    return `<tr>
    <th>${catD.label}</th>
    <td>${catD.today} / ${catR.today}</td>
    <td>${catD.totalDaily} / ${catR.totalDaily}</td>
    <td>${catD.totalMonthly} / ${catR.totalMonthly}</td>
    <td>${catD.total} / ${catR.total}</td>
    </tr>
    `
  }

  const totalCat = (total, label) => { return {
    label: label,
    total: total,
    today: Math.floor(total / 365),
    totalDaily: Math.floor(total / 365),
    totalMonthly: Math.floor(total / 12),
  }
}

  $("tbody").empty()

  $("tbody").append(buildCatRow(totalCat(2000, "objectif"), totalCat(Object.values(refD).reduce((agg, it) => agg + it.total, 0), "objectif")))

  $("tbody").append(buildCatRow(totalCat(Object.values(userD).reduce((agg, it) => agg + it.total, 0), "Total"), totalCat(Object.values(refD).reduce((agg, it) => agg + it.total, 0), "Total")))

  //
  // $("tbody").append(buildCatRow({ label: "objectif",
  //   total: 2000,
  //   today: Math.floor(2000 / 365),
  //   totalDaily: Math.floor(2000 / 365),
  //   totalMonthly: Math.floor(2000 / 12),
  // }))

  // $("tbody").append(buildCatRow({ label: "Total",
  //   total: Object.values(data).reduce((agg, it) => agg + it.total, 0),
  //   today: Object.values(data).reduce((agg, it) => agg + it.today, 0),
  //   totalDaily: Object.values(data).reduce((agg, it) => agg + it.totalDaily, 0),
  //   totalMonthly: Object.values(data).reduce((agg, it) => agg + it.totalMonthly, 0),
  //  }))

  Object.keys(userD).forEach(it => {
    $("tbody").append(buildCatRow(userD[it], refD[it]))
  })
}

const displayPie = (data, divId) => {
  var display = {
    labels: Object.keys(data).sort(), //res.map(it => it[0]),
    //values: Object.keysres.map(it => it[1]),
    type: "pie",
    hole: 2000 / computeAnnualTotal(data),
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
    annotations: [{
      font: {
        size: 16,
      },
      showarrow: false,
      text: "Obj.<br>2000",
      x: 0.5,
      y: 0.505,
    }],
  }

  Plotly.newPlot(divId, [display], layout, { responsive: false, displayModeBar: false })
}

const displayTreeMap = (data, divId) => {
  const topLevels = Object.keys(data).sort()
  //const labels = ["Mon empreinte"].concat(topLevels)
  var display = {
    type: "treemap",
    labels: ["Mon empreinte"].concat(topLevels),
  }
  display.values = [Object.values(refData).reduce((agg, it) => agg + it.total, 0)].concat(topLevels.map(it => data[it].total))
  display.parents = [""].concat(display.labels.map(it => "Mon empreinte"))

  Plotly.newPlot(divId, [display], { height: 500, width: 500 })
//
//   var data = [{
//       type: "treemap",
//       labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
//       parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ]
// }]
//
// Plotly.newPlot(divId, data)
}

const computeAnnualTotal = (data) => {
  return Object.values(data).reduce((agg, it) => agg + it.total, 0)
}

const setTodayValue = (d) => {
    data.transports.today = d / 1000
}

const attachEvents = () => {
  $("button").click((ev) => {
    const data = Number($("#transportsToday").val())
    setTodayValue(data)
    displayTable()
  })
}


const main = () => {
  displayObjectivesGraph({
    objectiv2050: objectiv2050,
    totalFrenchies: totalFrenchies(refData)
  })

  displayDistributionGraph(refData)

  const transports = refData.transports
  computeCategories(transports)
  displayItemSubGraph('transports', transports)

  const logement = refData.logement
  computeCategories(logement)
  displayItemSubGraph('logement', logement)

  const biens = refData.biens
  computeCategories(biens)
  displayItemSubGraph('biens', biens)

  const alimentation = refData.alimentation
  computeCategories(alimentation)
  displayItemSubGraph('alimentation', alimentation)

  //attachEvents()

  //workTransports()

  // const userData = personalize()
  // computeCategories(userData)
  //computeCategories(refData)
  // var res = computeCategories()
  // displayPie(refData, 'ref')
  // displayPie(userData, 'my')

  // $('#monTotal').text(totalFrenchies(refData))

  // displayTable(refData, refData)
}

$(document).ready(() => main())
