chrome.browserAction.onClicked.addListener(function(tab) {
	alert("Click on this when you're viewing whenisgood results in the active tab.");
	chrome.tabs.executeScript(null, {file: 'heatmap.js'});
});