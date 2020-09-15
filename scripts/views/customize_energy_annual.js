Vue.component('customize-energy-annual', {
  template: `
    <div>
    <h5>Personalisation</h5>
      <p>Et vous ? Comment consommez-vous au foyer ?</p>

      Nombre de personnes dans le foyer
      <input class="form-control" type="number" placeholder="2" v-model="usrResponses.familySize">

      Consommation électrique annuelle (kWh)
      <input class="form-control" type="number" placeholder="2600" v-model="usrResponses.electricityAnnual">

      Consommation de Gaz annuelle (kWh)
      <input class="form-control" type="number" placeholder="1200" v-model="usrResponses.gazAnnual">

      <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="usrResponses.individualHeat" id="individualHeat">
      <label class="form-check-label" for="individualHeat">Chauffage individuel électricité ou gaz</label>
      </div>

      <div class="form-check">
      <input class="form-check-input" type="checkbox" v-model="usrResponses.individualHotWatter">
      <label class="form-check-label" for="individualHotWatter">Eau chaude individuelle électricité ou gaz</label>
      </div>
      Mon total: {{ usr }}
    </div>`,
  data: function() {
    return {
      usrResponses,
      usrData,
    }
  },
  computed: {
    usr: function() {
      if (this.usrResponses) {
        setHomeEnergy(this.usrResponses, this.usrData)
        return computeTotal(refData.logement.fluides, this.usrData.logement.fluides)
      }
    }
  }
})
