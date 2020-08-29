const useReference = (referenceId) => {
  if (!globalData.referencesUsed.includes(referenceId)) {
    globalData.referencesUsed.push(referenceId)
  }
}

const usedReferences = () => {
  return globalData.referencesUsed.map(getReference)
}

const getReference = (referenceId) => {
  if (!globalData.referencesUsed.includes(referenceId)) {
    globalData.referencesUsed.push(referenceId)
  }
  return jsonld[referenceId]
}

// Initialization //////////////////////////////////////////////////////////////
// prepareData(refData)
// computeCategories(refData.transports)
// computeCategories(refData.logement)
// computeCategories(refData.biens)
// computeCategories(refData.alimentation)

const globalData = {
  referencesUsed: ["footprintByCategories"]
}

const usrData = {
  alimentation: {
    // boissons: {
    //   boissonsAlcoolisees: 145,
    //   boissonsSansAlcool: 118,
    // },
    autresAliments: { usr: 0, ref: 0 },
    // (Fruits et légumes, féculents plats élaborés,  condiments, etc )

  // Produits laitiers et œufs			408 kg
    cremerie: {
      lait:  { usr: 0, ref: 0 },
      yaourt: { usr: 0, ref: 0 },
      fromage:  { usr: 0, ref: 0 },
      beurre:  { usr: 0, ref: 0 },
      oeuf:  { usr: 0, ref: 0 },
    },
    viandes: {
      poissons:  { usr: 0, ref: 0 },
      ruminants:  { usr: 0, ref: 0 },
      porc:  { usr: 0, ref: 0 },
      volailles:  { usr: 0, ref: 0 },
      autresViandes:  { usr: 0, ref: 0 },
    },
  },

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
  const workHomePart = getReference('workHomePart').value
  return Math.round(refData.transports.voiture.voitureUsage * workHomePart)
}

const workHomeByMorningDistance = (morningDistance) => {
  const totalDistance = getReference('workingDayByYear').value * morningDistance * 2
  return Math.round(totalDistance * getReference('cooByKilometers').value)
}

// https://bilan-electrique-2018.rte-france.com/emissions-de-co2/# ~> 37gCO2/kWh
const elecToCO2 = (eleckWh) => {
  return Math.round(eleckWh * getReference('electricityFootprint').value)
}

// http://www.energies-avenir.fr/page/emissions-de-co-small-2-small-16
// TODO: 230g/kWh
const gazToCO2 = (gazkWh) => {
  return Math.round(gazkWh * getReference('gazFootprint').value)
}

const electricityFootPrint = (elecEnergy, homeCount) => {
  return elecToCO2(elecEnergy / homeCount)
}

const gazFootPrint = (gazEnergy, homeCount) => {
  return gazToCO2(gazEnergy / homeCount)
}


// Public API /////////////////////////////////////////////////////////////////
const objectiv2050 = getReference('frenchObjectiv2050ByIndividual').value

// Obj = -5/16 * (year - 2018) + 12
// baisse de 300kg par an.
const objectiv2025 = 9813
const objectiv2020 = 11400

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
    personalizedPart += getReference('individualHeatPart').value
  }
  if (individualHotWatter) {
    personalizedPart += getReference('individualHotWatterPart').value
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

const setFoodWeekly = (homeCount,
  feculents,
  fruits,
  prepares,
  biscuits,
  lait,
  viande,
  usrData) => {
    const setCustomized = (getter) => {
      getter(usrData).ref = getter(refData)
    }

    const computeYear = (week, coef) => {
      return Math.round(week * coef * 52)
    }

    const coef = {
      feculents : 0.850,
      fruits : 1.21,
      prepares : 2.02,
      biscuits: 2.18,
      lait: 4.36,
      //* Graisse : 8.59
      viande: 9.34,
    }

    var other = computeYear(feculents, coef.feculents)
    other += computeYear(fruits, coef.fruits)
    other += computeYear(prepares, coef.prepares)
    other += computeYear(biscuits, coef.biscuits)
    usrData.alimentation.autresAliments.usr = other
    setCustomized(((d) => d.alimentation.autresAliments))

    usrData.alimentation.cremerie.lait.usr = computeYear(lait, coef.lait)
    setCustomized(((d) => d.alimentation.cremerie.lait))
    setCustomized(((d) => d.alimentation.cremerie.yaourt))
    setCustomized(((d) => d.alimentation.cremerie.fromage))
    setCustomized(((d) => d.alimentation.cremerie.beurre))
    setCustomized(((d) => d.alimentation.cremerie.oeuf))

    usrData.alimentation.viandes.autresViandes.usr =
    computeYear(viande, coef.viande)
    setCustomized(((d) => d.alimentation.viandes.autresViandes))
    setCustomized(((d) => d.alimentation.viandes.poissons))
    setCustomized(((d) => d.alimentation.viandes.ruminants))
    setCustomized(((d) => d.alimentation.viandes.porc))
    setCustomized(((d) => d.alimentation.viandes.volailles))
}

const personalizationRate = (usrData) => {
  // total "ref"
  const totalizeRef = (root) => {
    return Object.entries(root).reduce((agg, [k, v]) => {
      if (k == "ref") {
        agg += v
      } else if (typeof v == 'object') {
        agg += totalizeRef(v)
      }
      return agg
    }, 0)
  }

  const ref = totalizeRef(usrData)
  const total = computeTotal(refData, {})

  return Math.round(100 * ref / total)
}
