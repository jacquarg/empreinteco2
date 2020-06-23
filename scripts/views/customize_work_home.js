Vue.component('customize-work-home', {
  template: `
    <div>
    <h5>Personalisation</h5>
      <p>En moyenne, les trajets domicile-travail représentent 39% (1) des déplacements en voiture des français. Soit {{ ref }} <span style="font-size: 75%;">(kgCO2e)</span>.
      </p>
      <p>Et vous ? Quelle distance (km) parcourez-vous en voiture pour vous rendre à votre travail ?
      </p>
      <input class="form-control" type="number" placeholder="10.04" v-model="usrDistance">
      <p>
        Sur un an, cela représente : {{ usr }}</span><span style="font-size: 75%;">kgCO2e</span>.
      </p>
    </div>`,
  data: function() {
    return {
      usrData,
      ref: workHomeCarFrenchies(),
      usrDistance: undefined,
    }
  },
  computed: {
    usr: function() {
      if (this.usrDistance) {
        setWorkHomeByMorningDistance(this.usrDistance, this.usrData)
        return this.usrData.transports.voiture.voitureUsage.usr
      }
    }
  }
})
