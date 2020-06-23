Vue.component('customize-energy-annual', {
  template: `
    <div>
    <h5>Personalisation</h5>
      <p>Et vous ? Comment consommez-vous au foyer ?</p>

      Nombre de personnes dans le foyer
      <input class="form-control" type="number" placeholder="2" v-model="familySize">

      Consommation électrique annuelle (kWh)
      <input class="form-control" type="number" placeholder="2" v-model="electricityAnnual">

      Consommation de Gaz annuelle (kWh)
      <input class="form-control" type="number" placeholder="2" v-model="gazAnnual">

      <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="individualHeat" id="individualHeat">
      <label class="form-check-label" for="individualHeat">Chauffage individuel électricité ou gaz</label>
      </div>

      <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="individualHotWatter">
      <label class="form-check-label" for="individualHotWatter">Eau chaude individuelle électricité ou gaz</label>
      </div>
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
