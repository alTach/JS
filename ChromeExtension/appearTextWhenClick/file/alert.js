function onExtensionClick(tab){
	alert("Hello");
}

chrome.browserAction.onClicked.addListener(onExtensionClick);