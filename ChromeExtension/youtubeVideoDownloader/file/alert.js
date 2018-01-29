function onExtensionClick(tab){
	if(tab.url.indexOf("youtube.com") != -1){
		chrome.tabs.create({ url : tab.url.replace("youtube.com", "ssyoutube.com")});
	}
}

chrome.browserAction.onClicked.addListener(onExtensionClick);

//инфорамция об объкте
function callback(date){
	console.log(date);
}