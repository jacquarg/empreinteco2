const remoteStorage = new RemoteStorage.default({
  logging: true,
  modules: [UsrResponses]
})

remoteStorage.access.claim('usrResponses', 'rw')
//remoteStorage.caching.enable('/usr/Responses/')
