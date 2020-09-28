Vue.component('electricity-index', {
  template:`<div>
    <h4>Suivi de ma consommation électrique</h4>
    <p>Faite le relevé de votre compteur électrique régulièrement et observez ainsi l'effet de vos efforts !</p>
    <p>Il vous suffit de trouver votre compteur électrique et de retranscrire la valeur affichée (au besoin, appuyez sur les boutons pour faire défiler les valeurs) en kWh.
    <form>
    <div class="form-inline">
      <label for="electricityIndex" class="mr-2">Index (kWh)</label>
      <input type="number" class="form-control mr-2" v-model="index">

      <label for="electricityIndexDate" class="mr-2">Date</label>
      <input type="date" class="form-control mr-2" id="electricityIndexDate" v-model="date" >

      <button v-on:click="addIndex" type="button" class="btn btn-primary">Ajouter</button>
    </div>
    </form>

    <div>
      <plotly-graph v-bind:plotData="plotData"></plotly-graph>
    </div>
  </div>`,
  data: function() {
    return {
      usrResponses,
      usrData,
      index: 0,
      date: new Date().toISOString().slice(0, 10),
    }
  },
  methods: {
    addIndex: function() {
      console.log(this.index)
      console.log(this.date)
      addElectricityIndex(this.index, this.date, this.$set)
    }
  },
  computed: {
    plotData: function() {
      const power = averagePowerByIndexes()

      var display = {
        labels: power.map(it => it.date),

         //res.map(it => it[0]),
        //values: Object.keysres.map(it => it[1]),
        // marker: { colors: [
        //   '#264653ff',
        //   '#2a9d8fff',
        //   '#e9c46aff',
        //   '#f4a261ff',
        //   '#e76f51ff',
        // ] },
        type: "scatter",
        textinfo: "label+value",
      }
      display.values = power.map(it => it.power)
      display.x = display.labels
      display.y = display.values
      console.log(display)
      return display
    }
  }

})
