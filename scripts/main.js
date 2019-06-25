

const computeCategories = () => {
  Object.values(data).forEach(v => v.total = computeCategory(v))
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
    <td>${Math.floor(cat.total / 365)}</td>
    <td>${Math.floor(cat.total / 12)}</td>
    <td>${cat.total}</td>
    </tr>
    `
  }

  $("tbody").append(buildCatRow({ label: "objectif", total: 2000 }))
  $("tbody").append(buildCatRow({ label: "Total", total: 12000 }))

  Object.values(data).forEach(it => {
    $("tbody").append(buildCatRow(it))
  })
}


const main = () => {
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

$(document).ready(() => main())
