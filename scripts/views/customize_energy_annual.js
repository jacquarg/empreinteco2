Vue.component('customize-energy-annual', {
  template: `
    <div>
      <p>Et vous ? Comment consommez-vous au foyer ?</p>

      Nombre de personnes dans le foyer
      <input class="form-control" type="number" placeholder="2" v-model="familySize">

      Consommation électrique annuelle (kWh)
      <input class="form-control" type="number" placeholder="2" v-model="electricityAnnual">

      Consommation de Gaz annuelle (kWh)
      <input class="form-control" type="number" placeholder="2" v-model="gazAnnual">

      Chauffage individuel électricité ou gaz
      <input class="form-check-input" type="checkbox" v-model="individualHeat">

      Eau chaude individuelle électricité ou gaz
      <input class="form-check-input" type="checkbox" v-model="individualHotWatter">

      Mon total: {{ usr }}
    </div>`,
  data: function() {
    return {
      familySize: undefined,
      electricityAnnual: 2600,
      gazAnnual: 1200,
      individualHeat: false,
      individualHotWatter: false,
      usrData,
    }
  },
  computed: {
    usr: function() {
      if (this.familySize) {
        setHomeEnergy(this.familySize, this.electricityAnnual, this.gazAnnual, this.individualHeat, this.individualHotWatter, this.usrData)
        return computeTotal(refData.logement.fluides, this.usrData.logement.fluides)
      }
    }
  }
})
