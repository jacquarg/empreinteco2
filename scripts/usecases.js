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

// https://bilan-electrique-2018.rte-france.com/emissions-de-co2/# ~> 37gCO2/kWh
const elecToCO2 = (eleckWh) => {
  return Math.round(eleckWh * 0.037)
}

// http://www.energies-avenir.fr/page/emissions-de-co-small-2-small-16
// TODO: 230g/kWh
const gazToCO2 = (gazkWh) => {
  return Math.round(gazkWh * 0.230)
}

const electricityFootPrint = (elecEnergy, homeCount) => {
  return elecToCO2(elecEnergy / homeCount)
}

const gazFootPrint = (gazEnergy, homeCount) => {
  return gazToCO2(gazEnergy / homeCount)
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

const setHomeEnergy = (homeCount, elecEnergy, gazEnergy, individualHeat, individualHotWatter, usrData) => {
  //https://travaux.edf.fr/electricite/raccordement/repartition-de-la-consommation-d-electricite-au-sein-d-un-foyer-francais

  var personalizedPart = 0.07 + 0.17

  if (individualHeat) {
    personalizedPart += 0.62
  }
  if (individualHotWatter) {
    personalizedPart += 0.14
  }
  const usrFluides = usrData.logement.fluides
  const refFluides = refData.logement.fluides

  usrFluides.electricite.usr = electricityFootPrint(elecEnergy, homeCount)
  usrFluides.electricite.ref = Math.round(refFluides.electricite * personalizedPart)

  usrFluides.gaz.usr = gazFootPrint(gazEnergy, homeCount)
  usrFluides.gaz.ref = Math.round(refFluides.gaz * personalizedPart)

  usrFluides.pp.ref = Math.round(refFluides.pp * personalizedPart)
  usrFluides.specifique.ref = Math.round(refFluides.specifique * personalizedPart)
  usrFluides.reseauChaleur.ref = Math.round(refFluides.reseauChaleur * personalizedPart)
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
  logement: {
    fluides: {
      gaz: {
        usr: 0,
        ref: 0
      },
      pp: {
        usr: 0,
        ref: 0
      },
      specifique: {
        usr: 0,
        ref: 0
      },
      electricite: {
        usr: 40,
        ref: 0
      },
      reseauChaleur: {
        usr: 0,
        ref: 0
      },
      eauDechets: {
        usr: 0,
        ref: 0
      },
    },
  },
  transports: {
     voiture: {
       voitureUsage: {
         usr: 0,
         ref: 0
       }
     }
   },
}
