

const computeCategories = () => {
  Object.values(data).forEach(v => {
    v.total = computeCategory(v)
    v.totalDaily = Math.floor(v.total / 365)
    v.totalMonthly = Math.floor(v.total / 12)
    v.today = v.totalDaily
  })
  // const res = Object.keys(data).map(k => [k, computeCategory(data[k])])
  // console.log(res)
  // return res

  // data.forEach =
}

const computeCategory = (cat) => {
  if (typeof cat === 'string' || cat instanceof String) {
   return 0
 } else if (isNaN(cat)) {
    return Object.values(cat).reduce((agg, value) => {
        return agg + computeCategory(value)

      }, 0)
  } else {
      return cat
    }
}

// if (isNaN(value)) {
//   agg += computeCategory(value)
// } else {
//   agg += value
// }
// return agg

const displayTable = () => {
  const buildCatRow = (cat) => {
    return `<tr>
    <th>${cat.label}</th>
    <td>${cat.today}</td>
    <td>${cat.totalDaily}</td>
    <td>${cat.totalMonthly}</td>
    <td>${cat.total}</td>
    </tr>
    `
  }

  $("tbody").empty()

  $("tbody").append(buildCatRow({ label: "objectif",
    total: 2000,
    today: Math.floor(2000 / 365),
    totalDaily: Math.floor(2000 / 365),
    totalMonthly: Math.floor(2000 / 12),

  }))

  $("tbody").append(buildCatRow({ label: "Total",
    total: Object.values(data).reduce((agg, it) => agg + it.total, 0),
    today: Object.values(data).reduce((agg, it) => agg + it.today, 0),
    totalDaily: Object.values(data).reduce((agg, it) => agg + it.totalDaily, 0),
    totalMonthly: Object.values(data).reduce((agg, it) => agg + it.totalMonthly, 0),
   }))

  Object.values(data).forEach(it => {
    $("tbody").append(buildCatRow(it))
  })
}


const main = () => {
  attachEvents()
  computeCategories()
  // var res = computeCategories()

  var display = {
    labels: Object.keys(data).sort(), //res.map(it => it[0]),
    //values: Object.keysres.map(it => it[1]),
    type: "pie",
  }
  display.values = display.labels.map(it => data[it].total)
  Plotly.newPlot('myDiv', [display], { height: 500, width: 500 })

  const total = Object.values(data).reduce((agg, it) => agg + it.total, 0)
  $('#monTotal').text(total)

  displayTable()
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


$(document).ready(() => main())
