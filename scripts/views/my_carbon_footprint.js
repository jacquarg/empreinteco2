Vue.component('my-carbon-footprint', {
  template: `
    <div class="p-3" style="background: #264653;
color: white;">
      Mon empreinte carbone : {{ myFootPrint }} kgCO2e
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
