Vue.component('customize-food-weekly', {
  template: `
    <div>
      <p>Alimentation</p>
      Nombre de personnes dans le foyer
      <input class="form-control" type="number" placeholder="2" v-model="familySize">

      Vos courses de la semaine (kg par catégories):

      Viande, poissons, oeufs, ...
      <input class="form-control" type="number" placeholder="2" v-model="viande">

      Produits laitiers
      <input class="form-control" type="number" placeholder="2" v-model="laitiers">

      Produits sucrés et snacks salés
      <input class="form-control" type="number" placeholder="2" v-model="biscuits">

      Plats préparés
      <input class="form-control" type="number" placeholder="2" v-model="prepares">

      Fruits et légumes
      <input class="form-control" type="number" placeholder="2" v-model="fruits">

      Féculents (riz, pâtes, pommes de terres, légumes secs ...):
      <input class="form-control" type="number" placeholder="0" v-model="feculents">

      Mon total: {{ usr }}
    </div>`,
  data: function() {
    return {
      familySize: undefined,
      feculents: 1,
      fruits: 3.5,
      prepares: 1,
      biscuits: 1.5,
      laitiers: 1.8,
      viande: 2.35,
      usrData,
    }
  },
  computed: {
    usr: function() {
      if (this.familySize) {
        setFoodWeekly(this.familySize,
          this.feculents,
          this.fruits,
          this.prepares,
          this.biscuits,
          this.laitiers,
          this.viande,
          this.usrData)
        return computeTotal(refData.alimentation, this.usrData.alimentation)
      }
    }
  }
})
