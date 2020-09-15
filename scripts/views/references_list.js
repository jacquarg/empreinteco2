Vue.component('references-list', {
  template: `
  <div>
    <h5>Sources des données, références</h5>
    <ol>
      <li v-for="item in items" >
        {{ item.label }} : {{ item.description }} <a :href="item.source" taget="_blank">source</a>
      </li>
    </ol>
  </div>
  `,
  data: function() {
    return {
      items:  usedReferences()
    }
  },

})
