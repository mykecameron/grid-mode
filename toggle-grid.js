chrome.storage.sync.get(function(storage){
  var isEnabled = storage.gridModeEnabled;
  chrome.storage.sync.set({gridModeEnabled: !isEnabled});
});
