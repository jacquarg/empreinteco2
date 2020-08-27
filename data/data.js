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

}
