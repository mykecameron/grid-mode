var toggleGrid = function(force) {
  var body = document.getElementsByTagName('body')[0];
  body.classList.toggle("c-outlines-on", force);
}

chrome.storage.sync.get(function(storage){
  var isEnabled = storage.gridModeEnabled;
  toggleGrid(isEnabled);
});

chrome.storage.onChanged.addListener(function(changes, namespace) {
  var isEnabled = changes.gridModeEnabled.newValue;
  toggleGrid(isEnabled);
});