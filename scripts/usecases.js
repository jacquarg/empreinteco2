// Private ////////////////////////////////////////////////////////////////////
const computeCategories = (data) => {
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

// Public API /////////////////////////////////////////////////////////////////
const  objectiv2050 = 2000

const prepareData = computeCategories

const totalFrenchies = (refData) => {
  var total = Object.values(refData).reduce((agg, it) => agg + it.total, 0)
  total = Math.round(total)
  return total
}


// Initialization //////////////////////////////////////////////////////////////
prepareData(refData)
