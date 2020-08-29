// jsonld data


// Data model:
// id: {
//   value: Int,
//   label: String,
//   description: String,
//   source: URL,
//   unit: String
// }

var jsonld = {
  footprintByCategories: {
    value: NaN,
    label: "empreinte carbone annuelle moyenne d'un français par poste",
    description: "Empreinte Carbone par poste de dépense des français reprise du post L’empreinte carbone des français, un sujet tabou ? du blog Ravijen.",
    source: "http://ravijen.fr/?p=440#rjb14",
    unit: "kgCO2e",
  },

  frenchObjectiv2050ByIndividual: {
    value: 2000,
    label: "objectif 2050 d'émissions par individu en France",
    description: `"[La France, avec] sa stratégie nationale bas carbone (SNBC) a un objectif de facteur 4 en 2050, soit une division par 4 des émissions entre 1990 et 2050 pour atteindre des émissions de 140 Mt d'équivalent CO2.". Il s'agit cependant ici du bilan carbone de la France (émissions - captation naturel du territoire, ~7 tonnes équivalent CO2 par habitant) et non de l'empreinte carbone des français (~12 tonnes équivalent CO2). Cet objectif de 140MT et donc 2 Tonnes par habitant reste donc ouvert à débat.`,
    source: "https://fr.wikipedia.org/wiki/Neutralit%C3%A9_carbone#France",
    unit: "kgCO2e",
  },

  humanRespirationFootprint: {
    value: 360,
    label: "empreinte carbone annuelle de la respiration d'un humain",
    description: "La quantité de CO2e émise en moyenne par la respiration d'un être humain en une année.",
    source: "https://en.wikipedia.org/wiki/Carbon_dioxide#Human_physiology",
    unit: "kgCO2e",
  },

  workHomePart: {
    value: 0.39,
    label: "part des déplacements domicile-travail",
    description: "La proportion des déplacements en voiture dédié au déplacement domicile - travail.",
    source: "TODO",
    unit: "%",
  },

  individualHeatPart: {
    value: 0.62,
    label: "part du chauffage",
    description: "La part du chauffage dans la consommation d'énergie d'un foyer farnçais.",
   source: "https://travaux.edf.fr/electricite/raccordement/repartition-de-la-consommation-d-electricite-au-sein-d-un-foyer-francais",
   unit: "%",
 },

  individualHotWatterPart: {
    value: 0.14,
    label: "part de l'eau chaude",
    description: "La part de l'eau chaude sanitaire dans la consommation d'énergie d'un foyer farnçais.",
   source: "https://travaux.edf.fr/electricite/raccordement/repartition-de-la-consommation-d-electricite-au-sein-d-un-foyer-francais",
   unit: "%",
 },

electricityFootprint: {
  value: 0.037,
  label: "empreinte de l'électricité",
  description: "La quantité de CO2 émise par un kWh d'électricité produite en France.",
 source: "https://bilan-electrique-2018.rte-france.com/emissions-de-co2/",
 unit: "kgCO2e/kWh",
},

gazFootprint: {
  value: 0.23,
  label: "empreinte du gaz",
  description: "La quantité de CO2 émise par l'utilisation d'un kWh de gaz.",
 source: "http://www.energies-avenir.fr/page/emissions-de-co-small-2-small-16",
 unit: "kgCO2e/kWh",
},

partBioGaz: {
  value: 0.05,
  label: "part biogaz",
  description: "Proportion de biogaz dans le gaz de ville en France",
  source: "TODO",
  unit: "%",
},

cooByKilometers: {
  value: 0.14,
  label: "empreinte moyenne de la voiture au km",
  description: "Empreinte carbone moyenne d'un véhicule particulier par kilomètres parcourus.",
  source: "TODO",
  unit: "kgCO2e/km",
},

workingDayByYear: {
  value: 215,
  label: "nombre de jour travaillé par an",
  description: "Nombre de jour travaillé par an, pour un temps plein typique.",
  unit: "j",
  source: "TODO",
}

}
