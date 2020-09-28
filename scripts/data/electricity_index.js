const ElectricityIndex = {
  name: 'electricityIndex',
  builder: function(privateClient, publicClient) {
    privateClient.declareType('electricity-index', {
      type: 'object',
      properties: {
        date: { type: 'string' },
        index: { type: 'string' },
      }
    })

    return {
      exports: {
        save: function(res) {
          return privateClient.storeObject('electricity-index',
            `${res.date}.json`, res)
        }
      }
    }
  }
}
