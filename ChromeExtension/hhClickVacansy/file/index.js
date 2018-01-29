//this is background code

//listen our browser action to be clicked
chrome.browserAction.onClicked.addListener( function(tab) {
	//for the current tab, injected the "inject.js" file and execute it
	chrome.tabs.executeScript(tab.id,{file: 'injected.js'})
});