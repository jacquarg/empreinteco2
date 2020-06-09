Vue.component('my-carbon-footprint', {
  template: `
    <div>
      Mon empreinte carbone : {{ myFootPrint }}
      <br>
      Personalisation : {{ personalizationRate }}%
    </div>`,
  data: function() {
    return {
      usrData
    }
  },
  computed: {
    myFootPrint: function() {
      return computeTotal(refData, this.usrData)
    },
    personalizationRate: function() {
      return personalizationRate(this.usrData)
    }
  }
})
