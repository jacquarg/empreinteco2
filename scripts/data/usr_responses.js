const UsrResponses = {
  name: 'usrResponses',
  builder: function(privateClient, publicClient) {
    privateClient.declareType('usr-responses', {
      type: 'object',
      properties: {
        usrDistance:{ type: 'string' },
        familySize: { type: 'string' },
        electricityAnnual: { type: 'string' },
        gazAnnual: { type: 'string' },
        individualHeat: { type: 'boolean' },
        individualHotWatter: { type: 'boolean' },
      }
    })

    return {
      exports: {
        save: function(res) {
          return privateClient.storeObject('usr-responses', 'mon_empreinte.json', res)
        },
        get: function() {
          return privateClient.getObject('mon_empreinte.json')
        }
      }
    }
  }
}
