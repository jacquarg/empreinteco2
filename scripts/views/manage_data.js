Vue.component('manage-data', {
  template: `<div>
    <h5>Gérer mes données</h5>
    <p>Toutes les données que vous renseignez dans cette application restent sur votre terminal. Si bien que l'éditeur de l'application ne peut en aucun cas y avoir accès, mais aussi vos données ne vous suivent pas quand vous changer de terminal (PC -> Smartphone par exemple), a moins que vous soyez équipés en <a href="#remote-storage-container" v-on:click="showRemoteStorage">RemoteStorage</a>.</p>

    <div id="remote-storage-container"></div>

    <p>Vous pouvez cependant télécharger les données que vous avez renseigné ci-dessous, pour les importer plus tard, ou les conserver, ou ...</p>
    <form>
    <div class="form-inline">
        <a ref="exportData" href="#" v-on:click="exportData" download="mon_empreinte.json" type="button" class="btn btn-secondary mr-2">Exporter</a>

      <div class="input-group mr-2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroupFileAddon01">Importer</span>
        </div>
        <div class="custom-file">
          <input type="file" class="custom-file-input" style="cursor: pointer;" id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01" v-on:change="importData">
          <label class="custom-file-label" for="inputGroupFile01">Parcourir...</label>
        </div>
      </div>
        <button v-on:click="reset" type="button" class="btn btn-secondary">Reset</button>
      </div>
    </form>
  </div>`,
  methods: {
    exportData: function(ev) {
      let link = this.$refs.exportData
      link.href = usrResponsesAsDataUri()
    },
    reset: function(ev) {
      resetUsrResponses(this.$set)
    },
    importData: function(ev) {
        try {
           const files = ev.target.files
           if (!files.length) {
               alert('No file selected!')
               return
           }

           const reader = new FileReader()
           reader.onload = (event) => {
             console.log('FILE CONTENT', event.target.result)

             saveUsrResponses(JSON.parse(event.target.result))
             loadUsrResponses(this.$set)
           }
           reader.readAsText(files[0])
       } catch (err) {
           console.error(err);
       }
    },
    showRemoteStorage: function(ev) {
      if (!this.$el.querySelector('#remote-storage-container').firstChild) {
        const widget = new Widget(remoteStorage)
        widget.attach('remote-storage-container')
      }
    },
  },
  mounted: function() {
    remoteStorage.on('connected', this.showRemoteStorage)
  }
})
