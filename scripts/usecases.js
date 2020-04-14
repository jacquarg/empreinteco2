// Private ////////////////////////////////////////////////////////////////////
const computeTotal = (root, usrData) => {
  return Object.keys(root).reduce((agg, key) => {
    const cat = root[key]
    const usrCat = usrData ? usrData[key]: null
    // skip labels.
    return agg + computeItem(cat, usrCat)
  }, 0)
}

const computeItem = (cat, usrCat) => {
  // skip labels.
  if (typeof cat === 'string' || cat instanceof String) {
   return 0
  // their is subcategories
  } else if (isNaN(cat)) {
    return computeTotal(cat, usrCat)
  // here is the value !
  } else {
    const usrValue = (usrCat && usrCat.usr) ? usrCat.usr : 0
    const refValue = (usrCat && usrCat.ref) ? usrCat.ref : 0
    console.log(`${cat} ${usrValue} ${refValue}`)
    return cat - refValue + usrValue
  }
}

// const extractCategories = (root, usrData) => {
//   const categories = Object.entries(root)
//     .filter([k, v] => (typeof v !== 'string' && !(v instanceof String))
//
// }

const computeEachCategories = (root, usrData) => {
  const res = {}
  Object.entries(root)
    .filter(([k, v]) => typeof v !== 'string' && !(v instanceof String))
    .forEach(([k, v]) => {
      const usrCat = usrData ? usrData[k]: null

      console.log(`${k} ${v} ${usrCat}`)
      res[k] = computeItem(v, usrCat)
    })
  return res
}

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

const workHomeCarFrenchies = () => {
  // TODO: add this const to a data object.
  const workHomePart = 0.39
  return Math.round(refData.transports.voiture.voitureUsage * workHomePart)
}

const workHomeByMorningDistance = (morningDistance) => {
  // TODO: add this const to a data object, with  source
  const workingDays = 215
  const cooByKilometers = 0.14
  const totalDistance = 215 * morningDistance * 2
  return Math.round(totalDistance * cooByKilometers)
}
// Public API /////////////////////////////////////////////////////////////////
const  objectiv2050 = 2000

const prepareData = computeCategories

const totalFrenchies = (refData) => {
  var total = Object.values(refData).reduce((agg, it) => agg + it.total, 0)
  total = Math.round(total)
  return total
}



const setWorkHomeByMorningDistance = (morningDistance, usrData) => {
  const usr = workHomeByMorningDistance(morningDistance)
  const ref = workHomeCarFrenchies()
  usrData.transports.voiture.voitureUsage.usr = usr
  usrData.transports.voiture.voitureUsage.ref = ref
}

const monEmpreinteCarbone = (refData, usrData) => {
  return totalFrenchies(refData) - usrData.workHomeCar.ref + usrData.workHomeCar.usr
}

// var cooRefToIgnore = 0
// var cooPersonalized = 0
// const updatePersonalizationCoo = (refToIgnore, personalized) => {
//   cooRefToIgnore += refToIgnore
//   cooPersonalized += personalized
// }
//
// const getPersonalizationRatio = () => {
//   return cooRefToIgnore / totalFrenchies(refData)
// }
//
// const monEmpreinteCarbone = (ref, personalizationRatio, personalized) => {
//   return Math.round(ref * personalizationRatio + personalized)
// }


// Initialization //////////////////////////////////////////////////////////////
// prepareData(refData)
// computeCategories(refData.transports)
// computeCategories(refData.logement)
// computeCategories(refData.biens)
// computeCategories(refData.alimentation)

const usrData = {
  transports: {
     voiture: {
       voitureUsage: {
         usr: 0,
         ref: 0
       }
     }
   }
}
